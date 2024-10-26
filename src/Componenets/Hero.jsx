import React from 'react'
import {HERO_CONTENT} from '../Constant/index'
import Pro1 from '../assets/dp-1.jpg'
import Pro2 from '../assets/dp-2.jpg'
import {ReactTyped} from 'react-typed'
import { Link } from 'react-scroll'
import {motion} from "framer-motion"
import { LiaFileDownloadSolid } from "react-icons/lia"
import pro from '../assets/web-dev.png' 
import pro1 from '../assets/web-dev-dark.png'
import Resume from '../assets/Rajadurai A - Resume.pdf'


const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Hero = ({theme}) => {
  return (
    <div className='bg-white dark:bg-black dark:text-white border-b border-neutral-900 pb-24 pt-14
     max-w-screen-2xl container' id='home'>
        <div className='flex flex-wrap tracking-wide my-10'>

          <motion.div 
           whileInView={{opacity: 1, x: 0}}
           initial={{opacity: 0, x: -100}}
           transition={{duration: 0.5}}

          className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center mx-2 my-4'>
                <img className='h-60 w-48 lg:h-96 lg:w-auto mt-2 mr-7 rounded-[100px]' 
                src={theme === "dark" ? Pro2 : Pro1} alt="profile" />
            </div>

            <div className='pt-10 absolute left-4  items-center justify-center overflow-hidden'>
                  <img src={theme === "dark" ? pro1 : pro} 
                  className='sm:w-[95px] rounded-full fill-black sm:ml-8 animate-spin-slow
                  w-[60px]' alt="" />
                  <Link to='contact'> <button className='flex items-center justify-center
                  absolute sm:right-[12px] sm:top-[38%] bg-dark text-white border border-solid border-dark
                  sm:w-[72px] sm:h-[72px] rounded-full sm:font-semibold dark:bg-white dark:border-white dark:text-black
                  w-[46px] h-[46px] right-[7px] top-[47%] text-[8px] font-semibold sm:text-sm'> 
                  Hire ME 
                  </button> 
                  </Link> 
                </div>
                </motion.div>

        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}

            className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                
                className='pb-4  pt-10 text-5xl font-serif tracking-tight lg:mt-16 lg:text-6xl'>Rajadurai 
                {} <span className='text-red-600'>A</span>
                </motion.h1>

                <div className='flex items-center pb-8'>
                <h1 className='text-3xl'>I am a </h1>
                <ReactTyped className='text-cyan-600 font-bold text-3xl ml-2'
                strings = {["Developer", "Designer", "Programmer", "Coder"]}
                typeSpeed = {40}
                backSpeed = {50}
                smartBackspace = {true}
                loop = {true}
                />
                </div>



                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                
                className='bg-gradient-to-r from-red-700 via-slate-500 to-purple-500
                bg-clip-text text-4xl text-transparent'>Turning Vision Into Reality With Code And Design</motion.span>
                
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                
                
                className='my-2  py-4'>{HERO_CONTENT}</motion.p>

                <div>
                  
              <button 
              className='flex items-center px-7 py-3 gap-2 bg-black text-white rounded-full sm:w-[190px]
                sm:h-[30px] w-[185px] h-[30px] font-semibold justify-center dark:bg-white dark:text-black
                hover:bg-gradient-to-r from-orange-500
         via-white to-green-500 hover:text-black'>
                <a href={Resume} download='Resume'>Download CV</a>
                <LiaFileDownloadSolid size={18}/>
              </button> 
            </div>

            

            </div> 
            </motion.div>
            
            

        </div>

    </div>
  )
}

export default Hero