// All site content lives here. Edit this file to update the portfolio.

import projectData from "./projects.json";

export const profile = {
  name: "Ngô Quốc Long",
  shortName: "Long Ngo",
  initial: "L",
  role: "Software Developer (Full-Stack & Mobile)",
  location: "Da Nang, Vietnam",
  timezone: "UTC+7",
  coordinates: "LAT 16.0544° N / LON 108.2022° E",
  email: "ngolong24197@gmail.com",
  github: "https://github.com/ngolong24197",
  githubLabel: "github.com/ngolong24197",
  googlePlay: "https://play.google.com/store/apps/details?id=com.dailyreset2.app",
  cv: "/Ngo_Quoc_Long_CV.pdf",
  summary:
    "I'm a software developer who builds and ships across web and mobile: Java and Spring Boot on the backend, React on the frontend, and a live Android app that I designed, built, and published on Google Play.",
};

export const heroStats = [
  { label: "Backend", value: "Java", detail: "Spring Boot" },
  { label: "Frontend", value: "React", detail: "JavaScript" },
  { label: "Mobile", value: "Android", detail: "Live on Google Play" },
];

export const about = {
  paragraphs: [
    "I came to software from hospitality. After studying hospitality management in Finland, I retrained in software engineering at Aptech Da Nang and I'm now completing a Bachelor of Information Technology.",
    "I take products end to end: REST API and database design, cloud deployment on AWS, authentication and payments, and store release. I've worked as a full-stack intern on a real estate platform, and I currently build automation tools while acting as the link between clients and the development team.",
    "That background taught me to listen first. I enjoy turning real requirements into clean, maintainable software, and I'm comfortable working in agile teams with product owners, designers, and testers.",
  ],
  principle: {
    title: "Requirements before code",
    body: "Working directly with clients showed me that the hard part is understanding the real workflow. Once that is clear, the software gets simpler.",
  },
  facts: [
    { label: "Current Role", value: "Business Analyst / Automation Developer", detail: "CVtot, Da Nang" },
    { label: "Focus", value: "Full-stack web and Android development" },
    { label: "Studying", value: "Bachelor of Information Technology", detail: "Lincoln University College, Malaysia" },
    { label: "Languages", value: "Vietnamese (native), English (professional)" },
  ],
  interests: ["Spring Boot", "React", "Android", "AWS", "Workflow automation"],
};

// Projects and categories live in projects.json so Project Hub (n8n) can sync them
// automatically. Edit that file, or publish from Project Hub.
export type ProjectCategory = string;

export type ProjectLinkKind = "live" | "product" | "source";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  facts: { label: string; value: string }[];
  flowLabel: string;
  flow: { title: string; detail: string }[];
  links: { label: string; href: string; kind: ProjectLinkKind }[];
  note?: string;
};

export const projects = projectData.projects as Project[];

// Only offer filters for categories that have at least one project.
export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  ...projectData.categories.filter((c) => projects.some((p) => p.category === c)),
];

export const moreProjectsNote =
  "More projects, including a Library Management system and a Trading Platform backend, are on GitHub.";

export type SkillIcon = "server" | "layout" | "smartphone" | "database" | "cloud" | "shield";

export const skills: { title: string; icon: SkillIcon; blurb: string; items: string[] }[] = [
  {
    title: "Backend",
    icon: "server",
    blurb: "REST APIs, business logic, and microservices.",
    items: ["Java", "Spring Boot", "Spring MVC", "Hibernate/JPA", "Node.js", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: "layout",
    blurb: "Responsive, component-driven user interfaces.",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Thymeleaf", "Responsive UI"],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    blurb: "Android apps taken all the way to store release.",
    items: ["Android", "Flutter", "Google Play Console", "Play Billing", "Google Sign-In", "AdMob"],
  },
  {
    title: "Databases",
    icon: "database",
    blurb: "Relational modelling and query optimization.",
    items: ["MySQL", "SQL Server", "AWS RDS"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    blurb: "Deploying and running applications on AWS.",
    items: ["AWS Elastic Beanstalk", "AWS S3", "Docker", "Maven", "CI/CD"],
  },
  {
    title: "Security & Tools",
    icon: "shield",
    blurb: "Authentication, version control, and API testing.",
    items: ["Spring Security", "JWT", "OAuth2", "OpenID Connect", "Git/GitHub", "Postman"],
  },
];

export const journey: {
  kind: "Work" | "Education";
  title: string;
  place: string;
  period: string;
  current?: boolean;
  body: string;
}[] = [
  {
    kind: "Work",
    title: "Business Analyst / Automation Developer",
    place: "CVtot — Da Nang, Vietnam",
    period: "03/2026 – Present",
    current: true,
    body: "Built a social-media content automation tool that generates monthly content concepts and publishes posts through the Buffer API. Contributed to the Design Pickle marketing website (performance, SEO, uptime monitoring) and translated client requirements into specifications for the development team.",
  },
  {
    kind: "Education",
    title: "Bachelor of Information Technology",
    place: "Lincoln University College — Malaysia",
    period: "06/2025 – 03/2027 (expected)",
    current: true,
    body: "Currently completing my bachelor's degree alongside work.",
  },
  {
    kind: "Work",
    title: "Full-Stack Developer (Intern)",
    place: "Dsoft Company — Da Nang, Vietnam",
    period: "04/2025 – 10/2025",
    body: "Worked on a real estate management platform: a responsive React UI for property listing, search, and transactions; backend microservices in Node.js and Python; RESTful APIs with JWT authentication; and unit and integration tests, in an Agile/Scrum team.",
  },
  {
    kind: "Education",
    title: "Advanced Diploma in Software Engineering",
    place: "Aptech — Da Nang, Vietnam",
    period: "2022 – 2024",
    body: "Java, web development, cloud computing, and databases, learned through continuous project work.",
  },
  {
    kind: "Education",
    title: "Diploma in Hospitality Management",
    place: "Haaga-Helia University of Applied Sciences — Finland",
    period: "2016 – 2020",
    body: "Four years studying abroad, where I built the communication and customer-first habits I still rely on when working with clients and teams.",
  },
];

export const certifications = [
  "Google IT Support Professional Certificate — 2025",
  "Aptech Graduation Certificate — 2025",
  "Full-Stack Development with React & Java Spring Boot — Udemy, 2024",
  "JSP, Servlets & JDBC for Beginners — Udemy, 2024",
  "IELTS — Band 6.5, 2020",
];

export const approach = [
  {
    tag: "01 // CLARITY",
    title: "Understand the Problem",
    body: "Start with the real workflow, the constraints, and the edge cases. Removing ambiguity early prevents rework later.",
    phase: "Requirements",
  },
  {
    tag: "02 // STRUCTURE",
    title: "Build with Structure",
    body: "Keep code maintainable: clear API contracts, modular services, and a clean separation between the interface and the business logic.",
    phase: "Design & build",
  },
  {
    tag: "03 // ITERATION",
    title: "Ship and Improve",
    body: "Get a working version in front of people, test it, and refine it based on what they actually do with it.",
    phase: "Release & feedback",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];
