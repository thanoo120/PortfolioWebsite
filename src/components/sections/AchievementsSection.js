import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { achievements } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <SectionHeading badge="Achievements" title="Recognition through practical problem-solving" />

    <div className="grid gap-5 md:grid-cols-2">
      {achievements.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.08 }}
          className="rounded-2xl border border-purple-300/20 bg-slate-900/60 p-6 backdrop-blur-xl"
        >
          <div className="mb-4 inline-flex rounded-lg border border-cyan-300/30 bg-slate-800/70 p-3 text-cyan-300">
            <FiAward size={18} />
          </div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-slate-300">{item.description}</p>
        </motion.article>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
