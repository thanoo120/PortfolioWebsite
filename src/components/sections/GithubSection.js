import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const GithubSection = () => (
  <SectionWrapper id="github">
    <SectionHeading badge="GitHub Insights" title="Code consistency and contribution snapshot" />

    <div className="grid gap-4">
      {[
        'https://github-readme-stats.vercel.app/api?username=thanoo120&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117',
        'https://streak-stats.demolab.com?user=thanoo120&theme=tokyonight&hide_border=true&background=0D1117',
        'https://github-readme-stats.vercel.app/api/top-langs/?username=thanoo120&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117',
      ].map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.08 }}
          className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-2 backdrop-blur-xl"
        >
          <img src={src} alt="GitHub stats visual" className="w-full rounded-xl" />
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default GithubSection;
