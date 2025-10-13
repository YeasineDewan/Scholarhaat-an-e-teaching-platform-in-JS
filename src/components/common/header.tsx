import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import NotificationCenter from './NotificationCenter';

const Header: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar className="bg-white shadow-sm">
      <NavbarBrand>
        <Link to="/" className="flex items-center">
          <Icon icon="lucide:book-open" className="text-primary h-6 w-6 mr-2" />
          <span className="font-bold text-xl">
            <span className="text-gray-800">Tuition</span>
            <span className="text-primary"> Terminal</span>
          </span>
        </Link>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive("/")}>
          <Link to="/" className={`${isActive("/") ? "text-primary font-medium" : "text-gray-600"}`}>
            {t('common.home')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/job-board")}>
          <Link to="/job-board" className={`${isActive("/job-board") ? "text-primary font-medium" : "text-gray-600"}`}>
            {t('common.jobBoard')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/categories")}>
          <Link to="/categories" className={`${isActive("/categories") ? "text-primary font-medium" : "text-gray-600"}`}>
            {t('common.categories')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/tutor-hub")}>
          <Link to="/tutor-hub" className={`${isActive("/tutor-hub") ? "text-primary font-medium" : "text-gray-600"}`}>
            {t('common.tutorHub')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <div className="flex items-center gap-1 cursor-pointer">
            <Icon icon="lucide:globe" className="text-gray-600 h-4 w-4" />
            <div className="relative group">
              <span className="text-gray-600">{i18n.language === 'bn' ? 'বাংলা' : 'English'}</span>
              <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded-md p-1 z-10">
                <div 
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${i18n.language === 'en' ? 'text-primary' : 'text-gray-600'}`} 
                  onClick={() => changeLanguage('en')}
                >
                  {t('header.english')}
                </div>
                <div 
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${i18n.language === 'bn' ? 'text-primary' : 'text-gray-600'}`} 
                  onClick={() => changeLanguage('bn')}
                >
                  {t('header.bangla')}
                </div>
              </div>
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <NotificationCenter />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} to="/login" color="primary" variant="flat" className="font-medium">
            {t('common.login')}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;