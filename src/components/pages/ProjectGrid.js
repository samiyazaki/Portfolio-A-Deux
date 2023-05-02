// ProjectGrid.js
import React from "react";
import "./ProjectGrid.css";
import Wallot from "../../assets/Wallot logo.png";
import MedHub from "../../assets/MEdHub.png";
import Weather from "../../assets/Weather.gif";
import Psycho from "../../assets/numbers-psychostick.gif";
import Matilda from "../../assets/matilda-chocolate.gif";
import Quiz from "../../assets/Secular Catechism.gif";
const projectsData = [
  {
    name: "Wallot",
    link: "https://wallot.herokuapp.com/",
    secondaryText: "Here's the link to the deployed repo",
    secondaryLink: "https://github.com/samiyazaki/WalLot",
    image: Wallot,
  },

  {
    name: "MedHub",
    link: "https://med-hub.herokuapp.com/",
    secondaryText: "Here's the link to the deployed repo",
    secondaryLink: "https://github.com/mkaye97/med_supplies",
    image: MedHub,
  },

  {
    name: "Weather Dashboard",
    link: "https://samiyazaki.github.io/Whatever_the_Weather/",
    secondaryText: "Here's the link to the deployed repo",
    secondaryLink: "https://github.com/samiyazaki/Whatever_the_Weather",
    image: Weather,
  },

  {
    name: "Counting App for tracking inventory",
    link: "https://samiyazaki.github.io/Practice-counting-app/",
    secondaryText: "Here's the link to the deployed repo",
    secondaryLink: "https://github.com/samiyazaki/WalLot",
    image: Psycho,
  },

  {
    name: "5 to 1 carbohydrate calculator",
    link: "https://samiyazaki.github.io/5_to_1/",
    secondaryText: "Here's the link to the deployed repo",
    secondaryLink: "https://github.com/samiyazaki/5_to_1",
    image: Matilda,
  },

  {
    name: "Code Quiz",
    link: "https://samiyazaki.github.io/Secular_Catechism/",
    secondaryText: "Here's the link to the deployed repo",
    secondaryLink: "https://github.com/samiyazaki/Secular_Catechism",
    image: Quiz,
  },

  // On hover image switch from static to gif, event handler?
];

export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projectsData.map((project, index) => (
        <div key={index} className="project-grid-item">
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-grid-item"
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
          </a>
          <div className="project-text">
            <h3>{project.name}</h3>
            <a
              href={project.secondaryLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.secondaryText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
