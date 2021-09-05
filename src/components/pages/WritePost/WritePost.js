import React from 'react';
import '../WritePost/WritePost.css';
import WriteImage from '../../../images/post-image.jpg';

function WritePost() {
  return (
    // Write Post
    <div className="write-post">
      <img className="write-image" src={WriteImage} alt="글쓰기 이미지"></img>
      {/* Write Form */}
      <form>
        {/* Image Title Input */}
        <div className="input-box">
          {/* Input File */}
          <label htmlFor="input-file">
            <i className="fas fa-plus-square"></i>
          </label>
          <input type="file" id="input-file"></input>
          {/* Title Input */}
          <input type="text" placeholder="제목을 입력하세요!" className="title-input" autoFocus={true}></input>
        </div>
        {/* Text Input */}
        <div className="input-box">
          <textarea typeof="text" placeholder="내용을 입력하세요!" className="content-input"></textarea>
        </div>
        {/* Write Button */}
        <button type="button" className="write-button">게시하기</button>
      </form>
    </div>
  )
}

export default WritePost;
