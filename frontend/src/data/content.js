export const SOCIALS = {
  github: "https://github.com/sujalgupta0008",
  linkedin: "https://www.linkedin.com/in/sujalgupta008",
  email: "mailto:sujalgupta0008@gmail.com",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "workflow", label: "Process" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "Data Analyst",
  "Power BI Developer",
  "Machine Learning Enthusiast",
  "GenAI Explorer"
];

export const HERO_STATS =[
  { value: 8, suffix: "+", label: "Analytics & Data Projects" },
  { value: 1, suffix: "", label: "Open Data Copilot (AI Workspace)" },
  { value: 6.36, suffix: "M+", label: "Transactions Analyzed", decimals: 2 },
  { value: 124, suffix: "K+", label: "Jobs Analyzed" },
  { value: 8213, suffix: "+", label: "Fraud Cases Detected" },
  { value: 1.14, suffix: "T+", label: "₹ Value Analyzed", decimals: 2 },
  { value: 0.9988, suffix: "", label: "Best ROC-AUC", decimals: 4 },
  { value: 0.8284, suffix: "", label: "Flight Model R²", decimals: 4 },
  { value: 3, suffix: "", label: "Industry Simulations" },
  { value: 22, suffix: "/100+", label: "HackDays Patna Hackathon Rank" },
];


export const ABOUT = {
  kicker: "01 — About",
  quote: "Data is valuable only when it drives better decisions.",
  paragraphs: [
    [
  "I'm Sujal Gupta, a Data Analytics student at IIT Patna who enjoys finding patterns hidden inside data. Whether it's writing SQL queries, building Power BI dashboards, or developing machine learning models, I love turning complex datasets into clear, actionable insights.",
  "From analyzing over 6 million financial transactions for fraud detection to exploring 122,000+ LinkedIn job postings through LinkaLyze, every project has helped me strengthen my analytical thinking and business problem-solving skills.",
  "I'm building my career one project at a time—continuously learning, experimenting with AI and analytics, and creating solutions that help businesses make smarter, data-driven decisions.",
]
  ],
};

export const EDUCATION = [
 {
  id: "iit-patna",
  institution: "Indian Institute of Technology Patna",
  program: "B.Sc. (Hons.) in Computer Science and Data Analytics",
  period: "Aug 2024 – Aug 2027",
  detail:
    "Pursuing an interdisciplinary curriculum covering Data Analytics, Machine Learning, Artificial Intelligence, Statistics, Database Systems, and Data Visualization with hands-on analytical projects.",
  highlight: "CGPA: 8.8/10",
},
  {
  id: "aktu",
  institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  program: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  period: "July 2024 – July 2028",
  detail:
    "Studying core Computer Science subjects including Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering.",
  highlight: "CGPA: 7.7/10",
},
];

export const VIRTUAL EXPERIENCE = [
  {
    id: "tata-genai",
    company: "Tata GenAI",
    role: "GenAI Powered Data Analytics — Job Simulation",
    period: "Jul 2026",
    featured: true,
    points: [
      "Simulated a real Tata GenAI analytics workflow — from business brief to a GenAI-assisted insight deliverable.",
      "Applied prompt engineering and LLM-driven analysis to accelerate exploratory data work.",
      "Practiced translating ambiguous business asks into structured analytical questions.",
    ],
  },
  {
    id: "jpmorgan",
    company: "JPMorgan Chase & Co.",
    role: "Data Analytics — Virtual Job Simulation",
    period: "Feb 2026",
    featured: true,
    points: [
      "Worked through a simulated investment-banking analytics case, cleaning and modeling structured financial data.",
      "Built summary visualizations to support a hypothetical client-facing recommendation.",
      "Learned the rigor and documentation standards expected in financial analytics.",
    ],
  },
  {
    id: "deloitte",
    company: "Deloitte",
    role: "Data Analytics — Job Simulation",
    period: "Jan 2026",
    featured: true,
    points: [
      "Completed a consulting-style analytics simulation — from data cleaning to an executive-ready insight deck.",
      "Practiced structuring findings around business impact rather than just statistical output.",
      "Sharpened stakeholder-communication and dashboard-storytelling skills.",
    ],
  },
];

