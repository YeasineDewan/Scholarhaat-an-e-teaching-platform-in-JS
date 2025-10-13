import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { fetchCategories } from '../api';

interface Category {
  icon: string;
  title: string;
}

const CategoriesPage: React.FC = () => {
  // Use react-query to fetch categories
  const { data, isLoading, error } = useQuery('categories', fetchCategories);
  
  // Use data from the API with fallback
  const categories = data || [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <div className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="h-8 bg-primary/20 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-primary/20 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(24).fill(0).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg animate-pulse">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mb-3"></div>
                  <div className="h-4 bg-primary/20 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tutoring Categories</h1>
          <p className="text-gray-600">Browse our wide range of tutoring services and find the perfect match for your learning needs</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Link to={`/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer bg-white h-full">
                  <div className="bg-primary/10 p-3 rounded-full mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                    <Icon icon={category.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium">{category.title}</h3>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;