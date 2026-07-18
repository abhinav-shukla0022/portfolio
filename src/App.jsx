import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  GraduationCap,
  Layout,
  Mail,
  Monitor,
  Moon,
  Phone,
  Rocket,
  Sparkles,
  Sun,
  Terminal,
} from 'lucide-react';
import './App.css';

const PORTFOLIO_DATA = {
  name: 'Abhinav Shukla',
  role: 'Full-Stack Developer & Aspiring SDE',
  email: 'abhinav.shukla22k@gmail.com',
  phone: '+91 8957205994',
  intro: 'I build clean, scalable web experiences that blend strong engineering fundamentals with thoughtful product design.',
  about:
    'I am a Computer Engineering student who enjoys turning ideas into fast, polished products. My focus is on modern frontend experiences, reliable backend systems, and writing code that is easy to maintain and impressive to use.',
  highlights: [
    'Strong grip on JavaScript, React, and modern web architecture',
    'Comfortable building full-stack features from UI to API logic',
    'Driven by problem-solving, curiosity, and real-world impact',
  ],
  stats: [
    { label: 'Projects Built', value: '8+' },
    { label: 'Languages', value: 'Java + JS' },
    { label: 'Focus Area', value: 'Full-Stack' },
  ],
  skills: [
    { category: 'Languages', items: ['Java', 'JavaScript (ES6+)', 'HTML5', 'CSS3'], icon: <Code2 size={20} /> },
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Responsive UI', 'Framer Motion'], icon: <Layout size={20} /> },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'], icon: <Terminal size={20} /> },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'Mongoose', 'Schema Design'], icon: <Database size={20} /> },
    { category: 'Core Strength', items: ['DSA', 'OOPs', 'System Design Basics', 'Debugging'], icon: <Cpu size={20} /> },
    { category: 'Product Mindset', items: ['UI/UX Thinking', 'Performance', 'Clean Code', 'Collaboration'], icon: <Briefcase size={20} /> },
  ],
  projects: [
    {
      title: 'AI Mock Interview Assistant',
      desc: 'Built a full-stack interview platform with role-based prompts, intelligent feedback flow, and a fast, interactive UI designed to feel like a real practice experience.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Ollama'],
      badge: 'AI product',
      accentFrom: '#38bdf8',
      accentTo: '#8b5cf6',
      link: '#',
    },
    {
      title: 'Modern Portfolio Experience',
      desc: 'Crafted this portfolio with animated sections, responsive layouts, and a refined visual system tailored for internships and recruiter impressions.',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      badge: 'frontend craft',
      accentFrom: '#fb923c',
      accentTo: '#f43f5e',
      link: '#',
    },
    {
      title: 'Interactive Quiz App',
      desc: 'Designed a browser-based quiz system with live scoring, timer logic, and a focused user experience that feels smooth on both desktop and mobile.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'UI Logic'],
      badge: 'interactive UX',
      accentFrom: '#22c55e',
      accentTo: '#14b8a6',
      link: '#',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'Babu Banarsi Das University, Lucknow',
      period: 'Sep 2024 - June 2028',
      details: 'CGPA: 8.35/10',
    },
    {
      degree: 'Class XII (ISC) & Class X (ICSE)',
      institution: 'City Montessori School, Lucknow',
      period: 'Completed 2024 & 2022',
      details: 'Scores: 88% (XII) & 87% (X)',
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#top" className="font-display font-bold text-xl tracking-[0.25em] text-white">
          AS<span className="text-blue-400">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-white/10 bg-white/10 p-2.5 text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-400/50"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="top" className="section-shell min-h-screen flex items-center px-6 pt-24 pb-16 relative overflow-hidden">
    <div className="blob blob-one" />
    <div className="blob blob-two" />

    <div className="max-w-6xl mx-auto w-full">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
          <motion.p variants={fadeUp} className="pill mb-6">
            <Sparkles size={16} className="text-blue-400" />
            Building thoughtful digital experiences
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-5">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{PORTFOLIO_DATA.name}</span>
          </motion.h1>
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 mb-5">
            {PORTFOLIO_DATA.role}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg leading-8 text-slate-400 mb-8 max-w-xl">
            {PORTFOLIO_DATA.intro}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-400/40">
              Let&apos;s Connect <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="glass-card p-6 sm:p-8 rounded-[2rem]">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-2xl bg-purple-500/10 p-3 text-purple-300">
              <Rocket size={22} />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Why me</p>
              <h3 className="text-xl font-semibold text-white">Internship-ready developer</h3>
            </div>
          </div>

          <p className="text-slate-400 leading-7 mb-6">{PORTFOLIO_DATA.about}</p>

          <div className="grid gap-3 sm:grid-cols-3 mb-6">
            {PORTFOLIO_DATA.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-center">
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {PORTFOLIO_DATA.highlights.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-300">
                <ChevronRight size={16} className="mt-0.5 text-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-shell py-20 px-6">
    <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="glass-card p-8 rounded-[2rem]">
        <p className="section-eyebrow mb-3">About</p>
        <h2 className="text-3xl font-bold mb-4">A developer who cares about the details.</h2>
        <p className="text-slate-400 leading-8">
          I enjoy creating experiences that feel fast, elegant, and useful. My approach is simple: understand the problem, build intentionally, and ship something polished enough to impress users and teammates.
        </p>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="glass-card p-8 rounded-[2rem]">
        <div className="flex items-center gap-3 mb-5">
          <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-300"><Monitor size={20} /></div>
          <h3 className="text-xl font-semibold text-white">What I bring to a team</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {['Clean and responsive UI development', 'Reliable frontend-backend integration', 'Problem solving with DSA discipline', 'Curiosity for modern tools and workflows'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">{item}</div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="section-shell py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="section-head">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">My technical toolkit</h2>
        <div className="section-line" />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PORTFOLIO_DATA.skills.map((skill, index) => (
          <motion.div key={index} variants={fadeUp} className="glass-card p-6 rounded-3xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-300 mb-5">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{skill.category}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section-shell py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="section-head">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Selected work that shows range and depth</h2>
        <div className="section-line" />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.article key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="group glass-card overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-1">
            <div className="project-visual" style={{ background: `linear-gradient(135deg, ${project.accentFrom} 0%, ${project.accentTo} 100%)` }}>
              <span className="project-badge">{project.badge}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a href={project.link} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:text-blue-400">
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-sm leading-7 text-slate-400 mb-5">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="section-shell py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="section-head items-center text-center">
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">A strong academic base with practical ambition</h2>
        <div className="section-line" />
      </motion.div>

      <div className="space-y-6">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="glass-card flex flex-col gap-4 rounded-3xl p-8 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-purple-500/10 p-3 text-purple-300">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-blue-300 font-medium mt-1">{edu.institution}</p>
              </div>
            </div>
            <div className="text-sm text-slate-400 md:text-right">
              <p>{edu.period}</p>
              <p className="mt-1 text-slate-300">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-shell py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="glass-card rounded-[2rem] p-8 sm:p-10 text-center">
        <p className="section-eyebrow mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s build something meaningful together.</h2>
        <p className="mx-auto max-w-2xl text-slate-400 leading-8 mb-8">
          I&apos;m actively looking for internship and early-career opportunities where I can contribute, learn fast, and help ship impactful products.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a href={`mailto:${PORTFOLIO_DATA.email}`} className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 transition hover:border-blue-400/40">
            <Mail size={18} className="text-blue-300" />
            {PORTFOLIO_DATA.email}
          </a>
          <a href={`tel:${PORTFOLIO_DATA.phone}`} className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 transition hover:border-purple-400/40">
            <Phone size={18} className="text-purple-300" />
            {PORTFOLIO_DATA.phone}
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-950/40 p-3 text-slate-300 transition hover:text-blue-400">
            <Code2 size={20} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-950/40 p-3 text-slate-300 transition hover:text-blue-400">
            <Mail size={20} />
          </a>
          <a href="#" className="rounded-full border border-white/10 bg-slate-950/40 p-3 text-slate-300 transition hover:text-blue-400">
            <ExternalLink size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
    <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React, Tailwind, and care.</p>
  </footer>
);

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-shell min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;