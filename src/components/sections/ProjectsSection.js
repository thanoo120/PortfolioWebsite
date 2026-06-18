import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { featuredProjects } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionHeading
      badge="Featured Projects"
      title="Selected full-stack and backend-focused builds"
      subtitle="Production-style project cards with impact-driven summaries and technology stacks."
    />

    <div className="grid gap-6 md:grid-cols-2">
      {featuredProjects.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: index * 0.08 }}
          className="group overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/60 backdrop-blur-xl"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
            <p className="mt-2 text-base leading-6 text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan-300/20 bg-slate-800/70 px-3 py-1 text-sm text-cyan-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/35 px-4 py-2 text-base font-medium text-cyan-200 transition hover:border-cyan-300/60"
              >
                <FiGithub /> GitHub
              </a>
              <button
                onClick={() => alert('Demo video not updated yet.')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 cursor-pointer"
              >
                <FiExternalLink /> Live Demo
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
