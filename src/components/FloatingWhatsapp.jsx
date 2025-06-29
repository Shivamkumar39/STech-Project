import React from 'react';
import logo from '../assets/whatsapp.png';
const FloatingWhatsapp = () => (
  <a
    href="https://wa.me/9508353863"
    className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={logo} alt="WhatsApp" className="w-8 h-8" />
  </a>
);

export default FloatingWhatsapp;