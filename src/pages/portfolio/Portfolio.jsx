// src/components/Portfolio.js
import React, { useState } from 'react';

// Example Project Data - Replace with your actual projects
const projectsData = [
  {
    id: 1,
    category: "Web Development",
    title: "E-commerce Redesign for Fashion Brand",
    description: "A complete redesign and re-platforming of an existing e-commerce website, focusing on improved user experience and mobile responsiveness.",
    imageUrl: "https://via.placeholder.com/600x400/1D4ED8/FFFFFF?text=Project+1", // Replace with your image
    link: "https://www.sarkariresult.com/", // Link to project details or live site
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Fitness Tracker Mobile App",
    description: "Developed a cross-platform mobile application to track fitness activities, goals, and provide personalized workout plans.",
    imageUrl: "https://via.placeholder.com/600x400/9333EA/FFFFFF?text=Project+2", // Replace with your image
    link: "#",
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "SaaS Dashboard UI/UX",
    description: "Designed an intuitive and aesthetically pleasing dashboard for a SaaS product, enhancing data visualization and user interaction.",
    imageUrl: "https://via.placeholder.com/600x400/059669/FFFFFF?text=Project+3", // Replace with your image
    link: "#",
  },
  {
    id: 4,
    category: "Web Development",
    title: "Corporate Website for Consulting Firm",
    description: "Built a professional and informative corporate website to showcase services, team, and client testimonials for a consulting firm.",
    imageUrl: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Project+4", // Replace with your image
    link: "#",
  },
  {
    id: 5,
    category: "Digital Marketing",
    title: "Lead Generation Campaign for Tech Startup",
    description: "Executed a comprehensive digital marketing campaign across various platforms, resulting in a significant increase in qualified leads.",
    imageUrl: "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Project+5", // Replace with your image
    link: "#",
  },
  {
    id: 6,
    category: "Mobile App",
    title: "Food Delivery App Prototype",
    description: "Created an interactive prototype for a modern food delivery mobile application, focusing on seamless ordering and delivery tracking.",
    imageUrl: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Project+6", // Replace with your image
    link: "#",
  },
];

const categories = ["All", ...new Set(projectsData.map(project => project.category))];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Latest Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our diverse portfolio showcasing innovative solutions and successful projects across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp delay-200">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-6 py-2 rounded-full text-lg font-medium transition duration-300 ease-in-out
                ${filter === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover" // Fixed height for consistency
              />
              <div className="p-6">
                <span className="text-sm font-semibold text-indigo-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition duration-200"
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4-4m0 0l-4-4m4 4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center text-gray-600 text-xl py-10">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;