export const SKILLS = [
  {
    category: "📊 Data Analysis & BI",
    items: [
      "📈 Power BI",
      "📗 Microsoft Excel (Advanced)",
      "⚡ DAX",
      "🔄 Power Query",
      "🎨 Data Visualization",
      "📊 Dashboard Development",
    ],
  },
  {
    category: "💻 Programming & Databases",
    items: [
      "🐍 Python",
      "🗄️ SQL (MySQL)",
      "🐼 Pandas",
      "🔢 NumPy",
      "📉 Matplotlib",
      "📊 Seaborn",
    ],
  },
  {
    category: "🤖 Machine Learning & AI",
    items: [
      "🧠 Scikit-learn",
      "🤖 Machine Learning",
      "🏷️ Classification",
      "📈 Regression",
      "✨ GenAI",
      "✍️ Prompt Engineering",
    ],
  },
  {
    category: "📐 Analytics & Statistics",
    items: [
      "🔍 Exploratory Data Analysis (EDA)",
      "🧹 Data Cleaning",
      "⚙️ Feature Engineering",
      "🧪 Hypothesis Testing",
      "📊 Statistical Analysis",
      "💡 Business Insights",
    ],
  },
  {
    category: "🛠️ Tools & Platforms",
    items: [
      "🔧 Git",
      "🐙 GitHub",
      "📓 Jupyter Notebook",
      "💻 VS Code",
      "☁️ Google Colab",
      "🗃️ Azure SQL Database",
    ],
  },
];

