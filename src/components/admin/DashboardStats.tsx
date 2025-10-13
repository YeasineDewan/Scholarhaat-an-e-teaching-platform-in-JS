import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: "Total Users",
      value: "24,563",
      change: "+12%",
      isPositive: true,
      icon: "lucide:users",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Total Revenue",
      value: "৳ 1,234,567",
      change: "+8%",
      isPositive: true,
      icon: "lucide:dollar-sign",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Active Jobs",
      value: "1,234",
      change: "+5%",
      isPositive: true,
      icon: "lucide:briefcase",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Completed Jobs",
      value: "5,432",
      change: "-3%",
      isPositive: false,
      icon: "lucide:check-circle",
      color: "bg-orange-100 text-orange-600"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card>
            <CardBody>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <div className={`flex items-center mt-2 text-sm ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    <Icon 
                      icon={stat.isPositive ? "lucide:trending-up" : "lucide:trending-down"} 
                      className="h-4 w-4 mr-1" 
                    />
                    <span>{stat.change} from last month</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 h-12 w-12 rounded-full flex items-center justify-center`}>
                  <Icon icon={stat.icon} className="h-6 w-6" />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;