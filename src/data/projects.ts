export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    fr: string;
  };
  longDescription: {
    en: string;
    fr: string;
  };
  techStack: string[];
  features: {
    en: string[];
    fr: string[];
  };
  github?: string;
  demo?: string;
  date: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'clouddeal',
    title: 'CloudDeal',
    description: {
      en: 'Full-stack e-commerce platform tailored for African markets with Stripe payment integration',
      fr: 'Plateforme e-commerce complète adaptée aux marchés africains avec intégration Stripe'
    },
    longDescription: {
      en: 'CloudDeal is a comprehensive online exchange platform developed specifically to cater to African and Cameroonian markets. Built with Laravel and MySQL, it features dynamic search capabilities, secure payment processing via Stripe, and a robust MVC architecture. The platform handles complex asynchronous tasks and provides a seamless user experience for buyers and sellers.',
      fr: 'CloudDeal est une plateforme d\'échange en ligne complète développée spécifiquement pour les marchés africains et camerounais. Construite avec Laravel et MySQL, elle propose des capacités de recherche dynamique, un traitement de paiement sécurisé via Stripe et une architecture MVC robuste. La plateforme gère des tâches asynchrones complexes et offre une expérience utilisateur fluide pour les acheteurs et vendeurs.'
    },
    techStack: ['Laravel', 'MySQL', 'Alpine.js', 'Stripe API', 'HTML/CSS', 'AJAX', 'jQuery'],
    features: {
      en: [
        'MVC architecture implementation',
        'Dynamic search functionality with Alpine.js',
        'Stripe payment gateway integration',
        'MySQL database for efficient data storage',
        'Asynchronous task handling with AJAX',
        'Version control with GitHub',
        'Task management with Trello',
        'Secure user authentication and authorization'
      ],
      fr: [
        'Implémentation de l\'architecture MVC',
        'Fonctionnalité de recherche dynamique avec Alpine.js',
        'Intégration de la passerelle de paiement Stripe',
        'Base de données MySQL pour un stockage efficace',
        'Gestion des tâches asynchrones avec AJAX',
        'Contrôle de version avec GitHub',
        'Gestion des tâches avec Trello',
        'Authentification et autorisation sécurisées des utilisateurs'
      ]
    },
    date: 'November 2023',
    category: 'E-commerce'
  },
  {
    id: 'alshadows',
    title: 'Alshadows Technology Website',
    description: {
      en: 'Modern corporate website showcasing technology services and solutions',
      fr: 'Site web d\'entreprise moderne présentant les services et solutions technologiques'
    },
    longDescription: {
      en: 'A professional corporate website for Alshadows Technology built with React.js. The site features modern UI/UX design, responsive layouts, and showcases the company\'s technology services, team, and portfolio. Implemented with performance optimization and SEO best practices.',
      fr: 'Un site web professionnel d\'entreprise pour Alshadows Technology construit avec React.js. Le site présente un design UI/UX moderne, des mises en page responsives et met en valeur les services technologiques, l\'équipe et le portfolio de l\'entreprise. Implémenté avec optimisation des performances et meilleures pratiques SEO.'
    },
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: {
      en: [
        'Responsive design for all devices',
        'Modern and clean UI/UX',
        'Fast loading with optimized performance',
        'SEO-friendly structure',
        'Smooth animations and transitions',
        'Service showcase sections',
        'Team member profiles',
        'Contact forms with validation'
      ],
      fr: [
        'Design responsive pour tous les appareils',
        'UI/UX moderne et épurée',
        'Chargement rapide avec performances optimisées',
        'Structure optimisée pour le SEO',
        'Animations et transitions fluides',
        'Sections de présentation des services',
        'Profils des membres de l\'équipe',
        'Formulaires de contact avec validation'
      ]
    },
    demo: 'https://alshadows.com',
    date: 'January 2025',
    category: 'Corporate Website'
  },
  {
    id: 'sultanatbamoun',
    title: 'Sultanatbamoun Website',
    description: {
      en: 'Cultural heritage website for the Sultanate of Bamoun',
      fr: 'Site web du patrimoine culturel pour le Sultanat Bamoun'
    },
    longDescription: {
      en: 'A culturally rich website representing the Sultanate of Bamoun, built with React.js. The platform showcases the history, culture, and heritage of the Bamoun people with an elegant and accessible design that respects cultural authenticity.',
      fr: 'Un site web culturellement riche représentant le Sultanat Bamoun, construit avec React.js. La plateforme présente l\'histoire, la culture et le patrimoine du peuple Bamoun avec un design élégant et accessible qui respecte l\'authenticité culturelle.'
    },
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS'],
    features: {
      en: [
        'Cultural content management',
        'Historical timeline presentation',
        'Image galleries and media',
        'Multilingual support',
        'Responsive and accessible design',
        'Cultural authenticity in UI/UX'
      ],
      fr: [
        'Gestion du contenu culturel',
        'Présentation de la chronologie historique',
        'Galeries d\'images et médias',
        'Support multilingue',
        'Design responsive et accessible',
        'Authenticité culturelle dans l\'UI/UX'
      ]
    },
    demo: 'https://sultanatbamoun.cm',
    date: 'March 2025',
    category: 'Cultural Heritage'
  },
  {
    id: 'internet-cameroon',
    title: 'Internet of Cameroon',
    description: {
      en: 'Internet service provider platform with service management',
      fr: 'Plateforme de fournisseur de services Internet avec gestion des services'
    },
    longDescription: {
      en: 'A comprehensive platform for Internet of Cameroon ISP services. Built with React.js, the platform includes service packages, customer management, and support systems. Features secure authentication and responsive design for optimal user experience.',
      fr: 'Une plateforme complète pour les services FAI d\'Internet of Cameroon. Construite avec React.js, la plateforme inclut des forfaits de services, la gestion des clients et des systèmes de support. Comprend une authentification sécurisée et un design responsive pour une expérience utilisateur optimale.'
    },
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    features: {
      en: [
        'Service package management',
        'Customer portal and dashboard',
        'Support ticket system',
        'Payment integration',
        'Real-time service status',
        'Responsive mobile-first design',
        'Secure user authentication'
      ],
      fr: [
        'Gestion des forfaits de services',
        'Portail client et tableau de bord',
        'Système de tickets de support',
        'Intégration de paiement',
        'Statut du service en temps réel',
        'Design mobile-first responsive',
        'Authentification utilisateur sécurisée'
      ]
    },
    demo: 'https://internet.cm',
    date: 'April 2025',
    category: 'ISP Platform'
  },
  {
    id: 'biotrack',
    title: 'BioTrack',
    description: {
      en: 'Face recognition authentication system for student attendance',
      fr: 'Système d\'authentification par reconnaissance faciale pour la présence des étudiants'
    },
    longDescription: {
      en: 'BioTrack is an innovative student authentication system using facial recognition technology. Built with Django and OpenCV, it provides secure and efficient attendance tracking through biometric identification. The system handles image model training and real-time face detection with high accuracy.',
      fr: 'BioTrack est un système innovant d\'authentification des étudiants utilisant la technologie de reconnaissance faciale. Construit avec Django et OpenCV, il fournit un suivi de présence sécurisé et efficace par identification biométrique. Le système gère l\'entraînement de modèles d\'images et la détection faciale en temps réel avec une grande précision.'
    },
    techStack: ['Django', 'Python', 'OpenCV', 'SQLite', 'JavaScript', 'HTML/CSS'],
    features: {
      en: [
        'Real-time face detection and recognition',
        'Machine learning model training',
        'Student attendance tracking',
        'MVT architecture implementation',
        'Secure biometric data handling',
        'Admin dashboard for management',
        'Attendance reports and analytics',
        'Camera integration support'
      ],
      fr: [
        'Détection et reconnaissance faciale en temps réel',
        'Entraînement de modèles d\'apprentissage automatique',
        'Suivi de la présence des étudiants',
        'Implémentation de l\'architecture MVT',
        'Gestion sécurisée des données biométriques',
        'Tableau de bord admin pour la gestion',
        'Rapports et analyses de présence',
        'Support d\'intégration de caméra'
      ]
    },
    date: 'December 2023 - January 2024',
    category: 'Biometric System'
  },
  {
    id: 'studybud',
    title: 'StudyBud',
    description: {
      en: 'Real-time chat room application for study groups',
      fr: 'Application de salle de chat en temps réel pour groupes d\'étude'
    },
    longDescription: {
      en: 'StudyBud is a collaborative learning platform featuring real-time chat rooms for students. Built with Django and WebSockets, it enables seamless communication and collaboration among students. The platform handles asynchronous messaging and provides an intuitive interface for study group interactions.',
      fr: 'StudyBud est une plateforme d\'apprentissage collaboratif avec des salles de chat en temps réel pour les étudiants. Construit avec Django et WebSockets, il permet une communication et une collaboration fluides entre les étudiants. La plateforme gère la messagerie asynchrone et fournit une interface intuitive pour les interactions de groupes d\'étude.'
    },
    techStack: ['Django', 'Python', 'WebSockets', 'SQLite', 'JavaScript', 'HTML/CSS'],
    features: {
      en: [
        'Real-time messaging with WebSockets',
        'Multiple chat rooms creation',
        'User authentication and profiles',
        'Room topic categorization',
        'Recent activity feed',
        'Search and filter functionality',
        'Responsive design for mobile devices',
        'MVT architecture pattern'
      ],
      fr: [
        'Messagerie en temps réel avec WebSockets',
        'Création de plusieurs salles de chat',
        'Authentification et profils utilisateurs',
        'Catégorisation par sujet de salle',
        'Fil d\'activités récentes',
        'Fonctionnalité de recherche et filtrage',
        'Design responsive pour appareils mobiles',
        'Modèle d\'architecture MVT'
      ]
    },
    date: 'May 2023',
    category: 'Social Learning'
  },
  {
    id: 'crypto-aes-des',
    title: 'Crypto-AES-DES',
    description: {
      en: 'Cryptography toolkit implementing AES and DES encryption algorithms',
      fr: 'Boîte à outils de cryptographie implémentant les algorithmes de chiffrement AES et DES'
    },
    longDescription: {
      en: 'A comprehensive cryptography application implementing Advanced Encryption Standard (AES) and Data Encryption Standard (DES) algorithms. Built with Django and Python, the platform provides a user-friendly interface for encrypting and decrypting data using industry-standard cryptographic methods. Ideal for educational purposes and secure data handling.',
      fr: 'Une application de cryptographie complète implémentant les algorithmes Advanced Encryption Standard (AES) et Data Encryption Standard (DES). Construite avec Django et Python, la plateforme fournit une interface conviviale pour chiffrer et déchiffrer des données en utilisant des méthodes cryptographiques standard de l\'industrie. Idéale pour des fins éducatives et la gestion sécurisée des données.'
    },
    techStack: ['Django', 'Python', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
    features: {
      en: [
        'AES encryption/decryption implementation',
        'DES encryption/decryption implementation',
        'User-friendly web interface',
        'Multiple key sizes support',
        'Text and file encryption',
        'Algorithm comparison tools',
        'Educational documentation',
        'Secure key management'
      ],
      fr: [
        'Implémentation du chiffrement/déchiffrement AES',
        'Implémentation du chiffrement/déchiffrement DES',
        'Interface web conviviale',
        'Support de plusieurs tailles de clés',
        'Chiffrement de texte et de fichiers',
        'Outils de comparaison d\'algorithmes',
        'Documentation éducative',
        'Gestion sécurisée des clés'
      ]
    },
    date: 'September 2023 - November 2024',
    category: 'Cybersecurity'
  },
  {
    id: 'multi-domain-deception',
    title: 'Multi-domain Deception Research',
    description: {
      en: 'Reinforcement learning framework for cyber deception strategies',
      fr: 'Cadre d\'apprentissage par renforcement pour stratégies de cyber-déception'
    },
    longDescription: {
      en: 'An advanced research project developing an optimization framework for cyber deception using machine learning and reinforcement learning techniques. In collaboration with Dr. Charles Kamhoua from the U.S. Army Research Laboratory, this project designs multi-agent reinforcement learning models based on POMDP (Partially Observable Markov Decision Process) for two-layer signaling game models to defend against cyber attacks on cyber-physical systems.',
      fr: 'Un projet de recherche avancé développant un cadre d\'optimisation pour la cyber-déception utilisant des techniques d\'apprentissage automatique et d\'apprentissage par renforcement. En collaboration avec Dr. Charles Kamhoua du Laboratoire de Recherche de l\'Armée Américaine, ce projet conçoit des modèles d\'apprentissage par renforcement multi-agents basés sur POMDP (Processus de Décision de Markov Partiellement Observable) pour des modèles de jeux de signalisation à deux couches pour défendre contre les cyberattaques sur les systèmes cyber-physiques.'
    },
    techStack: ['Python', 'Reinforcement Learning', 'POMDP', 'Machine Learning', 'Cyber Security'],
    features: {
      en: [
        'Multi-agent reinforcement learning model',
        'POMDP-based decision making',
        'Two-layer signaling game optimization',
        'Cyber deception strategy development',
        'Defense mechanism simulation',
        'Collaboration with U.S. Army Research Lab',
        'Academic research contribution',
        'Advanced security frameworks'
      ],
      fr: [
        'Modèle d\'apprentissage par renforcement multi-agents',
        'Prise de décision basée sur POMDP',
        'Optimisation de jeu de signalisation à deux couches',
        'Développement de stratégie de cyber-déception',
        'Simulation de mécanisme de défense',
        'Collaboration avec le Labo de Recherche de l\'Armée US',
        'Contribution à la recherche académique',
        'Cadres de sécurité avancés'
      ]
    },
    date: 'May 2025 - Present',
    category: 'Research'
  }
];
