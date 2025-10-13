import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, Progress, Tabs, Tab } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useQuery } from 'react-query';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorDisplay from '../components/common/ErrorDisplay';

interface TutorDetailsParams {
  id: string;
}

interface TutorDetails {
  id: string;
  name: string;
  profileImage: string;
  university: string;
  rating: number;
  totalReviews: number;
  about: string;
  experience: string;
  livingCountry: string;
  livingCity: string;
  preferredLocations: string[];
  preferredCategories: string[];
  preferredSubjects: string[];
  preferredLevels: string[];
  preferredMethods: string[];
  availabilityDays: string[];
  availableFrom: string;
  availableTo: string;
  tutoringExperience: string;
  expertiseLevel: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    major: string;
    cgpa: string;
  }[];
  certifications: {
    name: string;
    institution: string;
    year: string;
    description: string;
    score: string;
  }[];
  personalInfo: {
    gender: string;
    bloodGroup: string;
    religion: string;
    nationality: string;
    dateOfBirth: string;
    memberSince: string;
    lastActive: string;
    presentAddress: string;
    permanentAddress: string;
  };
  platformStatus: {
    completedJobs: number;
    activeJobs: number;
    ratings: number;
    reviews: number;
    successRate: number;
  };
  availableBatches: {
    title: string;
    subject: string;
    schedule: string;
    fee: string;
  }[];
  relatedTutors: {
    id: string;
    name: string;
    image: string;
    university: string;
    location: string;
    rating: number;
  }[];
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

const fetchTutorDetails = async (id: string): Promise<TutorDetails> => {
  const response = await axios.get(`/api/tutors/detail/${id}`);
  return response.data;
};

