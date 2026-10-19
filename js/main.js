/* =========================================================
   Portfolio — François ANDRIAMANANTSOA
   Features : menu mobile, toggle FR/EN, scroll reveal
   ========================================================= */

// ---------- 1. Menu mobile ----------
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Ferme le menu au clic sur un lien
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// ---------- 2. i18n FR / EN ----------
const translations = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Développeur Full-Stack Junior — .NET / JS',
    'hero.pitch': "Titulaire d'une Licence Web & Design de l'IT-University d'Antananarivo. Je recherche une première opportunité en développement full-stack, après un stage de 10 mois chez Ravinala Airports.",
    'hero.available': 'Disponible depuis le 22 août 2026',
    'hero.ctaProjects': 'Voir mes projets',
    'hero.ctaContact': 'Me contacter',

    // About
    'about.tag': '01 — À propos',
    'about.diplom': 'Licence en Web & Design',
    'about.title': 'Qui suis-je ?',
    'about.p1': "Développeur full-stack junior basé à Antananarivo, je conçois et développe des applications web complètes, de la base de données jusqu'à l'interface utilisateur. Je privilégie des solutions simples, documentées et faciles à maintenir.",
    'about.p2': "Pendant mon stage chez Ravinala Airports, j'ai développé une application interne de gestion du recrutement (ASP.NET Core 8 + React), en collaboration directe avec les équipes RH et DSI — ce projet a servi de projet de fin d'études pour ma Licence. J'ai également repris et fiabilisé une seconde application RH de gestion des missions : séparation du code, correction de bugs, ajout d'une fonctionnalité multi-devises et déploiement en pré-production.",    'about.p3': "Je recherche aujourd'hui un premier poste où je pourrai continuer à progresser sur des projets concrets, au sein d'une équipe expérimentée.",
    'about.educationLabel': 'FORMATION',
    'about.languagesLabel': 'LANGUES',
    'about.lang.mg': 'Malagasy — langue maternelle',
    'about.lang.fr': 'Français — courant',
    'about.lang.en': 'Anglais — intermédiaire',
    'about.lang.es': 'Espagnol — débutant',

    // Experience
    'exp.tag': '02 — Expérience',
    'exp.title': 'Parcours professionnel',
    'exp.role': 'Stagiaire développeur — DRH / DSI',
    'exp.b1': "Conception et développement de Recruitment-App, une application interne de gestion des demandes de recrutement, fiches de poste, candidatures et entretiens (ASP.NET Core 8 + React + SQL Server).",
    'exp.b2': "Reprise de l'application Gestion de Mission (initialement fusionnée avec Recruitment) : séparation du code, correction de bugs et stabilisation avant déploiement.",
    'exp.b3': "Ajout d'une fonctionnalité multi-devises à Gestion de Mission (gestion des taux de change et des montants par devise).",
    'exp.b4': "Déploiement des deux applications en pré-production, et animation des revues de sprint avec les équipes DSI et DRH.",

    // Projects
    'proj.tag': '03 — Projets',
    'proj.title': 'Projets sélectionnés',
    'proj.demo': 'Démo ↗',
    'proj.code': 'Code ↗',
    'proj.internal': 'Application interne — non publique',
    'proj.notDeployed': 'Non déployé',
    'proj.poultry.desc': "Application web de gestion d'élevage : suivi des lots, consommation d'aliments, production et mortalité des poulets.",
    'proj.recruitment.desc': "Application interne de gestion des demandes de recrutement : fiches de poste, candidatures et entretiens. Projet de stage chez Ravinala Airports et projet de fin d'études de Licence.",
    'proj.ticketing.desc': "Application de réservation de billets d'avion avec validation administrateur. Le client (Java) réserve une place ; la demande est transmise via une API REST à un back-office admin (Spring Boot) qui valide ou refuse la réservation.",
    'proj.boulangerie.desc': "Application web de gestion d'une boulangerie : stock d'ingrédients, recettes et ventes de produits.",

    // Skills
    'skills.tag': '04 — Compétences',
    'skills.title': 'Stack technique',
    'skills.languages': 'LANGAGES',
    'skills.frameworks': 'FRAMEWORKS',
    'skills.databases': 'BASES DE DONNÉES',
    'skills.tools': 'OUTILS & SYSTÈMES',
    'skills.notions': 'Notions : pfSense, Load Balancing, Active Directory',

    // Contact
    'contact.tag': '05 — Contact',
    'contact.title': 'Travaillons ensemble',
    'contact.text': "Je suis ouvert à toute opportunité junior en développement full-stack. N'hésitez pas à me contacter par email ou via LinkedIn.",
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.title': 'Junior Full-Stack Developer — .NET / JS',
    'hero.pitch': "Graduated with a Bachelor's degree in Web & Design from IT-University Antananarivo. I'm looking for a first full-stack developer role after a 10-month internship at Ravinala Airports.",
    'hero.available': 'Available since August 22, 2026',
    'hero.ctaProjects': 'View my projects',
    'hero.ctaContact': 'Contact me',

    // About
    'about.tag': '01 — About',
    'about.diplom': "Bachelor's degree in Web & Design",
    'about.title': 'Who am I?',
    'about.p1': "Junior full-stack developer based in Antananarivo. I design and build complete web applications, from the database all the way to the user interface. I favor simple, documented, and maintainable solutions.",
    'about.p2': "During my internship at Ravinala Airports, I built an internal recruitment management application (ASP.NET Core 8 + React), working directly with the HR and IT teams — this project also served as my Bachelor's final-year project. I also took over and stabilized a second HR application for business travel management: code separation, bug fixing, a multi-currency feature, and pre-production deployment.",    'about.p3': "I'm now looking for a first role where I can keep growing on real-world projects, alongside an experienced team.",
    'about.educationLabel': 'EDUCATION',
    'about.languagesLabel': 'LANGUAGES',
    'about.lang.mg': 'Malagasy — native',
    'about.lang.fr': 'French — fluent',
    'about.lang.en': 'English — intermediate',
    'about.lang.es': 'Spanish — beginner',

    // Experience
    'exp.tag': '02 — Experience',
    'exp.title': 'Professional background',
    'exp.role': 'Software Developer Intern — HR / IT',
    'exp.b1': "Designed and developed Recruitment-App, an internal application managing recruitment requests, job descriptions, applications, and interviews (ASP.NET Core 8 + React + SQL Server).",
    'exp.b2': "Took over the Gestion de Mission application (initially merged with Recruitment): code separation, bug fixing, and stabilization ahead of deployment.",    
    'exp.b3': "Added a multi-currency feature to Gestion de Mission (exchange rate handling and per-currency amounts).",
    'exp.b4': "Deployed both applications to pre-production, and led sprint reviews with the IT and HR teams.",

    // Projects
    'proj.tag': '03 — Projects',
    'proj.title': 'Selected projects',
    'proj.demo': 'Live demo ↗',
    'proj.code': 'Code ↗',
    'proj.internal': 'Internal application — not public',
    'proj.notDeployed': 'Not deployed',
    'proj.poultry.desc': "Web application for poultry farm management: flock tracking, feed consumption, production, and chicken mortality.",
    'proj.recruitment.desc': "Internal recruitment management application: job descriptions, applications, and interviews. Ravinala Airports internship project and Bachelor's final-year project.",
    'proj.ticketing.desc': "Airline ticket reservation application with admin validation. The client (Java) books a seat; the request is sent via a REST API to an admin back-office (Spring Boot) that approves or rejects the booking.",
    'proj.boulangerie.desc': "Bakery management web application: ingredient stock, recipes, and product sales.",

    // Skills
    'skills.tag': '04 — Skills',
    'skills.title': 'Technical stack',
    'skills.languages': 'LANGUAGES',
    'skills.frameworks': 'FRAMEWORKS',
    'skills.databases': 'DATABASES',
    'skills.tools': 'TOOLS & SYSTEMS',
    'skills.notions': 'Basics: pfSense, Load Balancing, Active Directory',

    // Contact
    'contact.tag': '05 — Contact',
    'contact.title': "Let's work together",
    'contact.text': "I'm open to any junior full-stack opportunity. Feel free to reach out by email or LinkedIn.",
  },
};

const langToggle = document.getElementById('langToggle');

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  localStorage.setItem('portfolio-lang', lang);
}

// Langue initiale : localStorage > FR par défaut
const savedLang = localStorage.getItem('portfolio-lang') || 'fr';
applyLanguage(savedLang);

// Toggle FR / EN
langToggle.addEventListener('click', () => {
  const current = localStorage.getItem('portfolio-lang') || 'fr';
  applyLanguage(current === 'fr' ? 'en' : 'fr');
});

// ---------- 3. Scroll reveal ----------
const sections = document.querySelectorAll('section');
sections.forEach(s => s.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(s => observer.observe(s));
