import React from 'react';
import { Spinner } from "@heroui/react";

interface LoadingSpinnerProps {
  fullPage?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ fullPage = false }) => {
  if (fullPage) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Spinner size="lg" color="primary" />
          <p className="mt-4 text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }
  
  return <Spinner color="primary" />;
};

export default LoadingSpinner;