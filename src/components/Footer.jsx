import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-400 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* 1 column on mobile, 2 columns on tablet (sm/md), exact 4-column flex row with ml-30 mr-30 on desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-3 lg:ml-30 lg:mr-30">
          
          {/* Brand Column */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl rounded flex items-center justify-center text-yellow-400">
                <HiLightningBolt className="w-8 h-10" />
              </span>
              <h1 className="text-white text-2xl font-bold tracking-wider">
                CODERS <span className="text-[#f37022]">GYM</span>
              </h1>
            </div>

            <p className="text-base leading-relaxed max-w-sm text-gray-400 mb-4">
              Empowering developers <br className="hidden lg:inline" /> through knowledge, <br className="hidden lg:inline" /> practice, and growth. Join us <br className="hidden lg:inline" /> in the journey of coding <br className="hidden lg:inline" /> excellence.
            </p>

            <div className="flex gap-4 pt-2">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
              <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* Important Links */}
          <div className="flex-1 lg:ml-5">
            <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide mb-4">
              Important Links
            </h3>
            <ul className="flex flex-col gap-3 text-base">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex-1 lg:ml-5">
            <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-base">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide mb-4">
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

        <div className="mt-10 lg:mt-12 pt-6 border-t border-gray-800/60 text-center text-sm text-gray-500">
          <p>© 2026 CODERS GYM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;