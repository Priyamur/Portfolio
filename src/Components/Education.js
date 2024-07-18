import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import styles from '../Styles/Education.css';
import Navbar from '../Components/Navbar';
import portfolioback from '../Images/portfolioback.avif'; // Import your background image

const Education = () => {
  return (
    <div className="educationWrapper" style={{backgroundImage: `url(${portfolioback})`}}>
      <Navbar/>
      <div className="educationContainer">
        <h2 className="title">My Education Journey</h2>
        
        <div className="educationTimeline">
          <div className="educationItem">
            <h3 className="school">
              <FaGraduationCap className="icon" />
              Prince Shri Venkateshwara Padmavathy Engineering College
            </h3>
            <p className="degree">Bachelor of Engineering</p>
            <p className="year">2017 - 2021</p>
            <p className="score">CGPA: 7.5/10 (Graduated with honors)</p>
          </div>
          <div className="educationItem">
            <h3 className="school">
              <FaSchool className="icon" />
              Lions Matric Hr Sec School
            </h3>
            <p className="degree">Senior Secondary</p>
            <p className="year">2015 - 2017</p>
            <p className="score">Score: 75%</p>
          </div>
          <div className="educationItem">
            <h3 className="school">
              <FaSchool className="icon" />
              Lions Matric Hr Sec School
            </h3>
            <p className="degree">Secondary</p>
            <p className="year">2014 - 2015</p>
            <p className="score">Score: 96%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;