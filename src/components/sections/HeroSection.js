import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { SiMysql, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { heroRoles, portfolioOwner } from '../../data/portfolioData';
import TypingEffect from '../TypingEffect';
import SectionWrapper from '../common/SectionWrapper';

const profilePhoto = '/IMG-20250402-WA0037%5B1%5D.jpg';
const floatingTech = [
  { icon: FaJava, className: '-left-3 top-10', delay: 0.1 },
  { icon: SiSpringboot, className: 'right-2 top-8', delay: 0.2 },
  { icon: FaReact, className: '-right-4 top-1/2', delay: 0.3 },
  { icon: FaNodeJs, className: 'left-3 bottom-8', delay: 0.25 },
  { icon: SiMysql, className: 'right-16 bottom-4', delay: 0.35 },
  { icon: SiTailwindcss, className: 'left-1/2 -top-4', delay: 0.15 },
];

const HeroSection = () => {
  return (
    <SectionWrapper id="home" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-36">
      <div className="grid items-center gap-10 lg:gap-20 xl:gap-40 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-cyan-300/40 bg-slate-900/70 px-3 py-1 text-sm text-cyan-300"
          >
            Available for software engineering opportunities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {portfolioOwner.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-2xl font-semibold text-cyan-300 sm:text-3xl"
          >
            <TypingEffect words={heroRoles} />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-7 text-slate-300 sm:text-xl"
          >
            {portfolioOwner.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={portfolioOwner.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              <FiDownload /> Download Resume
            </a>
            <ScrollLink
              to="projects"
              smooth
              duration={550}
              offset={-80}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-cyan-300/35 bg-slate-900/60 px-5 py-3 text-base font-semibold text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-300/60"
            >
              <FiSend /> View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              duration={550}
              offset={-80}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-purple-300/35 bg-slate-900/60 px-5 py-3 text-base font-semibold text-purple-200 transition hover:-translate-y-0.5 hover:border-purple-300/60"
            >
              <FiMail /> Contact Me
            </ScrollLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-3"
          >
            <a href={portfolioOwner.github} target="_blank" rel="noreferrer" className="rounded-lg border border-cyan-300/25 bg-slate-900/60 p-3 text-cyan-200 transition hover:border-cyan-300/60">
              <FiGithub size={18} />
            </a>
            <a href={portfolioOwner.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-cyan-300/25 bg-slate-900/60 p-3 text-cyan-200 transition hover:border-cyan-300/60">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${portfolioOwner.email}`} className="rounded-lg border border-cyan-300/25 bg-slate-900/60 p-3 text-cyan-200 transition hover:border-cyan-300/60">
              <FiMail size={18} />
            </a>
          </motion.div>
        </div>

        <div className="relative mt-4 lg:mt-0">
          <div className="rounded-3xl border border-cyan-300/20 bg-slate-900/50 p-4 sm:p-8 shadow-[0_0_50px_rgba(34,211,238,0.13)] backdrop-blur-xl">
            <div className="mb-5 overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-800/70">
              <img
                src={profilePhoto}
                alt="Sanmugarasa Thanoogithan"
                className="h-[280px] w-full object-cover object-top sm:h-[420px] lg:h-[520px] xl:h-[576px]"
              />
            </div>
          </div>
          {floatingTech.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.className}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, delay: item.delay }}
                className={`absolute ${item.className} hidden sm:flex rounded-xl border border-cyan-300/30 bg-slate-900/70 p-2.5 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-xl`}
              >
                <Icon size={18} />
              </motion.div>
            );
          })}
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
