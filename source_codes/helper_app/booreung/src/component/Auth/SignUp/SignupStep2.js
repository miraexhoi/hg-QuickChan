// src/components/SignupStep2.js
import React from 'react';
import './SignupStep2.css';
import { useNavigate } from 'react-router-dom';

const SignupStep2 = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate('/signup-step3');
  };

  return (
    <div className="done-container">
      <h2>
        회원가입을 위해<br />
        전화번호 입력해 주세요
      </h2>
      <p className='description-text'>올바른 전화번호 형식을 입력해 주세요.<br />
      ex) 010-1234-5678
      </p>
      
      {/* Name field */}
      <input type="text" placeholder="전화번호" className="input-field" />
      
      <button className="done-button" onClick={handleNextStep}>완료하기</button>
    </div>
  );
};

export default SignupStep2;
