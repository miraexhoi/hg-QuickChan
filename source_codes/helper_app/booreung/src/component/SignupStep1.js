// src/components/SignupStep1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupStep1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/signup-step2');
  };

  return (
    <div>
      <h1>Step 1: Name</h1>
      {/* Your form fields */}
      <button onClick={handleNext}>완료하기</button>
    </div>
  );
}

export default SignupStep1;
