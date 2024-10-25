import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Componenets/Navbar'
import Hero from './Componenets/Hero'
import About from './Componenets/About'
import Skills from './Componenets/Skills'
import Education from './Componenets/Education'
import Experience from './Componenets/Experience'
import Project from './Componenets/Project'
import Contact from './Componenets/Contact'
import Footer from './Componenets/Footer'


function App () {

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
    <div className='m'>
      <Navbar theme={theme} settheme={settheme} />
      <Hero theme={theme}/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
      
    
  )
}

export default App
