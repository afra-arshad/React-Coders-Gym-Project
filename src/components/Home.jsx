import React from 'react'
import Navbar from '../components/Navbar'
import {motion} from 'framer-motion'
import { SlideRight } from '../utility/Animation'


const Home = () => {
  return (
    <div id='home' className='overflow-hidden'>
           <div style={{backgroundImage: "url('/bg.webp')"}}
         className='h-200 w-164 '> 
         <Navbar/>
        <div>
   <motion.h1
   
   variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
   
   
   
   className='ml-14 mt-40 text-6xl font-semibold leading-20'>Gym Gives you the <br /> perfect <span className='text-orange-500'>Health</span></motion.h1>
       <motion.p
       
       
         variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
  
       
       className='mt-7 ml-15 text-gray-500'>It is a long established fact that a reader will be by readable content of a page <br /> when are the best product.</motion.p>

       <motion.button
       
       
       
       
        variants={SlideRight(1.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
  
       
       
       
       className='mt-9 ml ml-16 text-2xl font-semibold border-none h-12 w-38 rounded-lg bg-orange-500 hover:bg-orange-400'>Order 
        Now</motion.button>
        <img src="dumbell.webp" alt="" className='ml-160 -mt-85' />
       </div>
    
    </div>
    </div>
  )
}

export default Home