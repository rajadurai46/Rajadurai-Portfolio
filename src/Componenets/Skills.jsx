import React from 'react'
import {motion} from "framer-motion"



const Skill = ({name, x, y}) => {

        return (
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-white
            p-2 px-2 py-2 shadow-dark absolute cursor-pointer'
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y}}
            transition={{duration:1.5}}
            >
                {name}
            </motion.div>
        )
    }



const Skills = ({theme}) => {
  return (
    <div>
    <div className='bg-white dark:bg-black dark:text-white border-b border-neutral-900 pb-24' id='skills'>
        <motion.h1 
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}}
         viewport={{once:true}}
        
        className='pt-20 mb-12 text-center text-4xl'>Skills</motion.h1>

        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circular'>
          

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-white
            p-4 shadow-dark' whileHover = {{scale: 1.05}}>   
             WEB
            </motion.div>

          <Skill name='HTML' x='-21vw' y='3vw'/>
          <Skill name='CSS' x='-5vw' y='-10vw'/>
          <Skill name='JavaScript' x='20vw' y='6vw'/>
          <Skill name='ReactJS' x='2vw' y='14vw'/>
          <Skill name='Tailwind CSS' x='-20vw' y='-15vw'/>
          <Skill name='Redux' x='15vw' y='-12vw'/>
          <Skill name='GitHub' x='35vw' y='-5vw'/>
          <Skill name='VS Code' x='2vw' y='-21vw'/>
          <Skill name='Framer Motion' x='-27vw' y='12vw'/>


          
            


            

            
             

        </div> 

        </div>
        </div>
  )
}

export default Skills