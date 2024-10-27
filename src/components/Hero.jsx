import React from "react";
import Pro1 from "../assets/dp-1.jpg";
import Pro2 from '../assets/dp-2.jpg'
import pro from '../assets/web-dev.png' 
import pro1 from '../assets/web-dev-dark.png'
import {ReactTyped} from 'react-typed'
import { LiaFileDownloadSolid } from "react-icons/lia"
import { Link } from 'react-scroll'
import { motion } from "framer-motion";
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

    <div className="bg-white dark:bg-black dark:text-white border-b border-neutral-900 pb-24 mx-auto relative w-full">
      
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 1, x: -100}}
        transition={{duration: 0.5}}

        className="grid sm:grid-cols-2 place-items-center pt-14">
        <img src={theme === "dark" ? Pro2 : Pro1} className="w-[200px] md:w-[250px] rounded-full"/>
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

            <motion.div
             whileInView={{opacity: 1, x: 0}}
             initial={{opacity: 0, x: 100}}
             transition={{duration: 0.5}}
            > 
            
                <div className='flex flex-col pb-2 items-center sm:items-start'>
                <motion.h1 
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                className='text-5xl lg:text-6xl font-serif'>Rajadurai 
                    {} <span className="text-red-600">A</span> </motion.h1> 
                    
                    <div className="flex items-start mt-4">  
                <h1 className='text-3xl'>I am a </h1>
                <ReactTyped className='text-cyan-600 font-bold text-3xl ml-2'
                strings = {["Developer", "Designer", "Programmer", "Coder"]}
                typeSpeed = {40}
                backSpeed = {50}
                smartBackspace = {true}
                loop = {true}
                />
                </div>

                
                
                <div className="mt-4">
                <motion.span 
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                
                className='bg-gradient-to-r from-red-700 via-slate-500 to-purple-500
                bg-clip-text text-4xl text-transparent pt-4 py-4'>
                    Turning Vision Into Reality With Code And Design
                    </motion.span>
                    </div>
                     
                     
                     <div className="flex-row ">
                    <p className="pt-4 pb-5">
                        I am a passionate Front-End Developer with a knack for crafting robust and scalable web 
                        applications. I have honed my skills in front-end technologies like HTML, CSS, Javascript, 
                        React and Redux. My goal is to leverage my expertise to create innovative solutions that drive 
                        business growth and deliver exceptional user experiences.</p>
                        </div>
                        
                         
                         
                        <button className="items-center px-6 flex py-4 bg-black text-white 
                       dark:bg-white dark:text-black rounded-full sm:w-[177px] sm:h-[1px] w-[177px] h-[1px] gap-3
                       hover:bg-gradient-to-r from-orange-500 via-white to-green-500 hover:text-black">
                           <a href={Resume} download={Resume} className="text-center font-medium">Download CV</a>
                           <LiaFileDownloadSolid size={18}/>
                        </button>
                       

                        </div>
                        </motion.div>
                       
                    </motion.div> 
                    </div>
       
  )
}

export default Hero