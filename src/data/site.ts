// All site content lives here. Edit this file to update the portfolio.

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

export type ProjectCategory = "Mobile" | "Automation & AI" | "Full-Stack";

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
  links: { label: string; href: string; kind: "live" | "source" }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "daily-reset",
    title: "Daily Reset",
    category: "Mobile",
    status: "Live on Google Play",
    summary:
      "A self-reflection Android app with daily quotes, mood tracking, guided journaling, and a streak system.",
    description:
      "A lifestyle app I designed, built, and published on my own. It helps people build a daily reflection habit, and I own its full lifecycle from design to Play Console release and ongoing updates.",
    highlights: [
      "Google Sign-In with cloud backup, so users can restore their data across devices.",
      "Customizable morning and evening reminders, daily trivia, and favourite-saving.",
      "Premium tier through a one-time in-app purchase (ad-free, unlimited favourites), plus AdMob monetization.",
      "Full product ownership: design, development, store release, privacy policy, and updates.",
    ],
    tech: [
      "Android",
      "Google Play Console",
      "Google Sign-In",
      "Play Billing",
      "AdMob",
      "Local notifications",
    ],
    facts: [
      { label: "Role", value: "Solo developer" },
      { label: "Platform", value: "Android" },
      { label: "Category", value: "Lifestyle" },
      { label: "Latest update", value: "Jun 2026" },
    ],
    flowLabel: "Daily user loop",
    flow: [
      { title: "Daily quote", detail: "A new quote and trivia each day, with favourites" },
      { title: "Mood check-in", detail: "Track how each day feels" },
      { title: "Guided journal", detail: "Prompted entries with photo attachments" },
      { title: "Streak", detail: "Reminders and streaks keep the habit going" },
      { title: "Cloud backup", detail: "Google Sign-In restores data on any device" },
    ],
    links: [
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.dailyreset2.app",
        kind: "live",
      },
    ],
  },
  {
    slug: "content-automation",
    title: "Social Media Content Automation",
    category: "Automation & AI",
    status: "Client project",
    summary:
      "Generates monthly content ideas and images, then publishes approved posts across channels automatically.",
    description:
      "An automation tool built at CVtot. It connects to a client's Google Drive, keeps a Google Sheet of AI-suggested content ideas, and turns the approved ones into ready-to-post images published through Buffer.",
    highlights: [
      "Reads and updates a Google Sheet that auto-suggests monthly content concepts.",
      "Generates matching images for each approved idea with AI image generation.",
      "Publishes directly to social channels through the Buffer API.",
      "Clients only review and approve, which cuts manual production time.",
    ],
    tech: ["Google Sheets API", "Google Drive API", "AI image generation", "Buffer API", "REST"],
    facts: [
      { label: "Role", value: "Automation developer" },
      { label: "Built at", value: "CVtot" },
      { label: "Type", value: "Client tool" },
      { label: "Since", value: "2026" },
    ],
    flowLabel: "Content pipeline",
    flow: [
      { title: "Google Drive", detail: "Connects to the client's workspace" },
      { title: "Idea sheet", detail: "Monthly content concepts suggested by AI" },
      { title: "Client review", detail: "The client approves ideas in the sheet" },
      { title: "Image generation", detail: "Approved ideas become post images" },
      { title: "Buffer publish", detail: "Posts go out across channels" },
    ],
    links: [],
    note: "Private client work, so the source is not public.",
  },
  {
    slug: "hotel-booking",
    title: "Hotel Booking System",
    category: "Full-Stack",
    status: "Full-stack project",
    summary:
      "A booking platform with room search, reservations, and secure payments through Stripe and VNPAY.",
    description:
      "A full-stack booking platform with a React frontend and a Spring Boot backend. Guests search and filter rooms, reserve, and pay online, with access secured by Spring Security and JWT.",
    highlights: [
      "Room search and filtering with a reservation flow.",
      "Online payments through both Stripe and VNPAY.",
      "Authentication secured with Spring Security and JWT.",
      "Backend tuned for faster API responses.",
    ],
    tech: ["React", "Java Spring Boot", "MySQL", "Spring Security", "JWT", "Stripe", "VNPAY"],
    facts: [
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Spring Boot" },
      { label: "Database", value: "MySQL" },
      { label: "Payments", value: "Stripe, VNPAY" },
    ],
    flowLabel: "Booking flow",
    flow: [
      { title: "Search", detail: "Find and filter available rooms" },
      { title: "Reserve", detail: "Create a reservation for the stay" },
      { title: "Pay", detail: "Checkout with Stripe or VNPAY" },
      { title: "Secure access", detail: "Spring Security and JWT protect accounts" },
    ],
    links: [{ label: "Source on GitHub", href: "https://github.com/ngolong24197", kind: "source" }],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce Platform",
    category: "Full-Stack",
    status: "Deployed on AWS",
    summary:
      "An online store with product management, order processing, and payments, deployed on AWS.",
    description:
      "A secure, scalable store built with Spring Boot and a server-rendered Thymeleaf UI. It is deployed on AWS for high availability, with database queries optimized for faster load times.",
    highlights: [
      "Product management, order processing, and payments.",
      "Server-rendered UI with Thymeleaf.",
      "Secured with Spring Security and JWT.",
      "Deployed on AWS using Elastic Beanstalk, RDS, and S3.",
    ],
    tech: ["Java Spring Boot", "Thymeleaf", "Spring Security", "JWT", "AWS S3", "AWS RDS", "Elastic Beanstalk"],
    facts: [
      { label: "Backend", value: "Spring Boot" },
      { label: "UI", value: "Thymeleaf" },
      { label: "Hosting", value: "AWS" },
      { label: "Security", value: "Spring Security, JWT" },
    ],
    flowLabel: "Store architecture",
    flow: [
      { title: "Catalogue", detail: "Product management for the store" },
      { title: "Orders", detail: "Order processing and payments" },
      { title: "Data", detail: "AWS RDS database, S3 for storage" },
      { title: "Deploy", detail: "Elastic Beanstalk for high availability" },
    ],
    links: [{ label: "Source on GitHub", href: "https://github.com/ngolong24197", kind: "source" }],
  },
];

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Mobile",
  "Automation & AI",
  "Full-Stack",
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
