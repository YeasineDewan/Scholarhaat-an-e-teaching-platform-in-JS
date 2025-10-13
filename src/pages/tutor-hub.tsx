import React from 'react';
import { Button, Card, Input } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTutors } from '../hooks/useTutors';
import { useStats } from '../hooks/useStats';

interface Tutor {
  id: string;
  name: string;
  university: string;
  location: string;
  image: string;
  badges?: string[];
}

const TutorHubPage: React.FC = () => {
  const { data: stats, isLoading: statsLoading, isError: statsError } = useStats();
  const { data: tutorData, isLoading: tutorsLoading, isError: tutorsError } = useTutors();
  
  // Use data from hooks with fallback
  const tutorSections = tutorData?.sections || [];
  
  // Format stats for display
  const statsDisplay = [
    { 
      title: "Total Tutors", 
      count: stats?.totalTutors || "0", 
      icon: "lucide:users" 
    },
    { 
      title: "Male Tutors", 
      count: stats?.maleTutors || "0", 
      icon: "lucide:user" 
    },
    { 
      title: "Female Tutors", 
      count: stats?.femaleTutors || "0", 
      icon: "lucide:user" 
    }
  ];

  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="bg-white rounded-lg p-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Hire the best qualified tutors with few clicks!
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {statsLoading ? (
              // Show skeleton loaders when loading
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="bg-background rounded-lg p-4 animate-pulse">
                  <div className="flex items-center">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4 w-12 h-12"></div>
                    <div>
                      <div className="h-6 bg-primary/20 rounded w-24 mb-2"></div>
                      <div className="h-4 bg-primary/20 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Show actual stats when loaded
              statsDisplay.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-background rounded-lg p-4"
                >
                  <div className="flex items-center">
                    <div className="bg-primary p-3 rounded-lg mr-4">
                      <Icon icon={stat.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{stat.count}</h3>
                      <p className="text-gray-600 text-sm">{stat.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
          
          <div className="relative max-w-xl mx-auto">
            <Input
              placeholder="Add tutor id to find..."
              size="lg"
              radius="full"
              startContent={<Icon icon="lucide:search" className="text-gray-400" />}
              className="bg-white"
            />
            <Button 
              color="primary" 
              className="absolute right-1 top-1 bottom-1 rounded-full px-6"
            >
              Search
            </Button>
          </div>
        </section>
        
        {/* Tutor Sections */}
        {tutorsLoading ? (
          // Show skeleton loaders for tutor sections
          <div className="space-y-12">
            {Array(2).fill(0).map((_, sectionIndex) => (
              <section key={sectionIndex} className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-6 bg-primary/20 rounded w-32"></div>
                  <div className="h-8 bg-primary/20 rounded w-24"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array(4).fill(0).map((_, tutorIndex) => (
                    <div key={tutorIndex} className="bg-white p-4 rounded-lg animate-pulse">
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-primary/20 mb-3"></div>
                        <div className="h-5 bg-primary/20 rounded w-24 mb-2"></div>
                        <div className="h-4 bg-primary/20 rounded w-32 mb-1"></div>
                        <div className="h-4 bg-primary/20 rounded w-16 mb-4"></div>
                        <div className="h-9 bg-primary/20 rounded w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          // Show actual tutor sections when loaded
          tutorSections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{section.title}</h2>
                <Button 
                  color="primary" 
                  variant="flat"
                  size="sm"
                  className="rounded-full"
                >
                  See All <Icon icon="lucide:arrow-right" className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.tutors.map((tutor, tutorIndex) => (
                  <motion.div
                    key={tutor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: tutorIndex * 0.1 }}
                  >
                    <Card className="p-4 bg-white">
                      <div className="flex flex-col items-center">
                        <div className="relative mb-3">
                          <img 
                            src={tutor.image} 
                            alt={tutor.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                          />
                          {tutor.badges && (
                            <div className="absolute -top-1 -right-1 flex">
                              {tutor.badges.includes("verified") && (
                                <div className="bg-primary text-white rounded-full p-1">
                                  <Icon icon="lucide:check" className="h-3 w-3" />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <h3 className="font-semibold text-center">{tutor.name}</h3>
                        <p className="text-sm text-gray-600 text-center mb-1">{tutor.university}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Icon icon="lucide:map-pin" className="h-3 w-3 mr-1" />
                          <span>{tutor.location}</span>
                        </div>
                        
                        <Button 
                          color="primary" 
                          variant="solid"
                          className="w-full"
                        >
                          See
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center mt-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
};

export default TutorHubPage;