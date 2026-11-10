export type Language = "fr" | "en";

export const translations = {
  fr: {
    sections: { about: "a-propos", experience: "experience", certifications: "certifications", projects: "projets", techStack: "competences", contact: "contact" },
    nav: {
      returnHomepage: "Retour à l'accueil", home: "Accueil", about: "À propos", experience: "Expérience", certifications: "Certifications", projects: "Projets", contact: "Contact", modeToggle: "Basculer entre les thèmes clair et sombre",
      burger: { openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", open: "Ouvrir", close: "Fermer", menu: "le menu" },
    },
    hero: {
      eyebrow: "Génie électromécanique · Automatisme · Digitalisation",
      description: "Élève-ingénieure en génie électromécanique à l’ENSAM Meknès, intéressée par l’automobile, l’automatisme et l’industrie 4.0. Je recherche un stage PFE de six mois à partir de février 2027.",
      primaryCta: "Découvrir mes projets", secondaryCta: "Me contacter",
    },
    about: {
      title: "À propos", tags: { location: "Meknès, Maroc", softwareEng: "Génie électromécanique", mlAi: "Automatisme & commande", mobileWeb: "Industrie 4.0" },
      description: "Élève-ingénieure en 5e année de génie électromécanique à l’ENSAM Meknès, option Maintenance & Commande Industrielle. Mon parcours associe mécanique, électrotechnique, automatisme et digitalisation industrielle.",
      quote: "À la recherche d’un stage PFE de 6 mois dès février 2027.",
      education: { title: "Formation", ensamEngineering: { location: "ENSAM Meknès", degree: "Cycle ingénieur — Génie électromécanique, option Maintenance & Commande Industrielle", date: "2024 – présent" }, ensamPreparatory: { location: "ENSAM Meknès", degree: "Cycle préparatoire intégré", date: "2022 – 2024" }, highschool: { location: "Baccalauréat Sciences Physiques", degree: "Mention Très Bien", date: "2022" } },
      viewCV: "Me contacter", cvLink: "#contact",
    },
    experience: {
      title: "Expérience professionnelle",
      items: [
        { id: "ocp", company: "Groupe OCP", role: "Stage PFA — Commande et supervision du groupe turbo-alternateur", location: "Jorf Lasfar", date: "Juillet – août 2026", achievements: ["Mené un Proof of Concept sur le groupe turbo-alternateur de la centrale KOFERT, validé par l’encadrant.", "Cartographié et intégré des variables du GTA via Modbus TCP/IP.", "Conçu sous Node-RED un tableau de bord temps réel reprenant le synoptique du GTA, avec jauges, tendances et alarmes.", "Simulé une panne avec alarme sonore et commande des purges verrouillée par interlock de vitesse.", "Vérifié la faisabilité d’une implantation sur DCS par simulation avec OpenPLC et ModbusSim ; étudié le DCS Yokogawa CENTUM VP, les automates Allen-Bradley et les blocs FBD."] },
        { id: "lafarge", company: "LafargeHolcim", role: "Stage d’initiation — Observation", location: "Meknès", date: "Juillet 2025", achievements: ["Analysé le système d’ensachage HAVER ROTO-PACKER, ses cycles de pesage électronique et son cadencement pneumatique.", "Observé l’utilisation du SCADA pour le suivi de production et la gestion des alarmes.", "Découvert la démarche AMDEC pour la fiabilité des équipements et l’utilisation de SAP pour la gestion de maintenance."] },
      ],
    },
    certifications: {
      title: "Certifications", verify: "", items: [
        { id: "lean-six-sigma", title: "Lean Six Sigma — Yellow Belt", issuer: "", date: "", description: "Certification Yellow Belt.", skills: "" },
        { id: "iot", title: "Introduction to IoT", issuer: "Cisco Networking Academy", date: "", description: "", skills: "" },
        { id: "python", title: "Python", issuer: "Udemy", date: "", description: "", skills: "" },
        { id: "engineering-project-management", title: "Engineering Project Management", issuer: "Alison", date: "", description: "", skills: "" },
      ],
    },
    projects: {
      title: "Projets académiques", seeProject: "", items: [
        { id: "dtc-fpga", title: "Commande DTC d’un moteur asynchrone sur FPGA", description: "Projet en cours : co-simulation temps réel de la commande sur carte FPGA.", date: "En cours", tags: ["Commande DTC", "FPGA", "Moteur asynchrone"] },
        { id: "ev-battery", title: "Modélisation multiphysique d’un module de batterie EV", description: "Modélisation sous ANSYS et analyses thermique et mécanique : répartition des températures, dissipation thermique, contraintes et déformations.", date: "2025", tags: ["ANSYS", "Véhicule électrique", "Thermique", "Mécanique"] },
        { id: "bucket-elevator", title: "Élévateur à godets", description: "Dimensionnement mécanique du système.", date: "2025", tags: ["Conception mécanique", "Dimensionnement"] },
        { id: "cn-milling", title: "Commande d’une table de fraiseuse à CN", description: "Dimensionnement et commande d’un servomoteur de table de fraiseuse à commande numérique avec AutoCAD Electrical.", date: "2026", tags: ["AutoCAD Electrical", "Servomoteur", "Commande"] },
        { id: "plc-supervision", title: "Automate et supervision industrielle", description: "Configuration d’un automate avec Ladder et GRAFCET, puis développement de sa supervision sous WinCC.", date: "", tags: ["STEP 7", "Ladder", "GRAFCET", "WinCC"] },
        { id: "electrical-installation", title: "Étude d’une installation basse tension", description: "Étude de sélectivité et de protection d’une installation BT avec ETAP et Caneco BT.", date: "", tags: ["ETAP", "Caneco BT", "Électrotechnique"] },
        { id: "smart-blind", title: "Store intelligent auto-réglable", description: "Régulation thermique par capteurs de luminosité et asservissement moteur avec ESP32.", date: "2026", tags: ["ESP32", "Capteurs", "Asservissement"] },
        { id: "thrsim11", title: "Programmation d’un microcontrôleur", description: "Programmation d’un microcontrôleur avec THRSim11 en langage assembleur.", date: "", tags: ["THRSim11", "Assembleur"] },
      ],
    },
    techStack: {
      title: "Compétences & outils",
      categories: { languages: "Conception & simulation", mobileWeb: "Automatisme & supervision", dataAi: "Communication industrielle", databases: "Électrotechnique", devops: "Embarqué & programmation", xr: "Gestion & qualité" },
      items: [
        { category: "languages", name: "CATIA V5 · SolidWorks · AutoCAD · ANSYS · MATLAB/Simulink · RDM6" },
        { category: "mobileWeb", name: "STEP 7 · WinCC · Ladder · GRAFCET · SCADA · DCS Yokogawa CENTUM VP · Node-RED" },
        { category: "dataAi", name: "Modbus TCP/IP · PROFINET (notions) · PROFIBUS (notions) · OPC UA (notions)" },
        { category: "databases", name: "ETAP · Caneco BT · AutoCAD Electrical" },
        { category: "devops", name: "ESP32 · Arduino · FPGA · Assembleur · C++ · Python · Java · Excel VBA" },
        { category: "xr", name: "Lean Six Sigma · AMDEC (notions) · SAP · Prelude 7 ERP · Power BI" },
      ],
      languagesLabel: "Langues",
      languages: ["Arabe — langue maternelle", "Français — professionnel", "Anglais — professionnel"],
    },
    activities: { title: "Activités associatives", role: "Secrétaire · Sponsoring · Formation", date: "2022 – 2025", achievements: ["Dirigé l’équipe d’organisation du Meeting Lauréat Étudiant en tant que cheffe d’organisation.", "Participé à l’organisation du Forum Arts et Métiers, de Méca-Day et de la Journée Industrielle."] },
    contact: { title: "Contact", infos: { available: "À la recherche d’un stage PFE dès février 2027", usefulLinks: "Coordonnées" }, form: { title: "Échangeons", description: "Pour toute proposition de stage ou prise de contact, écrivez-moi par email ou appelez-moi." } },
    footer: { description: "Élève-ingénieure en génie électromécanique à l’ENSAM Meknès, intéressée par l’automobile, l’automatisme et la digitalisation industrielle.", navigation: "Navigation", contact: { title: "Contact", follow: "LinkedIn : rania-madmoune" }, rights: "Tous droits réservés.", legal: "Mentions légales", privacy: "Confidentialité" },
    legal: { title: "Mentions légales", owner: "Rania Madmoune", email: "raniamadmoune@gmail.com", intellectualProperty: "Les textes présentant le parcours et les projets de Rania Madmoune sont publiés à titre de portfolio. Les marques et outils cités appartiennent à leurs propriétaires respectifs.", hosting: "Site statique configuré pour une publication avec GitHub Pages." },
    privacy: { title: "Confidentialité", text: "Ce portfolio ne comporte pas de formulaire de collecte. Les liens de contact ouvrent votre application de messagerie ou de téléphone. Lors de sa publication, le site sera hébergé par GitHub Pages ; veuillez consulter les informations de confidentialité de GitHub pour les données liées à l’hébergement." },
  },
  en: {
    sections: { about: "about", experience: "experience", certifications: "certifications", projects: "projects", techStack: "skills", contact: "contact" },
    nav: {
      returnHomepage: "Back to home", home: "Home", about: "About", experience: "Experience", certifications: "Certifications", projects: "Projects", contact: "Contact", modeToggle: "Toggle light and dark themes",
      burger: { openMenu: "Open menu", closeMenu: "Close menu", open: "Open", close: "Close", menu: "menu" },
    },
    hero: {
      eyebrow: "Electromechanical Engineering · Automation · Digitalization",
      description: "Electromechanical engineering student at ENSAM Meknes, interested in the automotive industry, automation and Industry 4.0. Seeking a six-month final-year internship starting February 2027.",
      primaryCta: "Explore my projects", secondaryCta: "Contact me",
    },
    about: {
      title: "About", tags: { location: "Meknes, Morocco", softwareEng: "Electromechanical engineering", mlAi: "Automation & control", mobileWeb: "Industry 4.0" },
      description: "Fifth-year electromechanical engineering student at ENSAM Meknes, specializing in Industrial Maintenance & Control. My studies bring together mechanics, electrical engineering, automation and industrial digitalization.",
      quote: "Seeking a six-month final-year internship from February 2027.",
      education: { title: "Education", ensamEngineering: { location: "ENSAM Meknes", degree: "Engineering cycle — Electromechanical Engineering, Industrial Maintenance & Control option", date: "2024 – present" }, ensamPreparatory: { location: "ENSAM Meknes", degree: "Integrated preparatory cycle", date: "2022 – 2024" }, highschool: { location: "Physical Sciences Baccalaureate", degree: "Highest Honors", date: "2022" } },
      viewCV: "Contact me", cvLink: "#contact",
    },
    experience: {
      title: "Professional Experience",
      items: [
        { id: "ocp", company: "OCP Group", role: "PFA internship — Turbo-generator control and supervision", location: "Jorf Lasfar", date: "July – August 2026", achievements: ["Led a Proof of Concept on the KOFERT plant turbo-generator, validated by the supervisor.", "Mapped and integrated turbo-generator variables using Modbus TCP/IP.", "Built a real-time Node-RED dashboard reflecting the turbo-generator diagram, with gauges, trends and alarms.", "Simulated a fault with an audible alarm and a speed-interlocked purge control.", "Checked DCS deployment feasibility through OpenPLC and ModbusSim simulation; studied Yokogawa CENTUM VP DCS, Allen-Bradley PLCs and FBD control blocks."] },
        { id: "lafarge", company: "LafargeHolcim", role: "Introductory observation internship", location: "Meknes", date: "July 2025", achievements: ["Analysed the HAVER ROTO-PACKER bagging system, including electronic weighing cycles and pneumatic sequencing.", "Observed SCADA use for production monitoring and alarm management.", "Learned about FMEA for equipment reliability and SAP for maintenance management."] },
      ],
    },
    certifications: {
      title: "Certifications", verify: "", items: [
        { id: "lean-six-sigma", title: "Lean Six Sigma — Yellow Belt", issuer: "", date: "", description: "Yellow Belt certification.", skills: "" },
        { id: "iot", title: "Introduction to IoT", issuer: "Cisco Networking Academy", date: "", description: "", skills: "" },
        { id: "python", title: "Python", issuer: "Udemy", date: "", description: "", skills: "" },
        { id: "engineering-project-management", title: "Engineering Project Management", issuer: "Alison", date: "", description: "", skills: "" },
      ],
    },
    projects: {
      title: "Academic Projects", seeProject: "", items: [
        { id: "dtc-fpga", title: "DTC control of an induction motor on FPGA", description: "Ongoing project: real-time co-simulation of motor control on an FPGA board.", date: "Ongoing", tags: ["DTC control", "FPGA", "Induction motor"] },
        { id: "ev-battery", title: "Multiphysics modelling of an EV battery module", description: "ANSYS modelling and thermal and mechanical analyses of temperature distribution, heat dissipation, stress and deformation.", date: "2025", tags: ["ANSYS", "Electric vehicle", "Thermal", "Mechanical"] },
        { id: "bucket-elevator", title: "Bucket elevator", description: "Mechanical system sizing.", date: "2025", tags: ["Mechanical design", "Sizing"] },
        { id: "cn-milling", title: "CNC milling table control", description: "Sized and controlled a milling machine table servomotor using AutoCAD Electrical.", date: "2026", tags: ["AutoCAD Electrical", "Servomotor", "Control"] },
        { id: "plc-supervision", title: "Industrial PLC and supervision", description: "Configured a PLC with Ladder and GRAFCET, then developed its supervision in WinCC.", date: "", tags: ["STEP 7", "Ladder", "GRAFCET", "WinCC"] },
        { id: "electrical-installation", title: "Low-voltage installation study", description: "Studied selectivity and protection for a low-voltage installation using ETAP and Caneco BT.", date: "", tags: ["ETAP", "Caneco BT", "Electrical engineering"] },
        { id: "smart-blind", title: "Self-adjusting smart blind", description: "Thermal regulation with light sensors and motor control using ESP32.", date: "2026", tags: ["ESP32", "Sensors", "Motor control"] },
        { id: "thrsim11", title: "Microcontroller programming", description: "Programmed a microcontroller in assembly using THRSim11.", date: "", tags: ["THRSim11", "Assembly"] },
      ],
    },
    techStack: {
      title: "Skills & Tools",
      categories: { languages: "Design & simulation", mobileWeb: "Automation & supervision", dataAi: "Industrial communication", databases: "Electrical engineering", devops: "Embedded systems & programming", xr: "Management & quality" },
      items: [
        { category: "languages", name: "CATIA V5 · SolidWorks · AutoCAD · ANSYS · MATLAB/Simulink · RDM6" },
        { category: "mobileWeb", name: "STEP 7 · WinCC · Ladder · GRAFCET · SCADA · Yokogawa CENTUM VP DCS · Node-RED" },
        { category: "dataAi", name: "Modbus TCP/IP · PROFINET (basic) · PROFIBUS (basic) · OPC UA (basic)" },
        { category: "databases", name: "ETAP · Caneco BT · AutoCAD Electrical" },
        { category: "devops", name: "ESP32 · Arduino · FPGA · Assembly · C++ · Python · Java · Excel VBA" },
        { category: "xr", name: "Lean Six Sigma · FMEA (basic) · SAP · Prelude 7 ERP · Power BI" },
      ],
      languagesLabel: "Languages",
      languages: ["Arabic — native", "French — professional", "English — professional"],
    },
    activities: { title: "Community Activities", role: "Secretary · Sponsorship · Training", date: "2022 – 2025", achievements: ["Led the organizing team for the Meeting Lauréat Étudiant as chief organizer.", "Helped organize the Arts et Métiers Forum, Méca-Day and Industrial Day."] },
    contact: { title: "Contact", infos: { available: "Seeking a final-year internship from February 2027", usefulLinks: "Contact details" }, form: { title: "Get in touch", description: "For internship opportunities or other enquiries, email or call me." } },
    footer: { description: "Electromechanical engineering student at ENSAM Meknes, interested in automotive, automation and industrial digitalization.", navigation: "Navigation", contact: { title: "Contact", follow: "LinkedIn: rania-madmoune" }, rights: "All rights reserved.", legal: "Legal notice", privacy: "Privacy" },
    legal: { title: "Legal Notice", owner: "Rania Madmoune", email: "raniamadmoune@gmail.com", intellectualProperty: "Texts describing Rania Madmoune’s background and projects are published as a portfolio. Mentioned brands and tools belong to their respective owners.", hosting: "Static site configured for deployment with GitHub Pages." },
    privacy: { title: "Privacy", text: "This portfolio has no data collection form. Contact links open your email or phone application. When published, the site will be hosted by GitHub Pages; please refer to GitHub’s privacy information for hosting-related data." },
  },
} as const;
