import React from 'react';
import './Blog.css';
import BlogPost from './BlogPost';
import Resume from '../../assets/CV.pdf'

export default function Blog() {
 
  const blogPosts = [
    {
      title: 'Skills',
      content: ( <ul>
        <li>Proficient in JavaScript (ES6+)</li>
        <li>Experience with React</li>
        <li>Experience with Node.js and Express</li>
        <li>Experience with MongoDB and Mongoose</li>
        <li>Strong understanding of RESTful APIs</li>
        <li>Knowledge of Git and version control</li>
        <li>Experience with HTML5 and CSS3</li>
        <li>Understanding of responsive web design and CSS frameworks like Bootstrap and Tailwind CSS</li>
        <li>Experience with Jest testing frameworks</li>
        <li>Experience with build tools like Webpack, Babel, and npm</li>
        <li>Understanding of web security and best practices</li>
        <li>Strong problem-solving skills and ability to work independently or in a team</li>
      </ul>),
    },
    {
      title: 'Click the link below to download my resume',
      content: <a href={Resume} download>
      Download Resume
    </a>,
    },
  ];

  return (
    <div className="blog-container  mt-5">
      <h1 className="blog-title">Curriculum Vitae</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
