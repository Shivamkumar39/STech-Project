import React, { useRef, useState } from 'react';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 4000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = {
      service: formData.get('service'),
      project_name: formData.get('project_name'),
      client_name: formData.get('client_name'),
      client_email: formData.get('client_email'),
      client_mobile: formData.get('client_mobile'),
      project_detail: formData.get('project_detail'),
    };

    try {
      const res = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        showAlert('success', '✅ Message sent! We’ll contact you in 2–3 business days.');
        form.current.reset();
      } else {
        showAlert('error', '❌ Failed to send message. Please try again.');
      }
    } catch (err) {
      showAlert('warning', '⚠️ Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0a192f] px-6 py-24 flex flex-col items-center justify-center text-white relative">
      {/* Custom Toast Alert */}
      {alert.show && (
        <Slide direction="down" in={alert.show} mountOnEnter unmountOnExit>
          <div className="fixed top-6 right-6 z-[9999] max-w-xs w-full">
            <Alert severity={alert.type} variant="filled" className="shadow-lg">
              {alert.message}
            </Alert>
          </div>
        </Slide>
      )}

      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Fill out the form below and we’ll get back to you shortly!
        </p>
        <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded mx-auto"></div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#112240] w-full max-w-3xl p-10 rounded-3xl shadow-2xl border border-blue-800 grid gap-6"
      >
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

        <input
          name="project_name"
          placeholder="Project Name"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl"
          required
        />

        <input
          name="client_name"
          placeholder="Your Full Name"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl"
          required
        />

        <input
          name="client_email"
          type="email"
          placeholder="Your Email"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl"
          required
        />

        <input
          name="client_mobile"
          type="tel"
          placeholder="Your Mobile Number"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl"
          required
        />

        <textarea
          name="project_detail"
          placeholder="Project Short Detail"
          rows="5"
          className="p-4 bg-[#0a192f] text-white border border-blue-700 rounded-xl resize-none"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {loading ? 'Sending...' : '🚀 Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
