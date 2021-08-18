import React from 'react';
import './TopNavBar.css';
import profileImage from '../../images/profile-image.jpg';

function TopNavBar() {
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
        <li>홈</li>
        <li>글쓰기</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>로그아웃</li>
      </ul>
      {/* Profile Image & Search Icon */}
      <div className="profile-and-search">
        <img src={profileImage} alt="Profile"></img>
        <i className="fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopNavBar;
