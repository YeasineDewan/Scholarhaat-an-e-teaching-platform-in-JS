import React from 'react';
import { Button, Card, Input, Tabs, Tab } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AffiliateProgramPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted email:', email);
    // Reset form
    setEmail('');
    // Show success message or redirect
  };
  
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('affiliate.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('affiliate.subtitle')}</p>
        </div>
        
        {/* How It Works */}
        <Card className="p-8 bg-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('affiliate.howItWorks')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: t('affiliate.step1'),
                icon: "lucide:user-plus",
                description: "Create your affiliate account with basic information and get approved"
              },
              { 
                step: t('affiliate.step2'),
                icon: "lucide:link",
                description: "Access your personalized referral link from your affiliate dashboard"
              },
              { 
                step: t('affiliate.step3'),
                icon: "lucide:share-2",
                description: "Promote your link through social media, blogs, or direct communication"
              },
              { 
                step: t('affiliate.step4'),
                icon: "lucide:dollar-sign",
                description: "Earn commission for every successful registration and completed lesson"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="bg-primary/10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center">
                    <Icon icon={item.icon} className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute top-0 right-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{item.step}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Card>
        
        {/* Commission Rates */}
        <Card className="p-8 bg-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('affiliate.commissionRates')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="p-6 border-2 border-primary h-full">
                <div className="bg-primary/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Icon icon="lucide:user-check" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{t('affiliate.tutorRegistration')}</h3>
                <div className="text-3xl font-bold text-center text-primary mb-4">500 BDT</div>
                <p className="text-gray-600 text-center text-sm">For each tutor who registers and completes profile verification</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="p-6 border-2 border-primary h-full">
                <div className="bg-primary/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Icon icon="lucide:users" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{t('affiliate.studentRegistration')}</h3>
                <div className="text-3xl font-bold text-center text-primary mb-4">300 BDT</div>
                <p className="text-gray-600 text-center text-sm">For each student who registers and posts a job</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card className="p-6 border-2 border-primary h-full">
                <div className="bg-primary/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Icon icon="lucide:book-open" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{t('affiliate.completedLessons')}</h3>
                <div className="text-3xl font-bold text-center text-primary mb-4">5%</div>
                <p className="text-gray-600 text-center text-sm">Ongoing commission on completed lessons for 3 months</p>
              </Card>
            </motion.div>
          </div>
        </Card>
        
        {/* Join Now */}
        <Card className="p-8 bg-white mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('affiliate.joinNow')}</h2>
              <p className="text-gray-600 mb-6">Start earning by referring tutors and students to our platform. Fill out the form to get started with our affiliate program.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  variant="bordered"
                  radius="sm"
                />
                
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  variant="bordered"
                  radius="sm"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <Input
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  variant="bordered"
                  radius="sm"
                />
                
                <Input
                  label="How will you promote our platform?"
                  placeholder="Social media, blog, website, etc."
                  variant="bordered"
                  radius="sm"
                />
                
                <Button 
                  color="primary" 
                  type="submit"
                  className="w-full"
                >
                  Submit Application
                </Button>
              </form>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://img.heroui.chat/image/ai?w=500&h=400&u=affiliate" 
                alt="Affiliate Program" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </Card>
        
        {/* FAQs */}
        <Card className="p-8 bg-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('affiliate.faqs')}</h2>
          
          <Tabs aria-label="FAQs" color="primary" variant="underlined" className="w-full">
            <Tab key="general" title="General Questions">
              <div className="space-y-4 py-4">
                <div>
                  <h3 className="font-semibold mb-2">How do I join the affiliate program?</h3>
                  <p className="text-gray-600">Fill out the application form on this page. Our team will review your application and get back to you within 2-3 business days.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Is there any fee to join the program?</h3>
                  <p className="text-gray-600">No, joining our affiliate program is completely free. There are no registration fees or hidden charges.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">How do I track my referrals?</h3>
                  <p className="text-gray-600">Once approved, you'll get access to an affiliate dashboard where you can track all your referrals, commissions, and payments in real-time.</p>
                </div>
              </div>
            </Tab>
            
            <Tab key="payments" title="Payments">
              <div className="space-y-4 py-4">
                <div>
                  <h3 className="font-semibold mb-2">When and how do I get paid?</h3>
                  <p className="text-gray-600">Payments are processed on the 10th of every month for the previous month's earnings. We support multiple payment methods including bank transfer, bKash, and Nagad.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Is there a minimum payout threshold?</h3>
                  <p className="text-gray-600">Yes, the minimum payout threshold is 1000 BDT. If your earnings are below this amount, they will be carried forward to the next payment cycle.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">How long do referral cookies last?</h3>
                  <p className="text-gray-600">Our referral cookies last for 30 days. This means if someone clicks on your referral link, you'll earn commission if they register within 30 days.</p>
                </div>
              </div>
            </Tab>
            
            <Tab key="terms" title="Terms & Conditions">
              <div className="space-y-4 py-4">
                <div>
                  <h3 className="font-semibold mb-2">What promotional methods are allowed?</h3>
                  <p className="text-gray-600">We allow promotion through social media, blogs, websites, email marketing, and direct communication. However, spam, misleading information, and paid ads using our brand name are strictly prohibited.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can I have multiple affiliate accounts?</h3>
                  <p className="text-gray-600">No, each person is allowed only one affiliate account. Multiple accounts from the same person will be terminated.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can the commission rates change?</h3>
                  <p className="text-gray-600">Yes, we reserve the right to modify commission rates with a 30-day notice to all affiliates. Any changes will not affect commissions already earned.</p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Card>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">What Our Affiliates Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Ahmed",
                role: "Student Affiliate",
                image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=affiliate1",
                quote: "I've been able to earn extra income as a student by referring my classmates to Tuition Terminal. The process is simple and the payments are always on time."
              },
              {
                name: "Nusrat Jahan",
                role: "Teacher Affiliate",
                image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=affiliate2",
                quote: "As a teacher, I know many tutors looking for opportunities. The affiliate program has been a great way to help them find work while earning commission."
              },
              {
                name: "Kamal Hossain",
                role: "Content Creator",
                image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=affiliate3",
                quote: "I promote Tuition Terminal on my educational blog and social media. The affiliate dashboard makes it easy to track my performance and optimize my strategy."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover mb-4"
                    />
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                    <p className="text-gray-600 italic text-center">"{testimonial.quote}"</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Join our affiliate program today and start earning by referring tutors and students to our platform.</p>
          <Button 
            color="white" 
            className="px-8 text-primary font-medium"
            size="lg"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgramPage;