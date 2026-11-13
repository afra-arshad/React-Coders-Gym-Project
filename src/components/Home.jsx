import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight } from '../utility/Animation'

const Home = () => {
  return (
    <div id='home' className='relative overflow-hidden bg-[#efdecb] lg:bg-transparent'>
      
      {/* Background Container (Exact desktop h-200 w-164 preserved on lg:) */}
      <div 
        style={{ backgroundImage: "url('/bg.webp')" }}
        className='w-full lg:w-164 h-auto lg:h-200 bg-cover bg-center py-6 lg:py-3 pb-16 lg:pb-0'
      > 
        <Navbar />

        <div className='px-6 sm:px-12 lg:px-0'>
          
          {/* Main Heading */}
          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='lg:ml-14 mt-12 sm:mt-16 lg:mt-40 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight lg:leading-20'
          >
            Gym Gives you the <br className='hidden sm:inline' /> 
            perfect <span className='text-orange-500'>Health</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='mt-5 sm:mt-6 lg:mt-7 lg:ml-15 text-sm sm:text-base text-gray-500 max-w-lg lg:max-w-none'
          >
            It is a long established fact that a reader will be by readable content of a page <br className='hidden sm:inline' /> 
            when are the best product.
          </motion.p>

          {/* Order Now Button */}
          <motion.button
            variants={SlideRight(1.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='mt-7 lg:mt-9 lg:ml-16 text-xl sm:text-2xl font-semibold border-none h-12 w-38 rounded-lg bg-orange-500 hover:bg-orange-400 text-white cursor-pointer transition-colors duration-300'
          >
            Order Now
          </motion.button>

          {/* Dumbbell Image: Centered stack on mobile/tablet, positioned right in front of the heading on desktop */}
          <motion.img
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="dumbell.webp"
            alt="Dumbbell"
            className='mx-auto lg:mx-0 mt-10 lg:mt-0 w-64 sm:w-80 lg:w-[520px] xl:w-[580px] lg:max-w-none lg:absolute lg:top-44 lg:left-160 object-contain pointer-events-none'
          />

        </div>
      </div>
    </div>
  )
}

export default Home