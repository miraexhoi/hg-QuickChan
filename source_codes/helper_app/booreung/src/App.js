// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import SignupStep1 from './components/SignupStep1';
import SignupStep2 from './components/SignupStep2';
import SignupStep3 from './components/SignupStep3';
import SignupStep4 from './components/SignupStep4';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup-step1" element={<SignupStep1 />} />
        <Route path="/signup-step2" element={<SignupStep2 />} />
        <Route path="/signup-step3" element={<SignupStep3 />} />
        <Route path="/signup-step4" element={<SignupStep4 />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
