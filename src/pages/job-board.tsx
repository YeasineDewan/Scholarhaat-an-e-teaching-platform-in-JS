import React from 'react';
import { Button, Card, Input, Checkbox } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { fetchJobs } from '../api';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorDisplay from '../components/common/ErrorDisplay';

interface JobListing {
  id: string;
  class: string;
  location: string;
  date: string;
  subjects: string[];
  feePerWeek: string;
  tutorGender: string;
  tutorMode: string;
  tutorTime: string;
  postedAgo: string;
}

const JobBoardPage: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filters, setFilters] = React.useState({});
  const jobsPerPage = 6;
  
  // Use react-query to fetch jobs
  const { data, isLoading, error } = useQuery(
    ['jobs', currentPage, filters],
    () => fetchJobs(currentPage, filters),
    {
      keepPreviousData: true,
    }
  );
  
  // Use data from the API with fallback
  const jobListings = data?.jobs || [];
  const totalPages = data?.totalPages || 1;

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  const handleFilterChange = (filter: string) => {
    setFilters(prev => {
      // If filter is "All", clear filters
      if (filter === "All") return {};
      
      // Otherwise, toggle the filter
      return { ...prev, [filter]: !prev[filter] };
    });
    setCurrentPage(1); // Reset to first page when filters change
  };

  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:briefcase" className="text-primary h-5 w-5" />
              <h1 className="text-2xl font-bold">Job Board</h1>
            </div>
            <p className="text-gray-600">200+ Jobs found</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              color="primary" 
              variant="flat"
              startContent={<Icon icon="lucide:filter" className="h-4 w-4" />}
            >
              Filter
            </Button>
          </div>
        </div>
        
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Dhaka", "Chittagong", "Physics", "English", "Mathematics", "Chemistry", "Biology", "Home Tutoring", "Online"].map((filter, index) => (
            <Button 
              key={index}
              size="sm"
              variant="flat"
              color={index === 0 ? "primary" : "default"}
              className="rounded-full"
              onPress={() => handleFilterChange(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {isLoading ? (
            <div className="col-span-2">
              <LoadingSpinner fullPage />
            </div>
          ) : error ? (
            <div className="col-span-2">
              <ErrorDisplay onRetry={paginate(1)} />
            </div>
          ) : jobListings.length === 0 ? (
            <div className="col-span-2 text-center py-12">
              <Icon icon="lucide:search" className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your filters or check back later.</p>
            </div>
          ) : (
            currentJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-4 bg-white">
                  <div className="mb-3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{job.class}</h3>
                      <div className="text-xs text-gray-500">
                        <div>{job.id}</div>
                        <div>{job.postedAgo}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Icon icon="lucide:map-pin" className="h-4 w-4 mr-1 text-primary" />
                      <span>{job.location} | {job.date}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex items-start">
                      <Icon icon="lucide:book" className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <div className="text-xs text-gray-500">Subjects</div>
                        <div className="text-sm">{job.subjects.join(", ")}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Icon icon="lucide:dollar-sign" className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <div className="text-xs text-gray-500">Per Week</div>
                        <div className="text-sm">{job.feePerWeek}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Icon icon="lucide:user" className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <div className="text-xs text-gray-500">Tutor Gender</div>
                        <div className="text-sm text-pink-500">{job.tutorGender}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Icon icon="lucide:clock" className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <div className="text-xs text-gray-500">Tutoring Time</div>
                        <div className="text-sm">{job.tutorTime}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-xs text-gray-500 mr-1">Tutoring Mode:</span>
                      <span>{job.tutorMode}</span>
                    </div>
                    <Button 
                      color="primary" 
                      size="sm"
                      className="rounded-full"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1">
            <Button 
              isIconOnly
              size="sm"
              variant="flat"
              isDisabled={currentPage === 1}
              onPress={() => paginate(currentPage - 1)}
            >
              <Icon icon="lucide:chevron-left" className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <Button 
                key={number}
                size="sm"
                variant={currentPage === number ? "solid" : "flat"}
                color={currentPage === number ? "primary" : "default"}
                onPress={() => paginate(number)}
              >
                {number}
              </Button>
            ))}
            
            <Button 
              isIconOnly
              size="sm"
              variant="flat"
              isDisabled={currentPage === totalPages}
              onPress={() => paginate(currentPage + 1)}
            >
              <Icon icon="lucide:chevron-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoardPage;