import React from 'react';
import './TopNavBar.css';
import profileImage from '../../images/profile-image.jpg';
import { Link } from 'react-router-dom';

function TopNavBar() {
  const user = true;
  return (
    // Top NavBar
    <div className="top-navbar">
      {/* Social Icons */}
      <div className="social-icons">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fas fa-share-square"></i>
      </div>
      {/* NavBar List */}
      <ul className="navbar-list">
        <Link to="/">
          <li>홈</li>
        </Link>
        <Link to="/write-post">
          <li>글쓰기</li>
        </Link>
        <Link to="/user-setting">
          <li>ABOUT</li>
        </Link>
        <Link to="/">
          <li>CONTACT</li>
        </Link>
        {
          user ? 
          <li>로그아웃</li>
          : 
          <Link to="/login">
            <li>로그인</li>
          </Link>
        }
      </ul>
      {/* Profile Image & Search Icon */}
      <div className="profile-and-search">
          {
            user ? 
            <Link to="/user-setting">
              <img src={profileImage} alt="Profile"></img>
            </Link>
            : <Link to="/signup">
                <i className="fas fa-user-circle"></i>
            </Link>
          }
        <i className="fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopNavBar;
