export const personalInfo = {
  name: "Mazharul Hoq Bhuiyan Saim",
  nickname: "Saim",
  designation: "AI-Driven Full-Stack Web Engineer",
  designations: [
    "Full-Stack Web Engineer",
    "Next.js & TypeScript Developer",
    "Project & Social Media Manager",
    "GIS & Spatial Data Thinker",
    "MERN & Modern Web Architect",
  ],
  email: "mhbsaim27@gmail.com",
  phone: "+880 1832-400484",
  whatsapp: "+880 1832-400484",
  location: "Bangladesh",
  targetRole: "Full-Stack Web Engineer",
  bio: "Full-stack web developer in training who builds modern, responsive web apps with Next.js, React, TypeScript, Node.js and MongoDB. Combining clean engineering with project management and spatial data thinking.",
  profileImage: "/images/saim_hero_img.png",
  resumeLink: "/resume_mazharul_hoq_bhuiyan_saim.pdf",
  socials: {
    github: "https://github.com/mhbsaim04",
    linkedin: "https://www.linkedin.com/in/mazharul-hoq-bhuiyan-saim-32b420355/",
    twitter: "https://x.com/mh_Saim27",
    facebook: "https://www.facebook.com/mhb.saim.27",
  },
  githubUsername: "mhbsaim04",
};

export const aboutMe = {
  intro: `I am Mazharul Hoq Bhuiyan Saim, a full-stack web developer in training who builds modern, responsive, high-performance web applications with Next.js, React, TypeScript, Node.js, and MongoDB. I am in the final stretch of Programming Hero's intensive AI-driven full-stack web engineering program, turning ideas into fully shipped digital products.`,
  journey: `My tech path combines rigorous software development with practical real-world execution. I build end-to-end web applications covering responsive frontend UI, rock-solid authentication (Better Auth & JWT), database modeling with MongoDB, and production deployment on Vercel. I love taking a complex requirement and engineering a clean, scalable solution from scratch.`,
  workStyle: `Outside of pure coding, I work as a part-time Project and Social Media Manager at Halal Shoot. There, I coordinate deliverables and deadlines, manage brand social channels, and lead community communication. This dual background gives me a distinct advantage: I don't just write code; I understand product strategy, user psychology, and team communication.`,
  geographyMeetsCode: `I am pursuing my Bachelor's degree in Geography and Environment at Pabna University of Science and Technology (PUST). This academic discipline equips me with a data-driven, spatial mindset. I leverage GIS and remote-sensing tools like ArcGIS, QGIS, and Google Earth Engine (GEE), writing code scripts to analyze environmental data. It connects real-world spatial thinking with algorithmic software development.`,
  hobbies: `Outside the terminal, I enjoy exploring environmental geography, following digital media innovations, analyzing branding strategies, and mentoring peers in web development. I am deeply interested in projects where modern web technology intersects with media, mapping, and consumer products.`,
  funFacts: [
    "🚀 AI-Driven Full-Stack Engineer in training",
    "🗺️ Geography & GIS researcher at PUST",
    "📱 Project & Social Media Manager at Halal Shoot",
    "⚡ Next.js App Router & TypeScript enthusiast",
    "🔐 Authentication specialist (Better Auth & JWT)",
    "☕ Constant learner shipping real products",
  ],
};

