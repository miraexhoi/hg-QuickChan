// src/components/SignupStep1.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignupStep1.css';

const SignupStep1 = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate('/signup-step2'); // 경로를 '/signup-step2'로 수정
  };

  return (
    <div className="done-container">
      <h2>
        회원가입을 위해<br />
        이름을 입력해 주세요
      </h2>
      <p className='description-text'>올바른 이름을 입력해 주세요.<br />
      ex) 홍길동
      </p>
      
      {/* Name field */}
      <input type="text" placeholder="성명" className="input-field" />
      
      <button className="done-button" onClick={handleNextStep}>완료하기</button> {/* onClick 이벤트 추가 */}
    </div>
  );
};

export default SignupStep1;
