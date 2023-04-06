import React from 'react';
import './About.css';
import ProjectGrid from './ProjectGrid';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Projects</h1>
      <p className="about-text">
        
       Here is a list of projects that I've built throughout my time in the Columbia University Fullstack bootcamp. Please click through the links and review some of the projects that I've developed. Contact me and let me know if you have any questions or would like more information about them!
      </p>
      <ProjectGrid />
    </div>
  );
}
