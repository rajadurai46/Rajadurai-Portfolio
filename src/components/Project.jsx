import React from 'react';
import project1 from "../assets/pr-1.jpg"
import project2 from "../assets/pr-2.jpg"
import project3 from "../assets/pr-3.jpg"
import project4 from "../assets/pr-4.jpg"
import { AiOutlineGithub } from 'react-icons/ai'
import {motion} from "framer-motion"


const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "A fully functional car rental website with features like car listing, booking, and price.",
      type: "React.js | Tailwind CSS",
      links: {
        site: "https://templecity-car-rent-website.netlify.app/",
        github: "https://github.com/rajadurai46/Car-Rental-Website",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "A website for ordering foods and delivery, with features such as food-menu, cart, and user-authentication.",
      type: "React.js | CSS | Tailwind CSS",
      links: {
        site: "https://tomato-fooddel.netlify.app",
        github: "https://github.com/rajadurai46/Food-Delivery",
      },
    },
    {
      img: project3,
      title: "Project #3",
      description: "A website for developers who virtuals turns into reality by VR technology.",
       type: "React.js | Tailwind CSS",
      links: {
        site:   "https://virtual-reality-dev.netlify.app",
        github: "https://github.com/rajadurai46/virtual-reality",
      },
    },
    {
      img: project4,
      title: "Project #4",
      description: "A website for AI users, with interface of ai robots and tech.",
       type: "React.js | Tailwind CSS",
      links: {
        site:   "https://brain-ai.netlify.app",
        github: "https://github.com/rajadurai46/brainwave-ai",
      },
    },
    
  ]

const Project = () => {
  return (
    <div className='bg-slate-50 dark:bg-neutral-950 dark:text-white border-b border-neutral-900 pt-4 pb-24 w-full'>
    <div className='max-w-[1200px] mx-auto p-6 md:my-20' id="project">
        <h2 className='text-3xl font-bold mb-32 text-center'>Projects</h2>
        {projects.map((project, index) => (
            
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <motion.div 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 1, y: -200}}
                transition={{duration: 1}}   
                className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </motion.div>

                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 1, x: -100}}
                transition={{duration: 0.5}}
                className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
                    <p className='mb-4'>{project.description}</p>
                    <p className='mb-4'>{project.type}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-black text-white dark:bg-white dark:text-black 
                            rounded-lg transition duration-300 
                            hover:bg-gradient-to-r from-orange-600 via-white to-green-600 hover:text-black'>
                            Visit Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-black text-white dark:bg-white dark:text-black 
                            rounded-lg hover:bg-gradient-to-r 
                            from-orange-600 via-white to-green-600 hover:text-black transition duration-300'>
                            <AiOutlineGithub/>
                            
                        </a>

                    </div>

                </motion.div>

            </div>
            
        ))}
        
    </div>
    </div>
  )
}

export default Project