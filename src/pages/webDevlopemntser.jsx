import React from 'react';

const WebDevelopment = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto rounded-xl shadow-2xl p-10 ">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" 
            alt="Web Dev" 
            className="w-20 h-20 mx-auto mb-4 drop-shadow-lg" 
          />
          <h1 className="text-5xl font-bold text-blue-400 mb-4">Web Development</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We design, develop, and deploy stunning web solutions that power businesses online. Our modern tech stack and user-centered approach ensures maximum performance and reliability.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">⚡ React.js Frontends</h3>
            <p className="text-gray-300">Build lightning-fast, dynamic, and scalable SPAs (Single Page & Multiple Page Applications).</p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-teal-400">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">🔒 Secure Backend Integration</h3>
            <p className="text-gray-300">Seamless integration with backend systems using Node.js, Firebase, MongoDB and secure APIs.</p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">📱 Responsive Design</h3>
            <p className="text-gray-300">Optimized for all devices with mobile-first responsive interfaces using Tailwind CSS.</p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-400">
            <h3 className="text-xl font-semibold mb-2 text-pink-300">🎨 Custom UI/UX</h3>
            <p className="text-gray-300">We design user-friendly, intuitive interfaces that elevate your brand and boost conversions.</p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-green-400 md:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-green-300">🚀 SEO & Performance Optimization</h3>
            <p className="text-gray-300">Optimized code, best practices, and blazing-fast loading speeds to help you rank higher and perform better.</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="/contact">
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
