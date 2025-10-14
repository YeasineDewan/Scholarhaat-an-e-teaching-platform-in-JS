import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import NotificationCenter from './NotificationCenter';

const Header: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
      <NavbarBrand>
        <Link to="/" className="flex items-center group">
          <div className="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl mr-3 group-hover:scale-105 transition-transform">
            <Icon icon="lucide:graduation-cap" className="text-white h-6 w-6" />
          </div>
          <span className="font-bold text-xl">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Scholar</span>
            <span className="text-gray-800">haat</span>
          </span>
        </Link>
      </NavbarBrand>
      
        {/* Mobile menu button */}
        <button 
          className="sm:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
          <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} className="h-6 w-6" />
        </button>
        
        {/* Desktop Navigation */}
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem isActive={isActive("/")}>
            <Link to="/" className={`${isActive("/") ? "text-primary font-medium" : "text-gray-600 hover:text-primary transition-colors"}`}>
              {t('nav.home')}
            </Link>
        </NavbarItem>
          <NavbarItem isActive={isActive("/job-board")}>
            <Link to="/job-board" className={`${isActive("/job-board") ? "text-primary font-medium" : "text-gray-600 hover:text-primary transition-colors"}`}>
              {t('nav.jobBoard')}
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive("/categories")}>
            <Link to="/categories" className={`${isActive("/categories") ? "text-primary font-medium" : "text-gray-600 hover:text-primary transition-colors"}`}>
              {t('nav.categories')}
            </Link>
        </NavbarItem>
          <NavbarItem isActive={isActive("/tutor-hub")}>
            <Link to="/tutor-hub" className={`${isActive("/tutor-hub") ? "text-primary font-medium" : "text-gray-600 hover:text-primary transition-colors"}`}>
              {t('nav.tutorHub')}
            </Link>
        </NavbarItem>
      </NavbarContent>
        
        <NavbarContent className="hidden sm:flex items-center gap-4" justify="end">
          {/* Language Selector */}
          <Dropdown>
            <DropdownTrigger>
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                <Icon icon="lucide:globe" className="text-gray-600 h-4 w-4" />
                <span className="text-gray-600">{i18n.language === 'bn' ? 'বাংলা' : 'English'}</span>
                <Icon icon="lucide:chevron-down" className="text-gray-600 h-4 w-4" />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Language options">
              <DropdownItem 
                key="en" 
                className={`${i18n.language === 'en' ? 'text-primary bg-primary/10' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                {t('English')}
              </DropdownItem>
              <DropdownItem 
                key="bn" 
                className={`${i18n.language === 'bn' ? 'text-primary bg-primary/10' : ''}`}
                onClick={() => changeLanguage('bn')}
              >
                {t('Bangla')}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          {/* Notification Center */}
          <NotificationCenter />
          
          {/* AI Chat Assistant */}
          <Button 
            variant="flat" 
            color="primary"
            className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20"
            startContent={<Icon icon="lucide:bot" className="h-5 w-5" />}
          >
            <span className="hidden md:block font-medium">{t('aiAssistant')}</span>
          </Button>
          
          {/* Login Button */}
          <Button 
            as={Link} 
            to="/login" 
            color="primary" 
            variant="flat" 
            className="font-medium"
          >
            {t('login')}
          </Button>
        </NavbarContent>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md ${isActive("/") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/job-board"
              className={`px-4 py-2 rounded-md ${isActive("/job-board") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.jobBoard')}
            </Link>
            <Link
              to="/categories"
              className={`px-4 py-2 rounded-md ${isActive("/categories") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.categories')}
            </Link>
            <Link
              to="/tutor-hub"
              className={`px-4 py-2 rounded-md ${isActive("/tutor-hub") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.tutorHub')}
            </Link>
            
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between items-center px-4 py-2">
                <span className="text-gray-600">{t('language')}</span>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant={i18n.language === 'en' ? "flat" : "ghost"} 
                    color={i18n.language === 'en' ? "primary" : "default"}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </Button>
                  <Button 
                    size="sm" 
                    variant={i18n.language === 'bn' ? "flat" : "ghost"} 
                    color={i18n.language === 'bn' ? "primary" : "default"}
                    onClick={() => changeLanguage('bn')}
                  >
                    বাংলা
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <Button 
                as={Link} 
                to="/login" 
                color="primary" 
                variant="flat" 
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('login')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;