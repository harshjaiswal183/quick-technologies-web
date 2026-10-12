export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  metrics: string;
  status: 'Concept Demo' | 'Verified Showcase';
  imagePlaceholderColor: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  solutions: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "Quick Technologies",
  legalName: "Quick Technologies",
  tagline: "Smart Technology. Powerful Business Growth.",
  supportingTagline: "We Build Custom Software That Helps Businesses Grow Faster.",
  phone: "+91 9650652635",
  phoneRaw: "919650652635",
  email: "harshjaiswal183@gmail.com",
  instagramUrl: "https://www.instagram.com/quick.technologies?psln=MTU4eTQwcDZ0cmFzdw%3D%3D",
  whatsappUrl: "https://wa.me/919650652635?text=Hi%20Quick%20Technologies%2C%20I%20want%20to%20discuss%20a%20software%20solution.",
  
  // Real & Verified Metrics
  experienceYears: "2+",
  clientsCount: "20+",
  
  // Placeholders marked for verification
  projectsDeliveredPlaceholder: "30+",
  
  location: {
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    addressPlaceholder: "Connaught Place / South Extension, New Delhi - 110001 (Office Address Placeholder - Replace upon lease confirmation)",
    isPlaceholder: true,
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    category: "Web Engineering",
    icon: "Globe",
    shortDesc: "High-performance business portals, modern corporate websites, custom web apps, and conversion-focused landing pages.",
    fullDesc: "We build modern, responsive, and SEO-engineered web platforms designed to turn visitors into long-term customers. From custom enterprise portals to scalable eCommerce, our code is fast, secure, and future-proof.",
    features: [
      "Custom responsive design for all screen sizes",
      "Next.js & React headless architectures",
      "Corporate web portals & CMS integration",
      "High-speed performance & Core Web Vitals optimization"
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "SEO"]
  },
  {
    id: "mobile-app-dev",
    title: "Mobile Application Development",
    category: "Mobile",
    icon: "Smartphone",
    shortDesc: "Native and cross-platform Android & iOS apps engineered for smooth UX, offline capability, and heavy usage.",
    fullDesc: "Whether launching a customer-facing app or a rugged field-force companion for warehouse and sales teams, we build fluid mobile applications using Flutter, React Native, and native SDKs.",
    features: [
      "iOS & Android cross-platform synchronization",
      "Offline-first data caching & sync",
      "Push notifications & real-time socket events",
      "Secure payment gateway & biometric authentication"
    ],
    tags: ["Flutter", "React Native", "Android", "iOS"]
  },
  {
    id: "sfa",
    title: "Sales Force Automation (SFA)",
    category: "Enterprise Automation",
    icon: "TrendingUp",
    shortDesc: "Field sales tracking, automated beat planning, live attendance, on-the-go order booking, and field team analytics.",
    fullDesc: "Empower your on-ground sales force with an automated companion. Track daily store visits, ensure geo-verified attendance, capture retailer orders in real-time, and eliminate manual spreadsheet reporting.",
    features: [
      "Geo-fenced check-in & store beat planning",
      "Instant on-spot order booking & digital receipts",
      "Target vs achievement live tracking",
      "Expense claims & field activity logs"
    ],
    tags: ["Field Sales", "GPS Verification", "Beat Plan", "Analytics"]
  },
  {
    id: "loyalty",
    title: "Loyalty Program Software",
    category: "Customer Engagement",
    icon: "Award",
    shortDesc: "QR-code point accumulation, retailer incentive schemes, instant wallet redemptions, and tiered engagement engines.",
    fullDesc: "Drive repeated sales and brand loyalty. We engineer customizable loyalty systems tailored for dealers, influencers, retailers, and end-consumers with instant QR scanning, tier rewards, and gift catalogues.",
    features: [
      "Unique encrypted QR codes per product/packaging",
      "Instant point scan & UPI/bank direct redemption",
      "Dealer tier ladders (Silver, Gold, Platinum)",
      "Automated fraud & duplicate scan prevention"
    ],
    tags: ["QR Scanning", "Rewards", "Gamification", "Redemptions"]
  },
  {
    id: "distributor-management",
    title: "Distributor Order Management",
    category: "Supply Chain",
    icon: "Boxes",
    shortDesc: "End-to-end distributor & dealer ordering portals, real-time catalog pricing, stock visibility, and credit control.",
    fullDesc: "Streamline primary and secondary order distribution. Distributors place orders 24/7, view live inventory levels, check credit limits, and track dispatch status without back-and-forth phone calls.",
    features: [
      "Self-service distributor ordering portal",
      "Dynamic wholesale price lists & scheme discounts",
      "Stock allocation & warehouse visibility",
      "Outstanding payment & credit balance warnings"
    ],
    tags: ["B2B Portal", "Inventory", "Catalog", "Invoicing"]
  },
  {
    id: "crm",
    title: "CRM Software",
    category: "Sales & Relations",
    icon: "Users",
    shortDesc: "Centralized lead capture, pipeline tracking, automated client follow-ups, and customer relationship history.",
    fullDesc: "Never lose another customer inquiry. Our CRM solutions aggregate leads from WhatsApp, IndiaMART, website forms, and phone calls into a unified Kanban pipeline with automated follow-up reminders.",
    features: [
      "Omnichannel lead capture & auto-assignment",
      "Visual sales pipeline stages & deal values",
      "Automated WhatsApp & Email follow-up sequences",
      "Activity timeline & call log notes"
    ],
    tags: ["Lead Capture", "Pipeline", "Reminders", "Analytics"]
  },
  {
    id: "erp",
    title: "ERP Software",
    category: "Enterprise Systems",
    icon: "Cpu",
    shortDesc: "Integrated ERP modules connecting inventory, procurement, sales invoices, accounts, and factory operations.",
    fullDesc: "Run your entire organization on a synchronized operating system. Our modular ERP architectures connect your raw materials, production batches, dispatches, and financial statements into one command center.",
    features: [
      "Multi-warehouse inventory management with batch tracking",
      "Purchase order & supplier invoice matching",
      "Role-based access control & audit trails",
      "Executive balance sheet & profit/loss dashboards"
    ],
    tags: ["Inventory", "Procurement", "Accounting", "Workflow"]
  },
  {
    id: "gps-tracking",
    title: "GPS Tracking Solutions",
    category: "Field Intelligence",
    icon: "MapPin",
    shortDesc: "Live location monitoring, route history playback, kilometer reimbursement audits, and geofenced visit verification.",
    fullDesc: "Know exactly where your field staff and fleet vehicles are. We provide battery-optimized background tracking for employee smartphones and hardware telematics integration with real-time map replays.",
    features: [
      "Real-time location pings with battery saver modes",
      "Historical route playback & halt detection",
      "Automated distance calculation for fair travel reimbursements",
      "Geofence arrival & departure alerts"
    ],
    tags: ["Live Tracking", "Battery Optimization", "Geofence", "Routes"]
  },
  {
    id: "order-management",
    title: "Order Management Systems",
    category: "Fulfillment",
    icon: "ClipboardList",
    shortDesc: "End-to-end order processing, dispatch workflows, courier API integrations, and invoice status tracking.",
    fullDesc: "From order placement to final doorstep delivery, maintain complete oversight of fulfillment queues, picking slips, packing scans, and real-time carrier tracking numbers.",
    features: [
      "Automated order routing to nearest warehouses",
      "Barcode scanning for error-free packaging",
      "Logistics courier API integration (Delhivery, Shiprocket, BlueDart)",
      "Automated customer SMS/WhatsApp dispatch updates"
    ],
    tags: ["Order Queue", "Packing Scans", "Couriers", "Dispatch"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Growth & ROI",
    icon: "BarChart3",
    shortDesc: "Data-driven SEO, Google Ads, Meta Ads (Instagram/Facebook), high-intent B2B lead generation, and social media branding.",
    fullDesc: "Software needs qualified eyeballs to generate revenue. We execute full-funnel digital marketing campaigns that position Quick Technologies and our clients as industry leaders, driving measurable qualified leads.",
    features: [
      "Search Engine Optimization (SEO) for high-intent keywords",
      "Targeted Meta Ads & Google Search Ads management",
      "High-converting landing page A/B testing",
      "Transparent monthly ROAS & conversion reporting"
    ],
    tags: ["Google Ads", "Meta Ads", "SEO", "Lead Generation"]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    category: "Tailor-Made Solutions",
    icon: "Code2",
    shortDesc: "Bespoke software engineered around your unique workflows, proprietary business logic, and third-party API stacks.",
    fullDesc: "Off-the-shelf software forces you to change how your business operates. We build tailor-made systems that adapt strictly to your rules, eliminating software subscription bloat and scaling seamlessly as you expand.",
    features: [
      "Architecture engineered specifically for your workflows",
      "Seamless API integrations with existing legacy software",
      "100% intellectual property & source code ownership",
      "Scalable cloud architecture on AWS / Azure"
    ],
    tags: ["Microservices", "REST APIs", "AWS Cloud", "Scalable"]
  }
];

