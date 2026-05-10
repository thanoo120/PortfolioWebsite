import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import Footer from './Footer';

const PageShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-x-hidden text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PageShell;
