import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@heroui/react";
import { Icon } from '@iconify/react';

interface AdminHeaderProps {
  title: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title }) => {
  return (
    <header className="bg-white border-b border-gray-100 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Input
              placeholder="Search..."
              startContent={<Icon icon="lucide:search" className="text-gray-400" />}
              size="sm"
              radius="full"
              className="w-64"
            />
          </div>
          
          <Dropdown>
            <DropdownTrigger>
              <Button 
                isIconOnly
                variant="light"
                aria-label="Notifications"
                className="relative"
              >
                <Icon icon="lucide:bell" className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Notifications">
              <DropdownItem key="new-tutor">
                <div className="flex gap-2">
                  <Icon icon="lucide:user-plus" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm">New tutor registration</p>
                    <p className="text-xs text-gray-500">5 minutes ago</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="new-job">
                <div className="flex gap-2">
                  <Icon icon="lucide:briefcase" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm">New job posted</p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="payment">
                <div className="flex gap-2">
                  <Icon icon="lucide:credit-card" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm">Payment received</p>
                    <p className="text-xs text-gray-500">30 minutes ago</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="view-all" className="text-primary">
                View all notifications
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light"
                className="flex items-center gap-2"
              >
                <img 
                  src="https://img.heroui.chat/image/avatar?w=32&h=32&u=admin" 
                  alt="Admin" 
                  className="h-8 w-8 rounded-full object-cover" 
                />
                <span className="hidden md:inline">Admin User</span>
                <Icon icon="lucide:chevron-down" className="h-4 w-4" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu">
              <DropdownItem key="profile">
                <div className="flex gap-2 items-center">
                  <Icon icon="lucide:user" className="h-4 w-4" />
                  Profile
                </div>
              </DropdownItem>
              <DropdownItem key="settings">
                <div className="flex gap-2 items-center">
                  <Icon icon="lucide:settings" className="h-4 w-4" />
                  Settings
                </div>
              </DropdownItem>
              <DropdownItem key="help">
                <div className="flex gap-2 items-center">
                  <Icon icon="lucide:help-circle" className="h-4 w-4" />
                  Help & Support
                </div>
              </DropdownItem>
              <DropdownItem key="logout" className="text-danger" color="danger">
                <div className="flex gap-2 items-center">
                  <Icon icon="lucide:log-out" className="h-4 w-4" />
                  Logout
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;