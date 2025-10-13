import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@heroui/react";
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Icon icon="lucide:book-open" className="text-primary h-6 w-6 mr-2" />
              <span className="font-bold text-xl">
                <span className="text-gray-800">Tuition</span>
                <span className="text-primary"> Terminal</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Tuition Terminal is a leading full-stack tutor platform in Bangladesh, where students can find professional, experienced home, online, batch, & crash tutors who are committed to making your children's education, skills, arts & crafts etc. through learning fun, personalized, & easy.
            </p>
            <div className="flex gap-2 mb-4">
              <Link to="/" className="inline-block">
                <img src="https://img.heroui.chat/image/ai?w=120&h=36&u=googleplay" alt="Google Play" className="h-9" />
              </Link>
              <Link to="/" className="inline-block">
                <img src="https://img.heroui.chat/image/ai?w=120&h=36&u=appstore" alt="App Store" className="h-9" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">USEFUL LINKS</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Affiliate Program</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Our Team</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Become A Tutor</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Careers</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Appoint A Tutor</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Gallery</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Our Blog</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">FAQ</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/" className="text-gray-600 text-sm hover:text-primary">Terms of Use</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">CONTACT US</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon icon="lucide:mail" className="text-primary h-5 w-5 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">info@tuitionterminal.com.bd</span>
                </li>
                <li className="flex items-start">
                  <Icon icon="lucide:phone" className="text-primary h-5 w-5 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">Call Hotline : 09678-444477</span>
                </li>
                <li className="flex items-start">
                  <Icon icon="lucide:map-pin" className="text-primary h-5 w-5 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">House 16/5,Faridabad N/A, Section: 4B Mirpur, Dhaka</span>
                </li>
                <li>
                  <div className="flex gap-2 mt-4">
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Icon icon="lucide:facebook" className="h-4 w-4" />
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Icon icon="lucide:instagram" className="h-4 w-4" />
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Icon icon="lucide:twitter" className="h-4 w-4" />
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Icon icon="lucide:youtube" className="h-4 w-4" />
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Icon icon="lucide:linkedin" className="h-4 w-4" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* We Accept */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">WE ACCEPT</h3>
            <div className="mb-4">
              <img src="https://img.heroui.chat/image/ai?w=120&h=36&u=bkash" alt="bKash" className="h-8" />
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-end mb-4">
          <Button 
            color="primary" 
            variant="solid" 
            className="rounded-full"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="flex items-center">
              Scroll To Top
              <Icon icon="lucide:chevron-up" className="ml-1 h-4 w-4" />
            </span>
          </Button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2020-2025 <span className="text-primary">Tuition Terminal</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;