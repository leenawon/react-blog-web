import React from 'react';
import '../BlogPost/BlogPosts.css';
import SinglePost from '../SinglePost/SinglePost';
import PostImage1 from '../../images/post-image.jpg';
import PostImage2 from '../../images/post-image2.jpg';
import PostImage3 from '../../images/post-image3.jpg';

function BlogPost() {
  return (
    // Blog Post
    <div className="blog-post">
      {/* Single Post component */}
      <SinglePost src={PostImage1} category="일상" title="나의 일상" date="1시간 전"></SinglePost>
      <SinglePost src={PostImage2} category="음악" title="플레이리스트" date="2시간 전"></SinglePost>
      <SinglePost src={PostImage3} category="기술" title="주목할 기술" date="30분 전"></SinglePost>
    </div>
  )
}

export default BlogPost;
