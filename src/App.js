import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/Components/Landing';
import Navbar from '../src/Components/Navbar';
import Home from '../src/Components/Home';
import Education from '../src/Components/Education';
import CourseWork from '../src/Components/CourseWork';
import Skills from '../src/Components/Skills';
import Experience from '../src/Components/Experience';
import Resume from '../src/Components/Resume';



export default function App() {
  return (

    <div className='App'>
      <Routes>

        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/coursework" element={<CourseWork/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/resume" element={<Resume/>} />

      </Routes>

    </div>



  );
}



