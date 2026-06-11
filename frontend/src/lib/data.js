// Data for People's Choice Tech website
// Centralized so service/industry/case-study pages stay consistent.

export const COMPANY = {
  name: "People's Choice Tech",
  short: "PCT",
  tagline: "Build, Scale & Transform with AI-Powered Technology Solutions",
  email: "hello@peopleschoice.tech",
  phone: "+91 8275439584",
  hq: "304, Hazel One, Hinjewadi Phase 1, Pune",
  offices: [
    { city: "Nashik", country: "India", tz: "IST" },
    { city: "Ahmednagar", country: "India", tz: "IST" },
    { city: "Bengaluru", country: "India", tz: "IST" },
    { city: "New York", country: "USA", tz: "EST" },
    { city: "London", country: "UK", tz: "GMT" },
    { city: "Singapore", country: "SG", tz: "SGT" },
  ],
};

export const FOUNDERS = [
  {
    slug: "gopal-giri",
    name: "Gopal Giri",
    role: "Co-Founder & CEO",
    email: "gopal@peopleschoice.tech",
    image:
      "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3ODEyMTg1NjR8MA&ixlib=rb-4.1.0&q=85",
    bio: "10+ years across Business Head, Development Head, and Marketing leadership roles. Hands-on with React, Next.js, WordPress and AWS Cloud Sales certified. Drives growth, GTM and customer success at PCT.",
    skills: ["Business Strategy", "React / Next.js", "WordPress", "AWS Cloud Sales", "GTM & Marketing"],
    quote: "Technology should never be a black box — it should be a lever every business can pull with confidence.",
  },
  {
    slug: "divya-bharti",
    name: "Divya Bharti",
    role: "Co-Founder & CTO",
    email: "divya@peopleschoice.tech",
    image:
      "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3ODEyMTg1NjR8MA&ixlib=rb-4.1.0&q=85",
    bio: "10+ years of enterprise engineering experience as a .NET specialist. Ex-Infosys, Cognizant, Datamatics and Clarion — has architected and delivered large-scale apps and software platforms across BFSI and enterprise.",
    skills: [".NET / C#", "Enterprise Architecture", "SQL Server", "Azure", "Software Delivery"],
    quote: "Great engineering is invisible — it shows up as a product that just works, scales and never lets the customer down.",
  },
];

export const SERVICES = [
  { slug: "software-development", title: "Custom Software Development", icon: "Code2", category: "Software", short: "Tailored enterprise software, MVPs and SaaS platforms — built to scale.", bullets: ["Custom & Enterprise Software", "SaaS & Product Development", "MVP Development", "Legacy Modernization", "API & Platform Development"] },
  { slug: "web-development", title: "Web Development", icon: "Globe", category: "Software", short: "Performant websites, portals and PWAs that convert visitors into customers.", bullets: ["Websites & Custom Web Apps", "Enterprise Portals", "Ecommerce & CMS", "Progressive Web Apps", "Headless / JAMstack"] },
  { slug: "mobile-app-development", title: "Mobile App Development", icon: "Smartphone", category: "Software", short: "Native iOS, Android and cross-platform apps engineered for delightful UX.", bullets: ["iOS & Android Native", "Flutter & React Native", "Cross-Platform Apps", "Enterprise Mobility"] },
  { slug: "ai-development", title: "Artificial Intelligence", icon: "Brain", category: "AI & Data", short: "From Generative AI agents to predictive analytics — production-grade AI.", bullets: ["Generative AI & LLM Apps", "AI Agents & RAG Systems", "Machine & Deep Learning", "Computer Vision & NLP", "Predictive Analytics"] },
  { slug: "data-engineering", title: "Data Engineering & Science", icon: "Database", category: "AI & Data", short: "Modern data platforms, pipelines and analytics that power decisions.", bullets: ["Data Pipelines & ETL", "Data Warehousing", "BI & Dashboards", "Data Science", "MLOps"] },
  { slug: "cloud-services", title: "Cloud Engineering", icon: "Cloud", category: "Cloud", short: "Cloud migration, native development and DevOps on AWS, Azure & GCP.", bullets: ["Cloud Consulting & Migration", "Cloud Native Development", "DevOps & Kubernetes", "Cloud Security", "Infrastructure Automation"] },
  { slug: "cybersecurity", title: "Cybersecurity", icon: "ShieldCheck", category: "Security", short: "Identify, harden and monitor — security baked into every layer.", bullets: ["Security Consulting", "Vulnerability Assessment", "Penetration Testing", "SOC & Security Monitoring", "Identity Management"] },
  { slug: "erp-business-solutions", title: "ERP & Business Solutions", icon: "Layers", category: "Business", short: "ERP, CRM, HRMS and automation that streamline operations end-to-end.", bullets: ["ERP & CRM Development", "HRMS & SCM", "Procurement & Accounting", "Business Process Automation"] },
  { slug: "emerging-technologies", title: "Emerging Technologies", icon: "Sparkles", category: "Innovation", short: "Blockchain, IoT, AR/VR, Digital Twin and Industry 4.0 solutions.", bullets: ["Blockchain", "IoT", "AR / VR", "Digital Twin", "Edge Computing", "Industry 4.0"] },
  { slug: "it-consulting", title: "IT & Strategy Consulting", icon: "Compass", category: "Consulting", short: "Technology advisory and digital transformation rooted in business outcomes.", bullets: ["Technology Consulting", "Digital Transformation", "Enterprise Architecture", "Product & Startup Consulting"] },
];

