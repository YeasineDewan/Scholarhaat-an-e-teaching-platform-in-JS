import React from 'react';
import { Avatar } from "@heroui/react";
import { Icon } from '@iconify/react';

const RecentActivities: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: "Ahmed Hassan",
      action: "registered as a new tutor",
      time: "10 minutes ago",
      icon: "lucide:user-plus",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      user: "Nusrat Jahan",
      action: "completed a job",
      time: "25 minutes ago",
      icon: "lucide:check-circle",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      user: "Kamal Hossain",
      action: "posted a new job",
      time: "1 hour ago",
      icon: "lucide:briefcase",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      user: "Farida Rahman",
      action: "made a payment",
      time: "2 hours ago",
      icon: "lucide:credit-card",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      id: 5,
      user: "Rahim Ahmed",
      action: "left a review",
      time: "3 hours ago",
      icon: "lucide:message-square",
      iconColor: "bg-yellow-100 text-yellow-600"
    }
  ];
  
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start border-b border-gray-100 pb-4">
          <div className={`${activity.iconColor} p-2 rounded-full mr-3`}>
            <Icon icon={activity.icon} className="h-4 w-4" />
          </div>
          <div className="flex-grow">
            <p>
              <span className="font-medium">{activity.user}</span>{" "}
              <span className="text-gray-600">{activity.action}</span>
            </p>
            <p className="text-xs text-gray-400">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;