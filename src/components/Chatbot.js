import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { portfolioOwner, skillsByCategory, featuredProjects, timeline, achievements, education } from '../data/portfolioData';

const SUGGESTED_QUESTIONS = [
  'Who are you?',
  'What are your skills?',
  'Tell me about your projects',
  'What is your experience?',
  'How can I contact you?',
];

function getResponse(message) {
  const msg = message.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|howdy|sup|good\s*(morning|evening|afternoon))/.test(msg)) {
    return `Hi there! 👋 I'm Thanoo's portfolio assistant. I can tell you about his skills, projects, experience, and more. What would you like to know?`;
  }

  // Who / about / introduce
  if (/\b(who|about|introduce|yourself|tell me about|bio|background)\b/.test(msg)) {
    return `${portfolioOwner.name} is a ${portfolioOwner.role}.\n\n${portfolioOwner.about}`;
  }

  // Skills
  if (/\b(skill|tech|stack|know|language|framework|tool|technology|technologies)\b/.test(msg)) {
    const lines = skillsByCategory.map(
      (cat) => `• **${cat.category}:** ${cat.skills.map((s) => s.name).join(', ')}`
    );
    return `Here are Thanoo's technical skills:\n\n${lines.join('\n')}`;
  }

  // Projects
  if (/\b(project|work|built|made|developed|app|application|portfolio work)\b/.test(msg)) {
    const lines = featuredProjects.map(
      (p) => `• **${p.name}** — ${p.description}\n  Tech: ${p.tech.join(', ')}`
    );
    return `Thanoo has built ${featuredProjects.length} featured projects:\n\n${lines.join('\n\n')}`;
  }

  // Experience / internship / job
  if (/\b(experience|internship|intern|job|work history|career|employment)\b/.test(msg)) {
    const lines = timeline.map(
      (t) => `• **${t.title}** at ${t.company} (${t.period})\n  ${t.summary}`
    );
    return `Here's Thanoo's experience:\n\n${lines.join('\n\n')}`;
  }

  // Education
  if (/\b(education|university|college|school|degree|study|studying|academic)\b/.test(msg)) {
    const lines = education.map(
      (e) => `• **${e.institution}** (${e.period})\n  ${e.details} — ${e.description}`
    );
    return `Thanoo's educational background:\n\n${lines.join('\n\n')}`;
  }

  // Contact / email / hire
  if (/\b(contact|email|reach|hire|connect|linkedin|github|social|message)\b/.test(msg)) {
    return `You can reach Thanoo through:\n\n• **Email:** ${portfolioOwner.email}\n• **GitHub:** ${portfolioOwner.github}\n• **LinkedIn:** ${portfolioOwner.linkedin}\n\nOr use the Contact section on this page!`;
  }

  // Resume / CV
  if (/\b(resume|cv|download|pdf)\b/.test(msg)) {
    return `You can download Thanoo's resume here: **${portfolioOwner.resumeUrl}**\n\nIt's also available via the "Download CV" button in the hero section.`;
  }

  // Achievements / awards
  if (/\b(achievement|award|award|recognition|win|winner|hackathon|hackerrank)\b/.test(msg)) {
    const lines = achievements.map((a) => `• **${a.title}** — ${a.description}`);
    return `Thanoo's notable achievements:\n\n${lines.join('\n')}`;
  }

  // Java / Spring Boot specific
  if (/\b(java|spring|spring boot|microservice|backend)\b/.test(msg)) {
    return `Java and Spring Boot are Thanoo's core backend expertise. He has built microservices, REST APIs, JWT-secured systems, and production-grade applications using Spring Boot — including during his internship at Codelantic.`;
  }

  // React specific
  if (/\b(react|frontend|ui|interface)\b/.test(msg)) {
    return `Thanoo is proficient in React.js and React Native for building modern frontends. He uses Tailwind CSS for styling and Framer Motion for animations — this very portfolio is built with those!`;
  }

  // Location / availability
  if (/\b(where|location|country|available|availability|remote|onsite)\b/.test(msg)) {
    return `Thanoo is based in Sri Lanka and is open to remote and onsite opportunities. Feel free to reach out at **${portfolioOwner.email}** to discuss further!`;
  }

  // Thanks / goodbye
  if (/\b(thank|thanks|bye|goodbye|see you|cya|cheers)\b/.test(msg)) {
    return `You're welcome! 😊 Feel free to ask anything else about Thanoo's work. Have a great day!`;
  }

  // Fallback
  return `I'm not sure about that, but I can help with:\n\n• Skills & technologies\n• Projects\n• Experience & internship\n• Education\n• Contact info\n• Achievements\n\nTry asking one of those! 😊`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: `Hi! 👋 I'm Thanoo's portfolio assistant. Ask me anything about his skills, projects, or experience!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  function send(text) {
    const userText = text || input.trim();
    if (!userText) return;
    setInput('');
    setMessages((prev) => [...prev, { from: 'user', text: userText }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: getResponse(userText) }]);
      setTyping(false);
    }, 600);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 flex items-center justify-center text-white hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <FaTimes size={20} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <FaRobot size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute w-14 h-14 rounded-full border-2 border-cyan-400 animate-ping opacity-30 pointer-events-none" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl shadow-black/40 border border-slate-700/60 overflow-hidden flex flex-col"
            style={{ maxHeight: '70vh' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <FaRobot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-none">Portfolio Assistant</p>
                <p className="text-cyan-100 text-xs mt-0.5">Ask me about Thanoo</p>
              </div>
              <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" title="Online" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-[#0f172a] px-3 py-3 space-y-3 text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[82%] px-3 py-2 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                      m.from === 'user'
                        ? 'bg-cyan-600 text-white rounded-br-sm'
                        : 'bg-slate-800 text-slate-200 rounded-bl-sm border border-slate-700/50'
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: m.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br/>'),
                    }}
                  />
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700/50 text-slate-400 px-4 py-2 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Suggested questions */}
            {messages.length <= 2 && (
              <div className="bg-[#0f172a] px-3 pb-2 flex flex-wrap gap-1.5 border-t border-slate-800 pt-2 flex-shrink-0">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 hover:bg-slate-700 hover:border-cyan-500 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="bg-[#0f172a] border-t border-slate-800 px-3 py-2.5 flex gap-2 items-center flex-shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask something…"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                <FaPaperPlane size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
