import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Pagination, Chip } from "@heroui/react";
import { Icon } from '@iconify/react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const JobManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedStatus, setSelectedStatus] = React.useState('all');
  
  // Sample data for jobs
  const jobs = [
    {
      id: "JOB-54362",
      title: "Math Tutor for Class 8 Student",
      location: "Dhanmondi, Dhaka",
      postedBy: "Farida Rahman",
      postedDate: "15 Oct 2023",
      budget: "1000 BDT/week",
      status: "open",
      applications: 12
    },
    {
      id: "JOB-54340",
      title: "Physics & Chemistry Tutor",
      location: "Gulshan, Dhaka",
      postedBy: "Ahmed Hassan",
      postedDate: "14 Oct 2023",
      budget: "1500 BDT/week",
      status: "assigned",
      applications: 8
    },
    {
      id: "JOB-54339",
      title: "English Language Tutor",
      location: "Uttara, Dhaka",
      postedBy: "Nusrat Jahan",
      postedDate: "13 Oct 2023",
      budget: "1200 BDT/week",
      status: "completed",
      applications: 15
    },
    {
      id: "JOB-54335",
      title: "Computer Programming Tutor",
      location: "Banani, Dhaka",
      postedBy: "Kamal Hossain",
      postedDate: "12 Oct 2023",
      budget: "2000 BDT/week",
      status: "open",
      applications: 6
    },
    {
      id: "JOB-54331",
      title: "Arabic & Islamic Studies Tutor",
      location: "Mohammadpur, Dhaka",
      postedBy: "Rahim Ahmed",
      postedDate: "11 Oct 2023",
      budget: "1300 BDT/week",
      status: "cancelled",
      applications: 4
    }
  ];
  
  // Filter jobs based on search query and status
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.postedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || job.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  // Status color mapping
  const statusColorMap = {
    open: "primary",
    assigned: "warning",
    completed: "success",
    cancelled: "danger"
  };
  
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader title="Job Management" />
        <div className="p-6 flex-1 overflow-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex gap-4 w-full md:w-auto">
              <Input
                placeholder="Search jobs..."
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
                  <DropdownItem key="open">Open</DropdownItem>
                  <DropdownItem key="assigned">Assigned</DropdownItem>
                  <DropdownItem key="completed">Completed</DropdownItem>
                  <DropdownItem key="cancelled">Cancelled</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <Button 
                color="primary"
                startContent={<Icon icon="lucide:plus" className="h-4 w-4" />}
              >
                Add New Job
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
            aria-label="Jobs table"
            removeWrapper
            classNames={{
              table: "border border-gray-200 rounded-lg overflow-hidden",
            }}
          >
            <TableHeader>
              <TableColumn>JOB ID & TITLE</TableColumn>
              <TableColumn>LOCATION</TableColumn>
              <TableColumn>POSTED BY</TableColumn>
              <TableColumn>BUDGET</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>APPLICATIONS</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>
                    <div>
                      <p className="text-xs text-gray-500">{job.id}</p>
                      <p className="font-medium">{job.title}</p>
                      <p className="text-xs text-gray-500">{job.postedDate}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Icon icon="lucide:map-pin" className="h-4 w-4 text-primary mr-1" />
                      <span>{job.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>{job.postedBy}</TableCell>
                  <TableCell>{job.budget}</TableCell>
                  <TableCell>
                    <Chip 
                      size="sm" 
                      color={statusColorMap[job.status as keyof typeof statusColorMap]} 
                      variant="flat"
                    >
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Icon icon="lucide:users" className="h-4 w-4 text-gray-500 mr-1" />
                      <span>{job.applications}</span>
                    </div>
                  </TableCell>
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
                          <DropdownItem>View Applications</DropdownItem>
                          <DropdownItem>Contact Student</DropdownItem>
                          <DropdownItem>Feature Job</DropdownItem>
                          <DropdownItem>Mark as Completed</DropdownItem>
                          <DropdownItem className="text-danger" color="danger">Cancel Job</DropdownItem>
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

export default JobManagement;