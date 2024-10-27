import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import {motion, useScroll} from 'framer-motion'




const Details = ({from, college, degree, marks, place, collegelink}) => { 

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
            <h3 className='capitalize font-bold text-xl'>{degree}&nbsp; 
            <a href={collegelink} target='_blank' className='text-red-600 capitalize'>{college}</a>
                </h3>
            <span className='capitalize font-medium text-slate-600'>
              {from}  @{place}
            </span>
            <p className='font-medium w-full'>
                {marks}
            </p>
            </motion.div>
        </li>
    )
}



const Education = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
           <div className='bg-slate-50 dark:bg-neutral-950 dark:text-white border-b border-neutral-900 
           pb-24' id='education'>
            <h2 className='font-semibold text-4xl mb-32 text-center pt-14'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                style={{scaleY: scrollYProgress}} 
                
                className='absolute left-[54px] top-0 w-[4px] h-full bg-dark dark:bg-white origin-top'/>

                <ul className='w-full flex flex-col items-center justify-between pl-8'>

                <Details
                from= "2017-2020"
                college= "Mahendra Institute of Technology"
                collegelink= "/"
                degree= "B.E(Automobile Engineering)"
                marks= "67%"
                place= "Namakkal|Tamilnadu"
                />
                
                
                <Details
                from= "2015-2017"
                college= "M.I.E.T Polytechnic College"
                collegelink= "/"
                degree= "Diploma(Automobile Engineering)"
                marks= "73%"
                place= "Tiruchirappalli|Tamilnadu"
                />
                
                
               
                <Details
                from= "2014-2015"
                college= "Tagore Vidyalayam Mat Hr Sec School"
                collegelink= "/"
                degree= "HSC"
                marks= "51%"
                place= "Madurai|Tamilnadu"
                />

                <Details
                from= "2012-2013"
                college= "Tagore Vidyalayam Mat Hr Sec School"
                collegelink= "/"
                degree= "SSLC"
                marks= "79%"
                place= "Madurai|Tamilnadu"
                />
                
                
                </ul>

            </div>
            </div>
  )
}

export default Education