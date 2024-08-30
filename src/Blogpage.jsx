import React, { useState, useEffect } from 'react';
import './Blogpage.css';

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');



  // Retrieve posts from local storage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      content: newPostContent,
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Save to local storage
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Update local storage
  };

  return (
    <div className="blog-page">
      <h1>My Blog</h1>
      <div className="new-post">
        <input
          type="text"
          placeholder="Post Title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Content"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogpage;
