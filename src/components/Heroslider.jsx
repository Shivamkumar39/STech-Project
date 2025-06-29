import React from 'react';
import techBg from '../assets/background.avif'; 
const SinglePage = () => {
  return (
    <div className="font-sans scroll-smooth ">
        <section
        className="h-[60vh] relative flex items-center px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${techBg})` }}
        >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className='mt-20'>
          <div className="relative z-10 max-w-xl text-left text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-teal-400 bg-clip-text text-transparent">STech Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">
            Affordable, Fast, and High-Quality Development Services tailored to your needs.
          </p>
          <div className="space-x-4">
            <a
              href="/services"
              className="inline-block bg-gradient-to-r from-orange-400 to-teal-400 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transform transition"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white px-6 py-3 rounded-xl text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Add other sections below */}
    </div>
  );
};

export default SinglePage;
