import React from 'react';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../Styles/Resume.css';
import Navbar from '../Components/Navbar';
import portfolioback from '../Images/portfolioback.avif';

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="resume-wrapper" style={{backgroundImage: `url(${portfolioback})`}}>
        <div className="resume-container">
          <header className="header">
            <h1 className="name">Priyadharshini Murugan</h1>
            <h2 className="title">Trainee Software Engineer</h2>
            <div className="contact-info">
              <span className="contact-item"><FaEnvelope /> priyastewartjan6@gmail.com</span>
              <span className="contact-item"><FaPhone /> 8778753737</span>
              <span className="contact-item"><FaMapMarkerAlt /> Paramakudi</span>
            </div>
          </header>

          <section className="section">
            <h3 className="section-title">Education</h3>
            <ul className="list">
              <li>Bachelor of Engineering, Prince Shri Venkateshwara Padmavathy Engineering College (2017-2021) - 7.9/10 CGPA</li>
              <li>Senior Secondary, Lions Matric Hr Sec School (2015-2017) - 75%</li>
              <li>Secondary, Lions Matric Hr Sec School (2014-2015) - 96%</li>
            </ul>
          </section>

          <section className="section">
            <h3 className="section-title">Experience</h3>
            <ul className="list">
              <li>Junior Software Engineer - Full stack Developer at Relevantz (5 July 2023 - Present)</li>
              <li>Internship at Barola Technologies (2021)</li>
            </ul>
          </section>

          <section className="section">
            <h3 className="section-title">Skills</h3>
            <ul className="list">
              <li>Programming Languages: C#, SQL, HTML, CSS, JavaScript, Java</li>
              <li>Frameworks & Technologies: ASP.NET Core, React.js, Redux, Entity Framework</li>
              <li>Database: MySQL</li>
              <li>Cloud: Azure</li>
              <li>Testing: NUnit, Jest, Selenium Automation testing</li>
              <li>Other: Sonarqube code quality</li>
            </ul>
          </section>

          <section className="section">
            <h3 className="section-title">Projects</h3>
            <ul className="list">
              <li>Learning Experience Platform (LXP) - Full stack Developer</li>
              <li>SPA Booking System - Full stack Developer</li>
            </ul>
          </section>

          <section className="section">
            <h3 className="section-title">Languages</h3>
            <ul className="list">
              <li>Tamil</li>
              <li>English</li>
              <li>Hindi</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;