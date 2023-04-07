// ProjectGrid.js
import React from 'react';
import './ProjectGrid.css';
import Wallot from '../../assets/Wallot logo.png';
import Walk from '../../assets/Take a Walk.gif';
import Weather from '../../assets/Weather.gif';
import Psycho from '../../assets/numbers-psychostick.gif';
import Matilda from '../../assets/matilda-chocolate.gif';
import Quiz from '../../assets/Secular Catechism.gif'
const projectsData = [

  { name: 'Wallot', link: 'https://wallot.herokuapp.com/', image: Wallot, },
  { name: 'Take A Walk', link: 'https://samiyazaki.github.io/Take_A_Walk/', image: Walk, },
  { name: 'Weather Dashboard', link: 'https://samiyazaki.github.io/Whatever_the_Weather/', image: Weather, },
  { name: 'Counting App for tracking inventory', link: 'https://samiyazaki.github.io/Practice-counting-app/', image: Psycho, },
  { name: '5 to 1 carbohydrate calculator', link: 'https://samiyazaki.github.io/5_to_1/', image: Matilda, },
  { name: 'Code Quiz', link: 'https://samiyazaki.github.io/Secular_Catechism/', image: Quiz, },

  // On hover image switch from static to gif, event handler
   
];

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projectsData.map((project, index) => (
        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-grid-item">
          <img
          src={project.image}
          alt={project.name}
          className="project-image"
          />
        </a>
      ))}
    </div>
  );
}
