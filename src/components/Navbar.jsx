import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="STech Logo" className="h-24 w-auto" />
            <h1 className={`text-3xl font-extrabold bg-clip-text ${scrolled
                ? 'text-gray-900'
                : 'text-transparent bg-gradient-to-r from-blue-500 via-orange-400 to-teal-400'
              }`}>
              STech Services
            </h1>
          </div>

        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link
            to="/"
            className={`transition duration-300 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`transition duration-300 ${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
          >
            Services
          </Link>
          <Link
            to="/Plans"
            className={`transition duration-300 ${scrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-white hover:text-yellow-300'
              }`}
          >
           Projects Price
          </Link>
          <Link
            to="/contact"
            className={`transition duration-300 ${scrolled ? 'text-gray-700 hover:text-teal-500' : 'text-white hover:text-teal-300'
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className={`${scrolled ? 'text-gray-800' : 'text-white'} md:hidden`}>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-blue-100 via-orange-100 to-teal-100 text-gray-800 shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4 font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/services" onClick={toggleMenu} className="hover:text-orange-500">
              Services
            </Link>
            <Link to="/projects" onClick={toggleMenu} className="hover:text-yellow-500">
              Projects
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-teal-500">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
