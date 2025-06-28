import React from 'react';

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    desc: "A full-stack e-commerce platform with payment integration.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing projects and skills.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Social Media App",
    desc: "A React Native app for sharing photos and posts.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-gray-50 text-center">
    <h2 className="text-4xl font-semibold mb-12 text-gray-800">Past Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
      {projects.map(({ id, title, desc, img }) => (
        <div
          key={id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-6 text-left">
            <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
