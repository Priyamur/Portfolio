import React from 'react';
import { FaCode, FaGraduationCap, FaBriefcase, FaUserCircle } from 'react-icons/fa';
import styles from '../Styles/Home.css';
import Navbar from '../Components/Navbar';
import portfolioback from '../Images/portfolioback.avif'; // Import your background image

const Home = () => {
  return (
    <div className="homeWrapper" style={{backgroundImage: `url(${portfolioback})`}}>
      <Navbar/>
      <div className="homeContainer">
        <header className="header">
            <br></br>
          <h1 className="title">Welcome to My Portfolio</h1>
          <h2 className="subtitle">Priyadharshini Murugan - Trainee Software Engineer</h2>
        </header>

        <section className="section aboutSection">
          <h3 className="sectionTitle">
            <span className="iconWrapper"><FaUserCircle /></span>
            About Me
          </h3>
          <div className="content">
            <p className="paragraph">
              Hello! I'm Priyadharshini Murugan, a passionate and dedicated Trainee Software Engineer with a strong foundation in full-stack development. I graduated with honors in Bachelor of Engineering and have been honing my skills in various programming languages and technologies.
            </p>
            <p className="paragraph">
              My journey in the world of software development has been exciting and full of learning experiences. I'm particularly interested in creating efficient, user-friendly applications that solve real-world problems. With a keen eye for detail and a commitment to writing clean, maintainable code, I strive to contribute meaningfully to every project I work on.
            </p>
            <p className="paragraph">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or engaging in continuous learning to stay updated with the latest trends in the tech industry.
            </p>
          </div>
        </section>

        <section className="section highlightsSection">
          <h3 className="sectionTitle">Highlights</h3>
          <div className="highlightGrid">
            <div className="highlightItem">
              <div className="highlightIcon"><FaCode /></div>
              <h4 className="highlightTitle">Technical Skills</h4>
              <p className="highlightText">Proficient in C#, SQL, React, and more</p>
            </div>
            <div className="highlightItem">
              <div className="highlightIcon"><FaGraduationCap /></div>
              <h4 className="highlightTitle">Education</h4>
              <p className="highlightText">B.E. with honors, 7.9/10 CGPA</p>
            </div>
            <div className="highlightItem">
              <div className="highlightIcon"><FaBriefcase /></div>
              <h4 className="highlightTitle">Experience</h4>
              <p className="highlightText">Junior Software Engineer at Relevantz</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;