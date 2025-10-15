import React, { useState } from 'react';
import { Card, Button, Avatar, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
    researchgate?: string;
  };
  gradient: string;
  achievements: string[];
  education: string;
}

interface Advisor {
  id: number;
  name: string;
  role: string;
  organization: string;
  image: string;
  expertise: string;
  bio: string;
}

const OurTeamPage = () => {
  useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
    setIsContactModalOpen(false);
  };

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ahmed Rahman",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in education technology. Former Google Education specialist.",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=team1",
      expertise: ["Strategic Leadership", "EdTech Innovation", "Team Building"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ahmed@scholarhaat.com"
      },
      gradient: "from-blue-500 to-purple-600",
      achievements: ["Led 50+ EdTech projects", "Published 20+ research papers", "Awarded 'Educator of the Year' 2022"],
      education: "MBA Stanford University, BSc BUET"
    },
    {
      id: 2,
      name: "Fatima Khan",
      role: "Chief Technology Officer",
      bio: "Tech innovator with expertise in AI-driven education platforms. Ex-Microsoft engineer.",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=team2",
      expertise: ["AI/ML", "Platform Architecture", "Scalability"],
      social: {
        linkedin: "#",
        github: "#",
        email: "fatima@scholarhaat.com"
      },
      gradient: "from-green-500 to-teal-600",
      achievements: ["Developed AI tutoring system", "10+ years at Microsoft", "Patented 3 ML algorithms"],
      education: "PhD Computer Science MIT, MSc BUET"
    },
    {
      id: 3,
      name: "Dr. Nusrat Jahan",
      role: "Chief Academic Officer",
      bio: "PhD in Education with 12 years teaching experience. Expert in curriculum development.",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=team3",
      expertise: ["Curriculum Design", "Pedagogy", "Quality Assurance"],
      social: {
        linkedin: "#",
        researchgate: "#",
        email: "nusrat@scholarhaat.com"
      },
      gradient: "from-purple-500 to-pink-600",
      achievements: ["Developed national curriculum", "15+ years teaching", "Published 50+ academic papers"],
      education: "PhD Education Harvard, MA Education Dhaka University"
    },
    {
      id: 4,
      name: "Kamal Hossain",
      role: "Head of Operations",
      bio: "Operations expert ensuring seamless tutor-student connections across Bangladesh.",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=team4",
      expertise: ["Operations", "Customer Success", "Process Optimization"],
      social: {
        linkedin: "#",
        email: "kamal@scholarhaat.com"
      },
      gradient: "from-orange-500 to-red-600",
      achievements: ["Scaled operations to 100K users", "99.9% uptime maintained", "Reduced response time by 80%"],
      education: "MBA IBA Dhaka, BSc Engineering BUET"
    },
    {
      id: 5,
      name: "Rashida Begum",
      role: "Head of Marketing",
      bio: "Digital marketing strategist driving brand awareness and user acquisition.",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=team5",
      expertise: ["Digital Marketing", "Brand Strategy", "Growth Hacking"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rashida@scholarhaat.com"
      },
      gradient: "from-indigo-500 to-blue-600",
      achievements: ["Grew user base by 300%", "Led 20+ marketing campaigns", "Awarded 'Marketer of the Year'"],
      education: "MBA Marketing NSU, BSc Business Administration"
    },
    {
      id: 6,
      name: "Mohammad Ali",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating intuitive educational platforms.",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=team6",
      expertise: ["React", "Node.js", "Cloud Architecture"],
      social: {
        linkedin: "#",
        github: "#",
        email: "ali@scholarhaat.com"
      },
      gradient: "from-cyan-500 to-blue-600",
      achievements: ["Built 15+ web applications", "Open source contributor", "Led development of 5 products"],
      education: "BSc Computer Science BUET, MSc Software Engineering"
    }
  ];

  const advisors: Advisor[] = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      role: "Education Advisor",
      organization: "BRAC University",
      image: "https://img.heroui.chat/image/avatar?w=120&h=120&u=advisor1",
      expertise: "Educational Policy & Research",
      bio: "Former Minister of Education, leading researcher in educational technology adoption in developing countries."
    },
    {
      id: 2,
      name: "Prof. Karim Reza",
      role: "Technology Advisor",
      organization: "BUET",
      image: "https://img.heroui.chat/image/avatar?w=120&h=120&u=advisor2",
      expertise: "Computer Science & AI",
      bio: "Pioneer in AI research in Bangladesh, founder of multiple successful tech startups."
    },
    {
      id: 3,
      name: "Ms. Farida Hossain",
      role: "Industry Advisor",
      organization: "Education Ministry",
      image: "https://img.heroui.chat/image/avatar?w=120&h=120&u=advisor3",
      expertise: "Education Policy",
      bio: "Senior policy advisor with 20+ years experience in shaping Bangladesh's education landscape."
    }
  ];

  return (
    <>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-purple-50 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Passionate educators, tech innovators, and industry experts working together to revolutionize education in Bangladesh
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Icon icon="lucide:users" className="h-5 w-5 mr-2 text-primary" />
                  <span>15+ Team Members</span>
                </div>
                <div className="flex items-center">
                  <Icon icon="lucide:award" className="h-5 w-5 mr-2 text-primary" />
                  <span>50+ Years Combined Experience</span>
                </div>
                <div className="flex items-center">
                  <Icon icon="lucide:map-pin" className="h-5 w-5 mr-2 text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our leadership team brings together decades of experience in education, technology, and business operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-0 cursor-pointer" onClick={() => handleMemberClick(member)}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Profile Image */}
                    <div className="relative p-8 pb-0">
                      <div className="relative mx-auto w-32 h-32 mb-6">
                        <Avatar
                          src={member.image}
                          className="w-full h-full border-4 border-white shadow-xl"
                          alt={member.name}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      </div>

                      {/* Name and Role */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {member.expertise.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            size="sm"
                            variant="flat"
                            className="bg-primary/10 text-primary text-xs"
                          >
                            {skill}
                          </Chip>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3 mb-6">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon icon="lucide:linkedin" className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon icon="lucide:twitter" className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon icon="lucide:github" className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon icon="lucide:mail" className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisors Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Board</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Distinguished educators and industry leaders guiding our mission to transform education
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={advisor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-8 bg-white hover:shadow-xl transition-shadow duration-300">
                    <Avatar
                      src={advisor.image}
                      className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20"
                      alt={advisor.name}
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{advisor.name}</h3>
                    <p className="text-primary font-medium mb-2">{advisor.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{advisor.organization}</p>
                    <Chip size="sm" variant="flat" className="bg-primary/10 text-primary mb-3">
                      {advisor.expertise}
                    </Chip>
                    <p className="text-gray-500 text-xs leading-relaxed">{advisor.bio}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Innovation, collaboration, and a passion for education drive everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "lucide:lightbulb",
                  title: "Innovation First",
                  description: "We constantly push boundaries to create better learning experiences"
                },
                {
                  icon: "lucide:users",
                  title: "Collaborative Spirit",
                  description: "Cross-functional teams work together to achieve extraordinary results"
                },
                {
                  icon: "lucide:heart",
                  title: "Student-Centric",
                  description: "Every decision we make puts students and their success first"
                },
                {
                  icon: "lucide:target",
                  title: "Impact Driven",
                  description: "We measure success by the positive change we create in education"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon={value.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Be part of a mission to revolutionize education in Bangladesh. We're always looking for passionate individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8"
                  as="a"
                  href="/careers"
                >
                  View Open Positions
                  <Icon icon="lucide:arrow-right" className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Contact Us
                  <Icon icon="lucide:mail" className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Team Members", icon: "lucide:users" },
                { number: "15+", label: "Years Experience", icon: "lucide:award" },
                { number: "100K+", label: "Students Served", icon: "lucide:graduation-cap" },
                { number: "98%", label: "Satisfaction Rate", icon: "lucide:heart" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-primary/10 rounded-2xl p-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon icon={stat.icon} className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <Modal
            isOpen={isModalOpen}
            onOpenChange={setIsModalOpen}
            size="2xl"
            className="bg-white"
          >
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                  <Avatar
                    src={selectedMember.image}
                    className="w-20 h-20 border-4 border-primary/20"
                    alt={selectedMember.name}
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h2>
                    <p className="text-primary font-medium">{selectedMember.role}</p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">About</h3>
                    <p className="text-gray-600">{selectedMember.bio}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Education</h3>
                    <p className="text-gray-600">{selectedMember.education}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((skill, index) => (
                        <Chip key={index} size="sm" variant="flat" className="bg-primary/10 text-primary">
                          {skill}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Icon icon="lucide:check-circle" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Connect</h3>
                    <div className="flex gap-3">
                      {selectedMember.social.linkedin && (
                        <a
                          href={selectedMember.social.linkedin}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Icon icon="lucide:linkedin" className="h-5 w-5" />
                        </a>
                      )}
                      {selectedMember.social.twitter && (
                        <a
                          href={selectedMember.social.twitter}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Icon icon="lucide:twitter" className="h-5 w-5" />
                        </a>
                      )}
                      {selectedMember.social.github && (
                        <a
                          href={selectedMember.social.github}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Icon icon="lucide:github" className="h-5 w-5" />
                        </a>
                      )}
                      {selectedMember.social.email && (
                        <a
                          href={`mailto:${selectedMember.social.email}`}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Icon icon="lucide:mail" className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <Modal
            isOpen={isContactModalOpen}
            onOpenChange={setIsContactModalOpen}
            size="lg"
            className="bg-white"
          >
            <ModalContent>
              <ModalHeader>
                <h2 className="text-2xl font-bold text-gray-800">Contact Our Team</h2>
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    label="Your Name"
                    placeholder="Enter your full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell us how we can help you..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    minRows={4}
                    required
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onClick={() => setIsContactModalOpen(false)}>
                  Cancel
                </Button>
                <Button color="primary" onClick={handleContactSubmit}>
                  Send Message
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default OurTeamPage;
