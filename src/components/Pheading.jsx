import React from 'react'
import { motion } from 'framer-motion'
import { SlideRight } from '../utility/Animation'

const Pheading = () => {
  return (
    <div id='products' className='mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-8 font-serif'>
      <motion.h1
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-center text-3xl sm:text-4xl lg:text-5xl font-semibold font-lato leading-tight'
      >
        What We Offer For You
      </motion.h1>
    </div>
  )
}

export default Pheading