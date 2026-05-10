import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { portfolioOwner } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();
  const social = [
    { href: portfolioOwner.github, label: 'GitHub', icon: FiGithub },
    { href: portfolioOwner.linkedin, label: 'LinkedIn', icon: FiLinkedin },
    { href: `mailto:${portfolioOwner.email}`, label: 'Email', icon: FiMail },
  ];

  return (
    <footer className="relative z-10 mt-16 border-t border-cyan-300/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:px-8 md:flex-row lg:px-16">
        <p>
          &copy; {year} <span className="font-semibold text-cyan-300">{portfolioOwner.name}</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-cyan-300/20 bg-slate-900/50 p-2 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                aria-label={item.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
        <p className="text-slate-500">Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
