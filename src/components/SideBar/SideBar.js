import React from 'react';
import '../SideBar/SideBar.css';
import SideBarImage from '../../images/side-bar-image.jpg';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    // Side Bar
    <div className="side-bar">
      <div className="side-bar-item">
        <h3 className="side-bar-title">
          About Me
        </h3>
        {/* Side Bar Image */}
        <img className="side-bar-image" src={SideBarImage} alt="노란 꽃"></img>
        {/* Side Bar Name */}
        <span className="side-bar-name">naoni</span>
        {/* Setting Button */}
        <Link to="/user-setting">
          <button className="setting-button">수정</button>
        </Link>
      </div>
      <div className="side-bar-item">
        <h3 className="side-bar-title">
          카테고리
        </h3>
        {/* Category list */}
        <ul className="category-list">
          <li>일상</li>
          <li>음악</li>
          <li>스타일</li>
          <li>운동</li>
          <li>기술</li>
          <li>영화</li>
        </ul>
      </div>
      <div className="side-bar-item">
        <h3 className="side-bar-title">
          팔로우
        </h3>
        {/* Social Icons */}
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fas fa-share-square"></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
