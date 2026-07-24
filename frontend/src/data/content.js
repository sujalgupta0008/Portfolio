export const SOCIALS = {
  github: "https://github.com/sujalgupta0008",
  linkedin: "https://linkedin.com/in/sujalgupta0008",
  email: "sujalgupta0008@gmail.com",
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

export const ROLES = ["Data Analyst", "BI Developer", "AI Enthusiast", "Insight Storyteller"];

export const HERO_STATS = [
  { value: 7, suffix: "+", label: "Projects Shipped" },
  { value: 6.36, suffix: "M+", label: "Records Analyzed", decimals: 2 },
  { value: 122, suffix: "K+", label: "Job Listings Mined" },
  { value: 7.7, suffix: "", label: "CGPA", decimals: 1 },
  { value: 3, suffix: "+", label: "Corporate Simulations" },
];

export const ABOUT = {
  kicker: "01 — About",
  quote: "Numbers only matter the moment they change a decision.",
  paragraphs: [
    "I'm Sujal Gupta — a data analyst who treats spreadsheets like stories waiting to be told. Somewhere between a SQL query and a Power BI canvas, I found the thing I actually enjoy: turning noisy, chaotic data into something a business can act on before lunch.",
    "My work spans fraud models trained on millions of transactions, dashboards built for real executives, and a scraped LinkedIn dataset of 122,000+ job listings that taught me more about the job market than any course could. Along the way, Deloitte, JPMorgan Chase and Tata GenAI trusted me with real-world simulations — and I trusted them to keep pushing my standards higher.",
    "I'm not chasing a title. I'm chasing the moment a chart makes someone say — 'okay, now I understand what to do.'",
  ],
};

export const EDUCATION = [
  {
    id: "iit-patna",
    institution: "Indian Institute of Technology, Patna",
    program: "Advanced Certification — Data Science & Artificial Intelligence",
    period: "Aug 2024 — Aug 2027",
    detail: "Applied coursework in statistical modeling, machine learning and AI systems, delivered by IIT Patna faculty.",
    highlight: "CGPA 8.8/10",
  },
  {
    id: "aktu",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    program: "Bachelor of Technology",
    period: "Aug 2024 — Aug 2027",
    detail: "Core engineering foundation with a focus on data structures, databases and statistics.",
    highlight: "CGPA 7.7/10",
  },
];

export const EXPERIENCE = [
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
    category: "Data Analysis & BI",
    items: ["Power BI", "Tableau", "Excel (Advanced)", "DAX", "Looker Studio"],
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "R", "Pandas", "NumPy"],
  },
  {
    category: "Machine Learning & AI",
    items: ["Scikit-learn", "XGBoost", "GenAI / LLMs", "Prompt Engineering", "NLP"],
  },
  {
    category: "Statistics",
    items: ["Hypothesis Testing", "Regression", "A/B Testing", "Forecasting"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git / GitHub", "Jupyter", "Azure", "AWS", "VS Code"],
  },
];

