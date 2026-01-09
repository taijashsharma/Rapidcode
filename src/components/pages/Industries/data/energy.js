// ==============================
// ENERGY – CASE STUDIES
// ==============================

export const energyCaseStudies = [
  {
    id: 1,
    category: "Energy",
    title: "Accelerate modernization to power the energy transition",
    description:
      "When a leading energy enterprise adopted a cloud-first strategy, Rapidcode modernized core platforms to improve agility across generation, transmission, and trading operations.",
    link: "#",
  },
  {
    id: 2,
    category: "Energy",
    title: "Innovate to optimize production and market performance",
    description:
      "Rapidcode helped a global energy organization unlock data-driven intelligence to improve asset performance, optimize trading decisions, and enhance customer value.",
    link: "#",
  },
  {
    id: 3,
    category: "Energy",
    title: "Build a secure and resilient energy ecosystem",
    description:
      "Facing manual and time-intensive recovery processes, a major energy provider partnered with Rapidcode to automate disaster recovery and strengthen operational resilience.",
    link: "#",
  },
];

// ==============================
// HERO SECTION
// ==============================

import heroBg from "@/assets/hero-energy.jpg";

export const energyHeroData = {
  industryLabel: "Energy",

  title: {
    light: "Your energy",
    bold: "drives the world",
  },

  subtitle: {
    line1: "Power it with intelligent,",
    line2: "secure, and sustainable digital platforms",
  },

  backgroundImage: heroBg,

  defaultAccordionId: "overview",

  accordionItems: [
    {
      id: "overview",
      title: "Overview",
      content:
        "We help energy leaders modernize IT and digital platforms to improve efficiency, resilience, and market competitiveness.",
    },
    {
      id: "modernizing",
      title: "Modernizing energy IT for operational excellence",
      content:
        "Rapidcode is transforming end-to-end IT operations for energy enterprises to improve availability, performance, and scalability.",
      link: "#",
    },
    {
      id: "innovating",
      title:
        "Innovating digital operations across generation and trading",
      content:
        "Rapidcode built integrated teams to modernize legacy systems and enable real-time, data-driven decision-making across assets, grids, and markets.",
      link: "#",
    },
    {
      id: "securing",
      title:
        "Securing and strengthening energy digital infrastructure",
      content:
        "Rapidcode enhances core IT systems, enables advanced digital capabilities, and supports compliance across global energy regulations.",
      link: "#",
    },
  ],
};

// ==============================
// REGULATION SECTION
// ==============================

export const energyRegulationData = {
  heading:
    "Stay regulation-ready while accelerating the energy transition",

  subText:
    "You don’t need to double effort to meet evolving energy regulations.",

  highlightText: "Maximize impact with Rapidcode",

  links: [
    {
      title: "Modernize to support transition priorities",
      link: "#",
    },
    {
      title: "Innovate for operational and market performance",
      link: "#",
    },
    {
      title: "Build a secure energy ecosystem",
      link: "#",
    },
  ],
};

// ==============================
// MARQUEE SECTION
// ==============================

export const energyMarqueeData = {
  text:
    "Download now — Explore emerging energy trends and market strategies — ",
  repeatCount: 4,
  bgClass: "bg-primary",
  hoverBgClass: "hover:bg-primary/90",
};

// ==============================
// STATS SECTION
// ==============================

export const stats = [
  {
    number: "01",
    highlight: "90% of energy executives",
    description:
      "agree that digital transformation is critical to improving operational efficiency and profitability.",
    source: "IDC",
    sourceLink: "#",
  },
  {
    number: "02",
    highlight: "77% of leaders",
    description:
      "say that real-time data intelligence is essential for managing market volatility and asset performance.",
    source: "Frost & Sullivan",
    sourceLink: "#",
  },
  {
    number: "03",
    highlight: "By 2026",
    description:
      "74% of energy organizations will prioritize resilience to manage cyber threats and grid disruptions.",
    source: "Gartner",
    sourceLink: "#",
  },
];