export const skills = {
  frontend: [
    { name: "Next.js (App Router)", level: 90, icon: "▲" },
    { name: "React 19", level: 88, icon: "⚛️" },
    { name: "TypeScript", level: 84, icon: "🔷" },
    { name: "Tailwind CSS v4", level: 92, icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 88, icon: "⚡" },
    { name: "HTML5 & Modern CSS", level: 95, icon: "🌐" },
  ],
  backend: [
    { name: "Node.js & Express.js", level: 82, icon: "🟢" },
    { name: "MongoDB & Mongoose", level: 85, icon: "🍃" },
    { name: "Better Auth & JWT", level: 86, icon: "🔐" },
    { name: "RESTful & CRUD APIs", level: 88, icon: "🔗" },
    { name: "Google Earth Engine (GEE)", level: 75, icon: "🌍" },
    { name: "C Programming", level: 70, icon: "⚙️" },
  ],
  tools: [
    { name: "Git & GitHub", level: 88, icon: "🐙" },
    { name: "VS Code", level: 94, icon: "💻" },
    { name: "Vercel Deployment", level: 90, icon: "▲" },
    { name: "Canva & Brand Creatives", level: 85, icon: "✨" },
    { name: "GIS (ArcGIS & QGIS)", level: 78, icon: "🗺️" },
    { name: "Project Management", level: 86, icon: "📊" },
  ],
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science (B.Sc.) in Geography and Environment",
    institution: "Pabna University of Science and Technology (PUST)",
    location: "Pabna, Bangladesh",
    period: "Ongoing",
    grade: "Bachelor's Degree",
    description:
      "Integrating environmental science, spatial data modeling, and GIS remote sensing with algorithmic computation and Google Earth Engine scripting.",
    icon: "🎓",
    status: "ongoing",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC), Science",
    institution: "Chhagalnaiya Government College, Feni",
    location: "Chhagalnaiya, Feni, Bangladesh",
    period: "March 2022 – October 2023",
    grade: "Science Group",
    description:
      "Focused on Physics, Chemistry, Higher Mathematics, and ICT, establishing solid analytical and problem-solving foundations.",
    icon: "🏫",
    status: "completed",
  },
];

export const experience = [
  {
    id: 1,
    role: "Project & Social Media Manager (Part-Time)",
    company: "Halal Shoot",
    location: "Bangladesh",
    period: "Present",
    type: "Part-Time",
    description:
      "Managing end-to-end creative projects and directing multi-brand social media marketing operations for Halal Shoot and its corporate client accounts.",
    achievements: [
      "Coordinated project deliverables, schedules, and cross-functional team workflows ensuring timely delivery",
      "Managed branded social media presence, driving engagement and brand awareness for client brands",
      "Handled social media customer support and community inquiries with high satisfaction rates",
      "Applied digital strategy and business problem-solving to scale client outreach and media visibility",
    ],
    technologies: ["Project Management", "Digital Strategy", "Social Media", "Canva", "Customer Support"],
    icon: "💼",
  },
];

