import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);
  
  const menuItems = [
    { name: 'Dashboard', icon: 'lucide:layout-dashboard', path: '/admin' },
    { name: 'Tutors', icon: 'lucide:users', path: '/admin/tutors' },
    { name: 'Students', icon: 'lucide:graduation-cap', path: '/admin/students' },
    { name: 'Jobs', icon: 'lucide:briefcase', path: '/admin/jobs' },
    { name: 'Payments', icon: 'lucide:credit-card', path: '/admin/payments' },
    { name: 'Reports', icon: 'lucide:bar-chart', path: '/admin/reports' },
    { name: 'Reviews', icon: 'lucide:message-square', path: '/admin/reviews' },
    { name: 'Categories', icon: 'lucide:tag', path: '/admin/categories' },
    { name: 'Affiliates', icon: 'lucide:link', path: '/admin/affiliates' },
    { name: 'Settings', icon: 'lucide:settings', path: '/admin/settings' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className={`bg-white shadow-sm h-screen transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        {!collapsed && (
          <div className="flex items-center">
            <Icon icon="lucide:book-open" className="text-primary h-6 w-6 mr-2" />
            <span className="font-bold text-xl">
              <span className="text-gray-800">Admin</span>
              <span className="text-primary">Panel</span>
            </span>
          </div>
        )}
        {collapsed && (
          <Icon icon="lucide:book-open" className="text-primary h-6 w-6 mx-auto" />
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Icon 
            icon={collapsed ? "lucide:chevron-right" : "lucide:chevron-left"} 
            className="h-5 w-5 text-gray-500" 
          />
        </button>
      </div>
      
      <div className="py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-1">
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                } transition-colors duration-150 ${collapsed ? 'justify-center' : ''}`}
              >
                <Icon icon={item.icon} className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`absolute bottom-0 p-4 border-t border-gray-100 w-full ${collapsed ? 'text-center' : ''}`}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : ''}`}>
          <img 
            src="https://img.heroui.chat/image/avatar?w=40&h=40&u=admin" 
            alt="Admin" 
            className="h-10 w-10 rounded-full object-cover border border-gray-200" 
          />
          {!collapsed && (
            <div className="ml-3">
              <p className="font-medium text-sm">Admin User</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;