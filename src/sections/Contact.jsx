import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

 const sendEmail = async (e) => {
  e.preventDefault();
  try {
    await emailjs.sendForm('service_hgzuddt', 'template_xoq66fb', form.current, 'LtS1RVYtUiBg4mxD0');
    alert('Message sent!');
    form.current.reset(); // reset form after successful send
  } catch (error) {
    console.error('EmailJS error:', error);
    alert('Failed to send. Please try again.');
  }
};


  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 relative">
        Contact Us
        <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded mt-2 mx-auto"></span>
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-2xl grid gap-6"
      >
        {/* Service Selection */}
        <select
          name="service"
          className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
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
          className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          required
        />

        {/* Client Name */}
        <input
          name="client_name"
          placeholder="Your Full Name"
          className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          required
        />

        {/* Email */}
        <input
          name="client_email"
          type="email"
          placeholder="Your Email"
          className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          required
        />

        {/* Mobile Number */}
        <input
          name="client_mobile"
          type="tel"
          placeholder="Your Mobile Number"
          className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          required
        />

        {/* Project Short Detail */}
        <textarea
          name="project_detail"
          placeholder="Project Short Detail"
          rows="5"
          className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition resize-none"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
