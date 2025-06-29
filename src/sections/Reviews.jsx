import React from 'react';

const reviews = [
  {
    id: 1,
    text: "Shivam provided excellent service. Highly recommended!",
    name: "John Doe",
    role: "CEO, Acme Corp",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "Professional, timely, and creative work. Will hire again.",
    name: "Jane Smith",
    role: "Marketing Head, Beta Ltd",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Reviews = () => (
  <section id="reviews" className="py-16 bg-[#0a192f] text-white text-center">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-blue-400 mb-12">Client Reviews</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {reviews.map(({ id, text, name, role, avatar }) => (
          <div
            key={id}
            className="bg-[#112240] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
          >
            <p className="italic text-gray-300 text-lg leading-relaxed mb-6">“{text}”</p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-teal-400"
                loading="lazy"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">{name}</h4>
                <p className="text-sm text-teal-400">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
