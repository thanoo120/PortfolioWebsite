import React from 'react';
import { motion } from 'framer-motion';
import { experienceHighlights, portfolioOwner, timeline } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionHeading badge="About Me" title="Engineering mindset with product focus" subtitle={portfolioOwner.role} />

    <div className="grid gap-8 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-7 backdrop-blur-xl"
      >
        <p className="leading-7 text-slate-300">{portfolioOwner.about}</p>
        <div className="mt-6 space-y-3">
          {experienceHighlights.map((item) => (
            <p key={item} className="rounded-lg border border-cyan-300/20 bg-slate-800/60 px-4 py-3 text-sm text-slate-200">
              {item}
            </p>
          ))}
        </div>
      </motion.div>

      <div className="space-y-4">
        {timeline.map((item) => (
          <motion.article
            key={`${item.title}-${item.period}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl border border-purple-300/20 bg-slate-900/60 p-5 pl-8 backdrop-blur-xl"
          >
            <span className="absolute left-3 top-8 h-2.5 w-2.5 rounded-full bg-cyan-300" />
            <p className="text-sm text-cyan-300">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-purple-200">{item.company}</p>
            <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
