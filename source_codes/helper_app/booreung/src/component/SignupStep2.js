// src/components/SignupStep2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupStep2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/signup-step3');
  };

  return (
    <div>
      <h1>Step 2: Phone Number</h1>
      {/* Your form fields */}
      <button onClick={handleNext}>완료하기</button>
    </div>
  );
}

export default SignupStep2;
