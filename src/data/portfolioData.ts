import { ContactInfo, Project, Experience, Education, SkillCategory } from '../types';

export const contactInfo: ContactInfo = {
  name: "Sakhawat Kamran",
  title: "Senior Full Stack Developer",
  headline: "Senior Full Stack Developer | Laravel | Drupal | Next.js",
  email: "sakhideveloper@gmail.com",
  phone: "+92 323 6351817",
  phoneRaw: "03236351817",
  whatsappLink: "https://wa.me/923236351817",
  location: "Lahore, Punjab, Pakistan",
  previousLocation: "Layyah, Punjab, Pakistan",
  linkedin: "linkedin.com/in/sakhawat-kamran-702ab9163",
  linkedinUrl: "https://linkedin.com/in/sakhawat-kamran-702ab9163",
  github: "github.com/sakhideveloper",
  githubUrl: "https://github.com/sakhideveloper",
  availability: "Available for Remote Opportunities Worldwide",
  avatarUrl: "/profile.jpg",
  summary:
    "Results-driven Senior Full Stack Developer with 7+ years of experience in designing, developing and maintaining scalable web applications. Expert in PHP, Laravel, CodeIgniter, Drupal, Next.js, Vue.js and modern web technologies. Strong in API development, third-party integrations, database design, and cloud deployments. Proven ability to deliver high-performance, secure and user-friendly solutions for international clients while working remotely."
};

