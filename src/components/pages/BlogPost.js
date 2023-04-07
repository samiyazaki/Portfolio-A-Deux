import React from 'react';
import './BlogPost.css';

export default function BlogPost({ title, content }) {
  return (
    <div className="blog-post ">
      <h2 className="blog-post-title">{title}</h2>
      <div className="blog-post-content">{content}</div>
    </div>
  );
}