export const TECH_STACK = {
  frontend: [
    { name: "React.js", category: "UI Library", icon: "⚛️", desc: "Interactive component-driven interfaces" },
    { name: "Next.js", category: "Fullstack / SSR", icon: "▲", desc: "High-performance SEO web applications" },
    { name: "TypeScript", category: "Language", icon: "TS", desc: "Type-safe robust frontend code" },
    { name: "JavaScript", category: "Core", icon: "JS", desc: "Modern ES6+ dynamic scripting" },
    { name: "HTML5", category: "Markup", icon: "🌐", desc: "Accessible semantic structure" },
    { name: "CSS3", category: "Styling", icon: "🎨", desc: "Modern responsive layout styling" },
    { name: "Tailwind CSS", category: "Styling Engine", icon: "🌊", desc: "Utility-first rapid design system" }
  ],
  backend: [
    { name: "Node.js", category: "Runtime", icon: "🟢", desc: "High-throughput asynchronous engine" },
    { name: "Express.js", category: "Web Framework", icon: "⚡", desc: "Fast minimalist REST APIs" },
    { name: "Python", category: "Backend / AI", icon: "🐍", desc: "Data processing & backend automation" },
    { name: "PHP", category: "Backend", icon: "🐘", desc: "Proven enterprise web backends" },
    { name: "Laravel", category: "MVC Framework", icon: "🔴", desc: "Elegant full-featured PHP framework" },
    { name: "Java", category: "Enterprise", icon: "☕", desc: "Mission-critical enterprise services" }
  ],
  mobile: [
    { name: "Flutter", category: "Cross-Platform", icon: "💙", desc: "Single codebase for iOS & Android with native 60fps" },
    { name: "React Native", category: "Hybrid", icon: "⚛️", desc: "Native components with React simplicity" },
    { name: "Kotlin", category: "Native Android", icon: "🤖", desc: "Official Android development standard" },
    { name: "Swift", category: "Native iOS", icon: "🍎", desc: "High-performance Apple ecosystem apps" }
  ],
  databases: [
    { name: "MySQL", category: "Relational", icon: "🐬", desc: "Battle-tested relational database" },
    { name: "PostgreSQL", category: "Relational", icon: "🐘", desc: "Advanced open-source relational engine" },
    { name: "MongoDB", category: "NoSQL", icon: "🍃", desc: "Flexible JSON document store" },
    { name: "Firebase", category: "Realtime", icon: "🔥", desc: "Live sync & serverless database" }
  ],
  cloudAndTools: [
    { name: "AWS", category: "Cloud Infrastructure", icon: "☁️", desc: "Amazon Web Services scalable cloud hosting" },
    { name: "Microsoft Azure", category: "Cloud", icon: "🔷", desc: "Enterprise cloud computing & security" },
    { name: "Google Cloud", category: "Cloud", icon: "🌈", desc: "Scalable GCP servers & analytics" },
    { name: "Docker", category: "Containers", icon: "🐳", desc: "Consistent containerized deployments" },
    { name: "Git", category: "VCS", icon: "🌿", desc: "Version control & collaboration" },
    { name: "GitHub", category: "DevOps", icon: "🐙", desc: "CI/CD pipelines & code repository" }
  ],
  designAndMarketing: [
    { name: "Figma", category: "UI/UX", icon: "🎨", desc: "Interactive wireframing & prototype design" },
    { name: "Google Analytics", category: "Data", icon: "📈", desc: "User behavioral tracking & conversion insights" },
    { name: "Google Ads", category: "PPC", icon: "🎯", desc: "Search and intent-based targeted ads" },
    { name: "Meta Ads", category: "Paid Social", icon: "📱", desc: "Instagram & Facebook growth campaigns" }
  ]
};

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "fmcg",
    name: "FMCG & Consumer Goods",
    icon: "ShoppingBag",
    description: "Streamline field sales agents, beat route plans, distributor inventory, and retailer loyalty schemes.",
    solutions: ["Sales Force Automation", "Retailer QR Loyalty", "Secondary Order Booking"]
  },
  {
    id: "retail",
    name: "Retail & Distribution",
    icon: "Store",
    description: "Connect multi-store inventories, wholesale dealer ordering, and customer reward points seamlessly.",
    solutions: ["Distributor Portals", "POS Integration", "Automated Reordering"]
  },
  {
    id: "pharma",
    name: "Pharmaceuticals",
    icon: "Activity",
    description: "Manage medical representative visits, chemist order taking, sample disbursement, and compliance tracking.",
    solutions: ["Doctor Beat Planning", "Chemist Order Booking", "Sample Tracking"]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    description: "Synchronize raw material procurement, job work stages, production lines, and dispatch bills in real time.",
    solutions: ["Custom ERP", "Batch Production Tracking", "Warehouse Management"]
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: "Truck",
    description: "Live GPS fleet tracking, trip route playback, fuel & toll audits, and delivery confirmation proof.",
    solutions: ["Live GPS Monitoring", "Proof-of-Delivery App", "Trip Expense Audits"]
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "Globe2",
    description: "Ultra-fast online storefronts, multi-vendor marketplaces, courier automated dispatch, and payment gateways.",
    solutions: ["Custom Storefronts", "Courier API Sync", "Automated Abandoned Cart Follow-up"]
  },
  {
    id: "field-sales",
    name: "Field Sales Businesses",
    icon: "Compass",
    description: "Eliminate manual register reporting with GPS-verified attendance, visit checklists, and instant quotes.",
    solutions: ["Field Force GPS", "Instant Quotation Generator", "Daily Performance Scorecards"]
  },
  {
    id: "startups",
    name: "Startups & Enterprises",
    icon: "Rocket",
    description: "Accelerate MVP development, scale existing software architectures, and automate back-office operations.",
    solutions: ["Fullstack Web & Mobile MVPs", "Cloud Architecture", "Scalable REST APIs"]
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "sfa-pro",
    title: "FieldFlow - Sales Force Automation System",
    category: "Sales Force Automation",
    description: "Enterprise SFA platform supporting 150+ field executives with live GPS beat tracking, instant retailer order booking, and offline catalog sync.",
    techStack: ["Flutter", "Node.js", "PostgreSQL", "Google Maps API"],
    metrics: "42% faster daily order reporting",
    status: "Concept Demo",
    imagePlaceholderColor: "from-blue-600/30 to-indigo-900/40"
  },
  {
    id: "loyalty-engine",
    title: "RewardX - Retailer QR Loyalty Portal",
    category: "Loyalty Management",
    description: "End-to-end dealer incentive system featuring unique on-pack tamper-proof QR codes, tier milestone rewards, and direct UPI bank account credit.",
    techStack: ["React.js", "Express", "MongoDB", "UPI Payout API"],
    metrics: "250K+ scanned points simulated",
    status: "Concept Demo",
    imagePlaceholderColor: "from-cyan-600/30 to-blue-900/40"
  },
  {
    id: "distributor-hub",
    title: "SupplySphere - B2B Distributor Order Hub",
    category: "Distributor Management",
    description: "Centralized distributor order management portal providing live warehouse inventory visibility, trade scheme calculations, and invoice downloads.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    metrics: "Eliminated 90% manual phone orders",
    status: "Concept Demo",
    imagePlaceholderColor: "from-indigo-600/30 to-slate-900/40"
  },
  {
    id: "gps-fleet-pro",
    title: "TrackSync - Live GPS & Beat Verifier",
    category: "GPS Tracking",
    description: "Low-battery background tracking engine for Android & iOS field agents with geofenced arrival timestamps and route mileage auditing.",
    techStack: ["React Native", "WebSockets", "Redis", "Leaflet"],
    metrics: "99.8% accurate travel reimbursement",
    status: "Concept Demo",
    imagePlaceholderColor: "from-emerald-600/30 to-teal-900/40"
  },
  {
    id: "enterprise-crm",
    title: "NexusCRM - Omnichannel Sales Pipeline",
    category: "CRM & ERP",
    description: "Sales CRM with multi-channel lead ingestion from WhatsApp, Meta Ads, and web inquiries into an interactive drag-and-drop Kanban board.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metrics: "3x faster lead response times",
    status: "Concept Demo",
    imagePlaceholderColor: "from-sky-600/30 to-blue-900/40"
  },
  {
    id: "retail-commerce",
    title: "AuraRetail - Modern Omnichannel Web App",
    category: "Web Development",
    description: "High-performance headless corporate & commerce website built for blistering speed, 100% lighthouse score, and interactive product configurator.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    metrics: "0.8s initial page load time",
    status: "Concept Demo",
    imagePlaceholderColor: "from-violet-600/30 to-navy-900/40"
  }
];

