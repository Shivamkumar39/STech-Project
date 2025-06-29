import React from 'react';

const ResumeServices = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto rounded-xl bg-[#112240] shadow-2xl p-10 border border-blue-800">
        {/* Header */}
        <div className="text-center mb-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1827/1827901.png"
            alt="Resume Writing"
            className="w-20 h-20 mx-auto mb-4 drop-shadow-lg"
          />
          <h1 className="text-5xl font-bold text-purple-400 mb-4">Resume Writing</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get a professional, ATS-friendly resume that makes recruiters stop scrolling and invites interviews.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">📝 AI-Powered Keyword Optimization</h3>
            <p className="text-gray-300">
              We use AI to tailor your resume keywords to your industry and target job descriptions.
            </p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-400">
            <h3 className="text-xl font-semibold mb-2 text-pink-300">📌 Custom-Tailored for Your Career Goals</h3>
            <p className="text-gray-300">
              Personalized resume formatting and content that highlight your strengths and achievements.
            </p>
          </div>

          <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-yellow-400 md:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">🚀 ATS & Recruiter Friendly</h3>
            <p className="text-gray-300">
              Resumes optimized to pass Applicant Tracking Systems and impress hiring managers.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="/contact">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-md">
              Get a Free Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeServices;
