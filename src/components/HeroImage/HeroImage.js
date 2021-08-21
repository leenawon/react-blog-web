import React from 'react';
import heroImage from '../../images/hero-image.jpg';
import '../HeroImage/HeroImage.css';

function HeroImage() {
  return (
    // Hero Wrapper
    <div className="hero-wrapper">
      {/* Hero Title */}
      <div className="hero-title">
        <span>하루를 기록하는 곳</span>
        <span>나만의 블로그</span>
      </div>
      {/* Hero Image */}
      <img className="hero-image" src={heroImage} alt="배경이미지"></img>
    </div>
  )
}

export default HeroImage;
