import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Your logo path

const Footer = () => {
  const services = [
    { title: 'Web Development', path: '/services/web-development' },
    { title: 'Logo Design', path: '/services/logo-design' },
    { title: 'Resume Writing', path: '/services/resume-writing' },
    { title: 'Data Entry', path: '/services/data-entry' },
  ];

  return (
    <footer className="bg-[#1e2a47] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Branding */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="STech Logo" className="h-16 w-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-teal-400">
            STech Services
          </h2>
          <p className="mt-4 text-gray-300 max-w-xs text-center md:text-left">
            Delivering modern tech & creative solutions with precision, speed, and quality.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-blue-600 pb-2">Our Services</h3>
          <ul className="space-y-3 text-gray-300">
            {services.map(({ title, path }) => (
              <li key={title}>
                <Link
                  to={path}
                  className="hover:text-teal-400 transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-blue-600 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link to="/" className="hover:text-teal-400 transition duration-300">Home</Link></li>
            <li><Link to="/plans" className="hover:text-teal-400 transition duration-300">Plans</Link></li>
            <li><Link to="/projects" className="hover:text-teal-400 transition duration-300">Projects</Link></li>
            <li><Link to="/reviews" className="hover:text-teal-400 transition duration-300">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400 transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-blue-600 pb-2">Contact Us</h3>
          <p className="text-gray-300 mb-4 max-w-xs">
            Have questions or want a custom quote? Reach out to us anytime.
          </p>
          <a href="mailto:shivamkumar950835@gmail.com" className="text-blue-400 hover:text-teal-400 transition duration-300">
            shivamkumar950835@gmail.com
          </a>

          <div className="flex space-x-4 mt-6">

            <a
              href="https://wa.me/9508353863"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="w-6 h-6"
                loading="lazy"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-kumar--/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
          </div>

        </div>
      </div>

      <div className="mt-12 border-t border-blue-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} STech Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
