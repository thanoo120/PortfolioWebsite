import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { FiDownload } from 'react-icons/fi';
import { navItems, portfolioOwner } from '../data/portfolioData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-300/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <ScrollLink
            to="home"
            smooth
            offset={-90}
            duration={550}
            className="cursor-pointer bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent"
          >
            ST.Dev
          </ScrollLink>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth
                spy
                offset={-90}
                duration={500}
                activeClass="text-cyan-300 border-cyan-300/50 bg-slate-800/70"
                className="rounded-xl border border-transparent px-3 py-2 text-2xl font-medium text-slate-300 transition hover:border-cyan-400/20 hover:bg-slate-800/60 hover:text-cyan-300"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          <a
            href={portfolioOwner.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-400/70 md:flex"
          >
            <FiDownload size={16} />
            Resume
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-xl border border-cyan-300/30 bg-slate-900/60 p-3 text-white md:hidden"
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-slate-950/80" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 border-l border-cyan-300/20 bg-slate-950/90 p-6 pt-24 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth
                  spy
                  offset={-80}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  activeClass="text-cyan-300 border-cyan-300/50 bg-slate-800/70"
                  className="rounded-xl border border-transparent px-4 py-3 text-base font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:bg-slate-800/70 hover:text-cyan-300"
                >
                  {item.label}
                </ScrollLink>
              ))}
              <a
                href={portfolioOwner.resumeUrl}
                download
                className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-3 text-base font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-400/70"
              >
                <FiDownload size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
