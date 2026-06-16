import React from 'react';

const techStack = [
  { name: 'Java', color: '#f89820' },
  { name: 'Spring Boot', color: '#6db33f' },
  { name: 'React.js', color: '#61dafb' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MySQL', color: '#4479a1' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'Tailwind CSS', color: '#38bdf8' },
  { name: 'REST APIs', color: '#a78bfa' },
  { name: 'JWT', color: '#fb923c' },
  { name: 'Git', color: '#f05032' },
];

const MarqueeRow = ({ items, reverse = false }) => (
  <div className="flex overflow-hidden">
    <div
      className="flex shrink-0 gap-8 items-center py-3"
      style={{
        animation: `marquee${reverse ? '-reverse' : ''} 28s linear infinite`,
        width: 'max-content',
      }}
    >
      {[...items, ...items].map((tech, i) => (
        <span
          key={i}
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400 whitespace-nowrap"
        >
          <span
            className="inline-block w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: tech.color }}
          />
          {tech.name}
        </span>
      ))}
    </div>
  </div>
);

const TechMarquee = () => (
  <section className="py-4 border-y border-cyan-300/10 bg-slate-900/40 overflow-hidden relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    />
    <MarqueeRow items={techStack} />
    <style>{`
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        from { transform: translateX(-50%); }
        to   { transform: translateX(0); }
      }
    `}</style>
  </section>
);

export default TechMarquee;
