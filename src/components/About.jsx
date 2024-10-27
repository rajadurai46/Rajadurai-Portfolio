import React from 'react'
import Abt from '../assets/Hero.png'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='bg-slate-50 dark:bg-neutral-950 dark:text-white border-b border-neutral-900 pb-10
    max-w-screen-2xl' id='about'>
        <h1 className='pt-20 text-center text-4xl'>About 
            <span className='text-cyan-600'>{} ME</span></h1>
            <div className='flex flex-wrap'>
                
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                
                className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img className='h-60 lg:h-80 lg:-mt-7 lg:pb-8 w-auto mt-2 pb-4 rounded-[100px]' 
                    src={Abt} alt="abt" />
                </div>
                </motion.div>

                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.5}}
                
                
                className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start sm:mt-14'>
                    <p className= 'max-w-xl py-6'>
                    I am a dedicated and versatile Front-End Developer with a passion for creating efficient 
                    and user-friendly web applications. My journey in web development began with a deep curiosity 
                    for how things work, and it has evolved into a career where I continuously strive to learn and 
                    adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems 
                    to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new 
                    technologies, and contributing to open-source projects.
                    </p>
                </div>
                </motion.div>

            </div>

    </div>
  )
}

export default About