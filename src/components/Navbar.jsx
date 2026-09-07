import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
  return (
      
     
        
              <div className='flex flex-row '>
            <div className='flex flex-row gap-2 mt-8 '> 
    <img src="logo.svg" alt="" className='h-6 my-1 ml-12' />
   
    <h1 className='font-bold text-2xl'>CODERS</h1>
    <h1 className='text-orange-500 font-bold text-2xl'>GYM</h1>
  
        

    
       <ul className=' ml-55 flex flex-row gap-11 mt-1 font-semibold text-base text-gray-400 cursor-pointer'>

        <li className='hover:text-orange-500 duration-300 transition-all ease-in-out'><a href="#home">Home</a></li>
        <li className='hover:text-orange-500 duration-300 transition-all ease-in-out'><a href="#products">Products</a></li>
        <li className='hover:text-orange-500 duration-300 transition-all ease-in-out'><a href="#programs">Programs</a></li>
        <li className='hover:text-orange-500 duration-300 transition-all ease-in-out'> <a href="#blog">Blogs</a></li>
        <li className='hover:text-orange-500 duration-300 transition-all ease-in-out'><a href="#offer">Offers</a></li>
    </ul>
     
       <h1 className=' font-bold text-2xl border-none bg-transparent ml-35 hover:w-15 hover:h-9 hover:pt-1 hover:px-1  hover:border hover: rounded-full hover:text-white hover:bg-orange-500 '><CiSearch /></h1>
       <h1 className=' text-xl ml-6 border-none bg-transparent  hover:w-15 hover:h-9 hover:pt-2.5 hover:px-2  hover:border hover: rounded-full hover:text-white hover:bg-orange-500 '><FiShoppingCart /></h1>
      
      
   </div>
      
   </div>
  
  
  
  )
}

export default Navbar