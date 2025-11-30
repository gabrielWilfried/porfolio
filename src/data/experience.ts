export interface Experience {
  id: string;
  company: string;
  position: {
    en: string;
    fr: string;
  };
  period: string;
  location: string;
  responsibilities: {
    en: string[];
    fr: string[];
  };
}

export const experiences: Experience[] = [
  {
    id: 'alshadows',
    company: 'Alshadows Technology',
    position: {
      en: 'Full-Stack Mobile and Web Developer',
      fr: 'Développeur Full-Stack Mobile et Web'
    },
    period: 'January 2025 - May 2025',
    location: 'Cameroon',
    responsibilities: {
      en: [
        'Configured and maintained servers for optimal performance and security',
        'Monitored system performance and security, implementing proactive measures',
        'Automated tasks using custom scripts to improve operational efficiency',
        'Developed full-stack applications using React.js and React Native',
        'Led the design and analysis of software architecture for multiple projects',
        'Developed HomeDoctor e-medical mobile app using React Native with admin dashboard in React.js',
        'Implemented Alshadows Technology corporate website using React.js (alshadows.com)',
        'Contributed to Sultanatbamoun website development (sultanatbamoun.cm)',
        'Participated in Internet of Cameroon website implementation (internet.cm)',
        'Integrated REST APIs for seamless frontend-backend communication',
        'Performed security testing and applied OWASP secure coding principles',
        'Utilized GitHub, GitHub Actions, and Trello for version control, CI/CD, and project management'
      ],
      fr: [
        'Configuration et maintenance de serveurs pour performance et sécurité optimales',
        'Surveillance de la performance et sécurité des systèmes avec mesures proactives',
        'Automatisation de tâches avec scripts personnalisés pour améliorer l\'efficacité opérationnelle',
        'Développement d\'applications full-stack avec React.js et React Native',
        'Direction de la conception et analyse d\'architecture logicielle pour plusieurs projets',
        'Développement de l\'app mobile e-médicale HomeDoctor avec React Native et tableau de bord admin en React.js',
        'Implémentation du site web d\'entreprise Alshadows Technology avec React.js (alshadows.com)',
        'Contribution au développement du site Sultanatbamoun (sultanatbamoun.cm)',
        'Participation à l\'implémentation du site Internet of Cameroon (internet.cm)',
        'Intégration d\'APIs REST pour communication fluide frontend-backend',
        'Tests de sécurité et application des principes de code sécurisé OWASP',
        'Utilisation de GitHub, GitHub Actions et Trello pour contrôle de version, CI/CD et gestion de projet'
      ]
    }
  },
  {
    id: 'alfirk',
    company: 'Alfirk Agency',
    position: {
      en: 'Artificial Intelligence and Software Developer Intern',
      fr: 'Stagiaire Développeur Intelligence Artificielle et Logiciel'
    },
    period: 'June 2024 - May 2024',
    location: 'Cameroon',
    responsibilities: {
      en: [
        'Worked as full-stack developer on e-commerce applications',
        'Participated in software design and architecture analysis',
        'Developed e-commerce web applications using React.js and Laravel 9',
        'Collaborated using GitHub and Trello for task assignment and version control',
        'Gained extensive experience with REST API development and integration',
        'Implemented responsive UI components with modern design principles',
        'Contributed to team-based development workflows',
        'Applied software engineering best practices in real-world projects'
      ],
      fr: [
        'Travail comme développeur full-stack sur applications e-commerce',
        'Participation à la conception et analyse d\'architecture logicielle',
        'Développement d\'applications web e-commerce avec React.js et Laravel 9',
        'Collaboration avec GitHub et Trello pour assignation de tâches et contrôle de version',
        'Expérience approfondie avec développement et intégration d\'APIs REST',
        'Implémentation de composants UI responsives avec principes de design modernes',
        'Contribution aux flux de développement en équipe',
        'Application des meilleures pratiques d\'ingénierie logicielle dans projets réels'
      ]
    }
  },
  {
    id: 'research',
    company: 'U.S. Army Research Laboratory',
    position: {
      en: 'Research Collaborator - Cyber Deception',
      fr: 'Collaborateur de Recherche - Cyber Déception'
    },
    period: 'May 2025 - Present',
    location: 'Remote Collaboration',
    responsibilities: {
      en: [
        'Collaborated with Dr. Charles Kamhoua on cutting-edge cyber deception research',
        'Proposed optimization framework for two-layer signaling game model using machine learning',
        'Designed multi-agent reinforcement learning model for defender-attacker scenarios',
        'Applied POMDP (Partially Observable Markov Decision Process) techniques',
        'Researched cyber attacks on cyber-physical systems',
        'Contributed to academic research with international team from University of Dschang',
        'Developed algorithms for optimizing cyber defense strategies',
        'Published research findings in collaboration with military research institution'
      ],
      fr: [
        'Collaboration avec Dr. Charles Kamhoua sur recherche de pointe en cyber-déception',
        'Proposition de cadre d\'optimisation pour modèle de jeu de signalisation à deux couches avec apprentissage automatique',
        'Conception de modèle d\'apprentissage par renforcement multi-agents pour scénarios défenseur-attaquant',
        'Application de techniques POMDP (Processus de Décision de Markov Partiellement Observable)',
        'Recherche sur cyberattaques sur systèmes cyber-physiques',
        'Contribution à recherche académique avec équipe internationale de l\'Université de Dschang',
        'Développement d\'algorithmes pour optimiser les stratégies de cyber-défense',
        'Publication de résultats de recherche en collaboration avec institution de recherche militaire'
      ]
    }
  }
];