export const PROJECTS = [
  {
  id: "open-data-copilot",
  index: "01",
  title: "Open Data Copilot",
  subtitle: "Full-Stack AI · Data Intelligence Workspace",
  business:
    "Data analysts and teams waste significant time on repetitive data cleaning, preparation, and complex integration setups, creating bottlenecks in turning raw datasets into actionable business intelligence.",

  stack: [
    "🐍 Python",
    "⚡ FastAPI",
    "⚛️ React",
    "📘 TypeScript",
    "🐘 PostgreSQL",
    "🔑 Google OAuth 2.0",
    "☁️ Render",
    "▲ Vercel",
  ],

  approach:
    "Engineered a production-grade data intelligence workspace featuring an asynchronous FastAPI backend deployed on Render and a responsive React (TypeScript) SPA frontend hosted on Vercel. Integrated PostgreSQL (Neon DB) for dynamic cloud storage alongside custom Google Drive (BYOS) integration via OAuth 2.0. Implemented secure JWT session management and SPA rewrite handlers to ensure zero-downtime client-side routing and automated data prep workflows.",

  result:
    "Delivered an automated, human-in-the-loop AI workspace that streamlines data preparation while retaining full analytical control. Successfully published with 100% compliant OAuth authentication, resilient 24/7 server keep-alive automation, and seamless workspace session management.",

  github: "https://github.com/sujalgupta0008/Open-Data-Copilot",

  live: "https://open-data-copilot.vercel.app/",

  image: "/homepage.png",
},
  {
  id: "flight-price-prediction",
  index: "02",
  title: "Flight Price Prediction System",
  subtitle: "Machine Learning · Travel Price Intelligence",
  business:
    "Airfare prices fluctuate significantly based on airline, route, duration, and booking timing, making it difficult for travelers to estimate fair ticket prices and plan cost-effective trips.",

  stack: [
  "🐍 Python",
  "🧠 Scikit-Learn",
  "📈 Pandas",
  "🗃️ SQL",
  "📊 Power BI",
  "⚡ Flask",
  "🚀 Streamlit",
],

  approach:
    "Built an end-to-end machine learning pipeline by performing data cleaning, feature engineering, and exploratory data analysis on flight booking data. Trained and evaluated multiple regression models, selecting Random Forest as the best-performing model (R² = 0.8284). Developed an interactive Power BI dashboard for price trend analysis and deployed the prediction system as a web application using Flask/Streamlit.",

  result:
    "Delivered a production-ready flight fare prediction platform capable of generating accurate ticket price estimates while providing interactive analytics on airline performance, route demand, pricing trends, and booking insights for informed travel decisions.",

  github: "https://github.com/sujalgupta0008/Flight-Price-Prediction-System.git",

  live: "https://flight-price-prediction-system-4gyfm4yrt-sujal0008.vercel.app/",

  image: "/Flight_website_overview.png",
},
  {
    id: "sales-analytics",
    index: "03",
    title: "Sales Analytics Dashboard",
    subtitle: "Power BI · Retail Performance Intelligence",
    business:
      "A retail business needed clear visibility into regional sales performance and product-level profitability to guide quarterly planning.",
    stack: [
  "📈 Power BI",
  "⚡ DAX",
  "🔍 SQL",
  "📊 Excel",
],
    approach:
      "Modeled a star-schema data warehouse, authored 30+ DAX measures, and designed an executive dashboard with drill-through paths from region to SKU.",
    result: "Delivered an executive-ready dashboard surfacing regional revenue trends, product profitability and seasonal demand patterns.",
    github: "https://github.com/sujalgupta0008/sales-analytics-dashboard-power-bi",
    live: "https://github.com/sujalgupta0008/sales-analytics-dashboard-power-bi",
    image: "https://customer-assets-jt897jd0.emergentagent.net/job_sujal-minimal/artifacts/z4x4ocnq_executive-dashboard.png",
  },
  {
    id: "linkalyze",
    index: "04",
    title: "LinkaLyze",
    subtitle: "LinkedIn Job Market Analytics",
    business:
      "Job seekers and career switchers lack real-time visibility into in-demand skills and market trends across the analytics job market.",
    stack: [
  "🐍 Python",
  "🔎 Web Scraping",
  "🤖 NLP",
  "📈 Power BI",
],
    approach:
      "Scraped and cleaned 122K+ LinkedIn job listings, extracted in-demand skills using NLP, and built an interactive dashboard to explore role clusters and skill frequency.",
    result: "Mapped the most in-demand skills and role clusters across 122,000+ live job listings.",
    github: "https://github.com/sujalgupta0008/linkalyze-linkedin-job-market-analytics",
    live: "https://github.com/sujalgupta0008/linkalyze-linkedin-job-market-analytics",
    image: "https://customer-assets-jt897jd0.emergentagent.net/job_sujal-minimal/artifacts/fzhaqhof_LINKALYZE_dashboard.png",
  },
  {
    id: "fraud-detection",
    index: "05",
    title: "Fraud Detection Engine",
    subtitle: "Machine Learning · Financial Risk",
    business:
      "Financial institutions need to flag fraudulent transactions in near real-time while keeping false positives low.",
    stack: [
  "🐍 Python",
  "🧠 Scikit-learn",
  "🌲 XGBoost",
  "📊 SMOTE",
],
    approach:
      "Processed 6.36M+ transaction records, handled severe class imbalance, engineered risk features and benchmarked multiple classifiers on ROC-AUC.",
    result: "Built a high-recall fraud classifier validated across 6.36M+ transaction records.",
    github: "https://github.com/sujalgupta0008/fraud-detection-using-machine-learning",
    live: "https://github.com/sujalgupta0008/fraud-detection-using-machine-learning",
    image: "https://customer-assets-jt897jd0.emergentagent.net/job_sujal-minimal/artifacts/cyfswvb4_fraud_detection_dashboard.png",
  },
  {
    id: "insurance-claims",
    index: "06",
    title: "Insurance Claims Analytics",
    subtitle: "Power BI · Claims Intelligence",
    business:
      "An insurance provider needed to identify claim bottlenecks and high-risk segments to speed up settlements.",
    stack: [
  "📈 Power BI",
  "🔍 SQL",
  "🧮 DAX",
],
    approach:
      "Modeled a claims data warehouse and built a KPI dashboard tracking claim ratio, turnaround time and loss ratio by segment.",
    result: "Highlighted high-risk claim segments and turnaround-time bottlenecks for faster settlements.",
    github: "https://github.com/sujalgupta0008/insurance-claims-analytics-dashboard",
    live: "https://github.com/sujalgupta0008/insurance-claims-analytics-dashboard",
    image: "https://customer-assets-jt897jd0.emergentagent.net/job_sujal-minimal/artifacts/k1xne5we_dashboard_overview.png",
  },
  {
    id: "smartlend",
    index: "07",
    title: "SmartLend",
    subtitle: "Loan Analytics Dashboard",
    business:
      "A lending team needed a risk-segmented view of loan applicants to reduce default exposure.",
    stack: [
  "🔍 SQL",
  "📈 Power BI",
  "🐍 Python",
  "🤖 Logistic Regression",
],
    approach:
      "Built a risk-scoring model and a portfolio dashboard segmenting borrowers by predicted default risk.",
    result: "Segmented the loan portfolio by default risk to support smarter lending decisions.",
    github: "https://github.com/sujalgupta0008/smartlend-loan-analytics-dashboard",
    live: "https://github.com/sujalgupta0008/smartlend-loan-analytics-dashboard",
    image: "https://customer-assets-jt897jd0.emergentagent.net/job_sujal-minimal/artifacts/b1aiexh3_SMARTLEND_Dashboard.png",
  },
  {
    id: "ai-career-navigator",
    index: "08",
    title: "AI Career Navigator",
    subtitle: "GenAI-Powered Career Guidance",
    business:
      "Students and early-career professionals need personalized, data-backed guidance on career paths in tech and analytics.",
    stack: [
  "🐍 Python",
  "🤖 GenAI / LLMs",
  "✍️ Prompt Engineering",
  "🚀 Streamlit",
],
    approach:
      "Built an AI assistant that maps a user's skills and interests to career paths and a personalized learning roadmap.",
    result: "Delivers personalized, GenAI-reasoned career-path recommendations in seconds.",
    github: "https://github.com/sujalgupta0008/AI-Career-Navigator",
    live: "https://ai-career-navigator-by-sujal.streamlit.app/",
    image: "https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
];

export const CERTIFICATIONS = [
  { title: "Tata GenAI Powered Data Analytics", issuer: "Forage", year: "July 2026" },
  { title: "JPMorgan Chase Data Analytics Simulation", issuer: "Forage", year: "Feb 2026" },
  { title: "Deloitte Data Analytics Job Simulation", issuer: "Forage", year: "Jan 2026" },
  { title: "Data Analyst Bootcamp", issuer: "Udemy", year: "Sep 2025" },
  { title: "Python Programming", issuer: "Udemy", year: "April 2025" }
];

export const ACHIEVEMENTS = [
  {
    value: "8.8",
    suffix: "/10",
    label: "🎓 CGPA at IIT Patna",
    year: "Current",
  },
  {
    value: "4",
    suffix: "★",
    label: "🐍 HackerRank Python",
    year: "2026",
  },
  {
    value: "22",
    suffix: "/100+",
    label: "🏆 HackDays Patna Rank",
    year: "2026",
  },
  {
    value: "122",
    suffix: "K+",
    label: "📊 LinkedIn Jobs Analyzed",
    year: "2026",
  },
  {
    value: "6.36",
    suffix: "M+",
    label: "⚡ Rows Processed",
    year: "2026",
  },
  {
    value: "4",
    suffix: "+",
    label: "💼 Industry Simulations",
    year: "2026",
  },
];

export const WORKFLOW_STEPS = [
  { title: "Business Understanding", detail: "Translate a vague ask into a sharp analytical question." },
  { title: "Data Collection", detail: "Source, scrape or query the data that actually answers it." },
  { title: "Data Cleaning", detail: "Handle nulls, duplicates and outliers before trusting anything." },
  { title: "Exploratory Analysis", detail: "Look for patterns before jumping to conclusions." },
  { title: "Feature Engineering", detail: "Shape raw fields into signals models can use." },
  { title: "Statistical Modeling", detail: "Test hypotheses with the right statistical lens." },
  { title: "Machine Learning", detail: "Train, tune and validate predictive models." },
  { title: "Validation & Testing", detail: "Stress-test results against unseen data." },
  { title: "Visualization & Storytelling", detail: "Turn output into a dashboard a human can act on." },
  { title: "Decision Making", detail: "Hand off an insight that changes what happens next." },
];

export const WHY_HIRE_ME = [
  {
    title: "End-to-End Ownership",
    detail: "From raw, messy data to a boardroom-ready insight — I own the full pipeline, not just one slice of it.",
  },
  {
    title: "Business-First Thinking",
    detail: "Every chart I ship answers a real business question. Analysis for its own sake doesn't interest me.",
  },
  {
    title: "Fast, Adaptable Learner",
    detail: "Proven across Deloitte, JPMorgan Chase and Tata GenAI simulations — different domains, same rigor.",
  },
  {
    title: "GenAI-Native Analyst",
    detail: "I build with modern AI tooling by default — prompting, automating and augmenting, not just legacy BI.",
  },
];

export const GITHUB_USERNAME = "sujalgupta0008";
