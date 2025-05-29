import React from 'react';
import './Post.css';

function Post({ post, onLike }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-footer">
        <button 
          onClick={onLike} 
          className={`like-button ${post.isLiked ? 'liked' : ''}`}
        >
          {post.isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </div>
  );
}

export default Post; 