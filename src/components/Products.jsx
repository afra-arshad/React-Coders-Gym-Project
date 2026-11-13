import React from 'react'
import { motion } from 'framer-motion'
import { SlideLeft } from '../utility/Animation'

const Products = ({ icon, heading, paragraph1, paragraph2 }) => {
  return (
    <motion.div
      variants={SlideLeft(0.9)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-none pt-6 pb-8 px-6 lg:px-0 lg:pt-4 lg:pb-0 min-h-[280px] h-auto lg:h-80 w-full max-w-[320px] lg:max-w-none lg:w-66 rounded-xl bg-gray-900 text-white mt-8 sm:mt-12 lg:mt-17 cursor-pointer hover:bg-white duration-300 ease-in-out hover:text-black shadow-xl transition-all hover:-translate-y-2 hover:scale-104 hover:shadow-2xl flex flex-col items-center text-center lg:block lg:text-left"
    >
      {/* Icon */}
      <div className="text-5xl mt-2 lg:ml-27 lg:mt-6 mb-4 flex justify-center lg:block">
        {icon}
      </div>

      {/* Heading */}
      <h1 className="lg:ml-21 font-bold text-xl">
        {heading}
      </h1>

      {/* Paragraphs */}
      <p className="mt-3 lg:pl-7 text-sm leading-relaxed">
        {paragraph1}
      </p>
      <p className="mt-3 lg:pl-7 text-sm leading-relaxed">
        {paragraph2}
      </p>
    </motion.div>
  )
}

export default Products