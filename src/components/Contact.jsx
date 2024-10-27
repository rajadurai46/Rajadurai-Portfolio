import React, { useRef } from 'react'
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'



const Contact = () => {
const form = useRef()

  const sendEmail = (e) => {
    Swal.fire({
      title: "Success!",
      text: "You have sent a Message to Rajadurai",
      icon: "Success"
    })
    e.preventDefault();

    emailjs
      .sendForm('service_zrw1xlq', 'template_yu2yls8', form.current, {
        publicKey: 'Qw4FDwJICVnU6hNmW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ); 
      e.target.reset()

  };

  
  return (
    <div className='bg-white dark:bg-black dark:text-white border-b border-neutral-900 
           pb-24 pt-14' id='contact'>
           
           <div>
            <h1 className='font-semibold text-4xl mb-4 w-full text-center'>
                Contact <span className='text-cyan-600'>ME</span>
            </h1>
            <p className='text-center font-semibold'>Any Queries, feel free to reach me</p>
            </div>

            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 1, x: -300}}
            transition={{duration: 1}} 
            className='flex flex-col items-center justify-center mt-5'>
            <form ref={form} onSubmit={sendEmail} className='bg-slate-400 sm:w-96 w-72 px-8 py-6'>
               <h1 className='text-xl font-semibold mb-4 text-center dark:text-black'>Type Your Message</h1> 
               <div className='flex flex-col mb-4'>
                <label className='block text-base font-bold mb-2 dark:text-black' htmlFor='name'>
                 Full Name
                </label>
                <input type='text' className='shadow appearance-none border rounded-lg py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline items-start' 
                placeholder='Enter Your Name'/>
               </div>

               <div className='flex flex-col mb-4'>
                <label className='block text-base font-bold mb-2 dark:text-black' htmlFor='email'>
                 Email Address
                </label>
                <input type='text' className='shadow appearance-none border rounded-lg py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline items-start' 
                placeholder='Enter Your Email Address'/>
               </div>

               <div className='flex flex-col mb-4'>
                <label className='block text-base font-bold mb-2 dark:text-black' htmlFor='message'>
                 Message
                </label>
                <textarea type='text' className='shadow appearance-none border rounded-lg py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline items-start' 
                placeholder='Enter Your Message'/>
               </div>
               <button type='submit' 
               className='bg-cyan-600 rounded-xl px-3 py-3 hover:scale-110 transition-[0.3s] dark:text-black'>
                Submit
               </button>
            </form>
            </motion.div>

     

    </div>
  )
}
export default Contact