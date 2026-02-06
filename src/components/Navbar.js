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
      {/* Modern Sidebar Navigation */}
      <nav className={`fixed left-0 top-0 h-full w-20 z-50 transition-all duration-300 ${scrolled ? 'bg-darkNav/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="flex flex-col items-center h-full py-8">
          {/* Logo */}
          <Link to="/" className="mb-8 group">
            <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30">
              <span className="text-dark font-bold text-xl">T</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex flex-col gap-6 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-br from-primary/30 to-secondary/30 text-primary'
                    : 'text-gray-400 hover:text-primary hover:bg-darkCard/50'
                }`}
                title={item.label}
              >
                <i className={`bi ${item.icon} text-xl`}></i>
                {isActive(item.path) && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/sanmugarasa-thanoogithan-923a70280/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-darkCard/50 transition-all duration-300 transform hover:scale-110"
            >
              <i className="bi bi-linkedin text-lg"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-darkCard/50 transition-all duration-300 transform hover:scale-110"
            >
              <i className="bi bi-github text-lg"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white"
        >
          <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-dark/95 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-64 glass border-l border-primary/20 p-8">
            <div className="flex flex-col gap-6 mt-20">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30'
                      : 'text-gray-300 hover:text-primary hover:bg-darkCard/50'
                  }`}
                >
                  <i className={`bi ${item.icon} text-xl`}></i>
                  <span className="font-semibold">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
