// src/components/LoginPage.js
import React from 'react';
import './LoginPage.css'; // CSS 파일을 import 합니다

const LoginPage = () => {
  return (
    <div className="login-container">
       <h2>
        로그인 하기 위한<br />
        이메일과 비밀번호를<br />
        정확하게 입력해 주세요
      </h2>
    
      <input type="email" placeholder="이메일" className="input-field" />
      <input type="password" placeholder="비밀번호" className="input-field" />
      
      <button className="login-button">로그인하기</button>
    </div>
  );
};

export default LoginPage;
