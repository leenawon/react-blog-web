import React from 'react';
import { Link } from 'react-router-dom';
import '../LoginPage/LoginPage.css';

function LoginPage() {
  return (
    // Login Page
    <div className="login-page">
      {/* Login Page Title */}
      <h3 className="login-page-title">
        로그인
      </h3>
      {/* Login Form */}
      <form className="login-form">
        <label>이메일</label>
        <input type="text" placeholder="이메일을 입력해주세요" autoFocus={true}></input>
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요"></input>
        {/* Login Button */}
        <button type="button" className="login-button">
          로그인
        </button>
      </form>
      {/* Sign Up */}
      <div className="sign-up">
        <span>회원이 아니신가요?</span>
        <Link to="/signup">
          <button type="button" className="login-page-sign-up-button">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage;
