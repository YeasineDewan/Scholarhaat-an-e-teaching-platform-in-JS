import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useStats } from '../hooks/useStats';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorDisplay from '../components/common/ErrorDisplay';

const HomePage: React.FC = () => {
  const { data: stats, isLoading, isError, refetch } = useStats();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Country's #1 Tutor Matching & Learning Platform.
              </h1>
              <p className="text-gray-600 mb-6">
                Find & Connect with over 10,000 verified tutors for home, online & batch tuition.
              </p>
              <Button 
                as={Link}
                to="/categories"
                color="primary" 
                size="lg"
                className="font-medium"
              >
                Find a Tutor
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://img.heroui.chat/image/ai?w=500&h=400&u=tutoring1" 
                alt="Tutor and student" 
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <LoadingSpinner fullPage />
          ) : isError ? (
            <ErrorDisplay onRetry={refetch} />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="lucide:users" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stats?.tutorCount.toLocaleString()}</h3>
                  <p className="text-gray-600 text-sm">Total Tutors</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="lucide:book" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stats?.studentCount.toLocaleString()}</h3>
                  <p className="text-gray-600 text-sm">Total Students</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="lucide:check-circle" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stats?.jobCount.toLocaleString()}</h3>
                  <p className="text-gray-600 text-sm">Jobs Posted</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="lucide:star" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stats?.successRate}%</h3>
                  <p className="text-gray-600 text-sm">Success Rate</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Service Categories</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "lucide:home", title: "Home Tuition" },
              { icon: "lucide:monitor", title: "Online Tuition" },
              { icon: "lucide:users", title: "Group Tuition" },
              { icon: "lucide:book-open", title: "Academic Support" },
              { icon: "lucide:music", title: "Music Lessons" },
              { icon: "lucide:palette", title: "Art & Craft" },
              { icon: "lucide:code", title: "Programming" },
              { icon: "lucide:languages", title: "Language Learning" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <div className="bg-primary/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <Icon icon={category.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium">{category.title}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              as={Link}
              to="/categories"
              color="primary" 
              variant="flat"
              className="font-medium"
            >
              View All Categories
            </Button>
          </div>
        </div>
      </section>

      {/* How Students Connect */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              The ways <span className="text-primary">Parents/Students</span> can connect with us.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "lucide:search", title: "Find a Tutor", description: "Search from our verified tutor database" },
              { icon: "lucide:file-text", title: "Post a Job", description: "Post your requirements and get matched" },
              { icon: "lucide:phone-call", title: "Call Our Hotline", description: "Get instant support from our team" },
              { icon: "lucide:message-square", title: "Live Chat", description: "Chat with our support team anytime" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Icon icon={item.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Parents */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2">
            <p className="text-sm text-gray-500 uppercase tracking-wider">HAPPY CLIENT TALKS</p>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Real Happy <span className="text-primary">Parents</span>, Real Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <p className="text-gray-600 italic mb-4">
                    "Finding the right tutor for my daughter was always challenging. Tuition Terminal made it incredibly easy. The tutor they matched us with is not only knowledgeable but also connects well with my child. Her grades have improved significantly!"
                  </p>
                  <div>
                    <p className="font-semibold">Shubha Noly</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=100&h=100&u=parent1" 
                    alt="Parent testimonial" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <p className="text-gray-600 italic mb-4">
                    "As a working parent, I needed a reliable tutor who could help my son with his studies. The tutor from Tuition Terminal has been exceptional. My son's confidence has grown, and he's now performing much better in school."
                  </p>
                  <div>
                    <p className="font-semibold">Farida Hossain</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=100&h=100&u=parent2" 
                    alt="Parent testimonial" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tutoring Method */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Tutoring <span className="text-primary">Method</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Personalized Learning", 
                description: "Our tutors create customized learning plans based on each student's needs, learning style, and goals.",
                icon: "lucide:user"
              },
              { 
                title: "Interactive Sessions", 
                description: "Engaging teaching methods that encourage active participation and deeper understanding of concepts.",
                icon: "lucide:message-circle"
              },
              { 
                title: "Progress Tracking", 
                description: "Regular assessments and feedback to monitor improvement and adjust teaching strategies accordingly.",
                icon: "lucide:trending-up"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white">
                  <div className="bg-primary/10 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                    <Icon icon={method.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Tutors Connect */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              The ways <span className="text-primary">Tutors</span> can connect with us.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "lucide:user-plus", title: "Register as Tutor", description: "Create your profile and showcase your skills" },
              { icon: "lucide:search", title: "Browse Jobs", description: "Find teaching opportunities that match your expertise" },
              { icon: "lucide:calendar", title: "Set Availability", description: "Define your schedule and teaching preferences" },
              { icon: "lucide:message-square", title: "Connect with Students", description: "Communicate directly with potential students" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Icon icon={item.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Tutors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2">
            <p className="text-sm text-gray-500 uppercase tracking-wider">HAPPY CLIENT TALKS</p>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Real Happy <span className="text-primary">Tutors</span>, Real Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <p className="text-gray-600 italic mb-4">
                    "Tuition Terminal has transformed my tutoring career. The platform connects me with students who truly match my teaching style and subject expertise. I've been able to build a steady income while doing what I love."
                  </p>
                  <div>
                    <p className="font-semibold">Farhan Hossain</p>
                    <p className="text-sm text-gray-500">Math Tutor</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor1" 
                    alt="Tutor testimonial" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <p className="text-gray-600 italic mb-4">
                    "As a university student, I needed flexible tutoring opportunities. Tuition Terminal's platform allows me to set my own schedule and find students near my location. The payment system is reliable, and the support team is always helpful."
                  </p>
                  <div>
                    <p className="font-semibold">Nusrat Jahan</p>
                    <p className="text-sm text-gray-500">Science Tutor</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor2" 
                    alt="Tutor testimonial" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We intend to expand <span className="text-primary">excellent</span> education.
            </h2>
          </div>
        </div>
      </section>

      {/* Stakeholder Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Stakeholders <span className="text-primary">Testimonials</span> About Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative p-6">
              <div className="text-primary text-6xl absolute top-0 left-0">"</div>
              <div className="pl-8 pt-8">
                <p className="text-gray-600 mb-4">
                  Tuition Terminal has revolutionized how we connect with quality tutors. The platform's verification process ensures we only work with qualified professionals.
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=50&h=50&u=stakeholder1" 
                    alt="Stakeholder" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">Ahmed Hassan</p>
                    <p className="text-sm text-gray-500">School Principal</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative p-6">
              <div className="text-primary text-6xl absolute top-0 left-0">"</div>
              <div className="pl-8 pt-8">
                <p className="text-gray-600 mb-4">
                  As an educational institution, partnering with Tuition Terminal has helped us provide additional learning support to our students. Their tutors are knowledgeable and professional.
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://img.heroui.chat/image/avatar?w=50&h=50&u=stakeholder2" 
                    alt="Stakeholder" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">Fariha Rahman</p>
                    <p className="text-sm text-gray-500">Education Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Download <span className="text-primary">App</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-4 max-w-md">
                Get the Tuition Terminal app on your mobile device for a seamless experience. Find tutors, manage appointments, and track progress on the go.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link to="/" className="inline-block">
                  <img src="https://img.heroui.chat/image/ai?w=140&h=42&u=googleplay" alt="Google Play" className="h-12" />
                </Link>
                <Link to="/" className="inline-block">
                  <img src="https://img.heroui.chat/image/ai?w=140&h=42&u=appstore" alt="App Store" className="h-12" />
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://img.heroui.chat/image/ai?w=150&h=150&u=qrcode" 
                alt="QR Code" 
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured On */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">
              We were <span className="text-primary">Featured</span> on
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <img 
                key={item}
                src={`https://img.heroui.chat/image/ai?w=120&h=40&u=company${item}`} 
                alt={`Featured company ${item}`} 
                className="h-8 grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;