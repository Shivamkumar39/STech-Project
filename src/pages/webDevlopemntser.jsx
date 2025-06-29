import React from 'react';
import { Button } from '@material-tailwind/react'; // if using Material Tailwind (optional)
import Contact from '../sections/Contact';

const WebDevelopment = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-16">
      <div className="max-w-6xl mx-auto rounded-xl bg-white/70 backdrop-blur-md shadow-2xl p-10 border border-blue-200">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" 
            alt="Web Dev" 
            className="w-20 h-20 mx-auto mb-4 drop-shadow-lg" 
          />
          <h1 className="text-5xl font-bold text-blue-700 mb-4">Web Development</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We design, develop, and deploy stunning web solutions that power businesses online. Our modern tech stack and user-centered approach ensures maximum performance and reliability.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">⚡ React.js Frontends</h3>
            <p className="text-gray-600">Build lightning-fast, dynamic, and scalable SPAs (Single Page & Multiple Page Applications).</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-2 text-teal-600">🔒 Secure Backend Integration</h3>
            <p className="text-gray-600">Seamless integration with backend systems using Node.js, Firebase, MongoDB and secure APIs.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">📱 Responsive Design</h3>
            <p className="text-gray-600">Optimized for all devices with mobile-first responsive interfaces using Tailwind CSS.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">🎨 Custom UI/UX</h3>
            <p className="text-gray-600">We design user-friendly, intuitive interfaces that elevate your brand and boost conversions.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-green-500 md:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-green-600">🚀 SEO & Performance Optimization</h3>
            <p className="text-gray-600">Optimized code, best practices, and blazing-fast loading speeds to help you rank higher and perform better.</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
              
              Get a Free Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
