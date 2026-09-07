import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-400 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 ">
        <div className="flex flex-row gap-3 ml-30 mr-30">
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <p className='text-2xl rounded flex items-center justify-center text-yellow-400  '> <HiLightningBolt className="w-8 h-10  " /></p>
              <h1 className="text-white text-2xl font-bold tracking-wider" >  CODERS <span className="text-[#f37022]">GYM</span> </h1>
            </div>

            <p className="text-md leading-relaxed max-w-sm text-gray-400 mb-4">
              Empowering developers <br /> through knowledge, <br /> practice, and growth. Join us <br /> in the journey of coding <br /> excellence.
            </p>

            <div className="flex gap-4 pt-2">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white" />
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-white" />
              <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-white" />
            </div>
          </div>

          <div className="flex-1 ml-5">
            <h3 className="text-white font-semibold text-2xl tracking-wide mb-4 ">
              Important Links
            </h3>
            <ul className="flex flex-col gap-3 text-md">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          <div className="flex-1 ml-5">
            <h3 className="text-white font-semibold text-2xl tracking-wide mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-md">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold text-2xl tracking-wide mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#t" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-800/60 text-center text-sm text-gray-500">
          <p>© 2026 CODERS GYM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;