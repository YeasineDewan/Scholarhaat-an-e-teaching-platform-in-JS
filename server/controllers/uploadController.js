import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(process.cwd(), 'uploads');
const imagesDir = path.join(uploadsDir, 'images');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// Upload image
export const uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Generate unique filename
    const fileExtension = path.extname(req.file.originalname);
    const fileName = `${uuidv4()}${fileExtension}`;
    const filePath = path.join(imagesDir, fileName);

    // Write file to disk
    fs.writeFileSync(filePath, req.file.buffer);

    // Generate URL for the uploaded image
    const imageUrl = `/uploads/images/${fileName}`;

    res.status(200).json({
      message: 'Image uploaded successfully',
      imageUrl,
      fileName
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete image
export const deleteImage = (req, res) => {
  try {
    const { fileName } = req.params;
    
    if (!fileName) {
      return res.status(400).json({ message: 'File name is required' });
    }

    const filePath = path.join(imagesDir, fileName);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Delete file
    fs.unlinkSync(filePath);

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all images
export const getAllImages = (req, res) => {
  try {
    // Read all files in the images directory
    const files = fs.readdirSync(imagesDir);

    // Generate URLs for all images
    const images = files.map(file => ({
      fileName: file,
      imageUrl: `/uploads/images/${file}`
    }));

    res.status(200).json({ images });
  } catch (error) {
    console.error('Error getting images:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
