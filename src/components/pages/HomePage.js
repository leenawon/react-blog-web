import React from 'react';
import '../pages/HomePage.css';
import HeroImage from '../HeroImage/HeroImage';
import BlogPost from '../BlogPost/BlogPosts';

function HomePage() {
  return (
    <>
      {/* Hero Image component */}
      <HeroImage></HeroImage>
      {/* Home Page */}
      <div className="home-page">
        {/* Blog Post component */}
        <BlogPost></BlogPost>
      </div>
    </>
  )
}

export default HomePage;
