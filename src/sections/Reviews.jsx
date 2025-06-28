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
  },
];

const Reviews = () => (
  <section id="reviews" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 text-center">
    <h2 className="text-4xl font-semibold mb-12 text-gray-800">Client Reviews</h2>
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
      {reviews.map(({ id, text, name, role, avatar }) => (
        <div
          key={id}
          className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <p className="italic text-gray-700 text-lg leading-relaxed mb-6">“{text}”</p>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={avatar}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400"
              loading="lazy"
            />
            <div className="text-left">
              <h4 className="text-lg font-bold text-gray-900">{name}</h4>
              <p className="text-sm text-indigo-600">{role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Reviews;
