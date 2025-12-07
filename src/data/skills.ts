export interface SkillCategory {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend Development',
      fr: 'Développement Frontend'
    },
    skills: [
      { name: 'React.js / TypeScript', level: 95 },
      { name: 'React Native', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'JavaScript / TypeScript', level: 95 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Material UI', level: 85 },
      { name: 'Alpine.js', level: 80 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Figma', level: 50 }
    ]
  },
  {
    id: 'backend',
    title: {
      en: 'Backend Development',
      fr: 'Développement Backend'
    },
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Laravel', level: 90 },
      { name: 'Django', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Flask', level: 85 },
      { name: 'PHP', level: 85 },
      { name: 'Python', level: 95 },
      { name: 'REST API', level: 95 },
      { name: 'WebSockets', level: 85 },
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'SQLite', level: 90 }
    ]
  },
  {
    id: 'tools',
    title: {
      en: 'Tools & Platforms',
      fr: 'Outils & Plateformes'
    },
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Cursor', level: 90 },
      { name: 'Trello', level: 90 },
      { name: 'Postman', level: 90 },
      { name: 'Swagger', level: 85 },
      { name: 'Linux', level: 85 },
      { name: 'Nginx', level: 80 }
    ]
  },
  {
    id: 'security',
    title: {
      en: 'Security & Best Practices',
      fr: 'Sécurité & Meilleures Pratiques'
    },
    skills: [
      { name: 'OWASP Top 10', level: 90 },
      { name: 'Secure Coding', level: 90 },
      { name: 'Cryptography', level: 85 },
      { name: 'Authentication & Authorization', level: 95 },
      { name: 'Security Testing', level: 85 },
      { name: 'Data Protection', level: 90 },
      { name: 'Cyber Security', level: 85 },
      { name: 'Penetration Testing', level: 40 }
    ]
  }
];
