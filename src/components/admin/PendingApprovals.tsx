import React from 'react';
import { Button, Avatar } from "@heroui/react";
import { Icon } from '@iconify/react';

const PendingApprovals: React.FC = () => {
  const approvals = [
    {
      id: 1,
      name: "Ahmed Hassan",
      type: "Tutor Verification",
      image: "https://img.heroui.chat/image/avatar?w=40&h=40&u=tutor1",
      time: "2 hours ago"
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      type: "ID Verification",
      image: "https://img.heroui.chat/image/avatar?w=40&h=40&u=tutor2",
      time: "3 hours ago"
    },
    {
      id: 3,
      name: "Kamal Hossain",
      type: "Certificate Verification",
      image: "https://img.heroui.chat/image/avatar?w=40&h=40&u=tutor3",
      time: "5 hours ago"
    },
    {
      id: 4,
      name: "Farida Rahman",
      type: "Tutor Verification",
      image: "https://img.heroui.chat/image/avatar?w=40&h=40&u=tutor4",
      time: "8 hours ago"
    }
  ];
  
  return (
    <div className="space-y-4">
      {approvals.map((approval) => (
        <div key={approval.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center">
            <Avatar src={approval.image} alt={approval.name} className="mr-3" />
            <div>
              <p className="font-medium">{approval.name}</p>
              <p className="text-sm text-gray-500">{approval.type}</p>
              <p className="text-xs text-gray-400">{approval.time}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              color="success" 
              variant="flat"
              startContent={<Icon icon="lucide:check" className="h-4 w-4" />}
            >
              Approve
            </Button>
            <Button 
              size="sm" 
              color="danger" 
              variant="flat"
              startContent={<Icon icon="lucide:x" className="h-4 w-4" />}
            >
              Reject
            </Button>
          </div>
        </div>
      ))}
      
      <div className="text-center">
        <Button 
          color="primary" 
          variant="flat"
          size="sm"
        >
          View All Pending Approvals
        </Button>
      </div>
    </div>
  );
};

export default PendingApprovals;