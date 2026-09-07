import React from 'react'
import {motion} from 'framer-motion'
import { SlideRight } from '../utility/Animation'


const Programs = ({icon,heading,paragraph1}) => {
  return (
    <div>
            <motion.div

             variants={SlideRight(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}

       
            
            
            className='border-t-6 border-t-amber-600 pt-4 h-80 w-57 rounded-xl bg-gray-900 text-white mt-17 cursor-pointer  duration-300 ease-in-out hover: shadow-xl transition-all  hover:-translate-y-2 hover:scale-104 hover:shadow-2xl'>
    
      <p className='text-5xl ml-22 mt-6 mb-4 text-orange-500'>{icon}</p>
      <h1 className='ml-18 font-semibold text-2xl'>{heading}</h1>
      <p className='mt-5 pl-7 text-base'>{paragraph1}</p>
      
     

    </motion.div>
    </div>
  )
}

export default Programs