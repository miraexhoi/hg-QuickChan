import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css'; // CSS 파일을 import 합니다
import { ReactComponent as Logo } from '../assets/images/logo.svg'; // SVG 파일을 import 합니다

function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/signup-step1');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="start-container">
      <Logo className="start-logo" /> {/* SVG 컴포넌트 사용 */}
      <button className="start-button" onClick={handleStart}>시작하기</button>
      <p className="login-link">
        이미 계정이 있으신가요? <a href="#" onClick={handleLogin}>로그인하기</a>
      </p>
    </div>
  );
}

export default StartPage;
