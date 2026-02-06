import React from 'react';

const Footer = () => {
  return (
    <footer className="pl-20 relative z-10 mt-20 border-t border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-gray-400 text-sm hover:text-primary transition-colors duration-300">
            &copy; 2025 <span className="text-primary font-semibold">Thanoogithan</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <i className="bi bi-heart-fill text-red-500 animate-pulse"></i>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
