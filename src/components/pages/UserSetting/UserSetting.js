import React from 'react';
import '../UserSetting/UserSetting.css';
import SideBar from '../../SideBar/SideBar';
import ProfileImage from '../../../images/side-bar-image.jpg';

function UserSetting() {
  return (
    // User Setting
    <div className="user-setting">
      {/* User Setting Container */}
      <div className="user-setting-container">
        {/* User Setting Title */}
        <h3 className="user-setting-title">
          내 프로필 수정하기
        </h3>
        {/* User Setting Form */}
        <form className="user-setting-form">
          <label>프로필 사진</label>
          {/* Setting Profile Image */}
          <div className="setting-profile-image">
            {/* Profile Image */}
            <img className="profile-image" src={ProfileImage} alt="프로필 사진"></img>
            {/* Input File */}
            <label htmlFor="input-file">
              <i className="fas fa-image"></i>
            </label>
            <input type="file" id="input-file"></input>
          </div>
          <label>이름</label>
          <input type="text" placeholder="naoni"></input>
          <label>이메일</label>
          <input type="email" placeholder="naoni@gmail.com"></input>
          <label>비밀번호</label>
          <input type="password"></input>
          <button type="button" className="user-setting-button">
            수정하기
          </button>
        </form>
      </div>
      {/* SideBar component */}
      <SideBar></SideBar>
    </div>
  )
}

export default UserSetting;
