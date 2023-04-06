// ProjectGrid.js
import React from 'react';
import './ProjectGrid.css';

const projectsData = [

  { name: 'Wallot', link: 'https://wallot.herokuapp.com/' },
  { name: 'Take A Walk', link: 'https://samiyazaki.github.io/Take_A_Walk/' },
  { name: 'Weather Dashboard', link: 'https://samiyazaki.github.io/Whatever_the_Weather/' },
  { name: 'Counting App for tracking inventory', link: 'https://samiyazaki.github.io/Practice-counting-app/' },
  { name: '5 to 1 carbohydrate calculator', link: 'https://samiyazaki.github.io/5_to_1/' },
  { name: 'Code Quiz', link: 'https://samiyazaki.github.io/Secular_Catechism/' },

  
   
];

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projectsData.map((project, index) => (
        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-grid-item">
          {project.name}
        </a>
      ))}
    </div>
  );
}
