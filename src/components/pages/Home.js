import React from 'react';
import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import portfolioPhoto from '../../assets/portfolio photo.jpg';


export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <img src={portfolioPhoto} alt="A surprisingly handsome Seiya Miyazaki" className="home-photo" />
    
      <p className="home-text">
      Hello there! My name is Seiya Miyazaki, and I'm a passionate world traveler, lifelong learner, and seasoned professional with a diverse background in education, executive leadership, and now, software development. My insatiable curiosity and love for adventure have taken me across the globe, where I've had the opportunity to experience a kaleidoscope of cultures, breathtaking landscapes, and unforgettable moments.

Throughout my thrilling journey, I've dedicated years to teaching and empowering students, followed by a fulfilling career as an executive, honing my leadership and strategic thinking skills. While these experiences have been incredibly rewarding, my unyielding spirit of exploration has now led me to venture into the exhilarating world of software development.

As a software developer, I'm fueled by the ever-evolving nature of technology and the endless possibilities it offers. My life philosophy has always been to never stop learning, and this industry allows me to do just that. I embrace every challenge as an opportunity to grow and constantly push the boundaries of my skills and knowledge.

In my free time, you'll often find me planning my next globetrotting adventure, trying out new cuisines, or diving into a captivating book. I firmly believe that life is too short to not take risks, and I'm always eager to embark on new experiences that broaden my horizons and enrich my understanding of the world around me.

Join me as I navigate this thrilling new chapter of my journey, where I merge my diverse experiences, insatiable curiosity, and love for adventure to create innovative software solutions that make a difference in the world. The future is boundless, and I can't wait to see where it takes me next!
      </p>
    </div>
  );
}
