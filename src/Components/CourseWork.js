import React from 'react';
import { FaCode, FaCloud, FaDatabase, FaVial, FaReact, FaCheckCircle } from 'react-icons/fa';
import styles from '../Styles/Course.css';
import Navbar from '../Components/Navbar';
import portfolioback from '../Images/portfolioback.avif'; // Import your background image

const courses = [
  { name: 'Asp .Net C#', icon: <FaCode />, description: 'Web application framework for building dynamic websites, web applications and web services.' },
  { name: 'Azure cloud', icon: <FaCloud />, description: 'It is a private and public cloud platform that helps developers and IT professionals build deploy and manage applications. It uses the technology known as virtualization.' },
  { name: 'MySql', icon: <FaDatabase />, description: 'Open-source relational database management system.' },
  { name: 'Nunit and Jest testing', icon: <FaVial />, description: 'Unit testing frameworks for .NET and JavaScript respectively.' },
  { name: 'React Js', icon: <FaReact />, description: 'JavaScript library for building user interfaces.' },
  { name: 'Sonarqube code quality', icon: <FaCheckCircle />, description: 'Automatic code review tool to detect bugs, vulnerabilities and code smells.' },
];

const CourseWork = () => {
  return (
    <div className="courseWorkWrapper" style={{backgroundImage: `url(${portfolioback})`}}>
      <Navbar/>
      <div className="courseWorkContainer">
        <h2 className="title">My Course Work</h2>
        <div className="courseGrid">
          {courses.map((course, index) => (
            <div key={index} className="courseItem">
              <div className="iconWrapper">{course.icon}</div>
              <h3 className="courseName">{course.name}</h3>
              <p className="courseDescription">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseWork;