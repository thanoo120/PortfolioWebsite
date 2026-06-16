import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceHighlights, portfolioOwner, timeline, education } from '../../data/portfolioData';
import SectionWrapper from '../common/SectionWrapper';
import ProtectedImage from '../common/ProtectedImage';

/* ─── data ─────────────────────────────────────────────────────────────── */
const tabs = [
  { id: 'about',      label: 'about.js',      icon: '📄' },
  { id: 'experience', label: 'experience.js',  icon: '💼' },
  { id: 'education',  label: 'education.js',   icon: '🎓' },
];

const fileTree = [
  { name: 'portfolio/',      type: 'folder', indent: 0 },
  { name: 'about.js',        type: 'file',   tab: 'about',       indent: 1 },
  { name: 'experience.js',   type: 'file',   tab: 'experience',  indent: 1 },
  { name: 'education.js',    type: 'file',   tab: 'education',   indent: 1 },
];

/* terminal lines per tab – each line types itself out */
const terminalScript = {
  about: [
    { prompt: true,  text: 'node about.js' },
    { prompt: false, text: '' },
    { prompt: false, text: `> name       : ${portfolioOwner.name}` },
    { prompt: false, text: `> role       : Full-Stack Developer` },
    { prompt: false, text: `> focus      : Spring Boot + React` },
    { prompt: false, text: '' },
    { prompt: false, text: '── Highlights ──────────────────────' },
    ...experienceHighlights.map(h => ({ prompt: false, text: `  ✓  ${h}` })),
    { prompt: false, text: '' },
    { prompt: false, text: `> email      : ${portfolioOwner.email}` },
    { prompt: false, text: `> github     : github.com/thanoo120` },
    { prompt: true,  text: '' },   // trailing cursor line
  ],
  experience: [
    { prompt: true,  text: 'node experience.js' },
    { prompt: false, text: '' },
    ...timeline.flatMap(item => [
      { prompt: false, text: `┌─ ${item.period}` },
      { prompt: false, text: `│  ${item.title}` },
      { prompt: false, text: `│  @ ${item.company}` },
      { prompt: false, text: `│  ${item.summary}` },
      { prompt: false, text: '└──────────────────────────────────' },
      { prompt: false, text: '' },
    ]),
    { prompt: true,  text: '' },
  ],
  education: [
    { prompt: true,  text: 'node education.js' },
    { prompt: false, text: '' },
    ...education.flatMap(edu => [
      { prompt: false, text: `┌─ ${edu.type.toUpperCase()}` },
      { prompt: false, text: `│  ${edu.institution}` },
      { prompt: false, text: `│  ${edu.period}  •  ${edu.details}` },
      { prompt: false, text: '│' },
      { prompt: false, text: '│  Roles & Achievements:' },
      ...(edu.roles || []).map(r => ({ prompt: false, text: `│    •  ${r}` })),
      { prompt: false, text: '└──────────────────────────────────' },
      { prompt: false, text: '' },
    ]),
    { prompt: true,  text: '' },
  ],
};

/* ─── typing terminal ───────────────────────────────────────────────────── */
const CHAR_SPEED   = 28;   // ms per character
const LINE_PAUSE   = 120;  // ms between lines
const PROMPT_PAUSE = 400;  // extra pause before a prompt line

function useTypingLines(lines) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [curLine,  setCurLine]  = useState(0);
  const [curChar,  setCurChar]  = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    setVisibleLines([]);
    setCurLine(0);
    setCurChar(0);
  }, [lines]);

  useEffect(() => {
    if (curLine >= lines.length) return;

    const line = lines[curLine];
    const fullText = line.text;

    if (curChar === 0) {
      // start a new line
      const pause = line.prompt ? PROMPT_PAUSE : LINE_PAUSE;
      const t = setTimeout(() => {
        if (fullText.length === 0) {
          // blank line – push immediately
          setVisibleLines(prev => [...prev, { ...line, rendered: '' }]);
          setCurLine(l => l + 1);
        } else {
          setVisibleLines(prev => [...prev, { ...line, rendered: '' }]);
          setCurChar(1);
        }
      }, pause);
      return () => clearTimeout(t);
    }

    // typing characters
    const t = setTimeout(() => {
      setVisibleLines(prev => {
        const next = [...prev];
        next[next.length - 1] = { ...next[next.length - 1], rendered: fullText.slice(0, curChar) };
        return next;
      });
      if (curChar >= fullText.length) {
        setCurLine(l => l + 1);
        setCurChar(0);
      } else {
        setCurChar(c => c + 1);
      }
    }, CHAR_SPEED);
    return () => clearTimeout(t);
  }, [curLine, curChar, lines]);

  const isTyping = curLine < lines.length;
  const caretLine = visibleLines.length - 1;
  return { visibleLines, isTyping, caretLine };
}

/* ─── terminal panel ────────────────────────────────────────────────────── */
const Terminal = ({ activeTab }) => {
  const lines = terminalScript[activeTab];
  const { visibleLines, isTyping, caretLine } = useTypingLines(lines);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibleLines.length]);

  const getColor = (line) => {
    if (line.prompt)                  return 'text-cyan-400';
    if (line.text.startsWith('┌') ||
        line.text.startsWith('└') ||
        line.text.startsWith('│'))    return 'text-slate-500';
    if (line.text.startsWith('──'))   return 'text-slate-600';
    if (line.text.startsWith('  ✓')) return 'text-emerald-400';
    if (line.text.startsWith('> '))   return 'text-green-300';
    return 'text-slate-300';
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0d14]">
      {/* terminal title bar */}
      <div className="flex items-center gap-2 border-b border-slate-700/50 bg-[#111118] px-4 py-2">
        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Terminal</span>
        <span className="ml-auto text-[10px] text-slate-600 font-mono">bash</span>
      </div>

      {/* output */}
      <div ref={scrollRef} className="flex-1 overflow-auto p-4 font-mono text-xs leading-6">
        <div className="mb-1 text-slate-600">
          thanoo@portfolio:~$&nbsp;
        </div>
        {visibleLines.map((line, i) => {
          const isLast    = i === visibleLines.length - 1;
          const showCaret = isLast && isTyping;
          const color     = getColor(line);

          return (
            <div key={i} className={`whitespace-pre-wrap ${color}`}>
              {line.prompt && (
                <span className="text-cyan-500 mr-1">❯</span>
              )}
              {line.rendered}
              {showCaret && (
                <span className="inline-block w-1.5 h-3.5 bg-cyan-400 align-middle ml-0.5 animate-pulse" />
              )}
            </div>
          );
        })}
        {/* blinking cursor on last prompt line when done typing */}
        {!isTyping && (
          <div className="text-cyan-400">
            <span className="text-cyan-500 mr-1">❯</span>
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 align-middle ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── syntax-highlighted code pane ─────────────────────────────────────── */
const Keyword = ({ c }) => <span className="text-purple-400">{c}</span>;
const Str     = ({ c }) => <span className="text-emerald-400">"{c}"</span>;
const Key     = ({ c }) => <span className="text-cyan-300">{c}</span>;
const Bracket = ({ c }) => <span className="text-yellow-300">{c}</span>;
const Cmt     = ({ c }) => <span className="text-slate-500 italic">// {c}</span>;

const CL = ({ n, delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -6 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.2 }}
    className="flex gap-3 leading-7"
  >
    <span className="w-5 flex-shrink-0 select-none text-right text-xs text-slate-700">{n}</span>
    <span className="text-sm">{children}</span>
  </motion.div>
);

const AboutCode = () => (
  <div className="space-y-0.5 font-mono">
    <CL n={1}  delay={0.05}><Keyword c="const" /> <Key c="developer" /> = <Bracket c="{" /></CL>
    <CL n={2}  delay={0.10}>&nbsp;&nbsp;<Key c="name" />: <Str c={portfolioOwner.name} />,</CL>
    <CL n={3}  delay={0.15}>&nbsp;&nbsp;<Key c="role" />: <Str c="Full-Stack Developer" />,</CL>
    <CL n={4}  delay={0.20}>&nbsp;&nbsp;<Key c="focus" />: <Str c="Spring Boot + React" />,</CL>
    <CL n={5}  delay={0.25}>&nbsp;&nbsp;<Key c="about" />: <Bracket c="[" /></CL>
    {portfolioOwner.about.match(/.{1,46}(\s|$)/g)?.map((chunk, i) => (
      <CL key={i} n={6 + i} delay={0.28 + i * 0.04}>
        <span className="text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;"{chunk.trim()}",</span>
      </CL>
    ))}
    <CL n={11} delay={0.55}>&nbsp;&nbsp;<Bracket c="]" />,</CL>
    <CL n={12} delay={0.58}><Bracket c="}" />;</CL>
    <CL n={13} delay={0.60}><span className="text-slate-700">&nbsp;</span></CL>
    <CL n={14} delay={0.62}><Cmt c="highlights" /></CL>
    {experienceHighlights.map((h, i) => (
      <CL key={i} n={15 + i} delay={0.65 + i * 0.06}>
        <span className="text-slate-300">&nbsp;&nbsp;<span className="text-yellow-300">▸</span> {h}</span>
      </CL>
    ))}
  </div>
);

const ExperienceCode = () => (
  <div className="space-y-0.5 font-mono">
    <CL n={1} delay={0.05}><Keyword c="const" /> <Key c="experience" /> = <Bracket c="[" /></CL>
    {timeline.map((item, i) => (
      <React.Fragment key={i}>
        <CL n={2 + i * 5} delay={0.08 + i * 0.18}>&nbsp;&nbsp;<Bracket c="{" /></CL>
        <CL n={3 + i * 5} delay={0.12 + i * 0.18}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="period" />: <Str c={item.period} />,</CL>
        <CL n={4 + i * 5} delay={0.16 + i * 0.18}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="title" />: <Str c={item.title} />,</CL>
        <CL n={5 + i * 5} delay={0.20 + i * 0.18}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="company" />: <Str c={item.company} />,</CL>
        <CL n={6 + i * 5} delay={0.24 + i * 0.18}>&nbsp;&nbsp;<Bracket c="}" />{i < timeline.length - 1 ? ',' : ''}</CL>
      </React.Fragment>
    ))}
    <CL n={2 + timeline.length * 5} delay={0.7}><Bracket c="]" />;</CL>
  </div>
);

const EducationCode = () => (
  <div className="space-y-0.5 font-mono">
    <CL n={1} delay={0.05}><Keyword c="const" /> <Key c="education" /> = <Bracket c="[" /></CL>
    {education.map((edu, i) => (
      <React.Fragment key={i}>
        <CL n={2 + i * 8}  delay={0.08 + i * 0.22}>&nbsp;&nbsp;<Bracket c="{" /></CL>
        <CL n={3 + i * 8}  delay={0.12 + i * 0.22}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="type" />: <Str c={edu.type} />,</CL>
        <CL n={4 + i * 8}  delay={0.16 + i * 0.22}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="institution" />: <Str c={edu.institution} />,</CL>
        <CL n={5 + i * 8}  delay={0.20 + i * 0.22}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="period" />: <Str c={edu.period} />,</CL>
        <CL n={6 + i * 8}  delay={0.24 + i * 0.22}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="degree" />: <Str c={edu.details} />,</CL>
        <CL n={7 + i * 8}  delay={0.28 + i * 0.22}>&nbsp;&nbsp;&nbsp;&nbsp;<Key c="roles" />: <Bracket c="[" /></CL>
        {edu.roles?.slice(0, 3).map((role, j) => (
          <CL key={j} n={8 + i * 8 + j} delay={0.32 + i * 0.22 + j * 0.05}>
            <span className="text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={role} />,</span>
          </CL>
        ))}
        <CL n={9  + i * 8} delay={0.48 + i * 0.22}>&nbsp;&nbsp;&nbsp;&nbsp;<Bracket c="]" />,</CL>
        <CL n={10 + i * 8} delay={0.52 + i * 0.22}>&nbsp;&nbsp;<Bracket c="}" />{i < education.length - 1 ? ',' : ''}</CL>
      </React.Fragment>
    ))}
    <CL n={2 + education.length * 8} delay={0.78}><Bracket c="]" />;</CL>
  </div>
);

/* ─── main component ────────────────────────────────────────────────────── */
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <SectionWrapper id="about">
      {/* heading */}
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          About Me
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Engineering mindset with product focus</h2>
        <p className="mt-2 text-slate-400">{portfolioOwner.role}</p>
      </div>

      {/* IDE window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-slate-700/60 bg-[#1e1e2e] shadow-2xl shadow-black/60"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-slate-700/60 bg-[#181825] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-4 text-xs text-slate-500 font-mono">portfolio — VS Code</span>
        </div>

        {/* body */}
        <div className="flex" style={{ minHeight: 'clamp(320px, 60vw, 540px)' }}>

          {/* ── file explorer sidebar ── */}
          <div className="hidden w-44 flex-shrink-0 border-r border-slate-700/50 bg-[#181825] md:block">
            <p className="px-3 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">Explorer</p>
            {fileTree.map((item) => (
              <button
                key={item.name}
                onClick={() => item.tab && setActiveTab(item.tab)}
                disabled={!item.tab}
                className={`flex w-full items-center gap-1.5 py-1 text-left text-[11px] font-mono transition-colors
                  ${item.type === 'folder' ? 'cursor-default text-slate-400' : 'cursor-pointer hover:bg-slate-700/30'}
                  ${item.tab === activeTab ? 'bg-slate-700/50 text-white' : 'text-slate-500'}
                `}
                style={{ paddingLeft: `${item.indent * 10 + 12}px` }}
              >
                {item.type === 'folder'
                  ? <span className="text-yellow-400 text-[10px]">▾</span>
                  : <span className="text-cyan-400 text-[10px]">◈</span>
                }
                {item.name}
              </button>
            ))}
          </div>

          {/* ── editor + terminal (stacked) ── */}
          <div className="flex flex-1 flex-col min-w-0">
            {/* tab bar */}
            <div className="flex border-b border-slate-700/50 bg-[#181825] overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 border-r border-slate-700/40 px-4 py-2.5 text-xs font-mono whitespace-nowrap transition-colors
                    ${activeTab === tab.id
                      ? 'border-t-2 border-t-cyan-400 bg-[#1e1e2e] text-white'
                      : 'text-slate-500 hover:bg-slate-800/40 hover:text-slate-300'
                    }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* split: code (left) | terminal (right) */}
            <div className="flex flex-1 min-h-0" style={{ height: 'clamp(280px, 55vw, 480px)' }}>

              {/* code editor */}
              <div className="flex-1 overflow-auto p-5 min-w-0 border-r border-slate-700/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {activeTab === 'about'      && <AboutCode />}
                    {activeTab === 'experience' && <ExperienceCode />}
                    {activeTab === 'education'  && <EducationCode />}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* typing terminal */}
              <div className="hidden md:block w-64 lg:w-80 flex-shrink-0 xl:w-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="h-full"
                  >
                    <Terminal activeTab={activeTab} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* status bar */}
            <div className="flex items-center justify-between border-t border-slate-700/50 bg-[#181825] px-4 py-1 text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400">⎇ main</span>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-4">
                <span>UTF-8</span>
                <span className="text-green-400">✓ No problems</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bio + Timeline panel */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid gap-8 lg:grid-cols-5"
      >
        {/* Left — profile card (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* avatar + name */}
          <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl font-bold text-white shadow-lg">
                ST
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">{portfolioOwner.name}</p>
                <p className="text-xs text-cyan-400 mt-0.5">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-400">{portfolioOwner.about}</p>
          </div>

          {/* stat chips */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '2+', label: 'Years Coding' },
              { value: '10+', label: 'Projects Built' },
              { value: '1', label: 'Internship' },
              { value: '4+', label: 'Tech Stacks' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* highlights */}
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/40 p-5 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Highlights</p>
            {experienceHighlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-1 text-cyan-400 flex-shrink-0">▸</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right — vertical timeline (3 cols) */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Journey</p>
          <div className="relative flex flex-col gap-0">
            {/* vertical line */}
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/30 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {/* dot */}
                <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/60 bg-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.25)]">
                  <span className="text-[10px] font-bold text-cyan-400">{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* card */}
                <div className="flex-1 rounded-2xl border border-slate-700/50 bg-slate-900/60 p-5 backdrop-blur-xl hover:border-cyan-400/30 transition-colors">
                  <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-400 mb-2">
                    {item.period}
                  </span>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.company}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;
