import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TypingEffect from '../components/TypingEffect';
import {
  MEDIUM_USERNAME,
  MEDIUM_ARTICLES_FALLBACK,
  mediumProfileUrl,
} from '../config/medium';

const stripHtml = (html) =>
  html ? html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';

const formatArticleDate = (pubDate) => {
  if (!pubDate) return '';
  const d = new Date(pubDate);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
};

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [mediumArticles, setMediumArticles] = useState([]);
  const [mediumLoading, setMediumLoading] = useState(true);
  const programmingSkills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loadMedium = async () => {
      if (!MEDIUM_USERNAME) {
        setMediumArticles(MEDIUM_ARTICLES_FALLBACK);
        setMediumLoading(false);
        return;
      }
      const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (cancelled) return;
        if (data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
          setMediumArticles(
            data.items.slice(0, 6).map((item) => ({
              title: item.title,
              url: item.link,
              pubDate: item.pubDate,
              excerpt: stripHtml(item.description || item.content || '').slice(0, 140),
            }))
          );
        } else {
          setMediumArticles(
            MEDIUM_ARTICLES_FALLBACK.length > 0
              ? MEDIUM_ARTICLES_FALLBACK
              : [{ title: 'My Medium', url: mediumProfileUrl(), pubDate: '', excerpt: 'Read all posts on my profile.' }]
          );
        }
      } catch {
        if (!cancelled) {
          setMediumArticles(
            MEDIUM_ARTICLES_FALLBACK.length > 0
              ? MEDIUM_ARTICLES_FALLBACK
              : [{ title: 'My Medium', url: mediumProfileUrl(), pubDate: '', excerpt: 'Read all posts on my profile.' }]
          );
        }
      } finally {
        if (!cancelled) setMediumLoading(false);
      }
    };
    loadMedium();
    return () => {
      cancelled = true;
    };
  }, []);

  const roles = ['Full Stack Developer', 'Mobile Developer', 'ML Enthusiast'];

  return (
    <div className="pt-20 relative z-10">
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
                href="/contact"
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
          <div
            className="relative w-full max-w-lg transition-transform duration-300"
            style={{
              transform: `translate(${(mousePosition.x - viewport.width / 2) / 80}px, ${(mousePosition.y - viewport.height / 2) / 80}px)`,
            }}
          >
            <img
              src="/IMG-20250402-WA0037%5B1%5D.jpg"
              alt="Thanoogithan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-slide-left">
              <img
                src="/WhatsApp Image 2025-04-06 at 18.50.19_a3cf671c.jpg"
                alt="About"
                className="w-full h-auto object-cover"
              />
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
                href="/about"
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
              <div className="flex flex-wrap gap-3">
                {programmingSkills.map((skill) => (
                  <span key={skill.name} className="inline-flex items-center gap-2 px-3 py-1.5 bg-darkCard/70 rounded-lg text-sm text-white border border-primary/30">
                    <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                    {skill.name}
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

      {/* Medium Articles — square cards */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 lg:mb-16 animate-slide-down">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-4">
                <span className="text-primary text-sm font-medium">Writing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Articles on Medium</h2>
              <p className="text-gray-400 mt-3 max-w-2xl text-base sm:text-lg">
                Long-form notes on tech, projects, and things I am learning.
              </p>
            </div>
            <a
              href={mediumProfileUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-xl hover:bg-primary/10 transition-all duration-300"
            >
              <i className="bi bi-medium"></i>
              Read on Medium
            </a>
          </div>

          {mediumLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="glass rounded-2xl border border-primary/20 aspect-square animate-pulse bg-darkCard/50"
                />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumArticles.map((article, index) => (
                <a
                  key={`${article.url}-${index}`}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col aspect-square p-6 sm:p-7 animate-slide-up relative"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-xl flex items-center justify-center mb-4 shrink-0 group-hover:scale-105 transition-transform">
                    <i className="bi bi-journal-text text-xl text-primary"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  {article.pubDate && (
                    <p className="text-xs text-gray-500 mb-2 shrink-0">{formatArticleDate(article.pubDate)}</p>
                  )}
                  {article.excerpt && (
                    <p className="text-sm text-gray-400 line-clamp-3 flex-1 min-h-0">{article.excerpt}</p>
                  )}
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-auto pt-4 shrink-0">
                    <span>Open article</span>
                    <i className="bi bi-box-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Preview — square cards */}
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
              href="/projects"
              className="mt-4 sm:mt-0 flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-xl hover:bg-primary/10 transition-all duration-300"
            >
              View All
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Fuel Quota Management', category: 'Spring Boot' },
              { name: 'Traffic Management', category: 'Spring Boot' },
              { name: 'Library Management', category: 'PHP' },
            ].map((project, index) => (
              <Link
                key={index}
                href="/projects"
                className="glass rounded-2xl p-6 sm:p-7 border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-slide-up flex flex-col aspect-square overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 transition-transform">
                  <i className="bi bi-folder text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1 min-h-0">{project.category}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-auto shrink-0">
                  <span>View projects</span>
                  <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
