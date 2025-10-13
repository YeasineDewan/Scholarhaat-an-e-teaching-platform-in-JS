import React from 'react';
import { Button, Input, Avatar } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  
  // Sample chat messages
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      sender: 'system',
      content: 'Welcome to Tuition Terminal! How can we help you today?',
      timestamp: new Date(Date.now() - 3600000).toISOString()
    }
  ]);
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');
    
    // Simulate response after a short delay
    setTimeout(() => {
      const responseMessage = {
        id: messages.length + 2,
        sender: 'system',
        content: 'Thank you for your message. Our support team will get back to you shortly.',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };
  
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-xl w-80 sm:w-96 mb-4 overflow-hidden border border-gray-200"
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <Avatar 
                  src="https://img.heroui.chat/image/avatar?w=40&h=40&u=support" 
                  className="mr-2"
                  size="sm"
                />
                <div>
                  <h3 className="font-medium">Support Team</h3>
                  <p className="text-xs opacity-80">Online | Typically replies in minutes</p>
                </div>
              </div>
              <Button 
                isIconOnly 
                size="sm" 
                variant="light" 
                onPress={() => setIsOpen(false)}
                className="text-white"
              >
                <Icon icon="lucide:x" className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'system' && (
                    <Avatar 
                      src="https://img.heroui.chat/image/avatar?w=32&h=32&u=support" 
                      className="mr-2 self-end"
                      size="sm"
                    />
                  )}
                  <div 
                    className={`rounded-lg p-3 max-w-[80%] ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                  {msg.sender === 'user' && (
                    <Avatar 
                      src="https://img.heroui.chat/image/avatar?w=32&h=32&u=user" 
                      className="ml-2 self-end"
                      size="sm"
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-gray-200">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow"
                  size="sm"
                  endContent={
                    <div className="flex gap-1">
                      <Button 
                        isIconOnly 
                        size="sm" 
                        variant="light" 
                        type="button"
                      >
                        <Icon icon="lucide:paperclip" className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button 
                        isIconOnly 
                        size="sm" 
                        variant="light" 
                        type="button"
                      >
                        <Icon icon="lucide:smile" className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  }
                />
                <Button 
                  isIconOnly 
                  color="primary" 
                  type="submit"
                  size="sm"
                >
                  <Icon icon="lucide:send" className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          isIconOnly 
          color="primary" 
          size="lg" 
          className="rounded-full shadow-lg h-14 w-14"
          onPress={() => setIsOpen(!isOpen)}
        >
          <Icon 
            icon={isOpen ? "lucide:x" : "lucide:message-circle"} 
            className="h-6 w-6" 
          />
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatWidget;