import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Experience from "./Components/Experience";
import Skills from './Components/Skills';
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Education from './Components/Education';
import About from './Components/About';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';


  
const App = () =>{
  useEffect(() => {
   Aos.init();
  }, [])
  
return (
    <>
      <Navbar />
      <div className="container">
        <Home/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </>
  );
};

export default App