export const projects = [
  {
    id: "wanderlast-travel-booking",
    title: "Wanderlast — Travel Booking Webapp",
    shortDescription:
      "A full-stack travel booking platform where travelers search destinations, explore curated trip packages, and book instantly with JWT authentication.",
    thumbnail: "/images/projects_image/wanderlast.png",
    techStack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT Plugin",
      "Base UI",
    ],
    fullDescription:
      "Wanderlast is an enterprise-grade full-stack travel booking platform. The project is split into two synchronized applications: 1) A high-performance Next.js App Router client with responsive search and booking flows, and 2) A standalone Express.js REST API that manages the MongoDB database, securing every booking and administrator operation behind robust JWT authentication.",
    liveLink: "https://wanderlast-travel-booking-webapp.vercel.app",
    githubLink: "https://github.com/mhbsaim04/wanderlast-travel-booking-webapp",
    challenges: [
      "Coordinating a dual-application architecture with a decoupled Next.js frontend and an Express.js REST API backend.",
      "Implementing Better Auth integrated with custom JWT plugins to secure bookings, user profiles, and administrative operations.",
      "Designing complex MongoDB aggregation pipelines for querying destination packages by availability, price range, and traveler count.",
      "Creating accessible, touch-friendly UI components using Base UI and Tailwind CSS v4 for seamless mobile booking.",
    ],
    improvements: [
      "Integrating online payment gateways (Stripe & SSLCommerz) for instant automated payment confirmations.",
      "Adding real-time booking updates and email confirmations using WebSockets or webhook listeners.",
      "Incorporating interactive destination maps powered by Mapbox or Leaflet.",
      "Building a dedicated tour-guide portal for managing custom trip itineraries.",
    ],
    category: "Full Stack",
    featured: true,
    color: "#06b6d4",
  },
  {
    id: "bazar-dor-web-project",
    title: "Bazar Dor — Commodity Price Tracker",
    shortDescription:
      "Bengali-language market-price dashboard for everyday products across Bangladesh featuring price movers, sorting, and authenticated market insights.",
    thumbnail: "/images/projects_image/bazar-dor.png",
    techStack: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Better Auth",
      "MongoDB",
      "OAuth",
    ],
    fullDescription:
      "Bazar Dor is an impactful commodity market-price tracking web application tailored for Bangladeshi consumers. It displays daily price movers, category-based product listings with multi-criteria sorting, and protected detailed product views showing min, max, average, and market-wise pricing. It features complete authentication via email/password as well as Google and GitHub OAuth.",
    liveLink: "https://bazar-dor-web-project.vercel.app/",
    githubLink: "https://github.com/mhbsaim04/bazar-dor-web-project",
    challenges: [
      "Designing a localized Bengali-language user interface optimized for fast navigation and accessibility.",
      "Modeling dynamic commodity price variations across diverse regional markets and wholesale bazaars in MongoDB.",
      "Implementing multi-provider OAuth (Google and GitHub) alongside credential-based auth via Better Auth.",
      "Optimizing client-side search and category filtering for instant price comparison across hundreds of staples.",
    ],
    improvements: [
      "Introducing crowd-sourced daily price verification with community moderator badges.",
      "Visualizing historical inflation and price trend charts using Chart.js.",
      "Adding automated SMS and WhatsApp price alert subscriptions for essential staples.",
      "Developing an offline-first PWA mode for local bazaar shoppers.",
    ],
    category: "Full Stack",
    featured: true,
    color: "#10b981",
  },
  {
    id: "body-fit-log-web",
    title: "FitLog — Workout Library & Daily Training Planner",
    shortDescription:
      "Interactive workout library and daily training planner with a 12-workout catalogue, capped 5-lift daily plans, and persistent local tracking.",
    thumbnail: "/images/projects_image/fitlog.png",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Lucide Icons",
      "React Hot Toast",
    ],
    fullDescription:
      "FitLog is a modern fitness assistant and workout planning platform. It offers a structured 12-workout library with detailed exercise metrics, a dedicated 'Today's Plan' planner capped at five lifts to promote optimal muscle recovery, dynamic sorting by duration, calories, and user rating, plus seamless plan persistence across browser reloads.",
    liveLink: "https://body-fit-log-web.vercel.app",
    githubLink: "https://github.com/mhbsaim04/body-fit-log-web",
    challenges: [
      "Enforcing strict exercise limits (maximum 5 lifts per day) with informative UI toast notifications.",
      "Preventing React 19 hydration mismatches while syncing persisted exercise routines from browser storage.",
      "Calculating cumulative workout statistics (calories burned, total workout duration) in real-time.",
      "Building a responsive card layout with micro-interactions and smooth removal transitions.",
    ],
    improvements: [
      "Adding an integrated rest timer with sound effects between workout sets.",
      "Introducing custom exercise creation allowing users to log custom drills and weights.",
      "Providing weekly fitness streak analytics and exportable workout logs.",
      "Integrating audio workout cues for hands-free training sessions.",
    ],
    category: "Frontend",
    featured: true,
    color: "#6366f1",
  },
  {
    id: "tourism-spots-feni",
    title: "Tourism Spots of Feni District",
    shortDescription:
      "A scenic, responsive tourism showcase highlighting historical landmarks, natural parks, and cultural heritage across Feni, Bangladesh.",
    thumbnail: "/images/projects_image/tourism-feni.png",
    techStack: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Vercel"],
    fullDescription:
      "Tourism Spots of Feni District is a curated static web portal celebrating the tourism and cultural heritage of Feni, Bangladesh. Visitors can discover detailed spot overviews, visiting hours, historical significance, scenic photography, and location directions across famous landmarks like Muhuri Project, Chandgazi Bhuiyan Mosque, and Bijoy Singh Dighi.",
    liveLink: "https://tourism-spots-of-feni.vercel.app",
    githubLink: "https://github.com/mhbsaim04/tourism-spots-in-feni",
    challenges: [
      "Structuring responsive image galleries that look sharp on mobile and high-DPI displays.",
      "Designing clean visual hierarchies for historical spot descriptions and visitor guidance.",
      "Ensuring lightweight page weight for rapid loading on mobile networks across Bangladesh.",
    ],
    improvements: [
      "Adding interactive Google Maps / Leaflet integration for GPS routing to each tourist spot.",
      "Bilingual toggle between English and Bengali.",
      "Adding a visitor photo upload gallery and community rating system.",
    ],
    category: "Frontend",
    featured: false,
    color: "#f59e0b",
  },
  {
    id: "dev-stack-web",
    title: "Development Stack Web — Ideal Stack Builder",
    shortDescription:
      "A comparative tool to build your ideal development stack — explore frontend, backend, database, and tooling options side by side and assemble the stack that fits your next project.",
    thumbnail: "/images/projects_image/development-stack-web.png",
    techStack: ["React", "HTML5", "CSS3", "JavaScript", "Netlify"],
    fullDescription:
      "Development Stack Web is a Programming Hero assignment project titled 'Build Your Ideal Development Stack'. The app presents frontend frameworks, backend technologies, databases, and developer tooling options in clean side-by-side comparisons, letting developers evaluate trade-offs in performance, ecosystem maturity, learning curve, and community support — then assemble a recommended technology stack for their next project with a guided step-by-step flow.",
    liveLink: "https://development-stack-web.netlify.app/",
    githubLink: "https://github.com/mhbsaim04/dev-stack-web",
    challenges: [
      "Structuring side-by-side stack comparisons across four broad categories without overwhelming users with information density.",
      "Keeping the comparison content accurate and current across rapidly evolving frontend, backend, and tooling ecosystems.",
      "Designing responsive multi-column comparison cards and tables that remain readable on narrow mobile screens.",
      "Building a component-driven codebase with vanilla React, HTML, and CSS while avoiding jQuery-style imperative patterns.",
    ],
    improvements: [
      "Adding shareable user-generated stack profiles via unique links.",
      "Introducing a scoring engine that recommends a stack based on project requirements (budget, scale, team size).",
      "Expanding coverage to testing frameworks, deployment platforms, and cloud services.",
      "Persisting favorite stacks in local storage with export and import options.",
    ],
    category: "Frontend",
    featured: false,
    color: "#0ea5e9",
  },
];

