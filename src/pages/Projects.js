import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      name: 'Fuel Quota Management System',
      url: 'https://github.com/NadeeshaMedagama/fuel-quota-management-system',
      category: 'spring-boot',
      icon: 'bi-fuel-pump',
      color: 'from-primary to-accent',
      description: 'A comprehensive system for managing fuel quotas efficiently',
    },
    {
      name: 'Spring Boot Demo Project',
      url: 'https://github.com/thanoo120/firstSpringbootdemoproject',
      category: 'spring-boot',
      icon: 'bi-gear',
      color: 'from-accent to-secondary',
      description: 'Demonstration of Spring Boot capabilities',
    },
    {
      name: 'Traffic Management System',
      url: 'https://github.com/thanoo120/traficManagement',
      category: 'spring-boot',
      icon: 'bi-traffic-light',
      color: 'from-secondary to-primary',
      description: 'Smart traffic management solution',
    },
    {
      name: 'Library Management System',
      url: 'https://github.com/kavindupbsr/Library-website',
      category: 'php',
      icon: 'bi-book',
      color: 'from-primary to-secondary',
      description: 'Complete library management platform',
    },
    {
      name: 'Blocking Application',
      url: 'https://github.com/thanoo120/Fullstack1',
      category: 'spring-boot',
      icon: 'bi-shield-lock',
      color: 'from-accent to-primary',
      description: 'Security-focused blocking application',
    },
    {
      name: 'My React App',
      url: 'https://github.com/thanoo120/my-react-app',
      category: 'React',
      icon: 'bi-code-slash',
      color: 'from-secondary to-accent',
      description: 'Modern React application showcase',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="lg:pl-24 pt-16 lg:pt-0 min-h-screen relative z-10">
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12 lg:mb-16 animate-slide-down">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">My Projects</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            A collection of projects showcasing my skills and experience in software development
          </p>
        </div>

        {/* Filter */}
        <div className="max-w-7xl mx-auto mb-12 animate-slide-up">
          <div className="flex flex-wrap gap-3">
            {['all', 'spring-boot', 'php', 'React'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                    : 'glass border border-primary/30 text-gray-300 hover:text-primary hover:border-primary/50'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden animate-slide-up ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <i className={`bi ${project.icon} text-3xl text-white`}></i>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-secondary/80 to-primary/80 rounded-lg text-sm text-white font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-primary group-hover:text-accent transition-colors">
                      <span className="text-sm font-semibold">View</span>
                      <i className="bi bi-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </a>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 animate-slide-up">
              <div className="inline-block p-8 bg-darkCard rounded-full mb-6">
                <i className="bi bi-inbox text-6xl text-gray-600"></i>
              </div>
              <p className="text-gray-400 text-xl">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
