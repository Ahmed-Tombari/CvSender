import { signal, computed } from '@angular/core';

export type LanguageCode = 'en' | 'fr' | 'ar';

const messages = {
  en: {
    // Labels
    hrEmailLabel: 'HR Email',
    positionLabel: 'Position',
    subjectLabel: 'Subject',
    cvLabel: 'CV File Name',
    descriptionLabel: 'Description',

    // Placeholders
    hrEmailPlaceholder: 'hr@company.com',
    positionPlaceholder: 'e.g. Senior Frontend Developer',
    subjectPlaceholder: 'Application for...',
    cvPlaceholder: 'Choose CV',
    descriptionPlaceholder: 'Tell us about yourself...',

    // Buttons
    sendButton: 'Send Application',
    sendingButton: 'Sending...',

    // Errors / Validation
    requiredError: 'This field is required.',
    emailError: 'Enter a valid email.',
    cvError: 'Choose a CV file.',
    errorDefault: 'Failed to send application.',

    // Header
    dialogTitle: 'Apply Now',

    // Navbar
    navHome: 'Home',
    navServices: 'Services',
    navPricing: 'Pricing',
    navPortfolio: 'Portfolio',
    navSearchPlaceholder: 'Search...',
    navGetStarted: 'Get Started',
    navMenu: 'Menu',

    // Landing - Hero
    heroTitle: 'Ahmed Tombari',
    heroRole: 'FullStack Developer | Java ☕ | SpringBoot 🌱 | Angular 🅰️ | NestJS 🚀 | Next.js ⚡ | UI/UX 🎨',
    heroLocation: 'Ariana, Tunisia 2037',
heroTagConception: 'Technical Design',
heroTagResearch: 'UI/UX Research',
heroTagManagement: 'Project Management',
heroTagStrategy: 'Graphic Design',
heroTagStrategy2: 'Application Development',
    heroSendMessage: 'Send New Application',
    heroViewPortfolio: 'View Portfolio',

    // Landing - Cards Headers
    cardGlobalReach: 'Global Reach',
    cardMonthlyUploads: 'CVs sent monthly',
    cardUserDemographics: 'CV Demographics',
    cardSizeEvolution: 'CVs sent daily',

    // Landing - CTA
    ctaTitle: 'Your Future Starts Here 🚀',
    ctaSubtitle: 'Apply with your CV and join an innovative team shaping the future of digital.',
    ctaButton: 'Apply Now',

    // Stats (Test4)
    statTotalFiles: 'Total Files',
    statSendedFiles: 'Total CVs Sent',
    statFilesToday: 'Files Today',
    statTotalSize: 'Total Size',
    statOptimized: 'Optimized',
    statDailyUploads: 'CVs Sent Daily',
    statToday: 'Today',
    statActive: 'Active',
    statSystemStatus: 'System Status',
    statOnline: 'Online',
    statUptime: 'Uptime',
    statPeriodAllTime: 'All Time',
    statPeriodToday: 'Today',
    statPeriodNow: 'Now',

    // Charts
    chartSalesSeries: 'Sales',
    chartDailySizeSeries: 'Daily Size (MB)',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    teams: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    people: ["John", "Doe", "Joe", "Smith", "Jake", "Williams", "Amber", "Peter", "Brown", "Mary", "Evans", "David", "Wilson", "Lily", "Roberts"],

    // Portfolio
    portfolioAvailable: 'Available for new projects',
    portfolioHeroTitlePrefix: "I'm",
    portfolioHeroTitleName: "Ahmed,",
    portfolioHeroTitleSuffix: "Full Stack & UI/UX",
    portfolioHeroDesc: "Immediately available, open to local and international positions. Specializing in high-performance digital solutions.",
    portfolioDownloadCV: "Download CV",
    portfolioDownloading: "Downloading...",
    portfolioDownloadSuccess: "Success!",
    portfolioViewWork: "View Work",

    portfolioServicesTitle: "My",
    portfolioServicesTitleHighlight: "Services",
    portfolioServicesSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",

    portfolioExperienceTitle: "My",
    portfolioExperienceTitleHighlight: "Work Experience",

    portfolioWhyHireTitle: "Why",
    portfolioWhyHireTitleHighlight: "Hire me",
    portfolioWhyHireSuffix: "?",
    portfolioWhyHireText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    portfolioHireButton: "Hire me",
    portfolioStatsProjectCompleted: "Project Completed",

    portfolioProjectsTitle: "Let's have a look at",
    portfolioProjectsTitleHighlight: "my",
    portfolioProjectsTitleSuffix: "Portfolio",
    portfolioSeeAll: "See All",
    portfolioLiranteTitle: "Lirante - Food Delivery Solution 🍊",
    portfolioLiranteDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    portfolioTestimonialsTitle: "Testimonials That",
    portfolioTestimonialsTitleHighlight: "Speak to",
    portfolioTestimonialsTitleSuffix: "My Results",
    portfolioTestimonialsSubtitle: "Read what others have to say about their experience working with me.",

    portfolioCtaTitle: "Have an Awesome Project",
    portfolioCtaTitleHighlight: "Idea?",
    portfolioCtaTitleSuffix: "Let’s Discuss",
    portfolioCtaEmailPlaceholder: "Enter your email address",
    portfolioCtaSend: "Send",
    portfolioCtaRatings: "4.9/5 Average Rating",
    portfolioCtaAwards: "450+ Awards Winning",
    portfolioCtaCertified: "Certified Product Designer",

    portfolioFooterDesc: "Creating digital experiences that matter.",
    portfolioFooterLinks: ["Home", "About", "Process", "Portfolio", "Blog", "Services"],
    portfolioCopyright: "Copyright © 2026 Ahmed Tombari. All rights reserved.",
    portfolioTerms: 'Terms of Use',
    portfolioPrivacy: 'Privacy Policy',
    portfolioEmail: 'tombariahmed9@gmail.com',
    portfolioPhone: '+21655331664',
    portfolioGithub: 'https://github.com/Ahmed-Tombari',
    portfolioLinkedin: 'https://www.linkedin.com/in/ahmed-tombari/',
    portfolioAddress: 'Tunisie, Ariana 2037',

    portfolioContactTitle: "Get in",
    portfolioContactTitleHighlight: "Touch",
    portfolioContactSubtitle: "Have a project in mind? Let's talk about it and build something amazing together.",
    portfolioContactEmail: "Email",
    portfolioContactPhone: "Phone",
    portfolioContactAddress: "Address",
    portfolioContactFormName: "Your Name",
    portfolioContactFormEmail: "Your Email",
    portfolioContactFormSubject: "Subject",
    portfolioContactFormMessage: "Message",
    portfolioContactFormSubmit: "Send Message",
    portfolioContactFormSending: "Sending...",
    portfolioContactFormSuccess: "Message sent successfully!",
    portfolioContactFormError: "Something went wrong. Please try again.",
    portfolioContactFormRequired: "This field is required",
    portfolioContactFormInvalidEmail: "Please enter a valid email",

    // Popovers
    portfolioPopoverEmailTitle: "Email Contact",
    portfolioPopoverEmailDesc: "Send me an email for inquiries about project collaborations, hiring, or general questions.",
    portfolioPopoverPhoneTitle: "Phone Contact",
    portfolioPopoverPhoneDesc: "Available for direct calls and WhatsApp during business hours (GMT+1).",
    portfolioPopoverGithubTitle: "GitHub Profile",
    portfolioPopoverGithubDesc: "Explore my open-source projects, contributions, and personal code repositories.",
    portfolioPopoverLinkedinTitle: "LinkedIn Network",
    portfolioPopoverLinkedinDesc: "Let's connect professionally, discuss networking, or share industry insights.",

    // Portfolio Data (Ideally these would be keys, but for simplicity/demo we put strings here or keys if we map them)
    portfolioServicesList: [
        { title: 'UI/UX Design', description: 'Crafting intuitive and engaging user interfaces that delight users.' },
        { title: 'Web Design', description: 'Building responsive and performant websites with modern technologies.' },
        { title: 'Landing Pages', description: 'High-converting landing pages designed to capture leads and drive sales.' }
    ],
    portfolioExperienceList: [
        { company: 'ADDINN Tunisia', role: 'FullStack Developer | Java/JEE, Angular', period: 'July 2022 – Jan 2025', description: 'Developed multiple platforms including FTUSA (Claims Management), FreightSure (Transport Insurance), and Smart Claim. Implemented automated workflows and optimized performance using Java SpringBoot, Angular, Docker, and Kubernetes.' }
    ],
    portfolioTestimonialsList: [
        { name: 'Jennifer', role: 'Product Manager', quote: 'Ahmed is a fantastic designer who truly understands user needs. Highly recommended!' },
        { name: 'David', role: 'CEO', quote: 'The new design exceeded our expectations. Our conversion rates have doubled since launch.' }
    ],

    portfolioSkillsTitle: "My",
    portfolioSkillsTitleHighlight: "Skills",
    portfolioSkillsSubtitle: "I have honed my skills over years of delivering high-quality digital solutions.",
    portfolioSkillsList: [
        { category: 'Technologies & Langages', skills: ['Java/J2EE (Spring Boot)', 'Angular', 'NestJS', 'Next.js', 'Web Services (SOAP, REST)', 'JavaScript', 'TypeScript', 'HTML/CSS', 'API (Swagger, OKTA, Stripe)'] },
        { category: 'Outils & DevOps', skills: ['IntelliJ', 'Eclipse', 'Git/GitLab', 'Maven', 'Docker', 'Kubernetes', 'JIRA', 'Keycloak', 'Alfresco ECM'] },
        { category: 'Bases de Données', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle'] },
        { category: 'Design & UI/UX', skills: ['UI/UX', 'Figma', 'Canva'] },
        { category: 'Tests & Monitoring', skills: ['JUnit', 'Mockito', 'Prometheus', 'Grafana', 'Loki'] },
        { category: 'Méthodes & Qualité', skills: ['Agile (SCRUM)', 'Clean Code', 'SOLID', 'Design Patterns'] },
        { category: 'Langues', skills: ['Arabe (natif)', 'Français (B1)', 'Anglais (B1)', 'Allemand (A2)'] }
    ],
    portfolioProjectsList: [
        { title: 'FTUSA Platform', category: 'Web App', description: 'Claims management platform reducing case processing time.', tags: ['Java', 'Angular'], image: 'assets/images/projects/ftusa.jpg', link: 'https://www.addinn-group.com/2023/03/23/addinn-group-signs-with-the-tunisian-federation-of-insurance-companies-ftusa/' },
        { title: 'FreightSure', category: 'Logistics', description: 'Insurance solution for freight transport with real-time tracking.', tags: ['Java API', 'Dashboard'], image: 'assets/images/projects/freightsure.png', link: 'https://www.addinn-group.com/2023/08/20/tout-savoir-sur-lassurance-du-transport-de-marchandises/' },
        { title: 'Smart Claim', category: 'Web App', description: 'Claims management and tracking application with automated workflows.', tags: ['Workflow', 'Automation'], image: 'assets/images/projects/smart-claim.png', link: 'https://www.addinn-group.com/2024/05/22/how-digitization-is-revolutionizing-claims-management-in-the-insurance-industry/' },
        { title: 'Digi-recouvrement', category: 'FinTech', description: 'Automated bank recovery management platform.', tags: ['Performance', 'Automation'], image: 'assets/images/projects/digi-recouvrement.png', link: 'https://www.addinn-group.com/2023/05/20/gestion-digitalisee-du-recouvrement-une-approche-efficace-pour-les-banques-et-les-clients/' }
    ]
  },
  fr: {
    // Labels
    hrEmailLabel: 'Email RH',
    positionLabel: 'Poste',
    subjectLabel: 'Sujet',
    cvLabel: 'Nom du CV',
    descriptionLabel: 'Description',

    // Contact Info Labels
    portfolioContactTitle: "Entrez en",
    portfolioContactTitleHighlight: "Contact",
    portfolioContactSubtitle: "Vous avez un projet en tête ? Parlons-en et construisons quelque chose d'incroyable ensemble.",
    portfolioContactEmail: "Email",
    portfolioContactPhone: "Téléphone",
    portfolioContactAddress: "Adresse",
    portfolioContactFormName: "Votre Nom",
    portfolioContactFormEmail: "Votre Email",
    portfolioContactFormSubject: "Sujet",
    portfolioContactFormMessage: "Message",
    portfolioContactFormSubmit: "Envoyer le Message",
    portfolioContactFormSending: "Envoi en cours...",
    portfolioContactFormSuccess: "Message envoyé avec succès !",
    portfolioContactFormError: "Une erreur est survenue. Veuillez réessayer.",
    portfolioContactFormRequired: "Ce champ est obligatoire",
    portfolioContactFormInvalidEmail: "Veuillez entrer un email valide",

    // Popovers
    portfolioPopoverEmailTitle: "Contact Email",
    portfolioPopoverEmailDesc: "Envoyez-moi un email pour toute demande de collaboration, d'embauche ou questions générales.",
    portfolioPopoverPhoneTitle: "Contact Téléphonique",
    portfolioPopoverPhoneDesc: "Disponible pour appels directs et WhatsApp pendant les heures de bureau (GMT+1).",
    portfolioPopoverGithubTitle: "Profil GitHub",
    portfolioPopoverGithubDesc: "Explorez mes projets open-source, mes contributions et mes dépôts de code personnels.",
    portfolioPopoverLinkedinTitle: "Réseau LinkedIn",
    portfolioPopoverLinkedinDesc: "Connectons-nous professionnellement, discutons de réseautage ou partageons des idées.",

    // Placeholders
    hrEmailPlaceholder: 'rh@entreprise.com',
    positionPlaceholder: 'ex: Développeur Frontend Senior',
    subjectPlaceholder: 'Candidature pour...',
    cvPlaceholder: 'Choisir un CV',
    descriptionPlaceholder: 'Parlez-nous de vous...',

    // Buttons
    sendButton: 'Envoyer la candidature',
    sendingButton: 'Envoi en cours...',

    // Errors / Validation
    requiredError: 'Ce champ est requis.',
    emailError: 'Entrez un email valide.',
    cvError: 'Veuillez choisir un fichier CV.',
    errorDefault: "Échec de l'envoi de la candidature.",

    // Header
    dialogTitle: 'Postuler maintenant',

    // Navbar
    navHome: 'Accueil',
    navServices: 'Services',
    navPricing: 'Tarifs',
    navPortfolio: 'Portfolio',
    navSearchPlaceholder: 'Rechercher...',
    navGetStarted: 'Commencer',
    navMenu: 'Menu',

    // Landing - Hero
    heroTitle: 'Ahmed Tombari',
    heroRole: 'Développeur FullStack | Java ☕ | SpringBoot 🌱 | Angular 🅰️ | NestJS 🚀 | Next.js ⚡ | UI/UX 🎨',
    heroLocation: 'Ariana, Tunisie 2037',
    heroTagConception: 'Conception technique',
    heroTagResearch: 'Recherche UI/UX',
    heroTagManagement: 'Gestion de Projet',
    heroTagStrategy: 'Design graphique',
    heroTagStrategy2: 'Développement d’applications',
    heroSendMessage: 'Envoyer une candidature',
    heroViewPortfolio: 'Voir le Portfolio',

     // Landing - Cards Headers
    cardGlobalReach: 'Portée Mondiale',
    cardMonthlyUploads: 'CVs envoyés Mensuels',
    cardUserDemographics: 'Démographie des CV',
    cardSizeEvolution: 'CVs envoyés quotidiennes',

    // Landing - CTA
    ctaTitle: "Votre avenir commence ici 🚀",
    ctaSubtitle: "Postulez avec votre CV et rejoignez une équipe innovante qui façonne le futur du digital.",
    ctaButton: 'Postuler maintenant',

    // Stats (Test4)
    statTotalFiles: 'Total des Fichiers',
    statSendedFiles: 'Total CV Envoyés',
    statFilesToday: "Fichiers Aujourd'hui",
    statTotalSize: 'Taille Totale',
    statOptimized: 'Optimisé',
    statDailyUploads: 'Cvs envoyés Quotidiens',
    statToday: "CV Envoyés Aujourd'hui",
    statActive: 'Actif',
    statSystemStatus: 'État du Système',
    statOnline: 'En Ligne',
    statUptime: 'Temps de Disponibilité',
    statPeriodAllTime: 'Tout le Temps',
    statPeriodToday: "Aujourd'hui",
    statPeriodNow: 'Maintenant',

    // Charts
    chartSalesSeries: 'Ventes',
    chartDailySizeSeries: 'Taille Quotidienne (Mo)',
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    teams: ['Équipe A', 'Équipe B', 'Équipe C', 'Équipe D', 'Équipe E'],
    people: ["Jean", "Dupont", "Paul", "Martin", "Jacques", "Bernard", "Ambre", "Pierre", "Petit", "Marie", "Durand", "David", "Moreau", "Julie", "Robert"],

    // Portfolio
    portfolioAvailable: 'Disponible pour nouveaux projets',
    portfolioHeroTitlePrefix: "Je suis",
    portfolioHeroTitleName: "Ahmed,",
    portfolioHeroTitleSuffix: "Full Stack & UI/UX",
    portfolioHeroDesc: "Disponible immédiatement, ouvert aux postes en local et à l’international. Expert en solutions numériques haute performance.",
    portfolioDownloadCV: "Télécharger CV",
    portfolioDownloading: "Chargement...",
    portfolioDownloadSuccess: "Succès !",
    portfolioViewWork: "Voir Travaux",

    portfolioServicesTitle: "Mes",
    portfolioServicesTitleHighlight: "Services",
    portfolioServicesSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",

    portfolioExperienceTitle: "Mon",
    portfolioExperienceTitleHighlight: "Expérience Prof.",

    portfolioWhyHireTitle: "Pourquoi",
    portfolioWhyHireTitleHighlight: "M'embaucher",
    portfolioWhyHireSuffix: "?",
    portfolioWhyHireText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    portfolioHireButton: "Embauchez-moi",
    portfolioStatsProjectCompleted: "Projets Terminés",

    portfolioProjectsTitle: "Jetons un œil à",
    portfolioProjectsTitleHighlight: "mon",
    portfolioProjectsTitleSuffix: "Portfolio",
    portfolioSeeAll: "Tout Voir",
    portfolioLiranteTitle: "Lirante - Solution de Livraison 🍊",
    portfolioLiranteDesc: "Une solution de livraison de nourriture avec suivi en temps réel.",

    portfolioTestimonialsTitle: "Témoignages qui",
    portfolioTestimonialsTitleHighlight: "Parlent de",
    portfolioTestimonialsTitleSuffix: "Mes Résultats",
    portfolioTestimonialsSubtitle: "Découvrez ce que les autres disent de leur expérience de travail avec moi.",

    portfolioCtaTitle: "Vous avez une idée de",
    portfolioCtaTitleHighlight: "Projet ?",
    portfolioCtaTitleSuffix: "Discutons-en",
    portfolioCtaEmailPlaceholder: "Entrez votre email",
    portfolioCtaSend: "Envoyer",
    portfolioCtaRatings: "Note Moyenne 4.9/5",
    portfolioCtaAwards: "450+ Prix Gagnés",
    portfolioCtaCertified: "Designer Produit Certifié",

    portfolioFooterDesc: "Créer des expériences numériques qui comptent.",
    portfolioFooterLinks: ["Accueil", "À propos", "Processus", "Portfolio", "Blog", "Services"],
    portfolioCopyright: "Copyright © 2026 Ahmed Tombari. Tous droits réservés.",
    portfolioTerms: "Conditions d'utilisation",
    portfolioPrivacy: "Politique de confidentialité",
    portfolioEmail: 'tombariahmed9@gmail.com',
    portfolioPhone: '+21655331664',
    portfolioGithub: 'https://github.com/Ahmed-Tombari',
    portfolioLinkedin: 'https://www.linkedin.com/in/ahmed-tombari/',
    portfolioAddress: 'Tunisie, Ariana 2037',

    portfolioServicesList: [
        { title: 'Design UI/UX', description: 'Création d\'interfaces utilisateur intuitives et engageantes qui ravissent les utilisateurs.' },
        { title: 'Design Web', description: 'Construction de sites web réactifs et performants avec des technologies modernes.' },
        { title: 'Pages d\'atterrissage', description: 'Pages d\'atterrissage à haute conversion conçues pour capturer des leads et stimuler les ventes.' }
    ],
    portfolioExperienceList: [
        { company: 'ADDINN Tunisie', role: 'Développeur FullStack | Java/JEE, Angular', period: 'Juillet 2022 – Janvier 2025', description: 'Conception et développement de plusieurs plateformes (FTUSA, FreightSure, Smart Claim, Digi-recouvrement). Mise en place de workflows automatisés, optimisation des performances et gestion des données.' }
    ],
    portfolioTestimonialsList: [
        { name: 'Jennifer', role: 'Chef de Produit', quote: 'Ahmed est un designer fantastique qui comprend vraiment les besoins des utilisateurs. Hautement recommandé !' },
        { name: 'David', role: 'PDG', quote: 'Le nouveau design a dépassé nos attentes. Nos taux de conversion ont doublé depuis le lancement.' }
    ],

    portfolioSkillsTitle: "Mes",
    portfolioSkillsTitleHighlight: "Compétences",
    portfolioSkillsSubtitle: "J'ai affiné mes compétences au fil des années en livrant des solutions numériques de haute qualité.",
    portfolioSkillsList: [
        { category: 'Technologies & Langages', skills: ['Java/J2EE (Spring Boot)', 'Angular', 'NestJS', 'Next.js', 'Web Services (SOAP, REST)', 'JavaScript', 'TypeScript', 'HTML/CSS', 'API (Swagger, OKTA, Stripe)'] },
        { category: 'Outils & DevOps', skills: ['IntelliJ', 'Eclipse', 'Git/GitLab', 'Maven', 'Docker', 'Kubernetes', 'JIRA', 'Keycloak', 'Alfresco ECM'] },
        { category: 'Bases de Données', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle'] },
        { category: 'Design & UI/UX', skills: ['UI/UX', 'Figma', 'Canva'] },
        { category: 'Tests & Monitoring', skills: ['JUnit', 'Mockito', 'Prometheus', 'Grafana', 'Loki'] },
        { category: 'Méthodes & Qualité', skills: ['Agile (SCRUM)', 'Clean Code', 'SOLID', 'Design Patterns'] },
        { category: 'Langues', skills: ['Arabe (natif)', 'Français (B1)', 'Anglais (B1)', 'Allemand (A2)'] }
    ],
    portfolioProjectsList: [
        { title: 'Plateforme FTUSA', category: 'App Web', description: 'Conception et développement d\'une plateforme de gestion des sinistres, réduisant le temps de traitement.', tags: ['Java', 'Angular'], image: 'assets/images/projects/ftusa.jpg', link: 'https://www.addinn-group.com/2023/03/23/addinn-group-signs-with-the-tunisian-federation-of-insurance-companies-ftusa/' },
        { title: 'FreightSure', category: 'Logistique', description: 'Solution d\'assurance pour le transport de marchandises avec suivi en temps réel.', tags: ['API Java', 'Tableau de Bord'], image: 'assets/images/projects/freightsure.png', link: 'https://www.addinn-group.com/2023/08/20/tout-savoir-sur-lassurance-du-transport-de-marchandises/' },
        { title: 'Smart Claim', category: 'App Web', description: 'Application web dédiée à la gestion et au suivi des sinistres avec workflow automatisé.', tags: ['Workflow', 'Automatisation'], image: 'assets/images/projects/smart-claim.png', link: 'https://www.addinn-group.com/2024/05/22/how-digitization-is-revolutionizing-claims-management-in-the-insurance-industry/' },
        { title: 'Digi-recouvrement', category: 'FinTech', description: 'Plateforme de gestion automatisée des recouvrements bancaires.', tags: ['Performance', 'Automatisation'], image: 'assets/images/projects/digi-recouvrement.png', link: 'https://www.addinn-group.com/2023/05/20/gestion-digitalisee-du-recouvrement-une-approche-efficace-pour-les-banques-et-les-clients/' }
    ]
  },
  ar: {
    // Labels
    hrEmailLabel: 'بريد الموارد البشرية',
    positionLabel: 'المسمى الوظيفي',
    subjectLabel: 'الموضوع',
    cvLabel: 'اسم السيرة الذاتية',
    descriptionLabel: 'الوصف',

    // Contact Info Labels
    portfolioContactTitle: "اتصل",
    portfolioContactTitleHighlight: "بنا",
    portfolioContactSubtitle: "هل لديك مشروع في بالك؟ دعنا نتحدث عنه ونبني شيئًا رائعًا معًا.",
    portfolioContactEmail: "البريد الإلكتروني",
    portfolioContactPhone: "الهاتف",
    portfolioContactAddress: "العنوان",
    portfolioContactFormName: "اسمك",
    portfolioContactFormEmail: "بريدك الإلكتروني",
    portfolioContactFormSubject: "الموضوع",
    portfolioContactFormMessage: "الرسالة",
    portfolioContactFormSubmit: "إرسال الرسالة",
    portfolioContactFormSending: "جاري الإرسال...",
    portfolioContactFormSuccess: "تم إرسال الرسالة بنجاح!",
    portfolioContactFormError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    portfolioContactFormRequired: "هذا الحقل مطلوب",
    portfolioContactFormInvalidEmail: "يرجى إدخال بريد إلكتروني صحيح",

    // Popovers
    portfolioPopoverEmailTitle: "اتصال بالبريد",
    portfolioPopoverEmailDesc: "أرسل لي بريدًا إلكترونيًا للاستفسار عن تعاون في المشاريع أو التوظيف أو الأسئلة العامة.",
    portfolioPopoverPhoneTitle: "اتصال هاتفي",
    portfolioPopoverPhoneDesc: "متاح للمكالمات المباشرة والواتساب خلال ساعات العمل (GMT+1).",
    portfolioPopoverGithubTitle: "ملف GitHub",
    portfolioPopoverGithubDesc: "استكشف مشاريعي مفتوحة المصدر ومساهماتي ومستودعات الأكواد الخاصة بي.",
    portfolioPopoverLinkedinTitle: "شبكة LinkedIn",
    portfolioPopoverLinkedinDesc: "دعنا نتواصل مهنيًا، أو نناقش فرص التعاون، أو نشارك الأفكار.",

    // Placeholders
    hrEmailPlaceholder: 'hr@company.com',
    positionPlaceholder: 'مثال: مطور واجهة أمامية أول',
    subjectPlaceholder: 'طلب توظيف لـ...',
    cvPlaceholder: 'اختر السيرة الذاتية',
    descriptionPlaceholder: 'أخبرنا عن نفسك...',

    // Buttons
    sendButton: 'إرسال الطلب',
    sendingButton: 'جاري الإرسال...',

    // Errors / Validation
    requiredError: 'هذا الحقل مطلوب.',
    emailError: 'أدخل بريداً إلكترونياً صحيحاً.',
    cvError: 'اختر ملف السيرة الذاتية.',
    errorDefault: 'فشل إرسال الطلب.',

    // Header
    dialogTitle: 'قدم الآن',

    // Navbar
    navHome: 'الرئيسية',
    navServices: 'خدمات',
    navPricing: 'الأسعار',
    navPortfolio: 'أعمالنا',
    navSearchPlaceholder: 'بحث...',
    navGetStarted: 'ابدأ الآن',
    navMenu: 'القائمة',

    // Landing - Hero
    heroTitle: 'أحمد الطنباري',
    heroRole: 'FullStack Developer | Java ☕ | SpringBoot 🌱 | Angular 🅰️ | NestJS 🚀 | Next.js ⚡',
    heroLocation: 'أريانة، تونس',
    heroTagConception: 'التصميم التقني',
    heroTagResearch: 'أبحاث تجربة المستخدم وواجهة المستخدم',
    heroTagManagement: 'إدارة المشاريع',
    heroTagStrategy: 'التصميم الجرافيكي',
    heroTagStrategy2: 'تطوير التطبيقات',
    heroSendMessage: 'قدّم طلبًا',
    heroViewPortfolio: 'عرض الأعمال',

     // Landing - Cards Headers
    cardGlobalReach: 'الوصول العالمي',
    cardMonthlyUploads: 'السير الذاتية المرسلة شهرياً',
    cardUserDemographics: 'ديموغرافية السيرة الذاتية',
    cardSizeEvolution: 'السير الذاتية المرسلة يومياً',

    // Landing - CTA
    ctaTitle: 'مستقبلك يبدأ من هنا 🚀',
    ctaSubtitle: 'قدّم سيرتك الذاتية وانضم إلى فريق مبتكر يشكل مستقبل العالم الرقمي.',
    ctaButton: 'قدم الآن',

    // Stats (Test4)
    statTotalFiles: 'إجمالي الملفات',
    statSendedFiles: 'إجمالي السير الذاتية المرسلة',
    statFilesToday: 'ملفات اليوم',
    statTotalSize: 'الحجم الإجمالي',
    statOptimized: 'محسن',
    statDailyUploads: 'الارسالات اليومية',
    statToday: 'اليوم',
    statActive: 'نشط',
    statSystemStatus: 'حالة النظام',
    statOnline: 'متصل',
    statUptime: 'وقت التشغيل',
    statPeriodAllTime: 'كل الوقت',
    statPeriodToday: 'اليوم',
    statPeriodNow: 'الآن',

    // Charts
    chartSalesSeries: 'المبيعات',
    chartDailySizeSeries: 'الحجم اليومي (ميغابايت)',
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    teams: ['فريق أ', 'فريق ب', 'فريق ج', 'فريق د', 'فريق هـ'],
    people: ["جون", "دو", "جو", "سميث", "جيك", "ويليامز", "أمبر", "بيتر", "براون", "ماري", "إيفانز", "ديفيد", "ويلسون", "ليلي", "روبرتس"],

    // Portfolio
    portfolioAvailable: 'متاح لمشاريع جديدة',
    portfolioHeroTitlePrefix: "أنا",
    portfolioHeroTitleName: "أحمد،",
    portfolioHeroTitleSuffix: "Full Stack & UI/UX",
    portfolioHeroDesc: "متاح فوراً، منفتح على المناصب المحلية والدولية. متخصص في الحلول الرقمية عالية الأداء.",
    portfolioDownloadCV: "تحميل السيرة الذاتية",
    portfolioViewWork: "عرض الأعمال",

    portfolioServicesTitle: "",
    portfolioServicesTitleHighlight: "خدماتي",
    portfolioServicesSubtitle: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور.",

    portfolioExperienceTitle: "",
    portfolioExperienceTitleHighlight: "خبرتي العملية",

    portfolioWhyHireTitle: "لماذا",
    portfolioWhyHireTitleHighlight: "توظفني",
    portfolioWhyHireSuffix: "؟",
    portfolioWhyHireText: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. دويس أوتي إيروري دولور إن ريبريهينديت.",
    portfolioHireButton: "وظفني",
    portfolioStatsProjectCompleted: "مشروع مكتمل",

    portfolioProjectsTitle: "لنلقي نظرة على",
    portfolioProjectsTitleHighlight: "أعمالي",
    portfolioProjectsTitleSuffix: "",
    portfolioSeeAll: "عرض الكل",
    portfolioLiranteTitle: "ليرانتي - حل توصيل الطعام 🍊",
    portfolioLiranteDesc: "حل توصيل طعام مع تتبع فوري.",

    portfolioTestimonialsTitle: "شهادات",
    portfolioTestimonialsTitleHighlight: "تتحدث عن",
    portfolioTestimonialsTitleSuffix: "نتائجي",
    portfolioTestimonialsSubtitle: "اقرأ ما يقوله الآخرون عن تجربتهم في العمل معي.",

    portfolioCtaTitle: "لديك فكرة",
    portfolioCtaTitleHighlight: "مشروع رائع؟",
    portfolioCtaTitleSuffix: "لنناقشها",
    portfolioCtaEmailPlaceholder: "أدخل بريدك الإلكتروني",
    portfolioCtaSend: "إرسال",
    portfolioCtaRatings: "4.9/5 متوسط التقييم",
    portfolioCtaAwards: "450+ جوائز",
    portfolioCtaCertified: "مصمم منتج معتمد",

    portfolioFooterDesc: "إنشاء تجارب رقمية ذات قيمة.",
    portfolioFooterLinks: ["الرئيسية", "عني", "العملية", "أعمالي", "المدونة", "الخدمات"],
    portfolioCopyright: "حقوق النشر © 2026 أحمد الطنباري. جميع الحقوق محفوظة.",
    portfolioTerms: "شروط الاستخدام",
    portfolioPrivacy: "سياسة الخصوصية",
    portfolioEmail: 'tombariahmed9@gmail.com',
    portfolioPhone: '+21655331664',
    portfolioGithub: 'https://github.com/Ahmed-Tombari',
    portfolioLinkedin: 'https://www.linkedin.com/in/ahmed-tombari/',
    portfolioAddress: 'Tunisie, Ariana 2037',

    portfolioServicesList: [
        { title: 'تصميم واجهة/تجربة المستخدم', description: 'صياغة واجهات مستخدم بديهية وجذابة تسعد المستخدمين.' },
        { title: 'تصميم الويب', description: 'بناء مواقع ويب سريعة الاستجابة وعالية الأداء بتقنيات حديثة.' },
        { title: 'صفحات الهبوط', description: 'صفحات هبوط عالية التحويل مصممة لجذب العملاء المحتملين وزيادة المبيعات.' }
    ],
    portfolioExperienceList: [
        { company: 'ADDINN تونس', role: 'مطور FullStack | Java/JEE, Angular', period: 'يوليو 2022 – يناير 2025', description: 'تصميم وتطوير منصات متعددة بما في ذلك FTUSA و FreightSure و Smart Claim. تنفيذ سير العمل الآلي وتحسين الأداء باستخدام Java SpringBoot و Angular.' }
    ],
    portfolioTestimonialsList: [
        { name: 'جينيفر', role: 'مدير منتج', quote: 'أحمد مصمم رائع يفهم حقًا احتياجات المستخدم. ينصح به بشده!' },
        { name: 'ديفيد', role: 'الرئيس التنفيذي', quote: 'التصميم الجديد تجاوز توقعاتنا. تضاعفت معدلات التحويل لدينا منذ الإطلاق.' }
    ],

    portfolioSkillsTitle: "مهاراتي",
    portfolioSkillsTitleHighlight: "",
    portfolioSkillsSubtitle: "لقد صقلت مهاراتي على مر السنين لتقديم حلول رقمية عالية الجودة.",
    portfolioSkillsList: [
        { category: 'Technologies & Langages', skills: ['Java/J2EE (Spring Boot)', 'Angular', 'NestJS', 'Next.js', 'Web Services (SOAP, REST)', 'JavaScript', 'TypeScript', 'HTML/CSS', 'API (Swagger, OKTA, Stripe)'] },
        { category: 'Outils & DevOps', skills: ['IntelliJ', 'Eclipse', 'Git/GitLab', 'Maven', 'Docker', 'Kubernetes', 'JIRA', 'Keycloak', 'Alfresco ECM'] },
        { category: 'Bases de Données', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle'] },
        { category: 'Design & UI/UX', skills: ['UI/UX', 'Figma', 'Canva'] },
        { category: 'Tests & Monitoring', skills: ['JUnit', 'Mockito', 'Prometheus', 'Grafana', 'Loki'] },
        { category: 'Méthodes & Qualité', skills: ['Agile (SCRUM)', 'Clean Code', 'SOLID', 'Design Patterns'] },
        { category: 'Langues', skills: ['عربي (اللغة الأم)', 'فرنسي (B1)', 'إنجليزي (B1)', 'ألماني (A2)'] }
    ],
    portfolioProjectsList: [
        { title: 'منصة FTUSA', category: 'تطبيق ويب', description: 'تصميم وتطوير منصة إدارة المطالبات لتقليل وقت معالجة القضايا.', tags: ['Java', 'Angular'], image: 'assets/images/projects/ftusa.jpg', link: 'https://www.addinn-group.com/2023/03/23/addinn-group-signs-with-the-tunisian-federation-of-insurance-companies-ftusa/' },
        { title: 'FreightSure', category: 'لوجستيات', description: 'حل تأمين لنقل البضائع مع تتبع في الوقت الحقيقي.', tags: ['Java API', 'لوحة تحكم'], image: 'assets/images/projects/freightsure.png', link: 'https://www.addinn-group.com/2023/08/20/tout-savoir-sur-lassurance-du-transport-de-marchandises/' },
        { title: 'Smart Claim', category: 'تطبيق ويب', description: 'تطبيق ويب لإدارة وتتبع المطالبات مع سير عمل آلي.', tags: ['سير عمل', 'أتمتة'], image: 'assets/images/projects/smart-claim.png', link: 'https://www.addinn-group.com/2024/05/22/how-digitization-is-revolutionizing-claims-management-in-the-insurance-industry/' },
        { title: 'Digi-recouvrement', category: 'FinTech', description: 'منصة إدارة استرداد بنكية آلية.', tags: ['أداء', 'أتمتة'], image: 'assets/images/projects/digi-recouvrement.png', link: 'https://www.addinn-group.com/2023/05/20/gestion-digitalisee-du-recouvrement-une-approche-efficace-pour-les-banques-et-les-clients/' }
    ]
  }
} as const;

export const lang = signal<LanguageCode>('en');

export function setLang(l: LanguageCode) {
  lang.set(l);

   document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.lang = l;
  // Optional: Set document direction for Arabic
  // if (l === 'ar') {
  //   document.documentElement.setAttribute('dir', 'rtl');
  //   document.documentElement.lang = 'ar';
  // } else {
  //   document.documentElement.setAttribute('dir', 'ltr');
  //   document.documentElement.lang = l;
  // }
}

export const i18n = computed(() => (messages as Record<string, any>)[lang()]);

export function t<K extends keyof typeof messages['en']>(key: K) {
  return computed(() => ((messages as any)[lang()])[key]);
}
