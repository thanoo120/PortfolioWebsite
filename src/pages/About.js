import React from 'react';

const About = () => {
  return (
    <div className="pl-20 min-h-screen relative z-10">
      <section className="px-6 sm:px-12 lg:px-20 py-32">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-slide-down">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">About</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black gradient-text mb-6">About Me</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            I am Thanoogithan, a passionate Full Stack Developer & ML Enthusiast currently pursuing
            a Software Engineering Degree at the University of Kelaniya.
          </p>
        </div>

        {/* Profile Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img
                  src="/WhatsApp Image 2025-04-06 at 18.50.19_a3cf671c.jpg"
                  alt="Profile"
                  className="relative rounded-3xl w-full h-auto object-cover border-2 border-primary/20"
                />
              </div>
            </div>
            <div className="space-y-6 animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Full Stack Developer & ML Enthusiast</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in Java, Spring Boot, React, JavaScript, and Mobile App Development.
                I am a good problem solver and I always like to do error fixing. Error fixing is one of the
                interesting things and it helps me to grow my knowledge.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I like to learn new things and use them in my activities. My passion for technology drives me
                to continuously improve and explore new possibilities in software development.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 glass rounded-xl border border-primary/30">
                  <span className="text-primary font-semibold">Problem Solver</span>
                </div>
                <div className="px-4 py-2 glass rounded-xl border border-primary/30">
                  <span className="text-primary font-semibold">Quick Learner</span>
                </div>
                <div className="px-4 py-2 glass rounded-xl border border-primary/30">
                  <span className="text-primary font-semibold">Team Player</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12 animate-slide-down">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            <div className="space-y-12">
              {[
                { name: 'J/Vayavilan Central College', period: '2007-2020', icon: 'bi-mortarboard' },
                { name: 'University of Kelaniya', period: '2023-2027', desc: 'B.Sc (Hons) Software Engineering', icon: 'bi-university' },
              ].map((edu, index) => (
                <div key={index} className="relative pl-20 animate-slide-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-4 top-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-4 border-dark">
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

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12 animate-slide-down">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up">
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
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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

          {/* Soft Skills */}
          <div className="glass rounded-2xl p-8 border border-primary/20 animate-slide-up">
            <h3 className="text-2xl font-bold gradient-text mb-6 flex items-center gap-3">
              <i className="bi bi-people"></i>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Good Communication', 'Time Management', 'Team Work', 'Leadership'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gradient-to-r from-secondary/80 to-primary/80 rounded-xl text-white font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-down">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Languages</h2>
          </div>
          <div className="glass rounded-2xl p-8 border border-primary/20 animate-slide-up">
            <div className="space-y-6">
              {[
                { name: 'Tamil', level: 100 },
                { name: 'English', level: 90 },
                { name: 'Sinhala', level: 50 },
              ].map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold text-lg">{lang.name}</span>
                    <span className="text-gray-400">{lang.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
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
    </div>
  );
};

export default About;
