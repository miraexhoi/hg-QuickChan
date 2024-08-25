// src/components/SignupStep3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupStep3() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/signup-step4');
  };

  return (
    <div>
      <h1>Step 3: Email</h1>
      {/* Your form fields */}
      <button onClick={handleNext}>완료하기</button>
    </div>
  );
}

export default SignupStep3;
