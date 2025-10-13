import React from 'react';
import { Card, CardBody, Tabs, Tab, Button } from "@heroui/react";
import { Icon } from '@iconify/react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import DashboardStats from './DashboardStats';
import RecentActivities from './RecentActivities';
import PendingApprovals from './PendingApprovals';
import RevenueChart from './RevenueChart';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader title="Dashboard" />
        <div className="p-6 flex-1 overflow-auto">
          <DashboardStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardBody>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Revenue Overview</h2>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="flat">Monthly</Button>
                      <Button size="sm" variant="flat">Quarterly</Button>
                      <Button size="sm" variant="flat" color="primary">Yearly</Button>
                    </div>
                  </div>
                  <RevenueChart />
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="h-full">
                <CardBody>
                  <h2 className="text-xl font-bold mb-4">Platform Statistics</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Users</span>
                      <span className="font-semibold">24,563</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Tutors</span>
                      <span className="font-semibold">12,345</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Students</span>
                      <span className="font-semibold">8,976</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Completed Jobs</span>
                      <span className="font-semibold">5,432</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Jobs</span>
                      <span className="font-semibold">1,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Rating</span>
                      <div className="flex items-center">
                        <span className="font-semibold mr-1">4.8</span>
                        <Icon icon="lucide:star" className="h-4 w-4 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardBody>
                <h2 className="text-xl font-bold mb-4">Pending Approvals</h2>
                <PendingApprovals />
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
                <RecentActivities />
              </CardBody>
            </Card>
          </div>
          
          <Card>
            <CardBody>
              <Tabs aria-label="Quick Actions" color="primary">
                <Tab key="tutors" title="Tutor Management">
                  <div className="py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:user-plus" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Add New Tutor</div>
                          <div className="text-xs">Manually add a tutor to the system</div>
                        </div>
                      </Button>
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:check-circle" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Verify Tutors</div>
                          <div className="text-xs">Review and verify tutor documents</div>
                        </div>
                      </Button>
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:badge" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Featured Tutors</div>
                          <div className="text-xs">Manage featured tutors on homepage</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </Tab>
                <Tab key="students" title="Student Management">
                  <div className="py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:user-plus" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Add New Student</div>
                          <div className="text-xs">Manually add a student to the system</div>
                        </div>
                      </Button>
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:file-text" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Job Requests</div>
                          <div className="text-xs">Review and approve job requests</div>
                        </div>
                      </Button>
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:message-square" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Support Tickets</div>
                          <div className="text-xs">Manage student support tickets</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </Tab>
                <Tab key="payments" title="Payment Management">
                  <div className="py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:credit-card" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Process Payments</div>
                          <div className="text-xs">Process pending tutor payments</div>
                        </div>
                      </Button>
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:dollar-sign" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Commission Settings</div>
                          <div className="text-xs">Manage platform commission rates</div>
                        </div>
                      </Button>
                      <Button 
                        className="flex items-center justify-center gap-2 h-24" 
                        color="primary" 
                        variant="flat"
                      >
                        <Icon icon="lucide:file-text" className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">Generate Reports</div>
                          <div className="text-xs">Create financial reports</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;