import React from 'react'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import  {BiHomeAlt, BiUser} from "react-icons/bi"
import {BsClipboardData, BsBriefcase, BsChatSquare} from "react-icons/bs"
import {GiSkills} from "react-icons/gi"
import {FaDiagramProject} from "react-icons/fa6"
import { TiArrowDownThick } from "react-icons/ti"
import logo1 from '../assets/lo-1.jpg'
import logo2 from '../assets/lo-2.jpg'
import {Link} from "react-scroll"

const Navbar = ({theme, settheme}) => {
 

  return (
    <nav className='bg-white dark:bg-black dark:text-white flex items-center 
    justify-between py-4 border-b border-neutral-900'>

<div className="flex justify-center items-center">
          <img src={theme === "dark" ? logo2 : logo1} width={65} height={65} className='lg:w-[75px] lg:h-[75px]' />
          </div>
<div className='mb-8 items-center justify-center'>
<h1 className='text-xl lg:text-4xl font-bold'>Time to Program</h1>
</div>
        
        <div className='mb-10 mr-2 sm:mr-7'>
          <label className='font-semibold text-md lg:text-xl transition-colors'>
           {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
          
        </div>

        <div className='fixed bottom-1 lg:bottom-1 w-full overflow-hidden z-50'>
          <div className='container mx-auto'>
            <div className='w-full bg-black dark:bg-white h-[60px] backdrop-blur-2xl rounded-full items-center
            max-w-[450px] max-h-[32px] mx-auto px-2 flex justify-between text-2xl text-white dark:text-black
            lg:max-w-[500px] lg:max-h-[40px] lg:gap-5 gap-3' >

        <Link to='home'
        smooth={true}
        spy={true}
        offset={-200}
         
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiHomeAlt/>
        </Link>

        <Link to='about'
        smooth={true}
        spy={true}
        offset={-200}
        
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsClipboardData/>
        </Link>

        <Link to='skills' 
        smooth={true}
        spy={true}
        offset={-200}
        
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <GiSkills/>
        </Link>

        <Link to='experience'
        smooth={true}
        spy={true}
        offset={-200}
        
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsBriefcase/>
        </Link>


        {theme === "dark" ? (<MdSunny  onClick={() => settheme("light")} className='
          text-3xl lg:text-3xl ml-0 lg:ml-1 cursor-pointer' />): (<FaMoon onClick={() => settheme("dark")}
          className='text-2xl sm:text-2xl ml-0 sm:ml-1 cursor-pointer'/>)}

        

        <Link to='education' 
        smooth={true}
        spy={true}
        offset={-200}
        
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsChatSquare/>
        </Link>

        <Link to='project' 
        smooth={true}
        spy={true}
        offset={-200}
        
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <FaDiagramProject/>
        </Link>

        <Link to='contact'
        smooth={true}
        spy={true}
        offset={-200}  
        
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiUser/>
        </Link>

        <Link to='footer' 
        smooth={true}
        spy={true}
        offset={-200}
        
        className='cursor-pointer w-[40px] h-[60px] flex items-center justify-center'>
        <TiArrowDownThick/>
        </Link>

        </div>
        </div>
        </div>

    </nav>
  )
}

export default Navbar