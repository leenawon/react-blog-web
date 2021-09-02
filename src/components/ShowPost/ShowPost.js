import React from 'react';
import '../ShowPost/ShowPost.css';
import PostDetail from '../PostDetail/PostDetail';
import SideBar from '../SideBar/SideBar';

function ShowPost() {
  return (
    // Show Post
    <div className="show-post">
      {/* Post Detail Component */}
      <PostDetail></PostDetail>
      {/* Side Bar Component */}
      <SideBar></SideBar>
    </div>
  )
}

export default ShowPost;
