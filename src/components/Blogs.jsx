import { section } from 'framer-motion/client'
import React from 'react'
import {motion} from 'framer-motion'
import { SlideUp } from '../utility/Animation'
import {Slide} from '../utility/Animation'
const Blogs = ({image,heading,para,btn}) => {
  return (
    <section id='blogs' className=' flex items-center px-10 mt-14 bg-neutral-50'>
    <div >
      <img src={image} alt="hero picture" className='h-130 w-240 bg-neutral-100' />
      </div>
      <div className=' relative ml-9 '>
      <motion.h1
      variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      className='font-bold text-5xl font-serif '>{heading}</motion.h1>
      <motion.p
      
       variants={SlideUp(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      
      
      
      
      className='mt-7 mb-6 text-lg text-gray-700 '>{para}</motion.p>
      <motion.button
      
       variants={Slide(0.8)}

        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}

        
       


      
      
      
      className='border h-13 font-semibold  w-38 bg-orange-500 text-white text-lg rounded-full hover:bg-orange-400 duration-300 ease-in-out cursor-pointer'>{btn}</motion.button>
     
    </div>
    </section>
  )
}

export default Blogs