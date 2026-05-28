import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceHighlights, portfolioOwner, timeline, education } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';
import ProtectedImage from '../common/ProtectedImage';

const AboutSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (institution) => {
    setImageErrors(prev => ({ ...prev, [institution]: true }));
  };

  return (
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

      {/* Education Section */}
      <div className="mt-12">
        <h2 className="mb-8 text-3xl font-bold text-white">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <motion.div
              key={`${edu.institution}-${edu.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-emerald-300/20 bg-slate-900/60 p-6 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-3xl font-bold text-white overflow-hidden">
                  {edu.image && !imageErrors[edu.institution] ? (
                    <ProtectedImage
                      src={edu.image}
                      alt={edu.institution}
                      className="h-full w-full object-contain p-1"
                      onError={() => handleImageError(edu.institution)}
                    />
                  ) : (
                    edu.icon
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{edu.type}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{edu.institution}</h3>
                  <p className="mt-1 text-sm text-slate-400">{edu.period}</p>
                  <p className="mt-2 text-sm font-medium text-cyan-300">{edu.details}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{edu.description}</p>
              
              {/* Roles and Achievements */}
              {edu.roles && edu.roles.length > 0 && (
                <div className="mt-4 border-t border-emerald-300/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">Roles & Achievements</p>
                  <ul className="space-y-2">
                    {edu.roles.map((role) => (
                      <li key={role} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
