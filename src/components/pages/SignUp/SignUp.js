import React from 'react';
import { Link } from 'react-router-dom';
import '../SignUp/SignUp.css';

function SignUp() {
  return (
    // Sign Up Page
    <div className="sign-up-page">
      {/* Sign Up Page Title */}
      <h3 className="sign-up-page-title">
        회원가입
      </h3>
      {/* Sign Up Form */}
      <form className="sign-up-form">
        <label>이름</label>
        <input type="text" placeholder="이름을 입력해주세요" autoFocus={true}></input>
        <label>이메일</label>
        <input type="text" placeholder="이메일을 입력해주세요"></input>
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요"></input>
        {/* Sign Up Button */}
        <button type="button" className="sign-up-button">
          회원가입
        </button>
      </form>
      {/* Sign Up */}
      <div className="login">
        <span>이미 회원이신가요?</span>
        <Link to="login">
          <button type="button" className="sign-up-page-login-button">
            로그인
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SignUp;