export const PROJECTS = [
  {
    id: "sales-analytics",
    index: "01",
    title: "Sales Analytics Dashboard",
    subtitle: "Power BI · Retail Performance Intelligence",
    business:
      "A retail business needed clear visibility into regional sales performance and product-level profitability to guide quarterly planning.",
    stack: ["Power BI", "DAX", "SQL", "Excel"],
    approach:
      "Modeled a star-schema data warehouse, authored 30+ DAX measures, and designed an executive dashboard with drill-through paths from region to SKU.",
    result: "Delivered an executive-ready dashboard surfacing regional revenue trends, product profitability and seasonal demand patterns.",
    github: "https://github.com/sujalgupta0008/sales-analytics-dashboard-power-bi",
    live: "https://github.com/sujalgupta0008/sales-analytics-dashboard-power-bi",
    image: "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    id: "linkalyze",
    index: "02",
    title: "LinkaLyze",
    subtitle: "LinkedIn Job Market Analytics",
    business:
      "Job seekers and career switchers lack real-time visibility into in-demand skills and market trends across the analytics job market.",
    stack: ["Python", "Web Scraping", "NLP", "Power BI"],
    approach:
      "Scraped and cleaned 122K+ LinkedIn job listings, extracted in-demand skills using NLP, and built an interactive dashboard to explore role clusters and skill frequency.",
    result: "Mapped the most in-demand skills and role clusters across 122,000+ live job listings.",
    github: "https://github.com/sujalgupta0008/linkalyze-linkedin-job-market-analytics",
    live: "https://github.com/sujalgupta0008/linkalyze-linkedin-job-market-analytics",
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650",
  },
  {
    id: "fraud-detection",
    index: "03",
    title: "Fraud Detection Engine",
    subtitle: "Machine Learning · Financial Risk",
    business:
      "Financial institutions need to flag fraudulent transactions in near real-time while keeping false positives low.",
    stack: ["Python", "Scikit-learn", "XGBoost", "SMOTE"],
    approach:
      "Processed 6.36M+ transaction records, handled severe class imbalance, engineered risk features and benchmarked multiple classifiers on ROC-AUC.",
    result: "Built a high-recall fraud classifier validated across 6.36M+ transaction records.",
    github: "https://github.com/sujalgupta0008/fraud-detection-using-machine-learning",
    live: "https://github.com/sujalgupta0008/fraud-detection-using-machine-learning",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    id: "insurance-claims",
    index: "04",
    title: "Insurance Claims Analytics",
    subtitle: "Power BI · Claims Intelligence",
    business:
      "An insurance provider needed to identify claim bottlenecks and high-risk segments to speed up settlements.",
    stack: ["Power BI", "SQL", "DAX"],
    approach:
      "Modeled a claims data warehouse and built a KPI dashboard tracking claim ratio, turnaround time and loss ratio by segment.",
    result: "Highlighted high-risk claim segments and turnaround-time bottlenecks for faster settlements.",
    github: "https://github.com/sujalgupta0008/insurance-claims-analytics-dashboard",
    live: "https://github.com/sujalgupta0008/insurance-claims-analytics-dashboard",
    image: "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    id: "smartlend",
    index: "05",
    title: "SmartLend",
    subtitle: "Loan Analytics Dashboard",
    business:
      "A lending team needed a risk-segmented view of loan applicants to reduce default exposure.",
    stack: ["SQL", "Power BI", "Python", "Logistic Regression"],
    approach:
      "Built a risk-scoring model and a portfolio dashboard segmenting borrowers by predicted default risk.",
    result: "Segmented the loan portfolio by default risk to support smarter lending decisions.",
    github: "https://github.com/sujalgupta0008/smartlend-loan-analytics-dashboard",
    live: "https://github.com/sujalgupta0008/smartlend-loan-analytics-dashboard",
    image: "https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg?auto=compress&cs=tinysrgb&h=650",
  },
  {
    id: "ai-career-navigator",
    index: "06",
    title: "AI Career Navigator",
    subtitle: "GenAI-Powered Career Guidance",
    business:
      "Students and early-career professionals need personalized, data-backed guidance on career paths in tech and analytics.",
    stack: ["Python", "GenAI / LLMs", "Prompt Engineering", "Streamlit"],
    approach:
      "Built an AI assistant that maps a user's skills and interests to career paths and a personalized learning roadmap.",
    result: "Delivers personalized, GenAI-reasoned career-path recommendations in seconds.",
    github: "https://github.com/sujalgupta0008/AI-Career-Navigator",
    live: "https://github.com/sujalgupta0008/AI-Career-Navigator",
    image: "https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
];

export const CERTIFICATIONS = [
  { title: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera", year: "2024" },
  { title: "Microsoft Power BI Data Analyst (PL-300)", issuer: "Microsoft", year: "2024" },
  { title: "SQL for Data Science", issuer: "UC Davis · Coursera", year: "2023" },
  { title: "Deloitte Data Analytics Job Simulation", issuer: "Forage", year: "2024" },
  { title: "JPMorgan Chase Data Analytics Simulation", issuer: "Forage", year: "2024" },
  { title: "Tata GenAI Powered Data Analytics", issuer: "Forage", year: "2025" },
];

export const ACHIEVEMENTS = [
  { value: "7.7", suffix: "/10", label: "CGPA at graduation", year: "2025" },
  { value: "7", suffix: "+", label: "End-to-end analytics projects shipped", year: "2023–25" },
  { value: "6.36", suffix: "M+", label: "Records processed across ML pipelines", year: "2024" },
  { value: "122", suffix: "K+", label: "Job listings mined for LinkaLyze", year: "2024" },
  { value: "3", suffix: "+", label: "Corporate simulations completed", year: "2024–25" },
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
