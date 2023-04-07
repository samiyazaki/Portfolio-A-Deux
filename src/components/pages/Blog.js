import React from 'react';
import './Blog.css';
import BlogPost from './BlogPost';

export default function Blog() {
 
  const blogPosts = [
    {
      title: 'Skills',
      content: ``,
    },
    {
      title: 'Click the link below to download my resume',
      content: <a href={`${process.env.PUBLIC_URL}../../assets/Seiya Resume 2023.PDF`} download>
      Download Resume
    </a>,
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Curriculum Vitae</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
