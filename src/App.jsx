import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import { FaDumbbell,FaRunning } from "react-icons/fa";
import {MdOutlinePedalBike } from "react-icons/md";
import { FaHeartPulse } from "react-icons/fa6";
import Pheading from './components/Pheading';
import Pheading2 from './components/Pheading2';
import Programs from './components/Programs';
import Footer from './components/Footer';
import Blogs from './components/Blogs';


// import Products from './components/Products'

const App = () => {
  return (
    // main div
    <div >
     <Home/>
     {/* heading */}
     <Pheading/>
     {/* div of products */}
     <div className='flex ml-14 gap-5 overflow-hidden'>
      {/* card 1 */}
     <Products
     icon={<FaDumbbell/>}
     heading="Dumbbells"
     paragraph1={<p className='ml-1'>Perfect for strength training and <br /> <span className='ml-14'>muscle building.</span><br/></p>}
     paragraph2={<h3><span className='ml-8 mb-4'>Dumbbells are essential</span><br /> <span className='ml-9'>workout tools used for</span><br /> <span className='ml-2'>resistance training to build and</span> <br /><span className='ml-5'>tone muscles. They come in</span><br /><span className='ml-13'>various weights.</span></h3>}/>

     {/* card2 */}
      <Products
     icon={<MdOutlinePedalBike/>}
     heading="Exercise Bike"
     paragraph1={<p className='ml-1'> Great for cardio workouts and <br /> <span className='ml-14'>endurance training.</span><br/></p>}
     paragraph2={<h3><span className='ml-3 mb-4'>An exercise bike is a stationary</span><br /> <span className='ml-5'>bicycle designed to simulate</span><br /> <span className='ml-2'>outdoor cycling while providing</span> <br /><span className='ml-5'>a low-impact, high-intensity</span><br /><span className='ml-13'>cardio workout.</span></h3>}/>

     {/* card3 */}
      <Products
     icon={<FaRunning />}
     heading="Treadmill"
     paragraph1={<p className='ml-1'>Ideal for running, jogging, and<br /> <span className='ml-14'>burning calories.</span><br/></p>}
     paragraph2={<h3><span className='ml-3 mb-4'>A treadmill is one of the most </span><br /> <span className='ml-4'>effective fitness machines for</span><br /><span className='ml-3'>indoor cardiovascular exercise.</span><br /><span className='ml-10'>It allows users to walk.</span></h3>}/>

     {/* card4 */}
      <Products
     icon={<FaHeartPulse/>}
     heading={<h1 className='-ml-10'>Heart Rate Monitor </h1>}
     paragraph1={<p className='ml-1'>Helps track your heart rate and<br /><span className='ml-14'>workouts.</span><br/></p>}
     paragraph2={<h3><span className='ml-1 mb-4'>A heart rate monitor is a fitness</span><br /> <span className='ml-9'>device that tracks your</span><br /> <span className='ml-2'>heartbeat in real-time, helping</span> <br /><span className='ml-5'>you optimize your workouts</span><br /><span className='ml-13'>and maintain.</span></h3>}/>
     </div>
      
       <Blogs
     image={"https://codergym.netlify.app/2.webp"}
     heading="Transform Your Body & Mind With Perfect Fitness"
     para="Achieve your fitness goals with expert guidance and premium equipment. Build strength, endurance, and confidence."
     btn="Explore More"/>
    
     <Pheading2/>
     {/* div of programs */}
     <div className='ml-30 flex gap-7'>
      {/* 1st card of programs */}
     <Programs
      icon={<FaDumbbell/>}
     heading={<h1>Strength <br />Training</h1>}
     paragraph1={<h3><span className='ml-8 mb-4'>Build muscle and</span><br /> <span className='ml-6'>improve endurance </span><br /> <span className='ml-8'>with our guided </span> <br /><span className='ml-6'>strength workouts.</span></h3>}
     />

      {/* 2nd card of programs */}
      <Programs
      icon={<MdOutlinePedalBike/>}
     heading={<h1> <span className='ml-1'>Cardio</span><br /> <span className='-ml-3'>Workouts</span></h1>}
     paragraph1={<h3><span className='ml-8 mb-4'>Boost your heart</span><br /> <span className='ml-9'>health with our</span><br /> <span className='ml-6'>high-energy cardio</span> <br /><span className='ml-13'>sessions.</span></h3>}
     />

    {/* 3rd card */}
      <Programs
      icon={<FaHeartPulse/>}
     heading={<h1 className='-ml-7'>Heart Health</h1>}
     paragraph1={<h3><span className='ml-4 mb-4'>Monitor your fitness </span><br /> <span className='ml-4'>progress and stay in</span><br /> <span className='ml-8'>top condition.</span></h3>}
     
     />

      {/* 4th cqrd */}
      <Programs
      icon={<FaRunning />}
     heading={<h1 className='-ml-3'>Endurance<br />Training</h1>}
     paragraph1={<h3><span className='ml-8 mb-4'>Improve your</span><br /> <span className='ml-4'>stamina with expert-</span><br /> <span className='ml-3'>designed endurance</span> <br /><span className='ml-13'>routines.</span> </h3>}
     />
     </div>

     <div className='border border-neutral-50 mt-20 bg-neutral-50 '>
         <Blogs
     image={"https://codergym.netlify.app/3.webp"}
     heading="Your Health, Our Priority-Stay Strong & Fit"
     para={<h3>A healthy lifestyle starts with the right mindset. Join us and take the first step toward a stronger and happier you!</h3>}
     btn="Learn More"/>
     </div>



    <Footer/>

    </div>
  )
}

export default App