import React, { useEffect } from 'react'
import About from './components/About'
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from './components/Education';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

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
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App