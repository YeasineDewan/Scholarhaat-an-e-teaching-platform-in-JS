import React, { useState } from 'react';
import { Button } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

interface ImageUploadProps {
  onUploadSuccess: (imageUrl: string) => void;
  currentImage?: string;
  label?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onUploadSuccess, 
  currentImage, 
  label = 'Upload Image', 
  className = '' 
}) => {
  const { t } = useTranslation();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImage || null);
  
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG, or WebP)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Upload to server
    setIsUploading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.data.imageUrl) {
        onUploadSuccess(response.data.imageUrl);
      } else {
        throw new Error('Upload failed');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };
  
  const handleRemoveImage = () => {
    setPreviewUrl(null);
    onUploadSuccess('');
  };
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && <p className="text-sm text-gray-600 mb-2">{label}</p>}
      
      {previewUrl ? (
        <div className="relative">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-32 h-32 object-cover rounded-lg border border-gray-200"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <Icon icon="lucide:x" className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
          <Icon icon="lucide:image" className="h-8 w-8 text-gray-400 mb-2" />
          <span className="text-xs text-gray-500">Click to upload</span>
        </div>
      )}
      
      <input
        type="file"
        id="image-upload"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      
      {!previewUrl && (
        <Button
          as="label"
          htmlFor="image-upload"
          color="primary"
          variant="flat"
          size="sm"
          className="mt-2 cursor-pointer"
          startContent={<Icon icon="lucide:upload" className="h-4 w-4" />}
          isLoading={isUploading}
          isDisabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Select Image'}
        </Button>
      )}
      
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default ImageUpload;