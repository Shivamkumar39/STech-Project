import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
const services = [
  { 
    title: 'Web Development', 
    desc: 'Modern and responsive websites built with React.js.', 
    img: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    path: '/services/web-development'
  },
  { 
    title: 'Logo Design', 
    desc: 'Creative, memorable, and unique logos.', 
    img: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    path: '/services/logo-design'
  },
  { 
    title: 'Resume Writing', 
    desc: 'Professional resumes that stand out.', 
    img: 'https://cdn-icons-png.flaticon.com/512/1827/1827901.png',
    path: '/services/resume-writing'
  },
  { 
    title: 'Data Entry', 
    desc: 'Precise, efficient, and secure data entry.', 
    img: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    path: '/services/data-entry'
  },
];

const Services = () => (
  <section id="services" className="py-16 bg-[#0a192f] text-white text-center">
    <h2 className="text-4xl font-extrabold mb-12 tracking-wide">Our Services</h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
      {services.map(({ title, desc, img, path }, index) => (
        <Link to={path} key={index}>
          <Tilt
            className="bg-[#112240] p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-800 hover:border-teal-400 transform transition duration-300 cursor-pointer"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="bottom"
          >
            <img 
              src={img} 
              alt={title} 
              className="w-20 h-20 mx-auto mb-6 object-contain" 
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-300">{desc}</p>
          </Tilt>
        </Link>
      ))}
    </div>
  </section>
);

export default Services;
