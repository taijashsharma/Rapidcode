// ==============================
// LIFE SCIENCES – CASE STUDIES
// ==============================

export const lifeSciencesCaseStudies = [
  {
    id: 1,
    category: "Life Sciences",
    title: "Accelerate innovation from lab to market",
    description:
      "When a global life sciences organization adopted a digital-first strategy, Rapidcode modernized its core platforms to speed up research, development, and commercialization.",
    link: "#",
  },
  {
    id: 2,
    category: "Life Sciences",
    title: "Transform data into actionable scientific insight",
    description:
      "Rapidcode enabled a pharmaceutical leader to unlock the power of its data, improving clinical outcomes and driving smarter, faster decision-making.",
    link: "#",
  },
  {
    id: 3,
    category: "Life Sciences",
    title: "Build resilient and compliant operations",
    description:
      "Facing complex regulatory and operational challenges, a life sciences enterprise partnered with Rapidcode to automate recovery and ensure uninterrupted operations.",
    link: "#",
  },
];

// ==============================
// HERO SECTION
// ==============================

import heroBg from "@/assets/hero-lifesciences.jpg";

export const lifeSciencesHeroData = {
  industryLabel: "Life Sciences",

  title: {
    light: "Your science",
    bold: "shapes lives",
  },

  subtitle: {
    line1: "Advance discovery with secure,",
    line2: "scalable, and data-driven platforms",
  },

  backgroundImage: heroBg,

  defaultAccordionId: "overview",

  accordionItems: [
    {
      id: "overview",
      title: "Overview",
      content:
        "We help life sciences organizations modernize IT, accelerate innovation, and deliver better patient and healthcare outcomes.",
    },
    {
      id: "modernizing",
      title: "Modernizing life sciences IT ecosystems",
      content:
        "Rapidcode upgrades end-to-end digital platforms to improve agility, availability, and collaboration across research and operations.",
      link: "#",
    },
    {
      id: "innovating",
      title: "Innovating research and clinical processes",
      content:
        "Rapidcode builds integrated teams to modernize legacy systems and enable faster, more data-driven clinical and research workflows.",
      link: "#",
    },
    {
      id: "securing",
      title: "Securing regulated life sciences environments",
      content:
        "Rapidcode strengthens core infrastructure, enhances cybersecurity, and supports compliance across highly regulated life sciences operations.",
      link: "#",
    },
  ],
};

// ==============================
// REGULATION SECTION
// ==============================

export const lifeSciencesRegulationData = {
  heading:
    "Stay compliant while accelerating life sciences innovation",

  subText:
    "You don’t need to slow progress to meet evolving regulations.",

  highlightText: "Advance with confidence using Rapidcode",

  links: [
    {
      title: "Modernize life sciences platforms",
      link: "#",
    },
    {
      title: "Innovate research and development",
      link: "#",
    },
    {
      title: "Build compliant digital ecosystems",
      link: "#",
    },
  ],
};

// ==============================
// MARQUEE SECTION
// ==============================

export const lifeSciencesMarqueeData = {
  text:
    "Download now — Explore life sciences innovation strategies — ",
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
    highlight: "87% of life sciences leaders",
    description:
      "believe digital transformation is critical to accelerating research and improving patient outcomes.",
    source: "IDC",
    sourceLink: "#",
  },
  {
    number: "02",
    highlight: "75% of executives",
    description:
      "say advanced data analytics is essential for faster clinical and regulatory decisions.",
    source: "McKinsey",
    sourceLink: "#",
  },
  {
    number: "03",
    highlight: "By 2026",
    description:
      "68% of life sciences organizations will prioritize cyber resilience to protect sensitive data and IP.",
    source: "Gartner",
    sourceLink: "#",
  },
];

// ==============================
// COMPLIANCE SECTION
// ==============================

export const complianceContent = {
  title: "Is your life sciences organization compliance-ready?",
  paragraphs: [
    "Regulatory compliance is a critical foundation for life sciences organizations operating in a highly regulated global environment.",
    "Leading enterprises are adopting shift-left compliance strategies to embed regulatory controls early across research, development, and manufacturing.",
    "Rapidcode’s Regulatory Compliance Consulting Services use AI-driven capabilities to enable real-time monitoring, automated reporting, and proactive risk management.",
  ],
};

// ==============================
// EXPERT SECTION
// ==============================

import expertPortrait from "@/assets/expert-portrait.jpg";

export const expertSectionData = {
  tag: "industry experts",
  heading: "Our experts, your life sciences challenges",
  introText:
    "Read the Q&A with Rapidcode expert, Jayakrishnan Rajagopalan",

  qas: [
    {
      question:
        "What are the biggest digital challenges facing life sciences organizations today?",
      answer:
        "Life sciences organizations must balance rapid innovation with strict regulatory compliance, data security, and complex global operations.",
    },
    {
      question:
        "How can legacy systems and compliance risks be addressed?",
      answer:
        "A structured modernization approach reduces technical debt while enabling agility. Cloud platforms, AI-driven analytics, and automation improve compliance and operational resilience.",
    },
  ],

  expert: {
    name: "Jayakrishnan Rajagopalan",
    designation: "Chief Architect",
    domain: "Life Sciences Enterprise Architecture",
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
  heading: "Latest insights from life sciences experts",

  insights: [
    {
      image: insightAi,
      category: "Rapidcode Institute",
      title: "AI-driven innovation in life sciences",
      meta: "Article | Sep 30, 2025 | Read time: 14 min",
      link: "#",
    },
    {
      image: insightFintech,
      category: "Rapidcode Institute",
      title:
        "How digital platforms are transforming life sciences",
      meta: "Article | Sep 30, 2025 | Read time: 7 min",
      link: "#",
    },
    {
      image: insightBusiness,
      category: "Data and AI",
      title:
        "Four technology trends redefining life sciences enterprises",
      meta: "Article | Sep 13, 2024 | Read time: 4 min",
      link: "#",
    },
    {
      image: insightSecurity,
      category: "Cyber resilience",
      title:
        "Protecting data, IP, and patient trust in life sciences",
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
    title: "Explore life sciences trends and growth strategies",
    meta: "Life Sciences Industry Recommendation Paper | Sep 2025",
    link: "#",
  },
  {
    image: resourceReadiness,
    title: "Assess your life sciences readiness tipping point",
    meta: "The Rapidcode Life Sciences Readiness Report 2025 | PDF",
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
    "Connect — with an expert to discuss your Life Sciences Transformation — ",
  repeatCount: 4,
};
