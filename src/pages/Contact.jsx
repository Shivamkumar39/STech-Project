import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_hgzuddt',
        'template_xoq66fb',
        form.current,
        'LtS1RVYtUiBg4mxD0'
      );
      alert('Message sent!');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a192f] px-6 py-24 flex flex-col items-center justify-center text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Let us know how we can help you with your next big project.
        </p>
        <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded mx-auto"></div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#112240] w-full max-w-3xl p-10 rounded-3xl shadow-2xl border border-blue-800 grid gap-6"
      >
        {/* Service Selection */}
        <select
          name="service"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Logo Design">Logo Design</option>
          <option value="Resume Writing">Resume Writing</option>
          <option value="Data Entry">Data Entry</option>
        </select>

        {/* Project Name */}
        <input
          name="project_name"
          placeholder="Project Name"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Client Name */}
        <input
          name="client_name"
          placeholder="Your Full Name"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Email */}
        <input
          name="client_email"
          type="email"
          placeholder="Your Email"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Mobile Number */}
        <input
          name="client_mobile"
          type="tel"
          placeholder="Your Mobile Number"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Project Short Detail */}
        <textarea
          name="project_detail"
          placeholder="Project Short Detail"
          rows="5"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
