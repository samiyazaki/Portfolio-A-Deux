import React from 'react';
import './About.css';
import ProjectGrid from './ProjectGrid';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Projects</h1>
      <p className="about-text">
        
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <ProjectGrid />
    </div>
  );
}