export const stats = [
  { label: "Target Role", value: "Full-Stack", icon: "💻" },
  { label: "Core Stack", value: "Next.js 16", icon: "▲" },
  { label: "Live Webapps", value: "5+ Live", icon: "🚀" },
  { label: "GitHub Commits", value: "Active", icon: "🔥" },
];

/* Big numeric stats for the home hero, derived from portfolio data */
export const homeStats = [
  { value: "5", label: "Live\nWebapps" },
  { value: "18", label: "Technologies\nMastered" },
  { value: "2", label: "Work\nRoles" },
  { value: "2", label: "Education\nMilestones" },
];

export const expertise = [
  {
    title: "Web & Application Development",
    desc: "Design and build responsive, production-ready web applications with clean architecture, modern App Router patterns, and polished UI — from component design to full page composition.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "JavaScript (ES6+)", "HTML5 & CSS"],
    icon: "🌐",
  },
  {
    title: "Backend, APIs & Databases",
    desc: "Engineer dependable server-side systems with structured data models, RESTful API design, and scalable CRUD operations powering real-time application features.",
    tags: ["Node.js", "Express.js", "MongoDB & Mongoose", "REST & CRUD APIs", "Data Modeling"],
    icon: "🛠️",
  },
  {
    title: "Authentication & Security",
    desc: "Implement secure end-to-end access control — credential and multi-provider flows, session handling, and protected routes that keep application data safe.",
    tags: ["Better Auth", "JWT", "Google & GitHub OAuth", "Session Management", "Protected Routes"],
    icon: "🔐",
  },
  {
    title: "Deployment, Tooling & Quality",
    desc: "Ship and maintain live applications with version-controlled, reviewable workflows — optimized builds, performance-minded design, and fully responsive layouts.",
    tags: ["Vercel Deployment", "Git & GitHub", "Responsive Design", "Performance", "VS Code"],
    icon: "⚙️",
  },
  {
    title: "Project & Digital Strategy Management",
    desc: "Coordinate deliverables, timelines, and cross-functional stakeholders — managing brand social channels, creative production, and community communication.",
    tags: ["Project Management", "Digital Strategy", "Social Media", "Canva", "Customer Support"],
    icon: "📊",
  },
  {
    title: "GIS & Spatial Data Analysis",
    desc: "Geographic-information thinking applied to data — remote sensing, spatial modeling, and code-driven environmental analysis with modern geospatial platforms.",
    tags: ["Google Earth Engine (GEE)", "ArcGIS", "QGIS", "Remote Sensing", "Environmental Data"],
    icon: "🗺️",
  },
];
