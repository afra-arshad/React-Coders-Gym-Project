import React from 'react'
import {motion} from 'framer-motion'
import { SlideLeft } from '../utility/Animation'

const Products = ({icon,heading,paragraph1,paragraph2}) => {
  return (
    
    <motion.div

    variants={SlideLeft(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
   
      
    
    
    
    
    
    className=' border-none pt-4  h-80 w-66 rounded-xl bg-gray-900 text-white mt-17 cursor-pointer hover:bg-white  duration-300 ease-in-out hover:text-black shadow-xl transition-all  hover:-translate-y-2 hover:scale-104 hover:shadow-2xl'>
    
      <p className='text-5xl ml-27 mt-6 mb-4'>{icon}</p>
      <h1 className='ml-21 font-bold text-xl'>{heading}</h1>
      <p className='mt-3 pl-7 text-sm'>{paragraph1}</p>
       <p className='mt-3 pl-7 text-sm'>{paragraph2}</p>
     

    </motion.div>
   
  )
}

export default Products