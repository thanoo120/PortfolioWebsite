import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { portfolioOwner } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Placeholder for EmailJS integration.
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact" className="pb-10">
      <SectionHeading badge="Contact" title="Let’s build something impactful together" />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white">Reach Out</h3>
          <p className="mt-3 text-lg text-slate-300">
            Open to Software Engineer, Backend Developer, and Full-Stack Developer opportunities.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`mailto:${portfolioOwner.email}`} className="flex items-center gap-2 text-base text-cyan-200">
              <FiMail /> {portfolioOwner.email}
            </a>
            <a href={portfolioOwner.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-base text-cyan-200">
              <FiLinkedin /> LinkedIn Profile
            </a>
            <a href={portfolioOwner.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-base text-cyan-200">
              <FiGithub /> GitHub Profile
            </a>
          </div>
         
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 backdrop-blur-xl"
        >
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={onChange}
            placeholder="Name"
            className="w-full rounded-xl border border-cyan-300/20 bg-slate-800/70 px-4 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={onChange}
            placeholder="Email"
            className="w-full rounded-xl border border-cyan-300/20 bg-slate-800/70 px-4 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50"
          />
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={onChange}
            rows="6"
            placeholder="Message"
            className="w-full resize-none rounded-xl border border-cyan-300/20 bg-slate-800/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/50"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            <FiSend /> Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
