import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge } from "@heroui/react";
import { Icon } from '@iconify/react';

interface Notification {
  id: number;
  type: 'message' | 'job' | 'payment' | 'system';
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: 1,
      type: 'message',
      title: 'New message received',
      description: 'You have received a new message from Ahmed Hassan',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'job',
      title: 'New job application',
      description: 'Your job posting has received a new application',
      time: '30 minutes ago',
      read: false
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment received',
      description: 'You have received a payment of ৳1,500',
      time: '2 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'system',
      title: 'System maintenance',
      description: 'The system will be under maintenance on Sunday, 10 PM to 12 AM',
      time: '1 day ago',
      read: true
    }
  ]);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  
  const getIconForType = (type: string) => {
    switch (type) {
      case 'message':
        return <Icon icon="lucide:message-circle" className="h-5 w-5 text-primary" />;
      case 'job':
        return <Icon icon="lucide:briefcase" className="h-5 w-5 text-green-500" />;
      case 'payment':
        return <Icon icon="lucide:credit-card" className="h-5 w-5 text-purple-500" />;
      case 'system':
        return <Icon icon="lucide:bell" className="h-5 w-5 text-orange-500" />;
      default:
        return <Icon icon="lucide:bell" className="h-5 w-5 text-gray-500" />;
    }
  };
  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          isIconOnly
          variant="light"
          aria-label="Notifications"
          className="relative"
        >
          <Icon icon="lucide:bell" className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              content={unreadCount} 
              color="danger" 
              shape="circle" 
              size="sm"
              className="absolute -top-1 -right-1"
            />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Notifications" 
        className="w-80"
        onAction={(key) => {
          if (key === 'mark-all-read') {
            markAllAsRead();
          } else if (key === 'view-all') {
            // Navigate to notifications page
            console.log('View all notifications');
          } else {
            markAsRead(Number(key));
          }
        }}
      >
        <DropdownItem key="header" className="flex justify-between items-center" isReadOnly>
          <span className="font-semibold">Notifications</span>
          {unreadCount > 0 && (
            <Button 
              size="sm" 
              variant="light" 
              color="primary" 
              onPress={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </DropdownItem>
        
        {notifications.length === 0 ? (
          <DropdownItem key="empty" isReadOnly>
            <div className="text-center py-4">
              <Icon icon="lucide:bell-off" className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No notifications</p>
            </div>
          </DropdownItem>
        ) : (
          notifications.map((notification) => (
            <DropdownItem 
              key={notification.id} 
              className={`py-2 ${!notification.read ? 'bg-primary/5' : ''}`}
              onPress={() => markAsRead(notification.id)}
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getIconForType(notification.type)}
                </div>
                <div className="flex-grow">
                  <p className={`text-sm ${!notification.read ? 'font-medium' : ''}`}>
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                )}
              </div>
            </DropdownItem>
          ))
        )}
        
        <DropdownItem key="view-all" className="text-center text-primary">
          View all notifications
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotificationCenter;