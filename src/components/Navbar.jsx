import React from 'react'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import logo1 from '../assets/lo-1.jpg'
import logo2 from '../assets/lo-2.jpg'


const Navbar = ({theme, settheme}) => {
 

    return (

      
      <nav className='bg-white dark:bg-black dark:text-white flex items-center 
      justify-between border-b border-neutral-900 mt-0 w-full'>
  
  <div className="flex justify-center items-center">
            <img src={theme === "dark" ? logo2 : logo1} width={65} height={65} className='lg:w-[75px] lg:h-[75px]' />
            </div>
  <div className='mb-8 items-center justify-center'>
  <h1 className='text-xl lg:text-4xl font-bold'>Time to Program</h1>
  </div>
          
          <div className='mb-10'>
            <label className='font-semibold text-md lg:text-xl transition-colors'>
             {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
            {theme === "dark" ? (<MdSunny  onClick={() => settheme("light")} className='
            text-3xl lg:text-2xl ml-6 lg:ml-10 cursor-pointer' />): (<FaMoon onClick={() => settheme("dark")}
            className='text-2xl lg:text-2xl ml-7 lg:ml-10 cursor-pointer'/>)}
            
          </div>     
          
  
          </nav>
      
    )
  }

export default Navbar