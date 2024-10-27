import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import { FaRegCopyright } from "react-icons/fa6"
import {motion} from "framer-motion"


const Footer = () => {
  return (
    <div className='bg-slate-50 dark:bg-neutral-950 dark:text-white
     py-12 w-full mx-auto px-4 md:px-20' id='footer'>
       
        <div className='flex flex-col items-center justify-center'>
        <motion.div 
        whileInView={{opacity: 3, y: 0}}
        initial={{opacity: 4, y: -100}}
        transition={{duration: 1}} 
        
        className='flex space-x-4 gap-2'>
           <a href='https://www.facebook.com/irajadurai98'> <FaFacebook 
           className='text-blue-800 text-2xl sm:text-3xl hover:scale-150'/> </a>

           <a href='https://www.instagram.com/irajadurai98?igsh=MWw5dGZkbWw4cmI4bg=='>
            <FaInstagram 
            className='text-rose-600 text-2xl sm:text-3xl hover:scale-150'/> </a>

            <a href='https://wa.me/message/SSGUGBMX43J7M1'>
            <FaWhatsapp 
            className='text-green-600 text-2xl sm:text-3xl hover:scale-150'/> </a>

            <a href='https://www.linkedin.com/in/rajadurai-a-a894a71aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <FaLinkedin 
            className='text-blue-800 text-2xl sm:text-3xl hover:scale-150'/> </a>

            <a href='https://github.com/rajadurai46'>
            <FaGithub 
            className='text-2xl sm:text-3xl hover:scale-150'/> </a>
        </motion.div>
        </div>
       
       <div className='mt-8 border-t border-gray-700 pt-4 flex flex-col items-center'>

       <p className='flex gap-1'>
            <FaRegCopyright className='mt-1'/>
            <span className='text-cyan-600 font-bold gap-4'>{new Date().getFullYear()}</span> Copyrights | All Rights Reserved
        </p>
        <p className='text-base'>
            Created by <span className='font-semibold'>Rajadurai</span> {} 
            <span className='text-red-600 font-bold'>A</span>
        </p>

       </div>
        
       
       

    </div>
  )
}

export default Footer