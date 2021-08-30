import React from 'react';
import '../pages/HomePage.css';
import HeroImage from '../HeroImage/HeroImage';
import BlogPost from '../BlogPost/BlogPosts';
import SideBar from '../SideBar/SideBar';

function HomePage() {
  return (
    <>
      {/* Hero Image component */}
      <HeroImage></HeroImage>
      {/* Home Page */}
      <div className="home-page">
        {/* Blog Post component */}
        <BlogPost></BlogPost>
        {/* Side Bar component */}
        <SideBar></SideBar>
      </div>
    </>
  )
}

export default HomePage;
