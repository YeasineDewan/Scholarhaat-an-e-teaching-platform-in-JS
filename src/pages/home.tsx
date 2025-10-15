import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStats } from '../hooks/useStats';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorDisplay from '../components/common/ErrorDisplay';
import AutoSlider from '../components/common/AutoSlider';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
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
                {t('home.hero.title')}
              </h1>
              <p className="text-gray-600 mb-6">
                {t('home.hero.subtitle')}
              </p>
              <Button 
                as={Link}
                to="/categories"
                color="primary" 
                size="lg"
                className="font-medium"
              >
                {t('findTutor')}
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
                  <p className="text-gray-600 text-sm">{t('home.stats.totalTutors')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="lucide:book" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stats?.studentCount.toLocaleString()}</h3>
                  <p className="text-gray-600 text-sm">{t('home.stats.totalStudents')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="lucide:check-circle" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stats?.jobCount.toLocaleString()}</h3>
                  <p className="text-gray-600 text-sm">{t('home.stats.jobsPosted')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="lucide:star" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stats?.successRate}%</h3>
                  <p className="text-gray-600 text-sm">{t('home.stats.successRate')}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('home.categories.title')}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "lucide:home", title: t('home.categories.homeTuition'), gradient: "from-blue-500 to-blue-600" },
              { icon: "lucide:monitor", title: t('home.categories.onlineTuition'), gradient: "from-green-500 to-green-600" },
              { icon: "lucide:users", title: t('home.categories.groupTuition'), gradient: "from-purple-500 to-purple-600" },
              { icon: "lucide:book-open", title: t('home.categories.academicSupport'), gradient: "from-orange-500 to-orange-600" },
              { icon: "lucide:music", title: t('home.categories.musicLessons'), gradient: "from-pink-500 to-pink-600" },
              { icon: "lucide:palette", title: t('home.categories.artAndCraft'), gradient: "from-indigo-500 to-indigo-600" },
              { icon: "lucide:code", title: t('home.categories.programming'), gradient: "from-red-500 to-red-600" },
              { icon: "lucide:languages", title: t('home.categories.languageLearning'), gradient: "from-teal-500 to-teal-600" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white group">
                  <div className={`bg-gradient-to-br ${category.gradient} p-4 rounded-2xl mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon icon={category.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors">{category.title}</h3>
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
              {t('viewAll')}
            </Button>
          </div>
        </div>
      </section>

      {/* How Students Connect */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('home.connectStudents.title').split('Parents/Students').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">Parents/Students</span>{part}</>
              )}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "lucide:search", title: t('home.connectStudents.findTutor'), description: t('home.connectStudents.findTutorDesc') },
              { icon: "lucide:file-text", title: t('home.connectStudents.postJob'), description: t('home.connectStudents.postJobDesc') },
              { icon: "lucide:phone-call", title: t('home.connectStudents.callHotline'), description: t('home.connectStudents.callHotlineDesc') },
              { icon: "lucide:message-square", title: t('home.connectStudents.liveChat'), description: t('home.connectStudents.liveChatDesc') }
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
            <p className="text-sm text-gray-500 uppercase tracking-wider">{t('home.testimonials.happyClientTalks')}</p>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('home.testimonials.parentsTitle').split('Parents').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">Parents</span>{part}</>
              )}
            </h2>
          </div>
          
          <AutoSlider
            slides={[
              {
                id: 1,
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "Finding the right tutor for my daughter was always challenging. Scholarhaat made it incredibly easy. The tutor they matched us with is not only knowledgeable but also connects well with my child. Her grades have improved significantly!"
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
                    
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "As a working parent, I needed a reliable tutor who could help my son with his studies. The tutor from Scholarhaat has been exceptional. My son's confidence has grown, and he's now performing much better in school."
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
                )
              },
              {
                id: 2,
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "The platform's user-friendly interface made it so easy to find qualified tutors in our area. Our daughter's math skills have improved tremendously, and she actually enjoys learning now!"
                          </p>
                          <div>
                            <p className="font-semibold">Rashida Begum</p>
                            <p className="text-sm text-gray-500">Parent</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=100&h=100&u=parent3" 
                            alt="Parent testimonial" 
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "Scholarhaat's verification process gave us confidence in choosing a tutor. The regular progress updates and professional approach have exceeded our expectations."
                          </p>
                          <div>
                            <p className="font-semibold">Karim Ahmed</p>
                            <p className="text-sm text-gray-500">Parent</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=100&h=100&u=parent4" 
                            alt="Parent testimonial" 
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              }
            ]}
            className="h-80"
            autoPlayInterval={6000}
          />
        </div>
      </section>

      {/* Tutoring Method */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('home.tutoringMethod.title').split('Method').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">Method</span>{part}</>
              )}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: t('home.tutoringMethod.personalizedLearning'), 
                description: t('home.tutoringMethod.personalizedLearningDesc'),
                icon: "lucide:user",
                gradient: "from-blue-500 to-purple-600"
              },
              { 
                title: t('home.tutoringMethod.interactiveSessions'), 
                description: t('home.tutoringMethod.interactiveSessionsDesc'),
                icon: "lucide:message-circle",
                gradient: "from-green-500 to-teal-600"
              },
              { 
                title: t('home.tutoringMethod.progressTracking'), 
                description: t('home.tutoringMethod.progressTrackingDesc'),
                icon: "lucide:trending-up",
                gradient: "from-orange-500 to-red-600"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white hover:shadow-xl transition-all duration-300 group">
                  <div className={`bg-gradient-to-br ${method.gradient} p-4 rounded-2xl mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon icon={method.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{method.title}</h3>
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
              {t('home.connectTutors.title').split('Tutors').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">Tutors</span>{part}</>
              )}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "lucide:user-plus", title: t('home.connectTutors.registerAsTutor'), description: t('home.connectTutors.registerAsTutorDesc') },
              { icon: "lucide:search", title: t('home.connectTutors.browseJobs'), description: t('home.connectTutors.browseJobsDesc') },
              { icon: "lucide:calendar", title: t('home.connectTutors.setAvailability'), description: t('home.connectTutors.setAvailabilityDesc') },
              { icon: "lucide:message-square", title: t('home.connectTutors.connectWithStudents'), description: t('home.connectTutors.connectWithStudentsDesc') }
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
            <p className="text-sm text-gray-500 uppercase tracking-wider">{t('home.testimonials.happyClientTalks')}</p>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('home.testimonials.tutorsTitle').split('Tutors').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">Tutors</span>{part}</>
              )}
            </h2>
          </div>
          
          <AutoSlider
            slides={[
              {
                id: 1,
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "Scholarhaat has transformed my tutoring career. The platform connects me with students who truly match my teaching style and subject expertise. I've been able to build a steady income while doing what I love."
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
                    
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "As a university student, I needed flexible tutoring opportunities. Scholarhaat's platform allows me to set my own schedule and find students near my location. The payment system is reliable, and the support team is always helpful."
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
                )
              },
              {
                id: 2,
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "The verification process gave me credibility with parents. I've found consistent work through Scholarhaat, and the platform's tools help me manage my teaching schedule effectively."
                          </p>
                          <div>
                            <p className="font-semibold">Mahmud Rahman</p>
                            <p className="text-sm text-gray-500">English Tutor</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor3" 
                            alt="Tutor testimonial" 
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-white shadow-lg">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-grow">
                          <p className="text-gray-600 italic mb-4">
                            "Being part of Scholarhaat has opened up opportunities I never imagined. The platform's support and the quality of students I work with have made teaching even more rewarding."
                          </p>
                          <div>
                            <p className="font-semibold">Fatima Khan</p>
                            <p className="text-sm text-gray-500">Physics Tutor</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor4" 
                            alt="Tutor testimonial" 
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              }
            ]}
            className="h-80"
            autoPlayInterval={6000}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('home.aboutUs')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('footer.aboutText')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('home.vision').split('excellent').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">excellent</span>{part}</>
              )}
            </h2>
          </div>
        </div>
      </section>

      {/* Stakeholder Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('home.stakeholders').split('Statements').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">Statements</span>{part}</>
              )}
            </h2>
          </div>
          
          <AutoSlider
            slides={[
              {
                id: 1,
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                      <div className="text-primary text-6xl absolute top-4 left-4 opacity-20">"</div>
                      <div className="relative z-10">
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Scholarhaat has revolutionized how we connect with quality tutors. The platform's verification process ensures we only work with qualified professionals.
                        </p>
                        <div className="flex items-center">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=60&h=60&u=stakeholder1" 
                            alt="Stakeholder" 
                            className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-md"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">Ahmed Hassan</p>
                            <p className="text-sm text-primary font-medium">School Principal</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="relative p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                      <div className="text-primary text-6xl absolute top-4 left-4 opacity-20">"</div>
                      <div className="relative z-10">
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          As an educational institution, partnering with Scholarhaat has helped us provide additional learning support to our students. Their tutors are knowledgeable and professional.
                        </p>
                        <div className="flex items-center">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=60&h=60&u=stakeholder2" 
                            alt="Stakeholder" 
                            className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-md"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">Fariha Rahman</p>
                            <p className="text-sm text-primary font-medium">Education Consultant</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              },
              {
                id: 2,
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="relative p-8 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
                      <div className="text-primary text-6xl absolute top-4 left-4 opacity-20">"</div>
                      <div className="relative z-10">
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          The platform has significantly improved our ability to find qualified tutors for our students. The quality assurance and support system are exceptional.
                        </p>
                        <div className="flex items-center">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=60&h=60&u=stakeholder3" 
                            alt="Stakeholder" 
                            className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-md"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">Dr. Rashida Khatun</p>
                            <p className="text-sm text-primary font-medium">University Dean</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="relative p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                      <div className="text-primary text-6xl absolute top-4 left-4 opacity-20">"</div>
                      <div className="relative z-10">
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Scholarhaat's commitment to educational excellence aligns perfectly with our institution's values. We're proud to be associated with such a forward-thinking platform.
                        </p>
                        <div className="flex items-center">
                          <img 
                            src="https://img.heroui.chat/image/avatar?w=60&h=60&u=stakeholder4" 
                            alt="Stakeholder" 
                            className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-md"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">Mohammad Ali</p>
                            <p className="text-sm text-primary font-medium">Education Director</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              }
            ]}
            className="h-96"
            autoPlayInterval={7000}
          />
        </div>
      </section>

      {/* App Download */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('home.downloadApp').split('App').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">App</span>{part}</>
              )}
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-6 max-w-md text-lg">
                {t('home.downloadAppDesc')}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link to="/" className="inline-block hover:scale-105 transition-transform">
                  <img src="Imgaes\app download sign\google download.png" alt="Google Play" className="h-12 rounded-lg shadow-md" />
                </Link>
                <Link to="/" className="inline-block hover:scale-105 transition-transform">
                  <img src="Imgaes\app download sign\apple download.png" alt="App Store" className="h-12 rounded-lg shadow-md" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg">
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
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('home.featuredOn').split('Featured').map((part, index) => 
                index === 0 ? part : 
                <><span className="text-primary">Featured</span>{part}</>
              )}
            </h2>
          </div>
          
          <AutoSlider
            slides={[
              {
                id: 1,
                content: (
                  <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <img 
                        key={item}
                        src={`https://img.heroui.chat/image/ai?w=120&h=40&u=company${item}`} 
                        alt={`Featured company ${item}`} 
                        className="h-10 grayscale hover:grayscale-0 transition-all hover:scale-110"
                      />
                    ))}
                  </div>
                )
              },
              {
                id: 2,
                content: (
                  <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                    {[7, 8, 9, 10, 11, 12].map((item) => (
                      <img 
                        key={item}
                        src={`https://img.heroui.chat/image/ai?w=120&h=40&u=media${item}`} 
                        alt={`Featured media ${item}`} 
                        className="h-10 grayscale hover:grayscale-0 transition-all hover:scale-110"
                      />
                    ))}
                  </div>
                )
              }
            ]}
            className="h-24"
            autoPlayInterval={4000}
            showArrows={false}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;