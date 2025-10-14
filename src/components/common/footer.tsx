import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Icon icon="lucide:book-open" className="text-primary h-6 w-6 mr-2" />
              <span className="font-bold text-xl">
                <span className="text-primary">Scholarhaat</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {t('footer.aboutText')}
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
          <div>
            <h3 className="font-semibold text-gray-800 mb-6">{t('footer.usefulLinks')}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Affiliate Program</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Become A Tutor</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Appoint A Tutor</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Our Blog</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-6">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon icon="lucide:mail" className="text-primary h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">info@tuitionterminal.com.bd</span>
              </li>
              <li className="flex items-start">
                <Icon icon="lucide:phone" className="text-primary h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Call Hotline : 09678-444477</span>
              </li>
              <li className="flex items-start">
                <Icon icon="lucide:map-pin" className="text-primary h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">House 16/5,Faridabad N/A, Section: 4B Mirpur, Dhaka</span>
              </li>
              <li>
                <div className="flex gap-3 mt-6">
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Icon icon="lucide:facebook" className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Icon icon="lucide:instagram" className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Icon icon="lucide:twitter" className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Icon icon="lucide:youtube" className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Icon icon="lucide:linkedin" className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* We Accept */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-6">{t('footer.weAccept')}</h3>
            <div className="mb-4">
              <img src="https://img.heroui.chat/image/ai?w=120&h=36&u=bkash" alt="bKash" className="h-8" />
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mb-6">
          <Button
            color="primary"
            variant="solid"
            className="rounded-full px-6 py-2"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="flex items-center">
              {t('footer.scrollToTop')}
              <Icon icon="lucide:chevron-up" className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;