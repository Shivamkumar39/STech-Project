// File: src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Branding */}
        <a href='/'>
        <div className="flex items-center space-x-3" >
         
           <img src={logo} alt="STech Logo" className="h-14 w-auto" />
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-400 to-teal-400">
            STech Services
          </h1>
        </div>
         </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-500 transition duration-300">Home</Link>
          <a href="#services" className="hover:text-orange-400 transition duration-300">Services</a>
          <a href="#projects" className="hover:text-yellow-500 transition duration-300">Projects</a>
          <a href="#reviews" className="hover:text-green-500 transition duration-300">Reviews</a>
          <a href="#contact" className="hover:text-teal-400 transition duration-300">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-blue-100 via-orange-100 to-teal-100 text-gray-800 shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4 font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link>
            <a href="#services" onClick={toggleMenu} className="hover:text-orange-500">Services</a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-yellow-500">Projects</a>
            <a href="#reviews" onClick={toggleMenu} className="hover:text-green-500">Reviews</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-teal-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