// ==============================
// COMPLIANCE SECTION
// ==============================

export const complianceContent = {
  title: "Is your energy organization ready for compliance?",
  paragraphs: [
    "Regulatory compliance is a critical requirement for the energy sector as environmental, safety, and market regulations continue to intensify globally.",
    "Many energy enterprises are adopting shift-left compliance strategies to ensure operational integrity while supporting sustainability and energy transition goals.",
    "Rapidcode’s Regulatory Compliance Consulting Services leverage AI-driven capabilities to reduce risk through continuous monitoring, automated compliance reporting, and advanced risk detection.",
  ],
};

// ==============================
// EXPERT SECTION
// ==============================

import expertPortrait from "@/assets/expert-portrait.jpg";

export const expertSectionData = {
  tag: "industry experts",
  heading: "Our experts, your energy challenges",
  introText:
    "Read the Q&A with Rapidcode expert, Jayakrishnan Rajagopalan",

  qas: [
    {
      question:
        "What are the key digital challenges facing energy companies today?",
      answer:
        "Energy organizations must balance reliability, sustainability, and cost efficiency while modernizing complex, asset-intensive operations.",
    },
    {
      question:
        "How can legacy systems and market risks be effectively addressed?",
      answer:
        "A phased modernization approach reduces technical debt while ensuring continuity. AI-driven analytics, predictive maintenance, and real-time monitoring improve asset performance and risk management.",
    },
  ],

  expert: {
    name: "Jayakrishnan Rajagopalan",
    designation: "Chief Architect",
    domain: "Energy Enterprise Architecture",
    company: "Rapidcode India",
    image: expertPortrait,
  },
};

// ==============================
// INSIGHTS SECTION
// ==============================

import insightAi from "@/assets/insight-ai.jpg";
import insightFintech from "@/assets/insight-fintech.jpg";
import insightBusiness from "@/assets/insight-business.jpg";
import insightSecurity from "@/assets/insight-security.jpg";

export const insightsSectionData = {
  heading: "Latest insights from energy industry experts",

  insights: [
    {
      image: insightAi,
      category: "Rapidcode Institute",
      title: "AI-driven platforms shaping the future of energy",
      meta: "Article | Sep 30, 2025 | Read time: 14 min",
      link: "#",
    },
    {
      image: insightFintech,
      category: "Rapidcode Institute",
      title:
        "Digital technologies transforming energy operations and markets",
      meta: "Article | Sep 30, 2025 | Read time: 7 min",
      link: "#",
    },
    {
      image: insightBusiness,
      category: "Data and AI",
      title:
        "4 technology trends redefining the energy sector",
      meta: "Article | Sep 13, 2024 | Read time: 4 min",
      link: "#",
    },
    {
      image: insightSecurity,
      category: "Cyber resilience",
      title:
        "Why cybersecurity is now mission-critical for energy providers",
      meta: "Podcast | May 1, 2024",
      link: "#",
    },
  ],
};

// ==============================
// RESOURCES SECTION
// ==============================

import resourceTrends from "@/assets/resource-trends.jpg";
import resourceReadiness from "@/assets/resource-readiness.jpg";

export const resources = [
  {
    image: resourceTrends,
    title: "Explore emerging energy trends and proven strategies",
    meta: "Energy Industry Recommendation Paper | Sep 2025",
    link: "#",
  },
  {
    image: resourceReadiness,
    title: "Identify your energy readiness tipping point",
    meta: "The Rapidcode Energy Readiness Report 2025 | PDF",
    link: "#",
  },
];

// ==============================
// CTA SECTION
// ==============================

export const ctaData = {
  heading: "Take the next step",
  link: "#",
  marqueeText:
    "Connect — with an expert to discuss your Energy IT Transformation — ",
  repeatCount: 4,
};