export const INDUSTRIES = [
  { slug: "healthcare", name: "Healthcare", icon: "Stethoscope", desc: "HIPAA-grade platforms, telehealth, EHR/EMR and AI for clinical excellence." },
  { slug: "finance-banking", name: "Banking & Finance", icon: "Landmark", desc: "Digital banking, payments, lending platforms and AI-driven risk." },
  { slug: "insurance", name: "Insurance", icon: "ShieldCheck", desc: "Policy admin, claims automation, underwriting and customer portals." },
  { slug: "retail-ecommerce", name: "Retail & Ecommerce", icon: "ShoppingBag", desc: "Headless commerce, omnichannel POS, AI personalization." },
  { slug: "manufacturing", name: "Manufacturing", icon: "Factory", desc: "MES, IoT, digital twin and Industry 4.0 transformation." },
  { slug: "logistics", name: "Logistics & Supply Chain", icon: "Truck", desc: "Fleet, WMS, last-mile and predictive supply intelligence." },
  { slug: "education", name: "Education & EdTech", icon: "GraduationCap", desc: "LMS, online assessments and AI tutoring platforms." },
  { slug: "real-estate", name: "Real Estate", icon: "Building2", desc: "Proptech, listing portals, CRM and virtual tours." },
  { slug: "travel-hospitality", name: "Travel & Hospitality", icon: "Plane", desc: "OTAs, booking engines, PMS and guest experience apps." },
  { slug: "automotive", name: "Automotive", icon: "Car", desc: "Connected vehicles, dealer platforms and aftermarket apps." },
  { slug: "energy", name: "Energy & Utilities", icon: "Zap", desc: "Smart grid, monitoring and predictive maintenance." },
  { slug: "government", name: "Government & Public", icon: "Landmark", desc: "Citizen portals, e-governance and secure platforms." },
  { slug: "telecom", name: "Telecom", icon: "Radio", desc: "OSS/BSS, network ops and customer self-service apps." },
  { slug: "media", name: "Media & Entertainment", icon: "Clapperboard", desc: "OTT, content platforms, monetization and AI recommendations." },
  { slug: "agriculture", name: "Agriculture", icon: "Sprout", desc: "Agritech, farm IoT, marketplace and yield analytics." },
  { slug: "construction", name: "Construction", icon: "HardHat", desc: "Project mgmt, BIM, site safety and digital procurement." },
  { slug: "startups", name: "Startups", icon: "Rocket", desc: "MVP-to-scale partner: idea, build, raise and grow." },
];

