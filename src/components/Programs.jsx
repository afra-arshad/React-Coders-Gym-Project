import React from 'react'
import { motion } from 'framer-motion'
import { SlideRight } from '../utility/Animation'

const Programs = ({ icon, heading, paragraph1 }) => {
  return (
    <div className="w-full flex justify-center lg:w-auto lg:block">
      <motion.div
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t-6 border-t-amber-600 pt-6 pb-8 px-6 lg:px-0 lg:pt-4 lg:pb-0 min-h-[260px] h-auto lg:h-80 w-full max-w-[320px] lg:max-w-none lg:w-57 rounded-xl bg-gray-900 text-white mt-8 sm:mt-12 lg:mt-17 cursor-pointer duration-300 ease-in-out shadow-xl transition-all hover:-translate-y-2 hover:scale-104 hover:shadow-2xl flex flex-col items-center text-center lg:block lg:text-left"
      >
        {/* Icon */}
        <div className="text-5xl mt-2 lg:ml-22 lg:mt-6 mb-4 text-orange-500 flex justify-center lg:block">
          {icon}
        </div>

        {/* Heading */}
        <h1 className="lg:ml-18 font-semibold text-xl sm:text-2xl">
          {heading}
        </h1>

        {/* Paragraph */}
        <p className="mt-4 lg:mt-5 lg:pl-7 text-sm sm:text-base leading-relaxed">
          {paragraph1}
        </p>
      </motion.div>
    </div>
  )
}

export default Programs