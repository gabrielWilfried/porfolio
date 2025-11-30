export interface Education {
  id: string;
  institution: string;
  degree: {
    en: string;
    fr: string;
  };
  field: {
    en: string;
    fr: string;
  };
  period: string;
  location: string;
  description: {
    en: string;
    fr: string;
  };
}

export const education: Education[] = [
  {
    id: 'masters',
    institution: 'University of Yaounde 1',
    degree: {
      en: 'Master\'s Degree (First Year)',
      fr: 'Master (Première Année)'
    },
    field: {
      en: 'IT Security',
      fr: 'Sécurité Informatique'
    },
    period: 'September 2023 - June 2024',
    location: 'Yaounde, Cameroon',
    description: {
      en: 'Advanced studies in Information Technology Security, focusing on cryptography, computer security, network security, secure software development, and cyber defense strategies. Coursework included advanced topics in OWASP principles, penetration testing, and security architecture.',
      fr: 'Études avancées en Sécurité des Technologies de l\'Information, axées sur la cryptographie, la sécurité informatique, la sécurité réseau, le développement logiciel sécurisé et les stratégies de cyber-défense. Les cours comprenaient des sujets avancés sur les principes OWASP, les tests de pénétration et l\'architecture de sécurité.'
    }
  },
  {
    id: 'bachelors',
    institution: 'University of Dschang',
    degree: {
      en: 'Bachelor of Science',
      fr: 'Licence en Sciences'
    },
    field: {
      en: 'Computer Science',
      fr: 'Informatique'
    },
    period: 'September 2020 - June 2023',
    location: 'Dschang, Cameroon',
    description: {
      en: 'Comprehensive computer science education covering object-oriented programming, data structures & algorithms, database management, web development, mobile development, software engineering, networking, and operating systems. Strong foundation in theoretical computer science, formal languages, and algorithm design.',
      fr: 'Formation complète en informatique couvrant la programmation orientée objet, les structures de données et algorithmes, la gestion de bases de données, le développement web, le développement mobile, l\'ingénierie logicielle, les réseaux et les systèmes d\'exploitation. Solide fondation en informatique théorique, langages formels et conception d\'algorithmes.'
    }
  }
];
