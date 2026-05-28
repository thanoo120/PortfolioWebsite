import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJira,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiGithubactions,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
} from 'react-icons/si';

export const portfolioOwner = {
  name: 'Sanmugarasa Thanoogithan',
  role: 'Software Engineering Undergraduate | Full-Stack Developer | Spring Boot Enthusiast',
  about:
    'Software Engineering undergraduate with hands-on industry experience in Spring Boot microservices and full-stack development. Passionate about building scalable web applications, REST APIs, and modern software systems using Java, React, and cloud technologies.',
  email: 'thanoogithan.dev@gmail.com',
  github: 'https://github.com/thanoo120',
  linkedin: 'https://www.linkedin.com/in/sanmugarasa-thanoogithan-923a70280/',
  resumeUrl: '/ThanooCV.pdf',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const heroRoles = ['Full-Stack Developer', 'Spring Boot Developer', 'Backend Enthusiast'];

export const skillsByCategory = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'REST APIs', icon: SiExpress },
      { name: 'Microservices', icon: SiSpringboot },
      { name: 'JWT', icon: SiJsonwebtokens },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'React Native', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Postman', icon: SiPostman },
      { name: 'Jira', icon: FaJira },
      { name: 'Docker', icon: FaDocker },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'CI/CD', icon: SiGithubactions },
    ],
  },
];

export const timeline = [
  {
    period: '2023 - Present',
    title: 'B.Sc. (Hons) Software Engineering',
    company: 'University of Kelaniya',
    summary: 'Focused on software architecture, distributed systems, and enterprise web development.',
  },
  {
    period: '2024 - 2025',
    title: 'Software Engineering Intern',
    company: 'Codelantic',
    summary: 'Built Spring Boot microservices, developed production APIs, and collaborated through Agile sprints.',
  },
  {
    period: '2025 - Present',
    title: 'Freelance Full-Stack Developer',
    company: 'Self-employed',
    summary: 'Delivered full-stack solutions with React frontends, backend APIs, and production-ready deployment workflows.',
  },
];

export const experienceHighlights = [
  'Backend API development for scalable services',
  'Spring Boot microservices implementation',
  'Agile workflow and sprint collaboration',
  'Git-based team collaboration and code reviews',
];

export const education = [
  {
    type: 'University',
    institution: 'University of Kelaniya',
    period: '2023 - Present',
    initials: 'UOK',
    image: '/image2.png',
    details: 'B.Sc. (Hons) Software Engineering',
    description: 'Pursuing degree in Software Engineering with focus on software architecture, distributed systems, and enterprise web development.',
    roles: [
      'Committee member of TSA',
      'Web development team of TSA',
      'Committee member of SESA',
    ],
  },
  {
    type: 'School',
    institution: 'J/Vayavilan Central College',
    period: '2007 - 2020',
    initials: 'VCC',
    icon: '🏫',
    image: '/image.png',
    details: 'Secondary and Primary Education',
    description: 'Completed secondary and primary education with strong foundation in science and mathematics.',
    roles: [
      'President of mental health club',
      'Vice president of science club',
      'Member of English union',
      'Province level poem winner',
      'Science quiz competition province level',
    ],
  },
];

export const featuredProjects = [
  {
    name: 'E-Learning Platform',
    description: 'A modern learning management platform with course publishing, progress tracking, and secure auth.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT'],
    github: 'https://github.com/thanoo120',
    live: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Fuel Management System',
    description: 'Smart quota-based fuel system with role-based dashboards, transaction logging, and reporting.',
    tech: ['Spring Boot', 'React', 'MongoDB', 'Docker'],
    github: 'https://github.com/thanoo120',
    live: '#',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Hostel Management System',
    description: 'End-to-end hostel administration app for room allocation, fee tracking, and resident operations.',
    tech: ['Node.js', 'React', 'MySQL', 'REST API'],
    github: 'https://github.com/thanoo120',
    live: '#',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Habit Tracker Mobile App',
    description: 'Cross-platform habit app with streak analytics, reminders, and productivity-focused UX.',
    tech: ['React Native', 'Firebase', 'Expo'],
    github: 'https://github.com/thanoo120',
    live: '#',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
  },
];

export const achievements = [
  {
    title: 'HackerRank Java Gold Badge',
    description: 'Awarded for advanced Java problem-solving and algorithmic coding performance.',
  },
  {
    title: 'Top 10 Finalist - Junior Hack',
    description: 'Ranked in the top 10 through solution design, execution speed, and team collaboration.',
  },
];
