// File: src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/Heroslider';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import Reviews from '../sections/Reviews';
import Contact from '../sections/Contact';

const HomePage = () => {
  return (
    <div className="font-sans">
      <HeroSlider />

      {/* Section Components */}
      <Services />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
};

export default HomePage;
