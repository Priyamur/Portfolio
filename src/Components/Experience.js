import React from 'react';
import { FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import styles from '../Styles/Experience.css';
import Navbar from '../Components/Navbar';
import portfolioback from '../Images/portfolioback.avif'; // Import your background image

const Experience = () => {
  return (
    <div className="experienceWrapper" style={{backgroundImage: `url(${portfolioback})`}}>
      <Navbar/>
      <div className="experienceContainer">
        <h2 className="title">Experience & Projects</h2>
        
        <section className="section">
          <h3 className="sectionTitle">
            <FaBriefcase className="icon" />
            Work Experience
          </h3>
          
          <div className="experienceItem">
            <h4 className="company">Relevantz</h4>
            <p className="role">Junior Software Engineer - Full stack Developer</p>
            <p className="duration">5 July 2023 - Present</p>
            <p className="description">
              Working as a full stack developer at Relevantz, a product and service based company
              specializing in custom software engineering with 25+ years of experience. Delivering
              industry-relevant solutions for enterprises and ISVs.
            </p>
          </div>
          
          <div className="experienceItem">
            <h4 className="company">Barola Technologies</h4>
            <p className="role">Internship</p>
            <p className="duration">2021</p>
            <p className="description">
              Soldered Arduino with sensors and analyzed their functions.
            </p>
          </div>
        </section>
        
        <section className="section">
          <h3 className="sectionTitle">
            <FaProjectDiagram className="icon" />
            Projects
          </h3>
          
          <div className="experienceItem">
            <h4 className="projectTitle">Learning Experience Platform (LXP)</h4>
            <p className="role">Full stack Developer</p>
            <p className="duration">- 2024</p>
            <p className="description">
              Developed a Learning Experience Platform that delivers personalized,
              engaging learning experiences. It supports diverse learning styles and uses
              analytics to optimize outcomes for corporate training, professional development,
              and education.
            </p>
            <p className="techStack">
              Backend: C# Asp .Net core Layered Architecture<br />
              Frontend: React js, Redux Architecture<br />
              Database: MySql Entity Framework
            </p>
          </div>
          
          <div className="experienceItem">
            <h4 className="projectTitle">SPA Booking System</h4>
            <p className="role">Full stack Developer</p>
            <p className="duration">- 2024</p>
            <p className="description">
              Developed a Spa Booking System designed to streamline appointment scheduling
              and management for spa businesses. The system allows clients to book services
              online while providing spa administrators with tools to manage bookings.
            </p>
            <p className="techStack">
              Backend: C# Asp .Net core Layered Architecture<br />
              Frontend: React js, Redux Architecture<br />
              Database: MySql Entity Framework
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;