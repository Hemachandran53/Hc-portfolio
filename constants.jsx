
import React from 'react';
import PropTypes from 'prop-types';
import { SkillCategory } from './types.js';


// SVG Icon Components
export const SunIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25 2.25 2.25 0 002.25 2.25A2.25 2.25 0 0014.25 12 2.25 2.25 0 0012 9.75zM12 12a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);
SunIcon.propTypes = { className: PropTypes.string };

export const MoonIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);
MoonIcon.propTypes = { className: PropTypes.string };

export const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
MailIcon.propTypes = { className: PropTypes.string };

export const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
PhoneIcon.propTypes = { className: PropTypes.string };

export const LocationIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
LocationIcon.propTypes = { className: PropTypes.string };

export const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
LinkedInIcon.propTypes = { className: PropTypes.string };

export const GitHubIcon = ({ className = "w-5 h-5" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
GitHubIcon.propTypes = { className: PropTypes.string };

export const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);
DownloadIcon.propTypes = { className: PropTypes.string };

export const ExternalLinkIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);
ExternalLinkIcon.propTypes = { className: PropTypes.string };

export const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
MenuIcon.propTypes = { className: PropTypes.string };

export const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
CloseIcon.propTypes = { className: PropTypes.string };

export const UpArrowIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
  </svg>
);
UpArrowIcon.propTypes = { className: PropTypes.string };


export const CONTACT_INFO = {
  name: 'Hemachandran S',
  title: 'Full-Stack Developer',
  location: 'Chennai, India',
  phone: '+91 90425 17644',
  email: 'hemachandranvlr@gmail.com',
  linkedin: 'https://linkedin.com/in/hemachandran10',
  github: 'https://github.com/Hemachandran53',
  resumeUrl: '/resume.pdf', 
};

export const PROFESSIONAL_SUMMARY = [
  `Results-driven Full-Stack Developer with hands-on experience in designing, developing, and deploying scalable web applications using the MERN stack. Proficient in Java, JavaScript (ES6+), React.js, Node.js, and MongoDB.`,
  `Demonstrated ability to build efficient RESTful APIs, responsive user interfaces, and robust backend systems. Strong understanding of Agile methodologies, software design patterns, and database optimization.`,
  `Eager to contribute technical expertise and passion for development in a collaborative team environment.`
];

export const SKILLS = [
  { name: 'Java', category: SkillCategory.LANGUAGES },
  { name: 'JavaScript (ES6+)', category: SkillCategory.LANGUAGES },
  { name: 'Python', category: SkillCategory.LANGUAGES },
  { name: 'SQL', category: SkillCategory.LANGUAGES },
  { name: 'React.js', category: SkillCategory.FRONTEND },
  { name: 'HTML5', category: SkillCategory.FRONTEND },
  { name: 'CSS3', category: SkillCategory.FRONTEND },
  { name: 'Tailwind CSS', category: SkillCategory.FRONTEND },
  { name: 'Bootstrap (basics)', category: SkillCategory.FRONTEND },
  { name: 'Node.js', category: SkillCategory.BACKEND },
  { name: 'Express.js', category: SkillCategory.BACKEND },
  { name: 'MongoDB', category: SkillCategory.DATABASES },
  { name: 'MySQL', category: SkillCategory.DATABASES },
  { name: 'Postman', category: SkillCategory.TOOLS },
  { name: 'GitHub', category: SkillCategory.TOOLS },
  { name: 'VS Code', category: SkillCategory.TOOLS },
  { name: 'MERN Stack', category: SkillCategory.FRAMEWORKS },
  { name: 'RESTful APIs', category: SkillCategory.OTHER },
  { name: 'JSON', category: SkillCategory.OTHER },
];

export const PROJECTS = [
  {
    id: 'proj1',
    title: 'Full-Stack Exercise Tracker Web App',
    company: 'Hackwit Technologies, Chennai',
    date: 'Feb 2024 – Mar 2024',
    description: [
      'Developed a full-stack Exercise Tracker Web App.',
      'Implemented user authentication, data logging, and real-time activity tracking.',
      'Optimized MongoDB queries using aggregate functions, improving response time by 20%.',
      'Collaborated with UI/UX designers to ensure mobile responsiveness and usability.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    imageUrl: './ExerciseTracker-image.png',
    repoLink: 'https://github.com/Hemachandran53/Exercise-Tracker-App'
  },
  {
    id: 'proj2',
    title: 'CRUD System for Dynamic Content Management',
    company: 'Hackwit Technologies, Chennai',
    date: 'Aug 2023 – Sep 2023',
    description: [
      'Created a CRUD system to manage dynamic content using RESTful APIs.',
      'Developed responsive interfaces with React.js and handled routing using React Router.',
      'Ensured secure and efficient data operations through Express.js and MongoDB.',
      'Incorporated validation and error handling, reducing input-related issues by 95%.',
    ],
    technologies: ['React.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'React Router'],
    imageUrl: './Crud-image.png',
  },
  {
    id: 'proj3',
    title: 'Predictive Maintenance for Electric Vehicles (ML & RPM)',
    company: 'Sathyabama University',
    date: 'Aug 2024 – Apr 2025 (Ongoing)',
    description: [
      'Built a machine learning model using TensorFlow to predict maintenance needs in electric vehicles.',
      'Integrated RPM data with Python scripts for analytics and dashboard visualization.',
      'Achieved 92% accuracy and helped reduce maintenance costs by 30% through proactive insights.',
    ],
    technologies: ['TensorFlow', 'Python', 'Machine Learning', 'Data Analytics'],
    imageUrl: './Ev-image.png',
  },
];

export const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