export const projects: Project[] = [
  {
    id: "financier24",
    title: "Financier24",
    role: "Senior Full Stack Developer",
    clientOrCompany: "Financier24 (Netherlands)",
    url: "https://financier24.nl/",
    liveUrl: "https://financier24.nl/",
    isRecent: true,
    isFeatured: true,
    category: "recent",
    year: "Recently Completed",
    description:
      "A comprehensive Dutch financial consulting and business financing platform built to streamline loan applications, financial advisory, and user consultations with high security and rapid turnaround.",
    highlights: [
      "Engineered full-stack responsive web platform serving clients across the Netherlands",
      "Built automated financial assessment forms and lead routing workflows",
      "Optimized for high performance, SEO, mobile responsiveness, and strict data privacy compliance",
      "Seamless integrations for automated notifications and customer communication"
    ],
    technologies: ["Laravel", "PHP", "Next.js", "RESTful API", "MySQL", "Tailwind CSS"]
  },
  {
    id: "gratisgenieten",
    title: "Gratis Genieten",
    role: "Senior Full Stack Developer",
    clientOrCompany: "Gratis Genieten (Netherlands)",
    url: "https://gratisgenieten.nl/en",
    liveUrl: "https://gratisgenieten.nl/en",
    isRecent: true,
    isFeatured: true,
    category: "recent",
    year: "Recently Completed",
    description:
      "A modern lifestyle and leisure discovery portal for experiences, leisure activities, and offers in the Netherlands. Supports bilingual browsing (Dutch & English) with high-speed indexing.",
    highlights: [
      "Engineered multi-language architecture (Dutch and English routing and localization)",
      "Implemented high-performance directory search, category filtering, and responsive mobile-first UI",
      "Integrated scalable backend data structures and content management workflows",
      "Delivered lightning-fast page loading speeds and SEO structure"
    ],
    technologies: ["Laravel", "Next.js", "Vue.js", "Tailwind CSS", "RESTful API", "MySQL"]
  },
  {
    id: "helio-greentech",
    title: "Helio GreenTech - Solar Proposal System",
    role: "Sr. Laravel Developer",
    clientOrCompany: "Helio GreenTech (North Kansas City, United States)",
    isRecent: false,
    isFeatured: true,
    category: "laravel",
    year: "2022 - Present",
    description:
      "An automated solar panel proposal and engineering estimation system integrating the OpenSolar API, CRM modules, and dynamic billing generation for US residential and commercial clients.",
    highlights: [
      "Integrated OpenSolar API for real-time PV design data, irradiance modeling, and equipment specs",
      "Engineered dynamic PDF proposal generation and contract signing workflows",
      "Architected secure RESTful APIs and CRM synchronization modules",
      "Reduced proposal generation turnaround time by 60%"
    ],
    technologies: ["Laravel", "PHP", "OpenSolar API", "REST APIs", "MySQL", "CRM Integration"]
  },
  {
    id: "sheltermartgh",
    title: "Sheltermartgh Real Estate Platform",
    role: "Laravel Developer",
    clientOrCompany: "Sheltermartgh (Ghana)",
    url: "https://sheltermartgh.com",
    liveUrl: "https://sheltermartgh.com",
    isRecent: false,
    isFeatured: true,
    category: "fullstack",
    year: "2019 - 2022",
    description:
      "Comprehensive multi-tenant real estate marketplace connecting property seekers, landlords, and certified agents across Ghana with interactive mapping and secure payments.",
    highlights: [
      "Built user and agent dashboards for property listings, bookings, and inquiry management",
      "Integrated interactive maps, geocoding, and location-based property filtering",
      "Implemented automated email notifications and payment gateway integration",
      "Maintained scalable high-traffic database architecture"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Google Maps API", "REST APIs", "Payment Gateway"]
  },
  {
    id: "gotoma",
    title: "GOTOMA E-Commerce Platform",
    role: "Sr. Laravel Developer",
    clientOrCompany: "Webforest (Lahore, Pakistan)",
    url: "https://gotoma.com",
    liveUrl: "https://gotoma.com",
    isRecent: false,
    isFeatured: true,
    category: "api",
    year: "2020 - 2022",
    description:
      "Enterprise e-commerce product backend with comprehensive payment processing, customer SMS/email notifications, and cloud API monitoring.",
    highlights: [
      "Integrated Stripe payment gateway with webhook handling for recurring and one-time orders",
      "Configured Twilio API for automated order status SMS alerts and OTP verification",
      "Integrated Google APIs for analytics, performance monitoring, and audit trails",
      "Delivered high-concurrency order processing pipeline"
    ],
    technologies: ["Laravel", "Stripe API", "Twilio API", "Google APIs", "Vue.js", "MySQL"]
  },
  {
    id: "eestone",
    title: "EESTONE Social Media Platform",
    role: "Laravel Developer",
    clientOrCompany: "EESTONE",
    isRecent: false,
    isFeatured: false,
    category: "laravel",
    year: "2018 - 2019",
    description:
      "High-engagement social networking platform featuring user feeds, media sharing, real-time messaging, and notification delivery.",
    highlights: [
      "Built backend REST APIs supporting user management, follower graphs, and post creation",
      "Implemented real-time messaging and notifications pipeline",
      "Engineered media upload compression and CDN caching strategy"
    ],
    technologies: ["Laravel", "PHP", "REST APIs", "WebSockets", "MySQL", "Redis"]
  },
  {
    id: "yehbook",
    title: "Yehbook API Infrastructure",
    role: "CodeIgniter Developer",
    clientOrCompany: "Yehbook API (India)",
    isRecent: false,
    isFeatured: false,
    category: "api",
    year: "2019 - 2020",
    description:
      "Robust API backend delivering secure data synchronization and third-party partner integrations for web and mobile clients.",
    highlights: [
      "Developed and maintained modular CodeIgniter API services",
      "Constructed JWT-based authentication and rate-limiting security controls",
      "Integrated external third-party data providers and webhooks"
    ],
    technologies: ["CodeIgniter", "PHP", "REST APIs", "MySQL", "Security Auditing"]
  },
  {
    id: "itvision-systems",
    title: "Enterprise ERP & Management Systems",
    role: "CodeIgniter Developer",
    clientOrCompany: "ITVision Pvt Ltd (Sargodha, Pakistan)",
    isRecent: false,
    isFeatured: false,
    category: "fullstack",
    year: "2017 - 2018",
    description:
      "Suite of business critical systems including School Management, Hospital Management, and Cargo Dispatch Tracking.",
    highlights: [
      "Built comprehensive role-based access control (RBAC) across multi-department modules",
      "Engineered patient record databases, billing reconciliations, and student gradebooks",
      "Developed shipment tracking and cargo dispatch dispatching system"
    ],
    technologies: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Bootstrap"]
  }
];

export const experiences: Experience[] = [
  {
    id: "helio",
    role: "Sr. Laravel Developer",
    company: "Helio GreenTech",
    location: "North Kansas City, United States (Remote)",
    period: "Sep. 2022 – Present",
    current: true,
    points: [
      "Developing Solar Panel Proposal system by integrating OpenSolar API for real-time solar engineering calculations.",
      "Working as Sr. Laravel Developer, building robust backend modules, REST APIs and optimizing overall system performance.",
      "Implementing billing, automated proposal generation, and enterprise CRM integrations.",
      "Architecting clean service layers and automated test routines for mission-critical customer solar contracts."
    ],
    technologies: ["Laravel", "PHP", "OpenSolar API", "REST APIs", "MySQL", "CRM Integration", "Redis"]
  },
  {
    id: "sheltermartgh-exp",
    role: "Laravel Developer",
    company: "Sheltermartgh",
    location: "Ghana (Remote)",
    period: "May. 2019 – Sep. 2022",
    current: false,
    points: [
      "Developed and maintained high-traffic Real Estate platform (sheltermartgh.com).",
      "Built RESTful APIs, comprehensive user/agent dashboards, property management, and payment integration.",
      "Integrated Google Maps, email notification services, and third-party real estate syndication feeds.",
      "Collaborated remotely with international stakeholders to deploy continuous feature improvements."
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Google Maps API", "RESTful APIs", "Payment Gateways"]
  },
  {
    id: "webforest",
    role: "Sr. Laravel Developer",
    company: "Webforest",
    location: "Lahore, Pakistan",
    period: "May. 2020 – Dec. 2022",
    current: false,
    points: [
      "Worked on GOTOMA (gotoma.com) commercial product as backend developer.",
      "Developed robust REST APIs and spearheaded frontend integration with Vue.js.",
      "Integrated Stripe for payments, Twilio for instant customer notifications, and Google APIs for system monitoring.",
      "Enhanced database query performance and streamlined order checkout funnels."
    ],
    technologies: ["Laravel", "Vue.js", "Stripe API", "Twilio", "Google APIs", "MySQL", "REST APIs"]
  },
  {
    id: "yehbook-exp",
    role: "CodeIgniter Developer",
    company: "Yehbook API",
    location: "India (Remote)",
    period: "Jan. 2019 – Dec. 2020",
    current: false,
    points: [
      "Developed and maintained Yehbook API using CodeIgniter framework.",
      "Built secure, high-throughput APIs and integrated with various third-party services.",
      "Conducted API performance tuning, query indexing, and endpoint security hardening."
    ],
    technologies: ["CodeIgniter", "PHP", "REST APIs", "MySQL", "API Security"]
  },
  {
    id: "eestone-exp",
    role: "Laravel Developer",
    company: "EESTONE",
    location: "Remote",
    period: "Oct. 2018 – Dec. 2019",
    current: false,
    points: [
      "Built backend APIs for EESTONE social media application.",
      "Implemented user management, post feeds, media uploading, messaging, and push notifications.",
      "Engineered database schemas optimized for high read/write social feed activities."
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Real-time Messaging", "REST APIs"]
  },
  {
    id: "itvision-exp",
    role: "CodeIgniter Developer",
    company: "ITVision Pvt Ltd",
    location: "Sargodha, Pakistan",
    period: "Jan. 2017 – Sep. 2018",
    current: false,
    points: [
      "Developed multiple enterprise management systems using CodeIgniter.",
      "Projects included School Management System, Hospital Management System, Cargo System and internal business tools.",
      "Designed normalized relational database structures and custom reporting dashboards."
    ],
    technologies: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "HTML/CSS"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend Development",
    skills: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Drupal 9/10/11",
      "RESTful API",
      "GraphQL",
      "MySQL",
      "NoSQL",
      "Redis",
      "API Integrations",
      "Stripe",
      "Twilio"
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      "JavaScript (ES6+)",
      "Next.js",
      "React.js",
      "Vue.js",
      "HTML5",
      "CSS3 / SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery"
    ]
  },
  {
    category: "Tools, Cloud & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Composer",
      "NPM",
      "Postman",
      "VS Code",
      "Linux",
      "CI/CD",
      "AWS"
    ]
  },
  {
    category: "Knowledgeable & Interested to Work",
    badge: "Interested to Work",
    description: "Solid conceptual foundation, hands-on understanding of framework design, and strongly interested in professional roles",
    skills: [
      "Python",
      "Django",
      "Flask",
      "Python REST APIs",
      "ORM & Database Modeling"
    ]
  },
  {
    category: "Core Strengths",
    skills: [
      "Full Stack Web Development (PHP, JS, Next.js)",
      "Drupal Custom Module & Theme Development",
      "Headless CMS with Next.js Integration",
      "RESTful API & Third-party Integrations",
      "Payment Gateway (Stripe), Twilio, Google APIs",
      "Database Design & Performance Optimization",
      "Agile Development & Remote Collaboration"
    ]
  }
];

export const technologiesIWorkWith = [
  { name: "Laravel", category: "Backend" },
  { name: "Drupal", category: "CMS" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Python", category: "Interested to Work" },
  { name: "Django", category: "Interested to Work" },
  { name: "Flask", category: "Interested to Work" },
  { name: "CodeIgniter", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Version Control" },
  { name: "AWS", category: "Cloud" }
];

export const educationHistory: Education[] = [
  {
    degree: "BS Software Engineering",
    institution: "University of Sargodha",
    location: "Sargodha, Punjab, Pakistan",
    year: "Aug. 2017"
  },
  {
    degree: "High School Diploma",
    institution: "Zakria College Layyah",
    location: "Layyah, Pakistan",
    year: "Sep. 2013"
  }
];
