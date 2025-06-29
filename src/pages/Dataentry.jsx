import React from 'react';

const Dataentry = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto rounded-xl bg-[#112240] shadow-2xl p-10 ">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" 
            alt="Data Entry" 
            className="w-20 h-20 mx-auto mb-4 drop-shadow-lg" 
          />
          <h1 className="text-5xl font-bold text-green-400 mb-4">Data Entry</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Fast, reliable, and accurate data entry services across industries. We ensure security and efficiency at every step.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold mb-2 text-green-300">🔐 Confidential & Secure</h3>
            <p className="text-gray-300">100% secure handling of sensitive and business-critical data with NDA support.</p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-teal-300">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">🕒 Quick Turnaround</h3>
            <p className="text-gray-300">Fast delivery on bulk data projects with high accuracy and consistency.</p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">📊 Diverse Domains</h3>
            <p className="text-gray-300">Medical, financial, academic, and more—customized formatting per your requirement.</p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-400">
            <h3 className="text-xl font-semibold mb-2 text-pink-300">🧠 Human + Tool Accuracy</h3>
            <p className="text-gray-300">Manual validation plus automation ensures zero-error data entry processing.</p>
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

export default Dataentry;
