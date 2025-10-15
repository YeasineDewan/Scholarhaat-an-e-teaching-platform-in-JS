
import React, { useState } from 'react';
import { Card, Button, Input, Textarea, Select, SelectItem, Checkbox, Tabs, Tab, Avatar, Chip } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BecomeATutorPage = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',

    // Educational Background
    university: '',
    degree: '',
    graduationYear: '',
    gpa: '',
    subjects: [] as string[],

    // Teaching Experience
    experience: '',
    previousTeaching: '',
    certifications: '',

    // Preferences
    preferredSubjects: [] as string[],
    preferredClasses: [] as string[],
    preferredLocations: [] as string[],
    availableDays: [] as string[],
    availableTimeFrom: '',
    availableTimeTo: '',
    hourlyRate: '',

    // Additional
    bio: '',
    motivation: '',
    references: ''
  });

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Bangla',
    'History', 'Geography', 'Economics', 'Accounting', 'ICT', 'Computer Science',
    'Art', 'Music', 'Physical Education', 'Islamic Studies', 'Hindu Studies'
  ];

  const classes = [
    'Class 1-5', 'Class 6-8', 'SSC', 'HSC', 'O Level', 'A Level',
    'Admission Test', 'University Level', 'Professional Courses'
  ];

  const locations = [
    'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal',
    'Rangpur', 'Comilla', 'Narayanganj', 'Gazipur', 'Online Only'
  ];

  const days = [
    'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelect = (field: string, value: string, isSelected: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: isSelected
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tutor application submitted:', formData);
    // Handle form submission
  };

  const benefits = [
    {
      icon: "lucide:dollar-sign",
      title: "Competitive Earnings",
      description: "Earn up to 50,000 BDT/month with flexible hourly rates"
    },
    {
      icon: "lucide:calendar",
      title: "Flexible Schedule",
      description: "Set your own availability and work when it suits you"
    },
    {
      icon: "lucide:users",
      title: "Growing Community",
      description: "Join 10,000+ tutors and connect with students nationwide"
    },
    {
      icon: "lucide:shield",
      title: "Verified Platform",
      description: "100% secure payments and verified student profiles"
    },
    {
      icon: "lucide:book-open",
      title: "Professional Development",
      description: "Access to training resources and teaching materials"
    },
    {
      icon: "lucide:star",
      title: "Rating System",
      description: "Build your reputation with student reviews and ratings"
    }
  ];

  const requirements = [
    "Bachelor's degree or equivalent qualification",
    "Minimum 2 years of teaching experience preferred",
    "Strong communication skills in English and Bangla",
    "Reliable internet connection for online tutoring",
    "Commitment to student success and professional conduct",
    "Willingness to undergo background verification"
  ];

  const testimonials = [
    {
      name: "Farhan Ahmed",
      role: "Mathematics Tutor",
      image: "https://img.heroui.chat/image/avatar?w=80&h=80&u=tutor1",
      quote: "Scholarhaat has transformed my teaching career. I now earn more than I ever did at a traditional school, with complete flexibility over my schedule.",
      earnings: "45,000 BDT/month",
      students: "25 active students"
    },
    {
      name: "Nusrat Jahan",
      role: "English Tutor",
      image: "https://img.heroui.chat/image/avatar?w=80&h=80&u=tutor2",
      quote: "The platform's verification process gives me credibility with parents. I've built a steady income teaching English to students across Bangladesh.",
      earnings: "38,000 BDT/month",
      students: "20 active students"
    },
    {
      name: "Rahim Khan",
      role: "Physics Tutor",
      image: "https://img.heroui.chat/image/avatar?w=80&h=80&u=tutor3",
      quote: "As a university student, this platform allows me to earn while studying. The flexible hours and good pay make it perfect for students like me.",
      earnings: "25,000 BDT/month",
      students: "15 active students"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Become a Tutor
                </span>
                <br />
                <span className="text-gray-800">Start Teaching Today</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join Bangladesh's leading tutoring platform and connect with thousands of students. Set your own rates, choose your schedule, and build a rewarding teaching career.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                  <Icon icon="lucide:users" className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">10,000+ Active Tutors</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                  <Icon icon="lucide:dollar-sign" className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Up to 50K BDT/Month</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                  <Icon icon="lucide:calendar" className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Flexible Hours</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setCurrentStep(1)}
              >
                Start Your Application
                <Icon icon="lucide:arrow-right" className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon="lucide:graduation-cap" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Quick Application Process</h3>
                  <p className="text-gray-600">Get approved and start teaching in just 48 hours</p>
                </div>

                <div className="space-y-4">
                  {[
                    { step: 1, title: "Fill Application", desc: "Complete your profile and qualifications" },
                    { step: 2, title: "Verification", desc: "Background check and document verification" },
                    { step: 3, title: "Training", desc: "Complete our tutor orientation program" },
                    { step: 4, title: "Start Teaching", desc: "Begin accepting students and earning" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-center">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Teach with Scholarhaat?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a platform that values your expertise and provides everything you need to succeed as a professional tutor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 group">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon icon={benefit.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tutor Requirements</h2>
              <p className="text-gray-600 mb-8">
                We welcome qualified educators who are passionate about teaching and committed to student success.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <Icon icon="lucide:check" className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-50 border border-primary/20">
                <div className="text-center mb-6">
                  <Icon icon="lucide:award" className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Certified</h3>
                  <p className="text-gray-600">Complete our tutor certification program and stand out from the competition</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Teaching Methodology</span>
                    <Chip size="sm" color="success" variant="flat">Completed</Chip>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Student Assessment</span>
                    <Chip size="sm" color="success" variant="flat">Completed</Chip>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Platform Training</span>
                    <Chip size="sm" color="success" variant="flat">Completed</Chip>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Safety & Ethics</span>
                    <Chip size="sm" color="success" variant="flat">Completed</Chip>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply to Become a Tutor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the application form below. Our team will review your application and get back to you within 48 hours.
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step <= currentStep ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 transition-colors ${
                      step < currentStep ? 'bg-primary' : 'bg-gray-200'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-center text-sm text-gray-600">
              <span className={currentStep >= 1 ? 'text-primary font-medium' : ''}>Personal Info</span>
              <span className="mx-4">→</span>
              <span className={currentStep >= 2 ? 'text-primary font-medium' : ''}>Education</span>
              <span className="mx-4">→</span>
              <span className={currentStep >= 3 ? 'text-primary font-medium' : ''}>Experience</span>
              <span className="mx-4">→</span>
              <span className={currentStep >= 4 ? 'text-primary font-medium' : ''}>Preferences</span>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-center mb-6">Personal Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      variant="bordered"
                      required
                    />
                    <Input
                      label="Last Name"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      variant="bordered"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      variant="bordered"
                      required
                    />
                    <Input
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      variant="bordered"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Date of Birth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      variant="bordered"
                      required
                    />
                    <Select
                      label="Gender"
                      placeholder="Select your gender"
                      selectedKeys={formData.gender ? [formData.gender] : []}
                      onSelectionChange={(keys) => handleInputChange('gender', Array.from(keys)[0] as string)}
                      variant="bordered"
                      required
                    >
                      <SelectItem key="male">Male</SelectItem>
                      <SelectItem key="female">Female</SelectItem>
                      <SelectItem key="other">Other</SelectItem>
                    </Select>
                  </div>

                  <Textarea
                    label="Address"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    variant="bordered"
                    minRows={3}
                    required
                  />
                </motion.div>
              )}

              {/* Step 2: Educational Background */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-center mb-6">Educational Background</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="University/Institution"
                      placeholder="Enter your university name"
                      value={formData.university}
                      onChange={(e) => handleInputChange('university', e.target.value)}
                      variant="bordered"
                      required
                    />
                    <Input
                      label="Degree"
                      placeholder="e.g., BSc in Mathematics"
                      value={formData.degree}
                      onChange={(e) => handleInputChange('degree', e.target.value)}
                      variant="bordered"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Graduation Year"
                      placeholder="e.g., 2020"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                      variant="bordered"
                      required
                    />
                    <Input
                      label="GPA/CGPA"
                      placeholder="e.g., 3.5/4.0"
                      value={formData.gpa}
                      onChange={(e) => handleInputChange('gpa', e.target.value)}
                      variant="bordered"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjects You Can Teach
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-48 overflow-y-auto border rounded-lg p-4">
                      {subjects.map((subject) => (
                        <Checkbox
                          key={subject}
                          isSelected={formData.subjects.includes(subject)}
                          onChange={(checked) => handleMultiSelect('subjects', subject, checked)}
                        >
                          {subject}
                        </Checkbox>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Teaching Experience */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-center mb-6">Teaching Experience</h3>

                  <Select
                    label="Years of Teaching Experience"
                    placeholder="Select your experience level"
                    value={formData.experience}
                    onChange={(value) => handleInputChange('experience', value)}
                    variant="bordered"
                    required
                  >
                    <SelectItem key="0-1" value="0-1">0-1 years</SelectItem>
                    <SelectItem key="1-3" value="1-3">1-3 years</SelectItem>
                    <SelectItem key="3-5" value="3-5">3-5 years</SelectItem>
                    <SelectItem key="5-10" value="5-10">5-10 years</SelectItem>
                    <SelectItem key="10+" value="10+">10+ years</SelectItem>
                  </Select>

                  <Textarea
                    label="Previous Teaching Experience"
                    placeholder="Describe your teaching experience, institutions you've worked at, etc."
                    value={formData.previousTeaching}
                    onChange={(e) => handleInputChange('previousTeaching', e.target.value)}
                    variant="bordered"
                    minRows={4}
                    required
                  />

                  <Textarea
                    label="Certifications & Achievements"
                    placeholder="List any teaching certifications, awards, or professional achievements"
                    value={formData.certifications}
                    onChange={(e) => handleInputChange('certifications', e.target.value)}
                    variant="bordered"
                    minRows={3}
                  />
                </motion.div>
              )}

              {/* Step 4: Preferences & Additional Info */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-center mb-6">Preferences & Additional Information</h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Subjects (Select your top 3-5)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-48 overflow-y-auto border rounded-lg p-4">
                      {subjects.map((subject) => (
                        <Checkbox
                          key={subject}
                          isSelected={formData.preferredSubjects.includes(subject)}
                          onChange={(checked) => handleMultiSelect('preferredSubjects', subject, checked)}
                        >
                          {subject}
                        </Checkbox>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Class Levels
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border rounded-lg p-4">
                      {classes.map((classLevel) => (
                        <Checkbox
                          key={classLevel}
                          isSelected={formData.preferredClasses.includes(classLevel)}
                          onChange={(checked) => handleMultiSelect('preferredClasses', classLevel, checked)}
                        >
                          {classLevel}
                        </Checkbox>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Locations
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border rounded-lg p-4">
                      {locations.map((location) => (
                        <Checkbox
                          key={location}
                          isSelected={formData.preferredLocations.includes(location)}
                          onChange={(checked) => handleMultiSelect('preferredLocations', location, checked)}
                        >
                          {location}
                        </Checkbox>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Days
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border rounded-lg p-4">
                      {days.map((day) => (
                        <Checkbox
                          key={day}
                          isSelected={formData.availableDays.includes(day)}
                          onChange={(checked) => handleMultiSelect('availableDays', day, checked)}
                        >
                          {day}
                        </Checkbox>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                      label="Available From (Time)"
                      type="time"
                      value={formData.availableTimeFrom}
                      onChange={(e) => handleInputChange('availableTimeFrom', e.target.value)}
                      variant="bordered"
                      required
                    />
                    <Input
                      label="Available To (Time)"
                      type="time"
                      value={formData.availableTimeTo}
                      onChange={(e) => handleInputChange('availableTimeTo', e.target.value)}
                      variant="bordered"
                      required
                    />
                    <Input
                      label="Hourly Rate (BDT)"
                      type="number"
                      placeholder="e.g., 500"
                      value={formData.hourlyRate}
                      onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                      variant="bordered"
                      required
                    />
                  </div>

                  <Textarea
                    label="Professional Bio"
                    placeholder="Write a brief bio about yourself and your teaching philosophy (max 500 characters)"
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    variant="bordered"
                    minRows={4}
                    maxLength={500}
                    required
                  />

                  <Textarea
                    label="Why do you want to teach on Scholarhaat?"
                    placeholder="Tell us about your motivation to join our platform"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    variant="bordered"
                    minRows={3}
                    required
                  />

                  <Textarea
                    label="References (Optional)"
                    placeholder="Provide contact information for professional references"
                    value={formData.references}
                    onChange={(e) => handleInputChange('references', e.target.value)}
                    variant="bordered"
                    minRows={3}
                  />
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="flat"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-8"
                >
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    color="primary"
                    onClick={nextStep}
                    className="px-8"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    color="primary"
                    className="px-8"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tutor Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from successful tutors who have built thriving careers on our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-white hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Avatar
                      src={testimonial.image}
                      className="w-16 h-16 mr-4 border-2 border-primary/20"
                      alt={testimonial.name}
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-primary text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>

                  <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                    <span>💰 {testimonial.earnings}</span>
                    <span>👥 {testimonial.students}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto">
            <Tabs aria-label="Tutor FAQs" color="primary" variant="underlined" className="w-full">
              <Tab key="getting-started" title="Getting Started">
                <div className="space-y-6 py-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How do I apply to become a tutor?</h3>
                    <p className="text-gray-600">Fill out the comprehensive application form above. Our team reviews applications within 48 hours and conducts verification checks.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">What are the requirements to become a tutor?</h3>
                    <p className="text-gray-600">You need a bachelor's degree, good communication skills, and commitment to student success. Teaching experience is preferred but not mandatory.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">How long does the approval process take?</h3>
                    <p className="text-gray-600">Most applications are reviewed within 48 hours. Approved tutors complete a short training program before starting to accept students.</p>
                  </div>
                </div>
              </Tab>

              <Tab key="payments" title="Payments & Earnings">
                <div className="space-y-6 py-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How much can I earn as a tutor?</h3>
                    <p className="text-gray-600">Earnings vary based on experience and demand. Tutors typically earn 300-800 BDT per hour, with top tutors earning 50,000+ BDT monthly.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">When do I get paid?</h3>
                    <p className="text-gray-600">Payments are processed weekly for completed lessons. Funds are transferred directly to your bank account or mobile wallet.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Are there any fees to join?</h3>
                    <p className="text-gray-600">No, joining Scholarhaat is completely free. We only deduct a small service fee (10-15%) from each lesson payment.</p>
                  </div>
                </div>
              </Tab>

              <Tab key="teaching" title="Teaching & Support">
                <div className="space-y-6 py-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What teaching methods are supported?</h3>
                    <p className="text-gray-600">We support both online and in-person tutoring. Use our platform tools for virtual whiteboards, file sharing, and progress tracking.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Do you provide teaching materials?</h3>
                    <p className="text-gray-600">Yes, we provide access to a comprehensive library of teaching materials, lesson plans, and resources to help you deliver high-quality tutoring sessions.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">How do I get more students?</h3>
                    <p className="text-gray-600">Complete your profile, maintain high ratings, and be responsive to inquiries. Our algorithm prioritizes highly-rated tutors for better visibility.</p>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BecomeATutorPage;
