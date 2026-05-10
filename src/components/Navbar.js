import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { navItems, portfolioOwner } from '../data/portfolioData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const socialLinks = [
    { href: portfolioOwner.github, icon: FiGithub, label: 'GitHub' },
    { href: portfolioOwner.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
    { href: `mailto:${portfolioOwner.email}`, icon: FiMail, label: 'Email' },
  ];

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
                className="rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/20 hover:bg-slate-800/60 hover:text-cyan-300"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-cyan-300/20 bg-slate-900/50 p-2.5 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-300"
                  aria-label={item.label}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>

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
              <div className="mt-6 flex gap-3 border-t border-cyan-300/20 pt-6">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-cyan-300/20 bg-slate-900/50 p-2.5 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
