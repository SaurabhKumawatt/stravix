<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import AppRoutes from "./router/routes";
import { BrowserRouter } from "react-router-dom";


=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Earnings from './pages/Earnings.jsx';
import LeadsManagement from './pages/LeadsManagement.jsx';
import Courses from './pages/courses.jsx'; 
import Certificate from './pages/Certificate.jsx';
import Profile from './pages/Profile.jsx';  
import Kyc from './pages/kyc.jsx'; 
import Referral from './pages/Referral.jsx';
>>>>>>> a5cb570 (Implemented dashboard page with sidebar and created pages for sidebar options)

const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <AppRoutes />
=======
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-200 p-6 overflow-auto"> 
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Earnings" element={<Earnings />} />
            <Route path="/LeadsManagement" element={<LeadsManagement />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Certificate" element={<Certificate />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Kyc" element={<Kyc />} />
            <Route path="/Referral" element={<Referral />} />
          </Routes>
        </main>
      </div>
>>>>>>> a5cb570 (Implemented dashboard page with sidebar and created pages for sidebar options)
    </BrowserRouter>
  );
};

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> a5cb570 (Implemented dashboard page with sidebar and created pages for sidebar options)
