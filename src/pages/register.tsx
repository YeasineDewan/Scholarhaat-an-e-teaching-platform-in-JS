import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Input, Button, Radio, RadioGroup } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const RegisterPage: React.FC = () => {
  const [userType, setUserType] = React.useState("student");
  
  return (
    <div className="bg-background min-h-[80vh] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 bg-white">
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <Icon icon="lucide:book-open" className="text-primary h-8 w-8 mr-2" />
              <span className="font-bold text-2xl">
                <span className="text-gray-800">Tuition</span>
                <span className="text-primary"> Terminal</span>
              </span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
          
          <form className="space-y-4">
            <RadioGroup
              label="I am a"
              orientation="horizontal"
              value={userType}
              onValueChange={setUserType}
            >
              <Radio value="student">Student/Parent</Radio>
              <Radio value="tutor">Tutor</Radio>
            </RadioGroup>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  label="First Name"
                  placeholder="Enter first name"
                  variant="bordered"
                  radius="sm"
                />
              </div>
              <div>
                <Input
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="bordered"
                  radius="sm"
                />
              </div>
            </div>
            
            <div>
              <Input
                label="Email Address"
                placeholder="Enter your email"
                variant="bordered"
                radius="sm"
                startContent={<Icon icon="lucide:mail" className="text-gray-400" />}
              />
            </div>
            
            <div>
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                variant="bordered"
                radius="sm"
                startContent={<Icon icon="lucide:phone" className="text-gray-400" />}
              />
            </div>
            
            <div>
              <Input
                label="Password"
                placeholder="Create a password"
                type="password"
                variant="bordered"
                radius="sm"
                startContent={<Icon icon="lucide:lock" className="text-gray-400" />}
              />
            </div>
            
            <div>
              <Input
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                variant="bordered"
                radius="sm"
                startContent={<Icon icon="lucide:lock" className="text-gray-400" />}
              />
            </div>
            
            {userType === "tutor" && (
              <div>
                <Input
                  label="University/Institution"
                  placeholder="Enter your university or institution"
                  variant="bordered"
                  radius="sm"
                  startContent={<Icon icon="lucide:building" className="text-gray-400" />}
                />
              </div>
            )}
            
            <Button 
              color="primary" 
              className="w-full"
              size="lg"
            >
              Register
            </Button>
            
            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-gray-200 w-full"></div>
              <div className="bg-white px-4 text-sm text-gray-500 absolute">or register with</div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <Button 
                variant="bordered" 
                className="w-full"
                startContent={<Icon icon="logos:google-icon" className="h-5 w-5" />}
              >
                Google
              </Button>
              <Button 
                variant="bordered" 
                className="w-full"
                startContent={<Icon icon="logos:facebook" className="h-5 w-5" />}
              >
                Facebook
              </Button>
              <Button 
                variant="bordered" 
                className="w-full"
                startContent={<Icon icon="logos:apple" className="h-5 w-5" />}
              >
                Apple
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account? {" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegisterPage;