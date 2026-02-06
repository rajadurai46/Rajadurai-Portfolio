import React, { useEffect } from 'react'
import About from '../../frontend/src/components/About'
import Contact from "../../frontend/src/components/Contact";
import Experience from "../../frontend/src/components/Experience";
import Education from '../../frontend/src/components/Education';
import Footer from "../../frontend/src/components/Footer";
import Hero from "../../frontend/src/components/Hero";
import Navbar from "../../frontend/src/components/Navbar";
import Project from "../../frontend/src/components/Project";
import Certification from "../../frontend/src/components/Certification";
import Skills from "../../frontend/src/components/Skills";

function App() {

const [theme, settheme] = React.useState(localStorage.getItem("theme") ?
localStorage.getItem("theme") : "dark");

const element = document.documentElement;
useEffect(() => {
  if(theme === "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  else{
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [theme])


  return (
    <div>
      <Navbar theme={theme} settheme={settheme}/>
      <Hero theme={theme}/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Certification />
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App