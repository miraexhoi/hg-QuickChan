// src/components/SignupStep3.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupStep3.css';

const SignupStep3 = () => {
  const navigate = useNavigate(); // 중복 선언 제거

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    // 이메일에 @가 포함되어 있는지 확인
    setIsEmailValid(value.includes('@'));
  };

  const handleNextStep = () => {
    console.log('Button clicked'); // 이 줄을 추가하여 버튼 클릭을 확인
    navigate('/login'); // 다음 단계로 이동
  };

  return (
    <div className="done-container">
      <h2>
        {isEmailValid
          ? '비밀번호를 입력해 주세요'
          : '회원가입을 위해 이메일을 입력해 주세요'}
      </h2>
      <p className='description-text'>
        {isEmailValid
          ? '비밀번호 인증까지 진행해주세요.'
          : '올바른 이메일 형식을 입력해 주세요.'}
      </p>
      <input
        type="email"
        placeholder="이메일"
        className="input-field"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="input-field"
      />
      <button
        className="done-button"
        onClick={handleNextStep}
        disabled={!isEmailValid} // 이메일이 올바른 형식일 때만 버튼 활성화
      >
        완료하기
      </button>
    </div>
  );
};

export default SignupStep3;
