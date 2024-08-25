// src/components/SignupStep4.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupStep4() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Step 4: Password</h1>
      {/* Your form fields */}
      <button onClick={handleFinish}>완료하기</button>
    </div>
  );
}

export default SignupStep4;
