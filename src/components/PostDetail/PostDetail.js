import React from 'react';
import '../PostDetail/PostDetail.css';
import PostImage1 from '../../images/post-image.jpg';

function PostDetail() {
  return (
    // Post Detail
    <div className="post-detail">
      {/* Post Detail Wrapper */}
      <div className="post-detail-wrapper">
        {/* Post Detail Image */}
        <img className="post-detail-image" src={PostImage1} alt="포스트 상세 이미지"></img>
        {/* Post Detail Title */}
        <h2 className="post-detail-title">
          나의 일상
          {/* Edit Delete Icons */}
          <div className="edit-delete-icons">
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-edit"></i>
          </div>
        </h2>
        {/* Post Detail Info */}
        <div className="post-detail-info">
          <span>글쓴이 : naoni</span>
          <span>1시간 전</span>
        </div>
        {/* Post Detail Text */}
        <p className="post-detail-text">
          Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
          Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
          Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
          Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
        </p>
      </div>
    </div>
  )
}

export default PostDetail;
