import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import HomePage from './pages/home';
import CategoriesPage from './pages/categories';
import JobBoardPage from './pages/job-board';
import TutorHubPage from './pages/tutor-hub';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { useTranslation } from 'react-i18next';
import TutorDetailsPage from './pages/tutor-details';
import AffiliateProgramPage from './pages/affiliate-program';
import ChatWidget from './components/common/ChatWidget';
import NotificationCenter from './components/common/NotificationCenter';
import AdminDashboard from './components/admin/AdminDashboard';
import TutorManagement from './components/admin/TutorManagement';
import JobManagement from './components/admin/JobManagement';

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/job-board" component={JobBoardPage} />
          <Route path="/tutor-hub" component={TutorHubPage} />
          <Route path="/tutor/:id" component={TutorDetailsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/affiliate-program" component={AffiliateProgramPage} />
          
          {/* Admin routes */}
          <Route exact path="/admin" component={AdminDashboard} />
          <Route path="/admin/tutors" component={TutorManagement} />
          <Route path="/admin/jobs" component={JobManagement} />
          
          {/* Add more admin routes as needed */}
        </Switch>
      </main>
      <Footer />
      
      {/* Global components */}
      <ChatWidget />
    </div>
  );
}

export default App;