export const TECH_STACK = {
  Frontend: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind"],
  Backend: ["Node.js", "Python", "Django", "FastAPI", "Java", "Spring Boot", ".NET", "Go", "Laravel"],
  Mobile: ["Swift", "Kotlin", "Flutter", "React Native"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "SQL Server"],
  Cloud: ["AWS", "Azure", "Google Cloud"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible"],
  AI: ["OpenAI", "LangChain", "Vector DBs", "RAG", "AI Agents", "Hugging Face"],
};

export const CASE_STUDIES = [
  { slug: "healthcare-digital-transformation", title: "Healthcare Digital Transformation", industry: "Healthcare", summary: "Modernized a 200-hospital chain's patient experience with a unified app — 3M+ patients onboarded.", impact: ["62% faster patient onboarding", "41% reduction in no-shows", "4.8★ App Store rating"], image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwdGVjaHxlbnwwfHx8fDE3ODEyMTg1Nzl8MA&ixlib=rb-4.1.0&q=85" },
  { slug: "ai-customer-support-platform", title: "AI Customer Support Platform", industry: "SaaS", summary: "Built a multi-agent RAG platform that resolves 70% of L1 tickets autonomously.", impact: ["70% L1 auto-resolution", "$2.4M/yr support savings", "8s avg first response"], image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB0ZWNobm9sb2d5JTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3ODEyMTg1Nzh8MA&ixlib=rb-4.1.0&q=85" },
  { slug: "ecommerce-modernization", title: "Headless Commerce Modernization", industry: "Retail", summary: "Replatformed a $180M GMV retailer to a headless stack — page speed up 3.2x.", impact: ["3.2× page speed", "28% conversion lift", "Zero downtime cut-over"], image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwd29ya2Vyc3xlbnwwfHx8fDE3ODEyMTg1NjV8MA&ixlib=rb-4.1.0&q=85" },
  { slug: "erp-implementation", title: "Enterprise ERP Implementation", industry: "Manufacturing", summary: "Unified 14 legacy systems across 6 plants into one ERP — saved 22,000 hours/year.", impact: ["14 systems → 1", "22K hrs/yr saved", "Real-time plant visibility"], image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc4MTIxODU2NXww&ixlib=rb-4.1.0&q=85" },
  { slug: "cloud-migration", title: "Multi-Region AWS Cloud Migration", industry: "Banking", summary: "Migrated a tier-1 bank's core systems to AWS with zero data loss and 99.99% SLA.", impact: ["99.99% uptime", "37% infra cost saved", "Zero data loss cutover"], image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxjbG91ZHxlbnwwfHx8fDE3ODEyMTg1NjV8MA&ixlib=rb-4.1.0&q=85" },
  { slug: "mobile-banking-app", title: "Next-Gen Mobile Banking App", industry: "Banking", summary: "Designed a delightful mobile banking app — 1.2M downloads in 6 months.", impact: ["1.2M downloads", "4.7★ rating", "+18% NPS"], image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwfGVufDB8fHx8MTc4MTIxODU2NXww&ixlib=rb-4.1.0&q=85" },
];

export const PROCESS = [
  { step: "01", title: "Discover", desc: "Workshops, audits and outcome mapping to align product, tech and business goals." },
  { step: "02", title: "Design", desc: "UX, architecture and proofs-of-concept that de-risk delivery before code." },
  { step: "03", title: "Build", desc: "Agile pods ship in 2-week increments with continuous integration and review." },
  { step: "04", title: "Launch", desc: "Production-grade release with monitoring, observability and zero-downtime cutovers." },
  { step: "05", title: "Scale", desc: "Optimize, harden and evolve — long-term partnership for sustained growth." },
];

export const STATS = [
  { value: "10+", label: "Years of leadership" },
  { value: "120+", label: "Engineers in network" },
  { value: "6", label: "Global offices" },
  { value: "50+", label: "Enterprise projects" },
];

export const FAQS = [
  { q: "What size of companies do you typically work with?", a: "We partner with everyone from venture-backed startups building their MVP to large enterprises rolling out multi-year transformation programs." },
  { q: "How quickly can you start a project?", a: "Typically within 1–2 weeks. For staff augmentation we can place vetted engineers in as little as 5 business days." },
  { q: "Do you offer fixed-price engagements or only T&M?", a: "Both. Fixed-scope MVPs and discovery sprints are usually fixed price; complex product builds use a hybrid T&M model with milestone-based billing." },
  { q: "Where are your delivery centers?", a: "We have engineering hubs across India (Pune, Nashik, Ahmednagar, Bengaluru) and client-facing offices in NYC, London and Singapore." },
  { q: "How do you ensure quality and security?", a: "Every project goes through code review, automated CI/CD, security scans, and follows ISO-aligned processes. We sign NDAs upfront and IP transfers on delivery." },
  { q: "Do you provide ongoing support after launch?", a: "Yes — we offer dedicated SLAs, managed services, and 24×7 production support depending on your needs." },
];

export const PRODUCTS = [
  { name: "PCT Pulse", category: "AI Product", desc: "AI agent platform for internal ops, support and knowledge automation." },
  { name: "PCT Cloud Console", category: "Cloud Platform", desc: "Unified multi-cloud dashboard with cost, security and DevOps insights." },
  { name: "PCT FlowOps", category: "Automation", desc: "Low-code workflow engine for finance, HR and procurement automation." },
  { name: "PCT Secure", category: "Cybersecurity", desc: "Continuous vulnerability and attack surface monitoring for mid-market." },
  { name: "PCT DataMesh", category: "Data Intelligence", desc: "Plug-and-play data warehouse + BI starter for growing businesses." },
  { name: "PCT Retail Suite", category: "Industry Solution", desc: "Headless commerce + POS toolkit for omnichannel retailers." },
];

export const STAFFING = [
  { title: "IT Staff Augmentation", desc: "Vetted engineers embedded into your team, ramped in days not months." },
  { title: "Dedicated Developers", desc: "Long-term engineers reporting to you, managed by us." },
  { title: "Offshore Development Center", desc: "Build your own captive team in India with zero setup overhead." },
  { title: "Managed Pods", desc: "Cross-functional pods (PM + design + engineering) owning outcomes end-to-end." },
  { title: "Remote Developers", desc: "Hand-picked remote talent across 20+ tech stacks." },
  { title: "Recruitment Process Outsourcing", desc: "We run your technical hiring funnel — sourcing to onboarding." },
];

export const RESOURCES = [
  { title: "The Enterprise Guide to Generative AI in 2026", category: "AI Insights", read: "12 min" },
  { title: "Choosing Between AWS, Azure and GCP — A 2026 Decision Framework", category: "Cloud", read: "9 min" },
  { title: "From Monolith to Microservices: Lessons from 30+ Migrations", category: "Architecture", read: "14 min" },
  { title: "Building a Modern Data Stack on a Startup Budget", category: "Data", read: "10 min" },
  { title: "Cybersecurity Maturity for Mid-Market Companies", category: "Security", read: "8 min" },
  { title: "The Real Cost of Hiring Offshore vs. Staff Augmentation", category: "Staffing", read: "7 min" },
];

export const JOBS = [
  { title: "Senior Full-Stack Engineer (React + Node)", location: "Pune / Remote", type: "Full-time" },
  { title: ".NET Solution Architect", location: "Bengaluru / Hybrid", type: "Full-time" },
  { title: "AI/ML Engineer — LLMs & RAG", location: "Remote (India)", type: "Full-time" },
  { title: "DevOps Engineer (AWS, Kubernetes)", location: "Pune / Remote", type: "Full-time" },
  { title: "Product Designer", location: "Remote", type: "Full-time" },
  { title: "Engineering Intern", location: "Pune", type: "Internship" },
];
