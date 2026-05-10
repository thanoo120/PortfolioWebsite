import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const experienceData = [
  {
    title: 'Software Engineering Intern',
    company: 'Codelantic',
    period: '2024 - 2025',
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
    period: '2025 - Present',
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

    <div className="relative mx-auto max-w-4xl space-y-6 before:absolute before:left-4 before:top-2 before:h-[95%] before:w-px before:bg-gradient-to-b before:from-cyan-300/60 before:to-purple-300/20 sm:before:left-1/2">
      {experienceData.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`relative rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 backdrop-blur-xl sm:w-[48%] ${index % 2 === 0 ? 'sm:ml-auto' : ''}`}
        >
          <span className="absolute -left-6 top-7 hidden h-3 w-3 rounded-full bg-cyan-300 sm:block" />
          <p className="text-sm text-cyan-300">{item.period}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-purple-200">{item.company}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {item.bullets.map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
