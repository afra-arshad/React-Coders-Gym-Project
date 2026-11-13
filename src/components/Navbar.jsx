import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Programs', href: '#programs' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Offers', href: '#offer' },
  ];

  return (
    <nav className="w-full bg-transparent relative z-50">
      {/* Main Bar: Clean flex-between on mobile/tablet, exact desktop row on lg: */}
      <div className="flex items-center justify-between lg:justify-start px-5 sm:px-10 lg:px-0 py-4 lg:py-0 lg:pt-8">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 lg:ml-12 shrink-0">
          <img src="logo.svg" alt="Coders Gym Logo" className="h-6 w-auto my-1" />
          <div className="flex items-center text-xl sm:text-2xl font-bold tracking-tight">
            <span>CODERS</span>
            <span className="text-orange-500 ml-1">GYM</span>
          </div>
        </a>

        {/* Desktop Nav Links (100% preserved on lg:) */}
        <ul className="hidden lg:flex flex-row gap-11 ml-55 mt-1 font-semibold text-base text-gray-400 cursor-pointer">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-orange-500 duration-300 transition-all ease-in-out"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Search & Cart Icons (100% preserved on lg:) */}
        <div className="hidden lg:flex flex-row items-center ml-35">
          <h1 className="font-bold text-2xl border-none bg-transparent hover:w-15 hover:h-9 hover:pt-1 hover:px-1 hover:border hover:rounded-full hover:text-white hover:bg-orange-500 cursor-pointer flex items-center justify-center transition-all duration-300">
            <CiSearch />
          </h1>
          <h1 className="text-xl ml-6 border-none bg-transparent hover:w-15 hover:h-9 hover:pt-2.5 hover:px-2 hover:border hover:rounded-full hover:text-white hover:bg-orange-500 cursor-pointer flex items-center justify-center transition-all duration-300">
            <FiShoppingCart />
          </h1>
        </div>

        {/* Mobile & Tablet Action Icons + Hamburger Toggle */}
        <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Search"
            className="w-10 h-10 flex items-center justify-center rounded-full text-2xl text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <CiSearch />
          </button>

          <button
            type="button"
            aria-label="Shopping Cart"
            className="w-10 h-10 flex items-center justify-center rounded-full text-xl text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <FiShoppingCart />
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-2xl text-gray-800 hover:bg-orange-500/10 hover:text-orange-500 transition-colors duration-300 focus:outline-none cursor-pointer"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

      </div>

      {/* Smooth Animated Mobile & Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 w-full px-5 sm:px-10 pt-2 pb-4 z-50"
          >
            <div className="bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-xl p-5">
              <ul className="flex flex-col divide-y divide-gray-100 font-semibold text-base text-gray-700">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-2 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;