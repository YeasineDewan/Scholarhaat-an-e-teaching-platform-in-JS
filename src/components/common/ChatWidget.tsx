import React from 'react';
import { Button, Input, Avatar, Chip } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ChatWidget: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  
  // Sample chat messages with AI responses
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      sender: 'ai',
      content: 'Hello! I\'m your AI assistant. I can help you find tutors, answer questions about our services, or connect you with our support team. How can I assist you today?',
      timestamp: new Date(Date.now() - 3600000).toISOString()
    }
  ]);
  
  // AI response templates
  const aiResponses = {
    tutor: 'I can help you find the perfect tutor! What subject are you looking for help with? You can browse our verified tutors or post a job with your specific requirements.',
    price: 'Our tutoring rates vary based on subject, level, and tutor experience. Most sessions range from 500-2000 BDT per hour. Would you like me to connect you with tutors in your budget range?',
    online: 'Yes! We offer online tutoring through video calls. Many of our tutors are experienced with online teaching and use interactive tools to make learning engaging.',
    contact: 'You can reach us through: 📞 Hotline: +880-XXX-XXXX | 📧 Email: support@scholarhaat.com | 💬 Live chat (right here!) | Or visit our office in Dhaka.',
    default: 'Thank you for your question! Let me connect you with our support team for detailed assistance. In the meantime, you can browse our tutors or check our FAQ section.'
  };
  
  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('tutor') || msg.includes('teacher') || msg.includes('find')) {
      return aiResponses.tutor;
    } else if (msg.includes('price') || msg.includes('cost') || msg.includes('fee') || msg.includes('rate')) {
      return aiResponses.price;
    } else if (msg.includes('online') || msg.includes('video') || msg.includes('zoom')) {
      return aiResponses.online;
    } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('call') || msg.includes('email')) {
      return aiResponses.contact;
    } else {
      return aiResponses.default;
    }
  };
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentMessage = message;
    setMessage('');
    setIsTyping(true);
    
    // Simulate AI typing and response
    setTimeout(() => {
      setIsTyping(false);
      const responseMessage = {
        id: messages.length + 2,
        sender: 'ai',
        content: getAIResponse(currentMessage),
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, 1500);
  };
  
  const quickActions = [
    { text: 'Find a Tutor', icon: 'lucide:search' },
    { text: 'Pricing Info', icon: 'lucide:dollar-sign' },
    { text: 'Online Tutoring', icon: 'lucide:video' },
    { text: 'Contact Support', icon: 'lucide:headphones' }
  ];
  
  const handleQuickAction = (action: string) => {
    setMessage(action);
    setTimeout(() => handleSendMessage(), 100);
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
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="relative">
                  <Avatar 
                    src="https://img.heroui.chat/image/avatar?w=40&h=40&u=ai-bot" 
                    className="mr-3 border-2 border-white/20"
                    size="sm"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{t('aiAssistant')}</h3>
                    <Chip size="sm" className="bg-white/20 text-white text-xs">AI</Chip>
                  </div>
                  <p className="text-xs opacity-80">Online • Instant replies</p>
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
              {messages.length === 1 && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-3 text-center">Quick actions:</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="flat"
                        className="text-xs h-8"
                        startContent={<Icon icon={action.icon} className="h-3 w-3" />}
                        onPress={() => handleQuickAction(action.text)}
                      >
                        {action.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="relative mr-2 self-end">
                      <Avatar 
                        src="https://img.heroui.chat/image/avatar?w=32&h=32&u=ai-bot" 
                        className="border border-primary/20"
                        size="sm"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"></div>
                    </div>
                  )}
                  <div 
                    className={`rounded-2xl p-3 max-w-[80%] ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-primary to-primary/90 text-white rounded-br-md' 
                        : 'bg-white border border-gray-200 shadow-sm rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
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
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="relative mr-2 self-end">
                    <Avatar 
                      src="https://img.heroui.chat/image/avatar?w=32&h=32&u=ai-bot" 
                      className="border border-primary/20"
                      size="sm"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"></div>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl rounded-bl-md p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
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
          className="rounded-full shadow-lg h-14 w-14 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden"
          onPress={() => setIsOpen(!isOpen)}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
          <Icon 
            icon={isOpen ? "lucide:x" : "lucide:bot"} 
            className="h-6 w-6 relative z-10" 
          />
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatWidget;