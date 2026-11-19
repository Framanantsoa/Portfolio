/* =========================================================
   Portfolio — François ANDRIAMANANTSOA
   Features : menu mobile, toggle FR/EN, scroll reveal
   ========================================================= */

// ---------- Safe storage helper ----------
function readStoredLang() {
  try {
    return localStorage.getItem('portfolio-lang');
  } catch (_) {
    return null;
  }
}

function writeStoredLang(lang) {
  try {
    localStorage.setItem('portfolio-lang', lang);
  } catch (_) {
    // Ignore storage restrictions (e.g., strict privacy mode)
  }
}

// ---------- 1. Menu mobile ----------
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', String(!isHidden));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

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
    'hero.title': 'Développeur Full-Stack & Support IT — .NET / JS',
    'hero.pitch':
      "Titulaire d'une Licence en Informatique de l'IT-University d'Antananarivo. À l'aise aussi bien en développement web full-stack qu'en support technique, systèmes et réseaux, après 10 mois d'expérience chez Ravinala Airports.",
    'hero.available': 'Disponible depuis le 22 août 2026',
    'hero.ctaProjects': 'Voir mes projets',
    'hero.ctaContact': 'Me contacter',

    // About
    'about.tag': '01 — À propos',
    'about.diplom': 'Licence en Informatique',
    'about.specialty': 'Spécialité : Web & Design',
    'about.title': 'Qui suis-je ?',
    'about.p1':
      "Diplômé en informatique basé à Antananarivo, je développe des applications web complètes et j'interviens également sur le diagnostic, la fiabilisation et le support technique des environnements applicatifs et systèmes.",
    'about.p2':
      "Pendant mon stage chez Ravinala Airports, j'ai conçu une application interne de gestion du recrutement (ASP.NET Core 8 + React) avec gestion des droits et traçabilité, et repris l'application de gestion des missions (séparation du code, correction de bugs, ajout du multi-devises et déploiement en pré-production) en lien direct avec les équipes RH et DSI.",
    'about.p3':
      "Je suis ouvert aux opportunités en développement full-stack comme en support technique IT, au sein d'une équipe où je peux apporter réactivité, rigueur et polyvalence.",
    'about.educationLabel': 'FORMATION',
    'about.languagesLabel': 'LANGUES',
    'about.lang.mg': 'Malagasy — langue maternelle',
    'about.lang.fr': 'Français — courant',
    'about.lang.en': 'Anglais — intermédiaire',
    'about.lang.es': 'Espagnol — débutant',

    // Experience
    'exp.tag': '02 — Expérience',
    'exp.title': 'Parcours professionnel',
    'exp.role': 'Stagiaire développeur & support applicatif — DRH / DSI',
    'exp.b1':
      'Conception et développement de <strong class="text-primary font-semibold">Recruitment-App</strong>, une application interne de gestion des demandes de recrutement, fiches de poste, candidatures et entretiens (ASP.NET Core 8 + React + SQL Server).',
    'exp.b2':
      "Mise en place d'une architecture de contrôle d'accès (Utilisateurs — Rôles — Permissions) avec interface d'administration dédiée, ainsi que d'un système de logs et d'historique pour la traçabilité des actions.",
    'exp.b3':
      "Reprise de l'application Gestion de Mission (initialement fusionnée avec Recruitment) : séparation du code, correction de bugs et stabilisation avant déploiement.",
    'exp.b4':
      "Ajout d'une fonctionnalité multi-devises à Gestion de Mission (gestion des taux de change et des montants par devise).",
    'exp.b5':
      'Déploiement des deux applications en pré-production, accompagnement des utilisateurs métiers et animation des revues de sprint avec les équipes DSI et DRH.',

    // Projects
    'proj.tag': '03 — Projets',
    'proj.title': 'Projets sélectionnés',
    'proj.demo': 'Démo ↗',
    'proj.code': 'Code ↗',
    'proj.internal': 'Application interne — non publique',
    'proj.notDeployed': 'Non déployé',
    'proj.poultry.desc':
      "Application web de gestion d'élevage : suivi des lots, consommation d'aliments, production et mortalité des poulets.",
    'proj.recruitment.desc':
      "Application interne de gestion des demandes de recrutement : fiches de poste, candidatures et entretiens. Projet de stage chez Ravinala Airports et projet de fin d'études de Licence.",
    'proj.ticketing.desc':
      "Application de réservation de billets d'avion avec validation administrateur. Le client (Java) réserve une place ; la demande est transmise via une API REST à un back-office admin (Spring Boot) qui valide ou refuse la réservation.",
    'proj.boulangerie.desc':
      "Application web de gestion complète d'une boulangerie : gestion des recettes, des stocks d'ingrédients et de la fabrication sous transactions atomiques (tout ou rien). Suivi des ventes, des commissions vendeurs et de l'historique des prix produits.",

    // Skills
    'skills.tag': '04 — Compétences',
    'skills.title': 'Stack & environnement technique',
    'skills.languages': 'LANGAGES',
    'skills.frameworks': 'FRAMEWORKS',
    'skills.network': 'SYSTÈMES, RÉSEAUX & SUPPORT',
    'skills.databases': 'BASES DE DONNÉES',
    'skills.architecture': 'ARCHITECTURE & API',
    'skills.methodologies': 'MÉTHODOLOGIES & MODÉLISATION',
    'skills.tools': 'OUTILS & DESIGN',

    // Contact
    'contact.tag': '05 — Contact',
    'contact.title': 'Travaillons ensemble',
    'contact.text':
      "Je suis ouvert aux opportunités en développement full-stack comme en support technique IT. N'hésitez pas à me contacter par email ou via LinkedIn.",
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
    'hero.title': 'Full-Stack Developer & IT Support — .NET / JS',
    'hero.pitch':
      "Bachelor's degree in Computer Science from IT-University Antananarivo. Experienced in both full-stack web development and technical, systems, and network support following a 10-month internship at Ravinala Airports.",
    'hero.available': 'Available since August 22, 2026',
    'hero.ctaProjects': 'View my projects',
    'hero.ctaContact': 'Contact me',

    // About
    'about.tag': '01 — About',
    'about.diplom': "Bachelor's Degree in Computer Science",
    'about.specialty': 'Specialization: Web & Design',
    'about.title': 'Who am I?',
    'about.p1':
      'Computer science graduate based in Antananarivo, building end-to-end web applications while also handling troubleshooting, stabilization, and technical support across application and system environments.',
    'about.p2':
      'During my internship at Ravinala Airports, I built an internal recruitment management app (ASP.NET Core 8 + React) with role-permission access and audit logs, and took over the mission management app (code separation, bug fixing, multi-currency support, and pre-production deployment) working closely with HR and IT.',
    'about.p3':
      'Open to both full-stack development and IT support roles where I can bring reliability, structured problem-solving, and adaptability.',
    'about.educationLabel': 'EDUCATION',
    'about.languagesLabel': 'LANGUAGES',
    'about.lang.mg': 'Malagasy — native',
    'about.lang.fr': 'French — fluent',
    'about.lang.en': 'English — intermediate',
    'about.lang.es': 'Spanish — beginner',

    // Experience
    'exp.tag': '02 — Experience',
    'exp.title': 'Professional background',
    'exp.role': 'Developer & Application Support Intern — HR / IT',
    'exp.b1':
      'Designed and developed <strong class="text-primary font-semibold">Recruitment-App</strong>, an internal application managing recruitment requests, job descriptions, applications, and interviews (ASP.NET Core 8 + React + SQL Server).',
    'exp.b2':
      'Implemented a role-based access control architecture (Users — Roles — Permissions) with a dedicated management UI, alongside action logging and audit history for full traceability.',
    'exp.b3':
      'Took over the Gestion de Mission application (initially merged with Recruitment): code separation, bug fixing, and stabilization ahead of deployment.',
    'exp.b4':
      'Added a multi-currency feature to Gestion de Mission (exchange rate handling and per-currency amounts).',
    'exp.b5':
      'Deployed both applications to pre-production, supported end users, and led sprint reviews with the IT and HR teams.',

    // Projects
    'proj.tag': '03 — Projects',
    'proj.title': 'Selected projects',
    'proj.demo': 'Live demo ↗',
    'proj.code': 'Code ↗',
    'proj.internal': 'Internal application — not public',
    'proj.notDeployed': 'Not deployed',
    'proj.poultry.desc':
      'Web application for poultry farm management: flock tracking, feed consumption, production, and chicken mortality.',
    'proj.recruitment.desc':
      "Internal recruitment management application: job descriptions, applications, and interviews. Ravinala Airports internship project and Bachelor's final-year project.",
    'proj.ticketing.desc':
      'Airline ticket reservation application with admin validation. The client (Java) books a seat; the request is sent via a REST API to an admin back-office (Spring Boot) that approves or rejects the booking.',
    'proj.boulangerie.desc':
      'Full-featured bakery management web application covering recipe management, ingredient inventory, and atomic (all-or-nothing) production transactions. Includes sales tracking, seller commissions, and product price history.',

    // Skills
    'skills.tag': '04 — Skills',
    'skills.title': 'Tech stack & environment',
    'skills.languages': 'LANGUAGES',
    'skills.frameworks': 'FRAMEWORKS',
    'skills.network': 'SYSTEMS, NETWORKING & SUPPORT',
    'skills.databases': 'DATABASES',
    'skills.architecture': 'ARCHITECTURE & APIs',
    'skills.methodologies': 'METHODOLOGIES & MODELING',
    'skills.tools': 'TOOLS & DESIGN',

    // Contact
    'contact.tag': '05 — Contact',
    'contact.title': "Let's work together",
    'contact.text':
      'Open to both full-stack development and IT support opportunities. Feel free to reach out via email or via LinkedIn.',
  },
};

const langToggle = document.getElementById('langToggle');

function applyLanguage(lang) {
  const safeLang = Object.prototype.hasOwnProperty.call(translations, lang) ? lang : 'fr';
  const dict = translations[safeLang];
  document.documentElement.lang = safeLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      el.innerHTML = dict[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = safeLang === 'fr' ? 'EN' : 'FR';
    langToggle.setAttribute(
      'aria-label',
      safeLang === 'fr' ? 'Switch to English' : 'Passer en français'
    );
  }

  writeStoredLang(safeLang);
}

const initialLang = readStoredLang() || 'fr';
applyLanguage(initialLang);

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'fr';
    applyLanguage(current === 'fr' ? 'en' : 'fr');
  });
}

// ---------- 3. Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  // Fallback check on scroll for fast jumps or anchor navigation
  window.addEventListener(
    'scroll',
    () => {
      const triggerBottom = window.innerHeight * 0.95;
      revealEls.forEach(el => {
        if (!el.classList.contains('visible') && el.getBoundingClientRect().top < triggerBottom) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    },
    { passive: true }
  );
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}
