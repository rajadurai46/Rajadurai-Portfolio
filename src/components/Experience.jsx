import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import {motion, useScroll} from 'framer-motion'




const Details = ({date, position, company, companylink, desc, place}) => { 

    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
         justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
            <h3 className='capitalize font-bold text-xl'>{position}&nbsp; <a href={companylink}
            target='_blank' className='text-red-600 capitalize'>{company}</a></h3>
            <span className='capitalize font-medium text-slate-600'>
              {date}  @{place}
            </span>
            <p className='font-medium w-full'>
                {desc}
            </p>
            </motion.div>
        </li>
    )
}



const Experience = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
           <div className='bg-white dark:bg-black dark:text-white border-b border-neutral-900 
           pb-24 pt-14 w-full' id='experience'>
            <h2 className='font-semibold text-4xl mb-32 text-center'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                style={{scaleY: scrollYProgress}} 
                
                className='absolute left-[54px] top-0 w-[4px] h-full bg-dark 
                dark:bg-white origin-top'/>

                <ul className='w-full flex flex-col items-center justify-between pl-8'>
                <Details
                date= "Aug 2023 - Present"
                position="Assistant Business Manager"
                companylink= "/"
                company= "Shriram Finance Limited"
                desc= "Led a team in Business, Collection and Recovery. Implemented with team members by handling the customers. Acheiving the target to close within the month-end."
                place= "Madurai|Tamilnadu"
                />
                
                <Details
                date= "Nov 2022 - May 2023"
                position= "Process Associate"
                companylink= "/"
                company= "MattsenKumar Services Pvt Ltd"
                desc= "Worked closely with customers to integrate their facing issues and doubts. Implemented responsive solution to optimize their issues and clarified them via voice, chat and mails."
                place= "Gurgaon|New Delhi"
                />
                
                <Details
                date= "Apr 2021 - Jul 2022"
                position= "Process Associate"
                compnaylink= "/"
                company= "Solartis Technology Services Pvt Ltd"
                desc= "Developed and maintained the clients requirement backend insurance process. Collaborated with cross-functional teams to deliver high-quality products on schedule."
                place= "Madurai|Tamilnadu"
                />
                
                </ul>

            </div>
            </div>
  )
}

export default Experience