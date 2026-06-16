import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const experienceData = [
  {
    title: 'Software Engineering Intern',
    company: 'Codelantic',
    period: '2025 November - 2026 May',
    bullets: [
      'Developed backend API modules with Spring Boot and structured service layers.',
      'Worked on microservices communication and performance improvements.',
      'Collaborated in Agile sprints and delivered incremental releases.',
      'Contributed to team Git workflows, PR reviews, and branch management.',
    ],
  },
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Independent',
    period: '2024 - Present',
    bullets: [
      'Built responsive frontend interfaces with React and reusable components.',
      'Designed and integrated REST APIs with authentication and validation.',
      'Handled end-to-end feature delivery from planning to deployment.',
      'Implemented clean architecture patterns for maintainability and scale.',
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionHeading badge="Experience" title="Practical industry and freelance delivery" />

    <div className="relative mx-auto max-w-4xl">
      {/* vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/60 to-purple-300/20 sm:left-1/2 sm:-translate-x-1/2" />

      <div className="space-y-12">
        {experienceData.map((item, index) => {
          const isRight = index % 2 === 0;
          return (
            <div key={item.title} className="relative flex items-start sm:items-center">
              {/* dot on the center line */}
              <span className="absolute left-4 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-cyan-300 bg-slate-900 sm:left-1/2" />

              {/* horizontal connector line — dot to card */}
              <div className={`absolute top-1/2 hidden h-px w-[4%] -translate-y-1/2 bg-cyan-300/40 sm:block ${isRight ? 'sm:left-1/2' : 'sm:right-1/2'}`} />

              {/* spacer for opposite side on desktop */}
              {isRight && <div className="hidden sm:block sm:w-1/2" />}

              <motion.article
                initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`relative ml-10 w-full rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6 backdrop-blur-xl
                  sm:ml-0 sm:w-[46%]
                  ${!isRight ? 'sm:ml-auto' : ''}`}
              >
                <p className="text-sm font-semibold text-cyan-400">{item.period}</p>
                <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.company}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </motion.article>
            </div>
          );
        })}
      </div>
    </div>
  </SectionWrapper>

);

export default ExperienceSection;
