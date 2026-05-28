export const siteConfig = {
  name: 'Sanmugarasa Thanoogithan',
  title: 'Sanmugarasa Thanoogithan | Full-Stack Developer & Spring Boot Specialist',
  description: 'Software Engineering undergraduate portfolio showcasing full-stack development, Spring Boot microservices, and modern web applications.',
  url: 'https://thanoogithan.com',
  email: 'thanoogithan.dev@gmail.com',
  github: 'https://github.com/thanoo120',
  linkedin: 'https://www.linkedin.com/in/sanmugarasa-thanoogithan-923a70280/',
  author: 'Sanmugarasa Thanoogithan',
  locale: 'en_US',
};

export const defaultOpenGraph = {
  type: 'website',
  locale: siteConfig.locale,
};

export const generateMetaTags = (page) => {
  const pages = {
    home: {
      title: 'Sanmugarasa Thanoogithan | Full-Stack Developer Portfolio',
      description: 'Software Engineering undergraduate portfolio showcasing full-stack, backend, and Spring Boot development projects.',
      path: '/',
    },
    about: {
      title: 'About Me | Sanmugarasa Thanoogithan - Software Engineer',
      description: 'Learn about my journey as a Software Engineering student, experience, education, and passion for building scalable applications.',
      path: '/about',
    },
    projects: {
      title: 'Projects | Sanmugarasa Thanoogithan - Full-Stack Developer',
      description: 'Explore my portfolio of full-stack projects including E-Learning Platform, Fuel Management System, and more.',
      path: '/projects',
    },
    skills: {
      title: 'Skills | Sanmugarasa Thanoogithan - Technical Expertise',
      description: 'Backend (Java, Spring Boot, Node.js), Frontend (React, Tailwind CSS), Databases (MySQL, MongoDB), and Cloud (AWS).',
      path: '/skills',
    },
    contact: {
      title: 'Contact Me | Sanmugarasa Thanoogithan',
      description: 'Get in touch for freelance opportunities, collaborations, or just to say hello.',
      path: '/contact',
    },
  };

  return pages[page] || pages.home;
};

export const structuredData = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    email: siteConfig.email,
    jobTitle: 'Software Engineering Undergraduate',
    url: siteConfig.url,
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
    ],
    image: `${siteConfig.url}/avatar.png`,
  },
  
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
};
