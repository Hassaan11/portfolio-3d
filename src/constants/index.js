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
  threejs,
  nextjs,
  bootstrap,
  mysql,
  postgresql,
  native,
  manaknightdigitals,
  softaims,
  devsinc
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
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
  // {
  //   name: "React Native",
  //   icon: native,
  // },
  {
    name: "Redux",
    icon: redux,
  },
  // {
  //   name: "Next JS",
  //   icon: nextjs,
  // },
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
    company_name: "Manaknight Digital",
    icon: manaknightdigitals,
    iconBg: "#383E56",
    date: "January 2022 - March 2022",
    points: [
      "Involved in development of multiple projects with various roles and responsibilities.",
      "Developed a system that could display all of outlook emails, its contents and attachments.",
      "Improved code quality and reduced bug reports by 30% through debugging and optimization efforts.",
      "Integrating third-party APIs into the project to enhance its functionality and access external services.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Devsinc",
    icon: devsinc,
    iconBg: "#E6DEDD",
    date: "March 2022 - September 2023",
    points: [
      "Developed web and mobile applications having held diverse roles and responsibilities.",
      "Contributed to multiple tech stacks and collaborated with cross-functional teams on live client projects, serving millions of users.",
      "Held diverse roles, from solo development to team management.",
      "Delivered high-quality scalable solutions by implementing engineering best practices.",
      "Integration of multiple third-party APIs."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SoftAims",
    icon: softaims,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Involved in development of a project related to web3.",
      "Integrated AWS S3 service for data upload and storage.",
      "Integrated Google Analytics.",
      "Migrated the legacy code to the latest code.",
      "Improved code coverage and migrated the test cases from jest to vitest."
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
    name: "Permission.io",
    description:
      "Permission.io is a blockchain-based advertising platform that enables users to earn cryptocurrency by granting permission to advertisers to show them personalized ads.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
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
      "Biomark is a mobile app that allows users to connect their external devices to track their health and fitness parameters such as Steps, Calories burnt, Distance, Heart Rate, Blood Pressure, Blood Glucose and Sleep. It supports devices such as Apple Health, Google Fit, Fitbit, Endocrine, Oura, Garmin and other fitness tracking devices.",
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