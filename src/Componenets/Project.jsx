import React from 'react'
import {motion} from "framer-motion"
import { BsGithub } from 'react-icons/bs'
import project1 from '../assets/pr-1.jpg'
import project2 from '../assets/pr-2.jpg'
import project3 from '../assets/pr-3.jpg'
import project4 from '../assets/pr-4.jpg'



const Projects = ({type, title, summary, img, link, gitHub}) => {
    return(
        <div className='w-1/2 flex flex-col items-center justify-between rounded-3xl border border-solid
        border-dark text-black bg-gradient-to-b from-zinc-200 via-neutral-300 to-gray-600 shadow-2xl p-2
        hover:scale-110'>

         <div className='w-full overflow-hidden rounded-3xl'> 
         <img src={img} alt={title} className='w-full h-auto'/>
         </div>

         <div className='w-full flex flex-col items-start justify-between pl-6 mt-2'>
            <div className='hover:underline underline-offset-2'> 
            <h2 className='text-xl text-red-600 my-2 w-full font-bold'>{title}</h2>
         </div>
         <span className='font-bold'>{type}</span>
         <p className='font-medium'>{summary}</p>

         <div className='flex gap-7 items-center mt-2 justify-between'>
         <a href={gitHub} className='w-[150px] sm:w-[180px]'> 
         <BsGithub size={22}/>
         </a>

         <a href={link} className='ml-4 rounded-xl bg-black text-white p-1 px-1 py-1 text-xs font-semibold 
        mb-1 hover:bg-gradient-to-r from-orange-600
         via-white to-green-600 hover:text-black'> 
         Visit Project
         </a>
         </div>

         </div>

            </div>
    )
}

const Project = () => {
  return (
    <div className='bg-slate-50 dark:bg-neutral-950 dark:text-white border-b border-neutral-900
    pt-14 pb-24' id='project'>
        <h2 className='font-semibold text-4xl mb-32 w-full text-center'>
                Projects
            </h2>
    <div className='grid grid-cols-10 sm:grid-cols-12 gap-32 sm:gap-20 ml-20 sm:-mr-48'>
       


        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 1, y: -200}}
        transition={{duration: 1}}   
        className='col-span-6'>
               
              <Projects
       title= "Car Rental"
       img= {project1}
       summary=
         "A fully functional car rental website with features like car listing, booking, and price."
       type= "React.js | Tailwind CSS"
       link= "https://templecity-car-rent-website.netlify.app/"
       gitHub= "https://github.com/rajadurai46/Car-Rental-Website"
       />
        </motion.div>

        <motion.div 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 1, y: -200}}
                transition={{duration: 1}}
                className='col-span-6'>
              <Projects
              title= "Food Delivery"
              img= {project2}
              summary=
                "A website for ordering foods and delivery, with features such as food-menu, cart, and user-authentication."
              type= "React.js | CSS | Tailwind CSS"
              link= "https://templecity-car-rent-website.netlify.app/"
              gitHub= "https://github.com/rajadurai46/Car-Rental-Website"
              />
        </motion.div>

        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 1, y: -200}}
        transition={{duration: 1}}
        className='col-span-6'>
        <Projects
              title= "Virtual Reality"
              img= {project3}
              summary=
                "A website for developers who virtuals turns into reality by VR technology."
              type= "React.js | Tailwind CSS"
              link= "https://virtual-reality-dev.netlify.app/"
              gitHub= "https://github.com/rajadurai46/Car-Rental-Website"
              /> 
        </motion.div>

        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 1, y: -200}}
        transition={{duration: 1}}  
        className='col-span-6'>
        <Projects
              title= "Brainwave"
              img= {project4}
              summary=
                "A website for AI users, with interface of ai robots and tech."
              type= "React.js | Tailwind CSS"
              link= "https://brain-ai.netlify.app"
              gitHub= "https://github.com/rajadurai46/Car-Rental-Website"
              /> 
        </motion.div>

    </div>
 









      </div>
  )
}

export default Project