import React from 'react'
import {motion} from 'framer-motion'
import { SlideDown } from '../utility/Animation'

const Pheading2 = () => {
  return (
    <div id='programs'>
        <motion.h1
         
          variants={SlideDown(0.7)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
           
        
        
        
        
        className='text-center text-4xl font-bold mt-20' >Our Fitness Programs</motion.h1>
        <p className='text-center mt-5 text-lg text-gray-600'>Choose the perfect program for your fitness goals and start training today!</p>
    </div>
  )
}

export default Pheading2