import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import plans from '../data/Plans';

const HomePlans = () => {
  const featuredPlans = plans.slice(0, 2);

  return (
    <section className="py-16 bg-[#0a192f] text-white text-center">
      <h2 className="text-4xl font-extrabold mb-12 tracking-wide text-blue-400">Featured Plans</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
        {featuredPlans.map(({ id, service, desc, price }) => (
          <Tilt
            key={id}
            className="bg-[#112240] p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-800 hover:border-teal-400 transform transition duration-300 cursor-pointer"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="bottom"
          >
            <h3 className="text-2xl font-semibold mb-3 text-teal-400">{service}</h3>
            <p className="text-gray-300 mb-4">{desc}</p>
            <p className="text-xl font-bold text-blue-400">{price}</p>
          </Tilt>
        ))}
      </div>

      <div className="mt-16">
        <Link to="/plans">
          <button className="bg-blue-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-medium tracking-wide transition duration-300 shadow-md">
            See All Plans
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePlans;
