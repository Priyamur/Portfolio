import React from 'react';
import { FaCode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from 'react-icons/fa';
import { SiCsharp, SiMysql } from 'react-icons/si';
import '../Styles/Skills.css';
import Navbar from '../Components/Navbar';
import portfolioback from '../Images/portfolioback.avif';

const skills = [
  { name: 'C#', icon: <SiCsharp />, level: 90 },
  { name: 'SQL', icon: <FaDatabase />, level: 85 },
  { name: 'HTML', icon: <FaHtml5 />, level: 95 },
  { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'Java', icon: <FaJava />, level: 80 },
  { name: 'React', icon: <FaReact />, level: 85 },
  { name: 'MySQL', icon: <SiMysql />, level: 85 },
];

const Skills = () => {
  return (
    <div className="skills-wrapper" style={{backgroundImage: `url(${portfolioback})`}}>
      <Navbar/>
      <div className="skills-container">
        <h2 className="skills-title">My Technical Arsenal</h2>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="icon-wrapper">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;