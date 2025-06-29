import React from 'react';
import plans from '../data/Plans';

const AllPlans = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto rounded-xl bg-[#112240] shadow-2xl p-10 borde">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-12 text-center">
          Our Service Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {plans.map(({ id, service, desc, price, points }) => (
            <div
              key={id}
              className="bg-[#0a192f] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-500"
            >
              <h3 className="text-3xl font-semibold mb-3 text-teal-400">{service}</h3>
              <p className="text-gray-300 mb-4">{desc}</p>
              <p className="text-2xl font-bold text-blue-400 mb-6">{price}</p>
              {points && (
                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
          <a href="/contact">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
              Get a Free Consultation
            </button>
          </a>
        </div>

    </section>
  );
};

export default AllPlans;
