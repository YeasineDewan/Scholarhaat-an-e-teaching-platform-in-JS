import React from 'react';
import { Button } from "@heroui/react";
import { Icon } from '@iconify/react';

interface ErrorDisplayProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 
  message = "Something went wrong. Please try again.", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
      <Icon icon="lucide:alert-circle" className="h-16 w-16 text-danger mb-4" />
      <h3 className="text-xl font-bold mb-2">Oops! An error occurred</h3>
      <p className="text-gray-600 mb-6 max-w-md">{message}</p>
      {onRetry && (
        <Button 
          color="primary" 
          onPress={onRetry}
          startContent={<Icon icon="lucide:refresh-cw" className="h-4 w-4" />}
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorDisplay;