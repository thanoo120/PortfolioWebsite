import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ['Full Stack Developer', 'Mobile Developer', 'ML Enthusiast'];

  return (
    <div className="lg:pl-24 pt-16 lg:pt-0 relative z-10">
      {/* Split Screen Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-8 animate-slide-down">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-slide-right">
              <span className="text-white">Hello,</span>
              <br />
              <span className="gradient-text">I'm Thanoogithan</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-300 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">
                <TypingEffect words={roles} />
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 leading-relaxed animate-slide-right" style={{ animationDelay: '0.4s' }}>
              Passionate about creating innovative solutions and bringing ideas to life through code.
              I specialize in building scalable applications and exploring the world of machine learning.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-slide-right" style={{ animationDelay: '0.6s' }}>
              <a
                href="/ThanooCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <i className="bi bi-download"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-4 border-2 border-primary/50 text-primary font-bold rounded-xl hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Done' },
                { number: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex w-1/2 relative items-center justify-center p-12 xl:p-20">
          <div className="relative w-full max-w-lg">
            {/* Animated gradient background */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl"
              style={{
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 50}px, ${(mousePosition.y - window.innerHeight / 2) / 50}px)`,
              }}
            ></div>
            
            {/* Image Container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-darkCard to-darkCard/50 rounded-3xl p-2 border border-primary/20">
                <img
                  src="/IMG-20250402-WA0037%5B1%5D.jpg"
                  alt="Thanoogithan"
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-slide-left">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img
                  src="/WhatsApp Image 2025-04-06 at 18.50.19_a3cf671c.jpg"
                  alt="About"
                  className="relative rounded-3xl w-full h-auto object-cover border-2 border-primary/20"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 animate-slide-right">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                <span className="text-primary text-sm font-medium">About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Creative Developer & Problem Solver</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I am Thanoogithan, a passionate Full Stack Developer & ML Enthusiast currently pursuing
                a Software Engineering Degree at the University of Kelaniya. I specialize in Java, Spring Boot,
                React, JavaScript, and Mobile App Development.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I am a good problem solver and I always like to do error fixing. Error fixing is one of the
                interesting things and it helps me to grow my knowledge. I like to learn new things and use
                them in my activities.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl text-primary font-semibold hover:bg-gradient-to-r hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
              >
                Learn More
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Modern Grid */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-slide-down">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary text-sm font-medium">Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">Technologies I Work With</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Programming Skills */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <i className="bi bi-code-slash text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C', 'C++', 'JavaScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-secondary/80 to-primary/80 rounded-lg text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <i className="bi bi-globe text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Spring Boot', 'HTML', 'CSS', 'PHP'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-secondary/80 to-primary/80 rounded-lg text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile & Database */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <i className="bi bi-phone text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile & Database</h3>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'React Native', 'MongoDB', 'Bootstrap'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-secondary/80 to-primary/80 rounded-lg text-sm text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="glass rounded-2xl p-6 sm:p-8 border border-primary/20 animate-slide-up">
            <h3 className="text-2xl font-bold gradient-text mb-6">Languages</h3>
            <div className="space-y-4">
              {[
                { name: 'Tamil', level: 100 },
                { name: 'English', level: 90 },
                { name: 'Sinhala', level: 50 },
              ].map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{lang.name}</span>
                    <span className="text-gray-400">{lang.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-slide-down">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary text-sm font-medium">Education</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">My Journey</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-12">
              {[
                { name: 'J/Vayavilan Central College', period: '2007-2020', icon: 'bi-mortarboard' },
                { name: 'University of Kelaniya', period: '2023-2027', desc: 'B.Sc (Hons) Software Engineering', icon: 'bi-university' },
              ].map((edu, index) => (
                <div key={index} className="relative pl-12 sm:pl-20 animate-slide-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-0 sm:left-4 top-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-4 border-dark">
                    <i className={`bi ${edu.icon} text-white text-sm`}></i>
                  </div>
                  <div className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.name}</h3>
                    <p className="text-primary font-semibold mb-1">{edu.period}</p>
                    {edu.desc && <p className="text-gray-400">{edu.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview - Masonry Style */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 lg:mb-16 animate-slide-down">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-4">
                <span className="text-primary text-sm font-medium">Projects</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Featured Work</h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 sm:mt-0 flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-xl hover:bg-primary/10 transition-all duration-300"
            >
              View All
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Fuel Quota Management', category: 'Spring Boot', size: 'lg:col-span-2' },
              { name: 'Traffic Management', category: 'Spring Boot' },
              { name: 'Library Management', category: 'PHP', size: 'lg:col-span-2' },
            ].map((project, index) => (
              <div
                key={index}
                className={`glass rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-slide-up ${project.size || ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="bi bi-folder text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <span>View Project</span>
                  <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
