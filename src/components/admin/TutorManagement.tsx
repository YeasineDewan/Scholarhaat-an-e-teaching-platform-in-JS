import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Pagination, Chip } from "@heroui/react";
import { Icon } from '@iconify/react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const TutorManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedStatus, setSelectedStatus] = React.useState('all');
  
  // Sample data for tutors
  const tutors = [
    {
      id: 1,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@example.com",
      phone: "+880 1712 345678",
      subjects: ["Mathematics", "Physics"],
      rating: 4.8,
      status: "active",
      joinDate: "15 Jan 2023"
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      email: "nusrat.jahan@example.com",
      phone: "+880 1812 345678",
      subjects: ["English", "History"],
      rating: 4.5,
      status: "pending",
      joinDate: "20 Feb 2023"
    },
    {
      id: 3,
      name: "Kamal Hossain",
      email: "kamal.hossain@example.com",
      phone: "+880 1912 345678",
      subjects: ["Chemistry", "Biology"],
      rating: 4.7,
      status: "active",
      joinDate: "10 Mar 2023"
    },
    {
      id: 4,
      name: "Farida Rahman",
      email: "farida.rahman@example.com",
      phone: "+880 1612 345678",
      subjects: ["Computer Science", "Mathematics"],
      rating: 4.9,
      status: "inactive",
      joinDate: "05 Apr 2023"
    },
    {
      id: 5,
      name: "Rahim Ahmed",
      email: "rahim.ahmed@example.com",
      phone: "+880 1512 345678",
      subjects: ["Physics", "Chemistry"],
      rating: 4.6,
      status: "active",
      joinDate: "12 May 2023"
    }
  ];
  
  // Filter tutors based on search query and status
  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = searchQuery === '' || 
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.phone.includes(searchQuery);
    
    const matchesStatus = selectedStatus === 'all' || tutor.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  // Status color mapping
  const statusColorMap = {
    active: "success",
    pending: "warning",
    inactive: "danger"
  };
  
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader title="Tutor Management" />
        <div className="p-6 flex-1 overflow-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex gap-4 w-full md:w-auto">
              <Input
                placeholder="Search tutors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startContent={<Icon icon="lucide:search" className="text-gray-400" />}
                className="w-full md:w-64"
              />
              
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    variant="flat"
                    endContent={<Icon icon="lucide:chevron-down" className="h-4 w-4" />}
                  >
                    Status: {selectedStatus === 'all' ? 'All' : selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Status filter"
                  onAction={(key) => setSelectedStatus(key as string)}
                  selectedKeys={[selectedStatus]}
                  selectionMode="single"
                >
                  <DropdownItem key="all">All</DropdownItem>
                  <DropdownItem key="active">Active</DropdownItem>
                  <DropdownItem key="pending">Pending</DropdownItem>
                  <DropdownItem key="inactive">Inactive</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <Button 
                color="primary"
                startContent={<Icon icon="lucide:plus" className="h-4 w-4" />}
              >
                Add New Tutor
              </Button>
              <Button 
                variant="flat"
                startContent={<Icon icon="lucide:download" className="h-4 w-4" />}
              >
                Export
              </Button>
            </div>
          </div>
          
          <Table 
            aria-label="Tutors table"
            removeWrapper
            classNames={{
              table: "border border-gray-200 rounded-lg overflow-hidden",
            }}
          >
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>CONTACT</TableColumn>
              <TableColumn>SUBJECTS</TableColumn>
              <TableColumn>RATING</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>JOIN DATE</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {filteredTutors.map((tutor) => (
                <TableRow key={tutor.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://img.heroui.chat/image/avatar?w=40&h=40&u=tutor${tutor.id}`} 
                        alt={tutor.name} 
                        className="h-10 w-10 rounded-full object-cover" 
                      />
                      <div>
                        <p className="font-medium">{tutor.name}</p>
                        <p className="text-xs text-gray-500">ID: TUT-{tutor.id.toString().padStart(5, '0')}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{tutor.email}</p>
                      <p className="text-xs text-gray-500">{tutor.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {tutor.subjects.map((subject, index) => (
                        <Chip key={index} size="sm" variant="flat" color="primary">
                          {subject}
                        </Chip>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">{tutor.rating}</span>
                      <Icon icon="lucide:star" className="h-4 w-4 text-yellow-400" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      size="sm" 
                      color={statusColorMap[tutor.status as keyof typeof statusColorMap]} 
                      variant="flat"
                    >
                      {tutor.status.charAt(0).toUpperCase() + tutor.status.slice(1)}
                    </Chip>
                  </TableCell>
                  <TableCell>{tutor.joinDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        isIconOnly 
                        size="sm" 
                        variant="light" 
                        aria-label="View details"
                      >
                        <Icon icon="lucide:eye" className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button 
                        isIconOnly 
                        size="sm" 
                        variant="light" 
                        aria-label="Edit"
                      >
                        <Icon icon="lucide:edit" className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button 
                            isIconOnly 
                            size="sm" 
                            variant="light" 
                            aria-label="More actions"
                          >
                            <Icon icon="lucide:more-vertical" className="h-4 w-4 text-gray-500" />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Actions">
                          <DropdownItem>Verify Documents</DropdownItem>
                          <DropdownItem>Send Message</DropdownItem>
                          <DropdownItem>View Jobs</DropdownItem>
                          <DropdownItem>View Reviews</DropdownItem>
                          <DropdownItem className="text-danger" color="danger">Deactivate</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex justify-center mt-6">
            <Pagination 
              total={10} 
              initialPage={1}
              page={currentPage}
              onChange={setCurrentPage}
              showControls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorManagement;