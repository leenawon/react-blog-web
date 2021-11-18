import React from 'react';
import { Link } from 'react-router-dom';
import '../SinglePost/SinglePost.css';

function SinglePost(props) {
  return (
    // Single Post
    <div className="single-post">
      {/* Post Image */}
      <img className="post-image" src={props.src} alt="포스트 이미지"></img>
      {/* Post Info */}
      <div className="post-info">
        {/* Post Category */}
        <div className="post-category">
          <span>[ {props.category} ]</span>
        </div>
        {/* Post Title */}
        <Link to="/show-post">
          <h4 className="post-title">{props.title}</h4>
        </Link>
        <hr/>
        {/* Post Date */}
        <span className="post-date">{props.date}</span>
      </div>
      {/* Post Text */}
      <p className="post-text">
        Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
      </p>
    </div>
  )
}

export default SinglePost;
