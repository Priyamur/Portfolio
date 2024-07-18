import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Landing.css';
import priya from '../Images/priya.jpg';
import portfolioback from '../Images/portfolioback.avif'; // Import your background image

const Landing = () => {
  const name = "Priyadharshini Murugan";
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="landingContainer" style={{backgroundImage: `url(${portfolioback})`}}>
      <div className="overlay"></div>
      <div className="bubbles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble" style={{
            '--size': `${2 + Math.random() * 4}rem`,
            '--distance': `${6 + Math.random() * 4}rem`,
            '--position': `${-5 + Math.random() * 110}%`,
            '--time': `${2 + Math.random() * 2}s`,
            '--delay': `${-1 * (2 + Math.random() * 2)}s`,
          }}></div>
        ))}
      </div>
      <div className="contentWrapper">
        <div className="leftContent">
          <img src={priya} alt="Priyadharshini Murugan" className="avatar" />
        </div>
        <div className="rightContent">
          <h1 className="name" style={{marginright:"550px"}}>
            Hi! I am{' '}
            {name.split('').map((letter, index) => (
              <span key={index} className={`jumpingLetter ${animated ? 'animate' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                {letter}
              </span>
            ))}
          </h1>
        
          <Link to="/home" className="button" style={{color:"white"}}>Know More About Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;