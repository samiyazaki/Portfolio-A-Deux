import React from 'react';
import './Blog.css';
import BlogPost from './BlogPost';
import Resume from '../../assets/CV.pdf'

function InteractiveList({ items }) {
  return (
      <ul className="interactive-list">
          {items.map((item, index) => 
              <li key={index} className={`skill-${index}`}>{item}</li>
          )}
      </ul>
  );
}

export default function Blog() {
    const skills = [
        "Proficient in JavaScript (ES6+)",
        "Experience with React",
        "Experience with Node.js and Express",
        "Experience with MongoDB and Mongoose",
        "Strong understanding of RESTful APIs",
        "Knowledge of Git and version control",
        "Experience with HTML5 and CSS3",
        "Understanding of responsive web design and CSS frameworks like Bootstrap and Tailwind CSS",
        "Experience with Jest testing frameworks",
        "Experience with build tools like Webpack, Babel, and npm",
        "Understanding of web security and best practices",
        "Strong problem-solving skills and ability to work independently or in a team"
    ];

    const blogPosts = [
        {
            title: 'Skills',
            content: <InteractiveList items={skills} />,
        },
        {
            title: 'Resume',
            content: (
                <div className="resume-download-container">
                    <p>Click the button below to download my resume</p>
                    <a href={Resume} download className="resume-download-button">
                        Download Resume
                    </a>
                </div>
            ),
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
