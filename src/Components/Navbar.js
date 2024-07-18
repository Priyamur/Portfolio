import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span><NavLink exact to="/" className="navbar-link" activeClassName="active">PM</NavLink></span>
        </div>
        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <NavLink exact to="/home" className="navbar-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/education" className="navbar-link" activeClassName="active">Education</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/coursework" className="navbar-link" activeClassName="active">Course Work</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/skills" className="navbar-link" activeClassName="active">Skills</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/experience" className="navbar-link" activeClassName="active">Experience</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/resume" className="navbar-link" activeClassName="active">Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;