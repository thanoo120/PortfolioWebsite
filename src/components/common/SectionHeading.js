import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ badge, title, subtitle, center = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55 }}
    className={`${center ? 'text-center' : 'text-left'} mb-12`}
  >
    <span className="inline-flex rounded-full border border-cyan-400/30 bg-slate-900/70 px-4 py-1 text-sm font-medium text-cyan-300">
      {badge}
    </span>
    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {subtitle ? <p className="mx-auto mt-4 max-w-3xl text-slate-300">{subtitle}</p> : null}
  </motion.div>
);

export default SectionHeading;
