import React from 'react'
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa"
import { SiJavascript, SiRedux, SiNetlify } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVercel } from "react-icons/tb";
import {motion} from "framer-motion"


const iconvariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
    duration: duration,  
    ease: "linear",
    repeat: Infinity,
    repeattype: "reverse",
    },
  },
})

const Skills = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white border-b border-neutral-400 pb-24 pt-8'>
      <h1 className='my-20 text-center text-4xl'>Skills</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>

        <motion.div 
        variants={iconvariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaHtml5 className='text-orange-600 text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaCss3 className='text-sky-500 text-5xl'/> 
        </motion.div>

        <motion.div 
        variants={iconvariants(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiTailwindCssFill className='text-sky-500 text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiJavascript className='text-yellow-500 text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(6)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaReact className='text-sky-600 text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiRedux className='text-purple-600 text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(3.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <BsGithub className='text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <VscVscode className='text-blue-500 text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(4.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <TbBrandVercel className='text-5xl' />
        </motion.div>

        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiNetlify className='text-green-400 text-5xl' />
        </motion.div>

      </div>












    </div>
    
  )
}

export default Skills
