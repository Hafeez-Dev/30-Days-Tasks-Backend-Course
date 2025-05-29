import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post",
      isLiked: false
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post",
      isLiked: false
    },
    {
      id: 3,
      title: "Third Post",
      content: "This is the content of the third post",
      isLiked: false
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked }
        : post
    ));
  };

  return (
    <div className="card">
      <h1>My Posts</h1>
      <div className="posts-container">
        {posts.map(post => (
          <Post 
            key={post.id}
            post={post}
            onLike={() => handleLike(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App; 