import React from 'react';

const LogoDesign = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto  p-10">
        {/* Header */}
        <div className="text-center mb-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Logo Design"
            className="w-20 h-20 mx-auto mb-4 drop-shadow-lg"
          />
          <h1 className="text-5xl font-bold text-blue-400 mb-4">Logo Design</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We craft unique, creative, and professional logos that capture your brand’s identity and make a lasting impression.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">🎯 Custom & Original Concepts</h3>
            <p className="text-gray-300">
              Tailored logo ideas that reflect your brand’s unique personality and vision.
            </p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-teal-400">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">🧠 AI-Enhanced Creativity</h3>
            <p className="text-gray-300">
              Leveraging AI and design trends to create innovative and eye-catching logos.
            </p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">📦 Multiple File Formats</h3>
            <p className="text-gray-300">
              Receive your logo in versatile formats including SVG, PNG, and PDF for all your branding needs.
            </p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-400">
            <h3 className="text-xl font-semibold mb-2 text-pink-300">⚡ Fast Turnaround & Revisions</h3>
            <p className="text-gray-300">
              Quick delivery with unlimited revisions to ensure 100% satisfaction.
            </p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-green-400 md:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-green-300">🖌️ Expert Designers</h3>
            <p className="text-gray-300">
              Experienced professionals dedicated to creating logos that elevate your brand presence.
            </p>
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

export default LogoDesign;