export const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We listen to your business goals, target audience, existing bottlenecks, and technical requirements in detail."
  },
  {
    step: "02",
    title: "Requirement Analysis",
    description: "We translate business needs into comprehensive architecture specs, wireframes, and a milestone roadmap."
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "We craft intuitive, user-friendly, and modern prototypes in Figma, validating every flow with your team."
  },
  {
    step: "04",
    title: "Development",
    description: "Our engineers write clean, scalable, and modular code using modern frameworks and best security practices."
  },
  {
    step: "05",
    title: "Testing & QA",
    description: "Rigorous testing across multiple devices, simulated edge cases, stress loads, and security checks."
  },
  {
    step: "06",
    title: "Deployment",
    description: "Smooth go-live deployment to cloud servers (AWS/Azure) or app stores (Play Store / App Store) with zero downtime."
  },
  {
    step: "07",
    title: "Ongoing Support",
    description: "Proactive monitoring, bug fixes, software updates, and ongoing technology advisory for future scaling."
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Amit Sharma",
    role: "Managing Director, FMCG Distribution Network",
    company: "Consumer Goods Brand (Preview Sample)",
    quote: "Quick Technologies transformed how our field reps take orders. The SFA app eliminated paper-based manual entry, and orders now reach our warehouse instantly.",
    rating: 5,
    tag: "Concept Preview - Sample Client Feedback"
  },
  {
    id: "t2",
    name: "Rajesh Verma",
    role: "Operations Head",
    company: "National Retail & Supply Chain (Preview Sample)",
    quote: "The loyalty program software created by Quick Technologies helped us connect directly with thousands of independent retailers. The QR scan redemption is lightning fast.",
    rating: 5,
    tag: "Concept Preview - Sample Client Feedback"
  },
  {
    id: "t3",
    name: "Pooja Malhotra",
    role: "Co-founder & CEO",
    company: "Digital B2B Commerce Startup (Preview Sample)",
    quote: "Professional communication, sharp delivery, and clean code. They built our customer portal on React and Node.js exactly to our specifications.",
    rating: 5,
    tag: "Concept Preview - Sample Client Feedback"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What services does Quick Technologies provide?",
    answer: "Quick Technologies provides full-lifecycle digital and software solutions including Custom Software Development, Web Portals & Websites, Android & iOS Mobile Apps, Sales Force Automation (SFA), QR-Based Loyalty Program Software, Distributor & Retailer Order Management, CRM, ERP, GPS Field Tracking, and Performance Digital Marketing."
  },
  {
    question: "Can you build custom software for our business?",
    answer: "Yes, absolutely! We specialize in tailor-made software engineered around your specific operational workflows, team hierarchy, and existing tools. We don't force rigid templates; we build software that adapts directly to your business."
  },
  {
    question: "Do you develop Android and iOS applications?",
    answer: "Yes. We engineer both native (Kotlin, Swift) and cross-platform (Flutter, React Native) mobile applications that function smoothly across both Android and iOS devices, including offline caching and GPS integration."
  },
  {
    question: "What is Sales Force Automation (SFA) software?",
    answer: "Sales Force Automation (SFA) helps businesses manage their on-ground sales teams. It provides geo-verified attendance, automated store beat plans, live mobile order booking, daily target tracking, and expense claims, replacing manual spreadsheets."
  },
  {
    question: "Can you develop distributor and retailer order management systems?",
    answer: "Yes. We create B2B portals and mobile apps where distributors and dealers can browse product catalogs, check customized trade pricing and schemes, place orders 24/7, and track fulfillment status in real time."
  },
  {
    question: "Do you provide CRM and ERP solutions?",
    answer: "Yes. Our CRM platforms centralize leads, automated follow-up reminders, and sales pipelines. Our ERP solutions connect inventory, multi-warehouse stock, purchase orders, invoices, and accounting into one centralized dashboard."
  },
  {
    question: "Can your software integrate with existing systems?",
    answer: "Yes, our applications are built with modern RESTful APIs and webhook architectures, allowing seamless integration with ERPs (Tally, SAP), payment gateways (Razorpay, UPI), SMS providers, and logistics carriers."
  },
  {
    question: "How can I request a free demo?",
    answer: "You can book a free demo directly through our website demo form, reach out to us on WhatsApp at +91 9650652635, or email harshjaiswal183@gmail.com. Our team will schedule an interactive walkthrough tailored to your industry."
  },
  {
    question: "How long does software development take?",
    answer: "Development timelines depend strictly on the project scope, feature complexity, and integrations required. Typically, an MVP or standard business solution takes between 3 to 8 weeks, while comprehensive enterprise ERP/SFA systems may require additional phases. We provide an exact milestone roadmap after our discovery call."
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Yes, we provide ongoing maintenance, cloud server monitoring, bug fixes, security updates, and feature enhancements to ensure your software remains fast, secure, and compatible with new OS versions."
  }
];
