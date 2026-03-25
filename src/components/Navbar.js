import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: 'bi-house' },
    { path: '/about', label: 'About', icon: 'bi-person' },
    { path: '/projects', label: 'Projects', icon: 'bi-folder' },
    { path: '/contact', label: 'Contact', icon: 'bi-envelope' },
  ];

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className={`hidden lg:flex fixed left-0 top-0 h-full w-24 z-50 transition-all duration-300 ${scrolled ? 'bg-darkNav/95 backdrop-blur-md border-r border-primary/10' : 'bg-transparent'}`}>
        <div className="flex flex-col items-center h-full py-6 px-3">
          {/* Logo */}
          <Link to="/" className="mb-10 group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30">
              <span className="text-dark font-bold text-xl">T</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex flex-col gap-4 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-br from-primary/30 to-secondary/30 text-primary'
                    : 'text-gray-400 hover:text-primary hover:bg-darkCard/50'
                }`}
                title={item.label}
              >
                <i className={`bi ${item.icon} text-xl`}></i>
                {isActive(item.path) && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-primary to-secondary rounded-r-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/sanmugarasa-thanoogithan-923a70280/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:text-primary hover:bg-darkCard/50 transition-all duration-300 transform hover:scale-110"
            >
              <i className="bi bi-linkedin text-lg"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:text-primary hover:bg-darkCard/50 transition-all duration-300 transform hover:scale-110"
            >
              <i className="bi bi-github text-lg"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-primary/10">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/" className="group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30">
              <span className="text-dark font-bold">T</span>
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white"
          >
            <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-dark/95 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-72 glass border-l border-primary/20 p-8">
            <div className="flex flex-col gap-4 mt-24">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30'
                      : 'text-gray-300 hover:text-primary hover:bg-darkCard/50'
                  }`}
                >
                  <i className={`bi ${item.icon} text-xl`}></i>
                  <span className="font-semibold text-lg">{item.label}</span>
                </Link>
              ))}
              <div className="flex gap-4 mt-8 pt-8 border-t border-primary/20">
                <a
                  href="https://www.linkedin.com/in/sanmugarasa-thanoogithan-923a70280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-primary/20 text-gray-300 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <i className="bi bi-linkedin text-xl"></i>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-primary/20 text-gray-300 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <i className="bi bi-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
