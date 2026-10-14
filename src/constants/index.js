import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,  
  permission,
  aggero,
  biomark,
  kalpa,
  becominghq,
  continuity,
  favor,
  threejs,
  nextjs,
  bootstrap,
  mysql,
  postgresql,
  native,
  manaknightdigitals,
  softaims,
  devsinc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "Manaknight Digitals",
    icon: manaknightdigitals,
    iconBg: "#383E56",
    date: "January 2022 - March 2022",
    points: [
      "Developed multiple full-stack web projects across various roles and responsibilities.",
      "Built a system to display Outlook emails, contents, and attachments via Microsoft Graph API integration.",
      "Improved overall code quality and reduced bug reports by 30% through targeted debugging and optimization.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Devsinc",
    icon: devsinc,
    iconBg: "#E6DEDD",
    date: "April 2022 - September 2023",
    points: [
      "Developed and maintained web and mobile applications serving millions of users across multiple live client projects.",
      "Collaborated with cross-functional teams in an agile environment, progressing from solo contributor to team lead roles.",
      "Reduced code review time by 50% by consistently producing clean, readable, and well-documented code.",
      "Achieved a 30% reduction in user-reported bug reports through systematic code quality improvements and thorough testing.",
      "Boosted client satisfaction ratings by 35% based on post-delivery client feedback surveys.",
      "Successfully integrated multiple third-party APIs to extend product capabilities and meet client requirements.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Softaims",
    icon: softaims,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Architected and integrated Agora-powered real-time video call and collaborative whiteboard features with live streams, annotations, and session sync.",
      "Built Chrome extensions for automated data scraping and designed a scalable scraping management platform using Rails and Node.js.",
      "Contributed to a Web3 project integrating blockchain and third-party APIs to extend platform functionality.",
      "Implemented AWS S3 for secure file uploads, Google Analytics for behavior tracking, and Stripe for payment processing.",
      "Refactored legacy codebases to modern standards and migrated the test suite from Jest to Vitest for higher coverage and faster CI/CD.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kalpa",
    description:
      "Personalized video outreach platform integrating with Clay, Salesforce, and HubSpot. Built a dynamic variable rendering engine that injects personalized data into video templates in real time, plus background customization and branding controls for non-technical users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: kalpa,
    source_code_link: "https://kalpa.com",
  },
  {
    name: "BecomingHQ",
    description:
      "AI-powered personal growth platform for habits, reflection, and goal tracking. Built an interactive AI chat experience and a Journey feature — a personalized progress feed connecting past actions, upcoming steps, and lessons — with reusable React components and real-time API integrations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "apis",
        color: "pink-text-gradient",
      },
    ],
    image: becominghq,
    source_code_link: "https://becominghq.ai/",
  },
  {
    name: "Continuity",
    description:
      "M&A deal management platform for SME acquisitions, consolidating valuation, buyer matching, due diligence, document management, and transaction tracking. Developed secure collaboration with role-based access control and e-signature flows to streamline deal closure.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rbac",
        color: "green-text-gradient",
      },
      {
        name: "apis",
        color: "pink-text-gradient",
      },
    ],
    image: continuity,
    source_code_link: "https://www.continuity.deals/",
  },
  {
    name: "Favor",
    description:
      "Community-driven platform for paid and unpaid favors with location-based discovery and secure payments. Integrated Google Maps, Places, and Distance Matrix APIs with a Stripe escrow flow, and built frontend CRUD workflows for favor requests, profiles, and statuses alongside a Rails backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rails",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: favor,
    source_code_link: "https://favorapp.net/",
  },
  {
    name: "Permission.io",
    description:
      "Blockchain-based advertising platform that rewards users with cryptocurrency for consenting to personalized ads. Integrated Web3 wallets and smart contracts for transparent reward distribution, and built advertiser dashboards for campaign creation, targeting, and real-time analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
    ],
    image: permission,
    source_code_link: "https://permission.io/",
  },
  {
    name: "Aggero",
    description:
      "Aggero is a web application for video streaming analytics for the gaming and esports world. The web included social login, social media tracking, Google cloud APIs, Facebook APIs, Twitch APIs, Twitter APIs, and TikTok APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: aggero,
    source_code_link: "https://aggero.io",
  },
  {
    name: "BioMark",
    description:
      "Cross-platform React Native health tracking app integrating Apple Health, Google Fit, Fitbit, Garmin, Oura, and Endocrine devices. Designed a unified data aggregation layer to normalize device APIs into a readable dashboard with real-time health trend visualizations and goal tracking.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: biomark,
    source_code_link: "https://biomarking.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
