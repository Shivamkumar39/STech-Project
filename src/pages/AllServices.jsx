import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    desc: 'We build modern, fast, and secure web applications using technologies like React.js, Node.js, and MongoDB.',
    img: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    path: '/services/web-development',
  },
  {
    title: 'Logo Design',
    desc: 'Crafting unique, creative, and professional logos that represent your brand identity and leave a lasting impression.',
    img: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    path: '/services/logo-design',
  },
  {
    title: 'Resume Writing',
    desc: 'Professional, clean, and impactful resumes tailored to the job market — optimized with AI and ATS standards.',
    img: 'https://cdn-icons-png.flaticon.com/512/1827/1827901.png',
    path: '/services/resume-writing',
  },
  {
    title: 'Data Entry',
    desc: 'Accurate, efficient, and secure data entry services for business, medical, educational, and financial domains.',
    img: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    path: '/services/data-entry',
  },
];

const AllServices = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-36 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-md">All STech Services</h1>
        <p className="text-gray-700 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore our full suite of tech and creative services. We deliver quality, precision, and innovation for your success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ title, desc, img, path }, index) => (
            <Link
              to={path}
              key={index}
              className="bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:border-blue-500 group"
            >
              <img src={img} alt={title} className="w-20 h-20 mb-6" loading="lazy" />
              <h3 className="text-2xl font-semibold text-blue-700 group-hover:text-teal-600 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm mb-6">{desc}</p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline">Learn More →</span>
            </Link>
          ))}
        </div>

        <div className="mt-32">
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-teal-500 text-white px-8 py-3 rounded-full font-semibold tracking-wide shadow-lg transition duration-300">
              Contact Us for a Custom Solution
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
