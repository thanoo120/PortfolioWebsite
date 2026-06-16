import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiMail } from 'react-icons/fi';

const CTASection = () => (
  <section className="relative z-10 px-4 py-20 sm:px-8 lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl rounded-3xl border border-cyan-300/20 bg-slate-900/60 px-4 py-10 sm:px-8 sm:py-16 text-center shadow-[0_0_60px_rgba(34,211,238,0.07)] backdrop-blur-xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-4 inline-block rounded-full border border-cyan-300/30 bg-slate-800/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-300"
      >
        Open to opportunities
      </motion.div>

      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
        Ready to build something{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          great together?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
        I'm currently looking for new opportunities and collaborations. Whether you have a project
        in mind or just want to say hi, my inbox is always open.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ScrollLink
          to="contact"
          smooth
          duration={550}
          offset={-80}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-base font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
        >
          <FiMail size={18} /> Get In Touch
        </ScrollLink>
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl" />
    </motion.div>
  </section>
);

export default CTASection;