const TutorDetailsPage: React.FC = () => {
  const { id } = useParams<TutorDetailsParams>();
  const { t, i18n } = useTranslation();
  const { data: tutor, isLoading, isError, refetch } = useQuery(
    ['tutorDetails', id],
    () => fetchTutorDetails(id),
    { enabled: !!id }
  );

  if (isLoading) return <LoadingSpinner fullPage />;
  if (isError) return <ErrorDisplay onRetry={refetch} />;
  if (!tutor) return null;

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0]; // 5, 4, 3, 2, 1 stars
  tutor.reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCounts[5 - review.rating]++;
    }
  });

  const totalReviews = tutor.reviews.length;
  const ratingPercentages = ratingCounts.map(count => 
    totalReviews > 0 ? (count / totalReviews) * 100 : 0
  );

  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <Card className="p-6 bg-white mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img 
                src={tutor.profileImage || "https://img.heroui.chat/image/avatar?w=150&h=150&u=tutor-profile"} 
                alt={tutor.name} 
                className="w-32 h-32 object-cover rounded-lg border-2 border-primary"
              />
            </div>
            
            <div className="flex-grow">
              <h1 className="text-2xl font-bold mb-1">{tutor.name}</h1>
              <p className="text-gray-600 mb-2">{tutor.university}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon 
                      key={star}
                      icon={star <= tutor.rating ? "lucide:star" : "lucide:star"}
                      className={`h-4 w-4 ${star <= tutor.rating ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {tutor.rating.toFixed(1)} ({tutor.totalReviews} {t('tutorDetails.ratingsAndReviews')})
                </span>
              </div>
              
              <div className="mb-4">
                <h2 className="font-semibold mb-2">{t('tutorDetails.about')}</h2>
                <p className="text-gray-600 text-sm">{tutor.about}</p>
              </div>
              
              <div>
                <h2 className="font-semibold mb-2">{t('tutorDetails.tutorExperience')}</h2>
                <p className="text-gray-600 text-sm">{tutor.experience}</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 flex flex-col items-end">
              <Button 
                color="primary" 
                className="mb-2"
                startContent={<Icon icon="lucide:message-square" className="h-4 w-4" />}
              >
                Contact
              </Button>
              
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Icon icon="lucide:bookmark" className="h-4 w-4 mr-1 text-primary" />
                <span>{t('tutorDetails.bookmarkProfile')}</span>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Tutoring Information */}
        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">{t('tutorDetails.tutorInformation')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('tutorDetails.livingCountry')}</h3>
                <p className="text-gray-600">{tutor.livingCountry}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('tutorDetails.livingCity')}</h3>
                <p className="text-gray-600">{tutor.livingCity}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('tutorDetails.preferredTutoringLocation')}</h3>
                <div className="flex flex-wrap gap-2">
                  {tutor.preferredLocations.map((location, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('tutorDetails.preferredTutoringCategory')}</h3>
                <div className="flex flex-wrap gap-2">
                  {tutor.preferredCategories.map((category, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('tutorDetails.preferredTutoringSubjects')}</h3>
                <div className="flex flex-wrap gap-2">
                  {tutor.preferredSubjects.map((subject, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('tutorDetails.preferredTutoringLevels')}</h3>
                <div className="flex flex-wrap gap-2">
                  {tutor.preferredLevels.map((level, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold mb-2">{t('tutorDetails.preferredTutoringMethod')}</h3>
            <div className="flex flex-wrap gap-2">
              {tutor.preferredMethods.map((method, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.availabilityDays')}</h3>
              <div className="flex flex-wrap gap-2">
                {tutor.availabilityDays.map((day, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.availableFrom')}</h3>
              <p className="text-gray-600">{tutor.availableFrom}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.availableTo')}</h3>
              <p className="text-gray-600">{tutor.availableTo}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.tutoringExperience')}</h3>
              <p className="text-gray-600">{tutor.tutoringExperience}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.expertiseLevel')}</h3>
              <p className="text-gray-600">{tutor.expertiseLevel}</p>
            </div>
          </div>
        </Card>
        
        {/* Educational Information */}
        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">{t('tutorDetails.educationalInformation')}</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Degree</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Institution</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Year</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Major</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">CGPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tutor.education.map((edu, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 text-sm text-gray-700">{edu.degree}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{edu.institution}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{edu.year}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{edu.major}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{edu.cgpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <h3 className="font-semibold mt-6 mb-4">Certifications</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Institution</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Year</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tutor.certifications.map((cert, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 text-sm text-gray-700">{cert.name}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{cert.institution}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{cert.year}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{cert.description}</td>
                    <td className="py-2 px-4 text-sm text-gray-700">{cert.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        {/* Personal Information */}
        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">{t('tutorDetails.personalInformation')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.gender')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.gender}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.bloodGroup')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.bloodGroup}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.religion')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.religion}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.nationality')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.nationality}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.dateOfBirth')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.dateOfBirth}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.memberSince')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.memberSince}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.lastActive')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.lastActive}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.presentFullAddress')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.presentAddress}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t('tutorDetails.permanentFullAddress')}</h3>
              <p className="text-gray-600">{tutor.personalInfo.permanentAddress}</p>
            </div>
          </div>
        </Card>
        
        {/* Related Tutors */}
        <Card className="p-6 bg-white mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{t('tutorDetails.relatedTutors')}</h2>
            <Button 
              color="primary" 
              variant="flat"
              size="sm"
              className="rounded-full"
              as={Link}
              to="/tutor-hub"
            >
              {t('common.seeAll')}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tutor.relatedTutors.map((relatedTutor) => (
              <motion.div
                key={relatedTutor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-3">
                      <img 
                        src={relatedTutor.image} 
                        alt={relatedTutor.name} 
                        className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="absolute -top-1 -right-1">
                        <div className="bg-primary text-white rounded-full p-1">
                          <Icon icon="lucide:check" className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-center">{relatedTutor.name}</h3>
                    <p className="text-xs text-gray-600 text-center mb-1">{relatedTutor.university}</p>
                    
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <Icon icon="lucide:map-pin" className="h-3 w-3 mr-1" />
                      <span>{relatedTutor.location}</span>
                    </div>
                    
                    <Button 
                      color="primary" 
                      variant="solid"
                      className="w-full"
                      as={Link}
                      to={`/tutor/${relatedTutor.id}`}
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
        </Card>
        
        {/* Platform Status */}
        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">{t('tutorDetails.platformStatus')}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-green-100 rounded-lg p-4 flex items-center">
              <div className="bg-green-500 text-white p-2 rounded-lg mr-3">
                <Icon icon="lucide:check-circle" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{tutor.platformStatus.completedJobs}</h3>
                <p className="text-xs text-gray-600">Completed Jobs</p>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-lg p-4 flex items-center">
              <div className="bg-blue-500 text-white p-2 rounded-lg mr-3">
                <Icon icon="lucide:briefcase" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{tutor.platformStatus.activeJobs}</h3>
                <p className="text-xs text-gray-600">Active Jobs</p>
              </div>
            </div>
            
            <div className="bg-purple-100 rounded-lg p-4 flex items-center">
              <div className="bg-purple-500 text-white p-2 rounded-lg mr-3">
                <Icon icon="lucide:star" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{tutor.platformStatus.ratings}</h3>
                <p className="text-xs text-gray-600">Ratings</p>
              </div>
            </div>
            
            <div className="bg-indigo-100 rounded-lg p-4 flex items-center">
              <div className="bg-indigo-500 text-white p-2 rounded-lg mr-3">
                <Icon icon="lucide:message-square" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{tutor.platformStatus.reviews}</h3>
                <p className="text-xs text-gray-600">Reviews</p>
              </div>
            </div>
            
            <div className="bg-pink-100 rounded-lg p-4 flex items-center">
              <div className="bg-pink-500 text-white p-2 rounded-lg mr-3">
                <Icon icon="lucide:percent" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{tutor.platformStatus.successRate}%</h3>
                <p className="text-xs text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Available Batches */}
        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">{t('tutorDetails.availableBatches')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {tutor.availableBatches.map((batch, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-center mb-2">{batch.title}</h3>
                <p className="text-xs text-gray-600 text-center mb-1">{batch.subject}</p>
                <p className="text-xs text-gray-600 text-center mb-1">{batch.schedule}</p>
                <p className="text-sm font-medium text-center mb-3">{batch.fee}</p>
                <Button 
                  color="primary" 
                  variant="solid"
                  className="w-full"
                  size="sm"
                >
                  Enroll Now
                </Button>
              </Card>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </Card>
        
        {/* Chat Section */}
        <Card className="p-6 bg-gray-800 text-white mb-8">
          <div className="flex items-center">
            <Icon icon="lucide:message-circle" className="h-5 w-5 mr-2" />
            <p className="text-sm">Have any questions about tutor's profile? Click on Contact button!</p>
            <Button 
              color="primary" 
              size="sm"
              className="ml-auto"
            >
              Contact
            </Button>
          </div>
        </Card>
        
        {/* Ratings and Reviews */}
        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">{t('tutorDetails.ratingsAndReviews')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl font-bold mb-2">{tutor.rating.toFixed(2)}</div>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon 
                    key={star}
                    icon={star <= Math.round(tutor.rating) ? "lucide:star" : "lucide:star"}
                    className={`h-5 w-5 ${star <= Math.round(tutor.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on {tutor.totalReviews} reviews</p>
            </div>
            
            <div className="col-span-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center mb-2">
                  <div className="flex items-center w-12">
                    <span className="text-sm mr-1">{rating}</span>
                    <Icon icon="lucide:star" className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div className="flex-grow mx-2">
                    <Progress 
                      value={ratingPercentages[5 - rating]} 
                      color="primary"
                      size="sm"
                      className="max-w-full"
                    />
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-sm text-gray-600">{ratingCounts[5 - rating]}</span>
                  </div>
                </div>
              ))}
              
              <Button 
                color="primary" 
                variant="solid"
                className="mt-4"
                startContent={<Icon icon="lucide:edit-3" className="h-4 w-4" />}
              >
                {t('tutorDetails.writeReview')}
              </Button>
            </div>
          </div>
          
          {tutor.reviews.length > 0 ? (
            <div className="mt-8 space-y-4">
              {tutor.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <div className="font-semibold">{review.user}</div>
                    <div className="text-sm text-gray-600">{review.date}</div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon 
                        key={star}
                        icon={star <= review.rating ? "lucide:star" : "lucide:star"}
                        className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Icon icon="lucide:message-square" className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('tutorDetails.noReviewAvailable')}</h3>
              <p className="text-gray-600 mb-4">Be the first to review this tutor</p>
              <Button 
                color="primary" 
                variant="solid"
                startContent={<Icon icon="lucide:edit-3" className="h-4 w-4" />}
              >
                {t('tutorDetails.writeReview')}
              </Button>
            </div>
          )}
        </Card>
        
        {/* Call to Action */}
        <div className="text-center mb-8">
          <Button 
            color="primary" 
            size="lg"
            className="px-8"
            startContent={<Icon icon="lucide:message-square" className="h-5 w-5" />}
          >
            Contact This Tutor
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Get in touch directly with this tutor. Type in your question.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            100% Secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;