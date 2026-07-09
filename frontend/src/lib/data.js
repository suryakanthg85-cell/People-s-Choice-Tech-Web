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
    { city: "Pune", country: "India", tz: "IST" },
    { city: "Mumbai", country: "India", tz: "IST" },
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
    bio: "10+ years across Business Development, and Marketing leadership roles. Hands-on with React, Next.js, WordPress and AWS Cloud Sales certified. Drives growth, GTM and customer success at PCT.",
    skills: ["Business Strategy", "React / Next.js", "WordPress", "AWS Cloud Sales", "GTM & Marketing"],
    quote: "Technology should never be a black box — it should be a lever every business can pull with confidence.",
  },
  {
    slug: "divya-bharti",
    name: "Divya Bharti",
    role: "Co-Founder & CTO",
    email: "divya@peopleschoice.tech",
    bio: "10+ years of enterprise engineering experience as a .NET specialist. Ex-Infosys, Cognizant, Datamatics and Clarion — has architected and delivered large-scale apps and software platforms across BFSI and enterprise.",
    skills: [".NET / C#", "Enterprise Architecture", "SQL Server", "Azure", "Software Delivery"],
    quote: "Great engineering is invisible — it shows up as a product that just works, scales and never lets the customer down.",
  },
];

export const SERVICES = [
  { slug: "software-development", title: "Custom Software Development", icon: "Code2", category: "Software", short: "Tailored enterprise software, MVPs and SaaS platforms — built to scale.", bullets: ["Custom & Enterprise Software", "SaaS & Product Development", "MVP Development", "Legacy Modernization", "API & Platform Development"], image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80", overview: "We design, build and ship custom software that fits your business — not the other way around. From greenfield SaaS platforms to multi-year modernization programs, our senior-led pods deliver production-grade systems in weeks, not quarters.", deliverables: ["Discovery & solution architecture", "Cloud-native, scalable backends", "Modern UIs (React / Next.js)", "Automated CI/CD & testing", "Production support & SLAs"] },
  { slug: "web-development", title: "Web Development", icon: "Globe", category: "Software", short: "Performant websites, portals and PWAs that convert visitors into customers.", bullets: ["Websites & Custom Web Apps", "Enterprise Portals", "Ecommerce & CMS", "Progressive Web Apps", "Headless / JAMstack"], image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80", overview: "From conversion-driven marketing sites to multi-tenant enterprise portals, we build the web experiences your customers want — fast, accessible, and built to rank.", deliverables: ["UX research & design systems", "Headless CMS & ecommerce", "Core Web Vitals optimization", "SEO + analytics foundation", "A/B-testing & growth loops"] },
  { slug: "mobile-app-development", title: "Mobile App Development", icon: "Smartphone", category: "Software", short: "Native iOS, Android and cross-platform apps engineered for delightful UX.", bullets: ["iOS & Android Native", "Flutter & React Native", "Cross-Platform Apps", "Enterprise Mobility"], image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80", overview: "Mobile is now the front door of your business. Our designers and engineers ship native-quality apps that customers actually open every day — backed by a hardened ops layer.", deliverables: ["Native iOS (Swift) & Android (Kotlin)", "Flutter / React Native cross-platform", "Offline-first architecture", "Push, deep linking, analytics", "App Store / Play submission & ASO"] },
  { slug: "ai-development", title: "Artificial Intelligence", icon: "Brain", category: "AI & Data", short: "From Generative AI agents to predictive analytics — production-grade AI.", bullets: ["Generative AI & LLM Apps", "AI Agents & RAG Systems", "Machine & Deep Learning", "Computer Vision & NLP", "Predictive Analytics"], image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80", overview: "AI is no longer a feature — it's the new layer. We build LLM apps, autonomous agents, and ML systems that actually move business metrics, with the governance and observability enterprises demand.", deliverables: ["Use-case discovery & ROI modeling", "RAG, agent & fine-tune pipelines", "Eval harness & guardrails", "MLOps + model monitoring", "Human-in-the-loop tooling"] },
  { slug: "data-engineering", title: "Data Engineering & Science", icon: "Database", category: "AI & Data", short: "Modern data platforms, pipelines and analytics that power decisions.", bullets: ["Data Pipelines & ETL", "Data Warehousing", "BI & Dashboards", "Data Science", "MLOps"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", overview: "Most companies are data-rich and insight-poor. We design modern data stacks — from ingestion to dashboards to ML — so every team can self-serve trustworthy answers.", deliverables: ["Snowflake / BigQuery / Databricks", "dbt + orchestration (Airflow)", "Reverse ETL & data activation", "Looker / Metabase dashboards", "Data quality & governance"] },
  { slug: "cloud-services", title: "Cloud Engineering", icon: "Cloud", category: "Cloud", short: "Cloud migration, native development and DevOps on AWS, Azure & GCP.", bullets: ["Cloud Consulting & Migration", "Cloud Native Development", "DevOps & Kubernetes", "Cloud Security", "Infrastructure Automation"], image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80", overview: "We help businesses migrate, modernize and operate on AWS, Azure and GCP — securely, reliably and cost-efficiently. Our AWS Cloud Sales-certified team has migrated workloads from tier-1 enterprises with zero data loss.", deliverables: ["Cloud assessment & TCO modeling", "Migration (re-host / re-platform / re-arch)", "Kubernetes & container platforms", "IaC (Terraform, CDK)", "FinOps & cost optimization"] },
  { slug: "cybersecurity", title: "Cybersecurity", icon: "ShieldCheck", category: "Security", short: "Identify, harden and monitor — security baked into every layer.", bullets: ["Security Consulting", "Vulnerability Assessment", "Penetration Testing", "SOC & Security Monitoring", "Identity Management"], image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80", overview: "Security isn't a checkbox — it's a posture. We assess, harden and monitor your stack against modern threats, and build the runbooks your team needs to respond in minutes, not days.", deliverables: ["VAPT & threat modeling", "Cloud security posture (CSPM)", "Identity & access (IAM / SSO / MFA)", "SOC + SIEM setup", "Incident response & tabletop drills"] },
  { slug: "erp-business-solutions", title: "ERP & Business Solutions", icon: "Layers", category: "Business", short: "ERP, CRM, HRMS and automation that streamline operations end-to-end.", bullets: ["ERP & CRM Development", "HRMS & SCM", "Procurement & Accounting", "Business Process Automation"], image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80", overview: "We replace 8 spreadsheets and 3 disconnected tools with one unified workflow — without you ever feeling the transition. ERP, CRM, HRMS or custom — built to your processes.", deliverables: ["Business process discovery", "ERP / CRM build or customization", "Workflow automation (n8n, Zapier, custom)", "Integrations (Tally, SAP, Salesforce)", "Change mgmt & user training"] },
  { slug: "emerging-technologies", title: "Emerging Technologies", icon: "Sparkles", category: "Innovation", short: "Blockchain, IoT, AR/VR, Digital Twin and Industry 4.0 solutions.", bullets: ["Blockchain", "IoT", "AR / VR", "Digital Twin", "Edge Computing", "Industry 4.0"], image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80", overview: "When the brief calls for blockchain, IoT, AR/VR or a digital twin, our innovation pod ships pilots in weeks — and productionizes them with the same engineering rigor as our enterprise work.", deliverables: ["Innovation discovery sprints", "Pilot architectures & PoCs", "Edge / IoT firmware & cloud", "AR / VR experiences (Unity / WebXR)", "Smart-contract development & audit"] },
  { slug: "it-consulting", title: "IT & Strategy Consulting", icon: "Compass", category: "Consulting", short: "Technology advisory and digital transformation rooted in business outcomes.", bullets: ["Technology Consulting", "Digital Transformation", "Enterprise Architecture", "Product & Startup Consulting"], image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80", overview: "Sometimes you don't need engineers — you need a sharp second opinion. Our consultants come from Infosys, Cognizant, Datamatics and Clarion, and write strategy decks you can actually execute.", deliverables: ["Tech & vendor assessments", "Digital transformation roadmaps", "Target enterprise architecture", "Product / GTM strategy", "Founder & investor readiness"] },
];

export const INDUSTRIES = [
  { slug: "healthcare", name: "Healthcare", icon: "Stethoscope", desc: "HIPAA-grade platforms, telehealth, EHR/EMR and AI for clinical excellence.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80", overview: "From telehealth platforms to AI-assisted diagnostics, we help hospitals, clinics and health-tech startups deliver better outcomes at lower cost — with HIPAA-grade engineering.", challenges: ["HIPAA / HL7 / FHIR compliance", "Integrating legacy EHR/EMR", "Telehealth at scale", "AI-assisted diagnosis & triage", "Patient engagement apps"] },
  { slug: "finance-banking", name: "Banking & Finance", icon: "Landmark", desc: "Digital banking, payments, lending platforms and AI-driven risk.", image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1600&q=80", overview: "Digital banking, payments, lending and AI risk — built to the audit, security and compliance bar that BFSI demands. Our team has shipped core banking modernization for tier-1 banks.", challenges: ["Core banking modernization", "Payments & UPI integrations", "Fraud & AML with AI", "RegTech & compliance reporting", "Customer-facing fintech UX"] },
  { slug: "insurance", name: "Insurance", icon: "ShieldCheck", desc: "Policy admin, claims automation, underwriting and customer portals.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80", overview: "Modernize claims, underwriting and policy admin with intelligent automation — without ripping out your core insurance platform.", challenges: ["Claims automation & STP", "AI-assisted underwriting", "Agent & customer portals", "Document intelligence (OCR + LLM)", "Legacy mainframe integration"] },
  { slug: "retail-ecommerce", name: "Retail & Ecommerce", icon: "ShoppingBag", desc: "Headless commerce, omnichannel POS, AI personalization.", image: "https://images.unsplash.com/photo-1556742400-b5b7c5121f6c?auto=format&fit=crop&w=1600&q=80", overview: "Headless commerce, omnichannel POS, AI personalization — we modernize retail experiences across web, mobile and store, without disrupting BAU.", challenges: ["Headless replatform (Shopify, commercetools)", "Unified inventory across channels", "AI personalization & recommendations", "POS & store apps", "OMS / WMS integration"] },
  { slug: "manufacturing", name: "Manufacturing", icon: "Factory", desc: "MES, IoT, digital twin and Industry 4.0 transformation.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80", overview: "MES, IoT, digital twin and Industry 4.0 — connect the shop floor to the boardroom with real-time data and predictive intelligence.", challenges: ["MES / SCADA modernization", "IoT & edge analytics", "Predictive maintenance", "Digital twin & simulation", "Connected workforce apps"] },
  { slug: "logistics", name: "Logistics & Supply Chain", icon: "Truck", desc: "Fleet, WMS, last-mile and predictive supply intelligence.", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80", overview: "Last-mile, fleet, warehouse and supply intelligence — we build the tech stack modern logistics businesses run on.", challenges: ["Fleet / TMS / WMS", "Route optimization & ETA prediction", "Driver & customer apps", "Real-time visibility platforms", "Demand forecasting"] },
  { slug: "education", name: "Education & EdTech", icon: "GraduationCap", desc: "LMS, online assessments and AI tutoring platforms.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80", overview: "LMS platforms, online assessments, AI tutoring and parent-student engagement — we build EdTech that learners actually love.", challenges: ["LMS & assessment platforms", "AI tutors & adaptive learning", "Proctoring & integrity", "Mobile-first learning apps", "Institute admin & ERP"] },
  { slug: "real-estate", name: "Real Estate", icon: "Building2", desc: "Proptech, listing portals, CRM and virtual tours.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80", overview: "Listing portals, broker CRMs, immersive virtual tours — proptech that helps you close deals faster.", challenges: ["Listing portals & search", "Broker / agent CRM", "Virtual tours & 3D", "Lead scoring with AI", "Property management SaaS"] },
  { slug: "travel-hospitality", name: "Travel & Hospitality", icon: "Plane", desc: "OTAs, booking engines, PMS and guest experience apps.", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80", overview: "OTAs, booking engines, hotel PMS, guest apps — built for the moments that make or break a trip.", challenges: ["Booking engines & GDS", "Hotel PMS & channel mgmt", "Guest experience apps", "Dynamic pricing & yield AI", "Loyalty & CRM"] },
  { slug: "automotive", name: "Automotive", icon: "Car", desc: "Connected vehicles, dealer platforms and aftermarket apps.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80", overview: "From dealer platforms to connected vehicle apps — we engineer for the new automotive value chain.", challenges: ["Dealer & DMS platforms", "Connected car / telematics", "Aftermarket & service apps", "EV charging networks", "OTA update systems"] },
  { slug: "energy", name: "Energy & Utilities", icon: "Zap", desc: "Smart grid, monitoring and predictive maintenance.", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80", overview: "Smart grids, asset monitoring, predictive maintenance and consumer-facing energy apps.", challenges: ["Smart meter & grid data", "Asset predictive maintenance", "Energy trading platforms", "Customer self-service portals", "Carbon & sustainability reporting"] },
  { slug: "government", name: "Government & Public", icon: "Landmark", desc: "Citizen portals, e-governance and secure platforms.", image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80", overview: "Citizen portals, e-governance services and secure inter-department platforms — at the scale and reliability the public sector demands.", challenges: ["Citizen-facing portals", "e-Governance integrations", "Identity & DigiLocker", "GIS & public dashboards", "Accessibility & multi-lingual"] },
  { slug: "telecom", name: "Telecom", icon: "Radio", desc: "OSS/BSS, network ops and customer self-service apps.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80", overview: "OSS/BSS modernization, customer self-service apps, network ops and 5G readiness.", challenges: ["OSS / BSS modernization", "Self-care apps & IVR", "Field service & dispatch", "Network analytics & AI ops", "5G app enablement"] },
  { slug: "media", name: "Media & Entertainment", icon: "Clapperboard", desc: "OTT, content platforms, monetization and AI recommendations.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80", overview: "OTT, news, gaming and content platforms — engineered for global scale, monetization and AI-powered recommendations.", challenges: ["OTT & video platforms", "Subscription & monetization", "Content recommendation AI", "DRM & secure delivery", "Editorial CMS workflows"] },
  { slug: "agriculture", name: "Agriculture", icon: "Sprout", desc: "Agritech, farm IoT, marketplace and yield analytics.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80", overview: "Agritech marketplaces, farm IoT, yield analytics and supply chain — bring data to the soil.", challenges: ["Farmer marketplaces", "Farm IoT & sensors", "Satellite + ML yield analytics", "Cold-chain & traceability", "Agri-finance apps"] },
  { slug: "construction", name: "Construction", icon: "HardHat", desc: "Project mgmt, BIM, site safety and digital procurement.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", overview: "Construction project mgmt, BIM integrations, site safety AI and digital procurement — modernize a notoriously offline industry.", challenges: ["Project & subcontractor mgmt", "BIM & design integrations", "Site safety AI (CV)", "Procurement & vendor portals", "Site-to-office data sync"] },
  { slug: "startups", name: "Startups", icon: "Rocket", desc: "MVP-to-scale partner: idea, build, raise and grow.", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80", overview: "From idea to Series B — we're the engineering partner founders call when they need to ship product faster than they can hire.", challenges: ["MVP & PMF sprints", "Investor-grade architecture", "Fractional CTO / advisory", "Speed-to-market builds", "Scale-up & re-architecture"] },
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
  {
    slug: "track-the-breach",
    title: "Track The Breach — AI-Powered Digital Identity Protection Platform",
    industry: "Cybersecurity SaaS",
    pctProduct: true,
    summary: "We designed, engineered and launched Track The Breach — a cloud-native SaaS platform that gives individuals and organizations real-time visibility into their digital identity exposure, with AI-driven risk analysis on top.",
    impact: ["Cloud-native SaaS launched", "AI-driven risk analysis", "Subscription-ready platform"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    overview: "Track The Breach is a cybersecurity technology startup focused on helping individuals and organizations understand, monitor, and protect their digital identities. As cyber threats, data breaches, identity theft, and online impersonation continue to grow globally, the company identified a need for a modern platform that could provide visibility into personal data exposure.",
    challenge: "Millions of users have their personal information exposed through data breaches every year. Existing solutions often focus on enterprise security while leaving individuals with limited visibility into their digital footprint. The client required a scalable platform that could detect exposed identity information, monitor online data leaks, provide AI-driven risk analysis, support multiple identity intelligence services, deliver actionable recommendations through a simple user experience, and scale globally with secure cloud infrastructure.",
    solution: "Our development team designed and built Track The Breach as a cloud-native SaaS platform powered by modern web technologies and AI-driven analysis.",
    modules: [
      { name: "Digital Identity Monitoring", desc: "Users can monitor exposure related to email addresses, phone numbers, social media accounts, public profile information and personal identity data." },
      { name: "Breach Intelligence Engine", desc: "The platform aggregates and analyzes publicly available breach intelligence sources to identify potential exposures and security risks." },
      { name: "AI Risk Analysis", desc: "An AI-powered analysis layer helps users understand exposure severity, potential attack vectors, privacy risks and recommended mitigation actions." },
      { name: "User Dashboard", desc: "A centralized dashboard provides identity monitoring results, scan history, security recommendations and account management tools." },
      { name: "Subscription & Billing", desc: "Integrated payment processing enables free and premium plans, subscription management and secure billing workflows." },
    ],
    stack: {
      Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      Backend: ["Serverless API", "Node.js", "TypeScript"],
      Database: ["Supabase", "PostgreSQL", "Auth & User Management"],
      Infrastructure: ["AWS Cloud", "Nginx", "PM2", "SSL Security"],
      "AI & Intelligence": ["OpenAI Integration", "Automated Intelligence Processing", "Risk Classification Engine"],
    },
    phases: [
      "Research and market validation",
      "Platform architecture and infrastructure planning",
      "Core feature development",
      "Identity monitoring and breach intelligence integration",
      "AI-driven recommendation engine",
      "Testing, optimization, and security hardening",
      "Production deployment and user onboarding",
    ],
    outcomes: [
      "Secure cloud-based architecture",
      "Real-time identity monitoring capabilities",
      "AI-powered security recommendations",
      "Subscription-ready SaaS model",
      "Scalable infrastructure for future growth",
      "Mobile-responsive user experience",
      "Enterprise-ready foundation for future product expansion",
    ],
    quote: "Track The Breach demonstrates how modern cloud technologies, AI, and cybersecurity intelligence can be combined to create a scalable SaaS product that helps users better understand and protect their digital identities.",
  },
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
  {
    name: "Track The Breach",
    category: "Cybersecurity SaaS",
    desc: "AI-powered digital identity protection platform. Monitor breaches, scan exposure, and get AI-driven risk recommendations.",
    designedByPCT: true,
    status: "Live",
    url: "https://trackthebreach.com",
    caseStudySlug: "track-the-breach",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    tags: ["AI", "SaaS", "Cybersecurity", "Next.js"],
  },
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
  { title: "The Enterprise Guide to Generative AI in 2026", category: "AI Insights", read: "12 min", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", excerpt: "Practical patterns, eval strategies and ROI frameworks for taking GenAI from POC to production in regulated enterprises." },
  { title: "Choosing Between AWS, Azure and GCP — A 2026 Decision Framework", category: "Cloud", read: "9 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", excerpt: "A no-nonsense decision matrix from a team that has migrated workloads across all three hyperscalers." },
  { title: "From Monolith to Microservices: Lessons from 30+ Migrations", category: "Architecture", read: "14 min", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", excerpt: "When to decompose, when to leave it alone, and how to avoid the distributed-monolith trap." },
  { title: "Building a Modern Data Stack on a Startup Budget", category: "Data", read: "10 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", excerpt: "A pragmatic ELT + warehouse + BI stack for under $500/month that scales with you." },
  { title: "Cybersecurity Maturity for Mid-Market Companies", category: "Security", read: "8 min", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80", excerpt: "The 9 controls that move you from 'hopeful' to 'audit-ready' — in priority order." },
  { title: "The Real Cost of Hiring Offshore vs. Staff Augmentation", category: "Staffing", read: "7 min", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80", excerpt: "Total cost of ownership, ramp time, and risk — modeled across three real-world scenarios." },
  { title: "Designing AI Agents Customers Actually Trust", category: "AI Insights", read: "11 min", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80", excerpt: "Why most agents fail in production — and the UX, eval and guardrail patterns that work." },
  { title: "Cloud FinOps: Stop Paying for Idle Infrastructure", category: "Cloud", read: "8 min", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80", excerpt: "A 30/60/90 plan to reclaim 25–40% of your cloud spend without slowing the team down." },
  { title: "Why Your ERP Project Will Fail (and How to Save It)", category: "Enterprise", read: "13 min", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80", excerpt: "Lessons from a CTO who has seen — and rescued — 12 ERP rollouts across manufacturing and retail." },
];

export const JOBS = [
  { title: "Senior Full-Stack Engineer (React + Node)", location: "Pune / Remote", type: "Full-time" },
  { title: ".NET Solution Architect", location: "Bengaluru / Hybrid", type: "Full-time" },
  { title: "AI/ML Engineer — LLMs & RAG", location: "Remote (India)", type: "Full-time" },
  { title: "DevOps Engineer (AWS, Kubernetes)", location: "Pune / Remote", type: "Full-time" },
  { title: "Product Designer", location: "Remote", type: "Full-time" },
  { title: "Engineering Intern", location: "Pune", type: "Internship" },
];
