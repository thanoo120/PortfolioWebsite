import React from 'react';
import { motion } from 'framer-motion';
import { skillsByCategory } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionHeading
      badge="Skills"
      title="Tools and technologies I use to ship products"
      subtitle="From backend systems to modern frontend experiences and cloud deployment."
    />

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skillsByCategory.map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: index * 0.06 }}
          className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5 backdrop-blur-xl"
        >
          <h3 className="mb-4 text-xl font-semibold text-white">{group.category}</h3>
          <div className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-slate-800/70 px-3 py-2 text-base text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40"
                >
                  <Icon className="text-cyan-300" />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
