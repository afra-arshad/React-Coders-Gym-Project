import React from 'react'
import { motion } from 'framer-motion'
import { SlideRight, SlideUp, Slide } from '../utility/Animation'

const Blogs = ({ image, heading, para, btn }) => {
  return (
    <section
      id='blogs'
      className='flex flex-col lg:flex-row items-center px-6 sm:px-10 py-10 lg:py-0 mt-10 sm:mt-14 bg-neutral-50 gap-8 lg:gap-0'
    >
      {/* Image Wrapper */}
      <div className='w-full lg:w-auto'>
        <motion.img
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={image}
          alt="hero picture"
          className='w-full h-64 sm:h-96 lg:h-130 lg:w-240 object-cover rounded-xl lg:rounded-none bg-neutral-100'
        />
      </div>

      {/* Text & Button Column */}
      <div className='relative w-full lg:w-auto lg:ml-9 text-center lg:text-left'>
        <motion.h1
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='font-bold text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight'
        >
          {heading}
        </motion.h1>

        <motion.p
          variants={SlideUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='mt-4 sm:mt-6 lg:mt-7 mb-6 text-base sm:text-lg text-gray-700 leading-relaxed'
        >
          {para}
        </motion.p>

        <motion.button
          variants={Slide(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='border h-12 sm:h-13 font-semibold w-36 sm:w-38 bg-orange-500 text-white text-base sm:text-lg rounded-full hover:bg-orange-400 duration-300 ease-in-out cursor-pointer'
        >
          {btn}
        </motion.button>
      </div>
    </section>
  )
}

export default Blogs