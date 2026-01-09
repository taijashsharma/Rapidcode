// ==============================
// HEALTHCARE – CASE STUDIES
// ==============================

export const healthcareCaseStudies = [
  {
    id: 1,
    category: "Healthcare",
    title: "Accelerate modernization to improve patient outcomes",
    description:
      "When a leading healthcare organization adopted a cloud-first strategy, Rapidcode modernized core platforms to enhance care delivery, operational efficiency, and clinical collaboration.",
    link: "#",
  },
  {
    id: 2,
    category: "Healthcare",
    title: "Innovate to deliver connected patient experiences",
    description:
      "Rapidcode helped a global healthcare provider harness data-driven intelligence to enable personalized care, improve engagement, and optimize clinical workflows.",
    link: "#",
  },
  {
    id: 3,
    category: "Healthcare",
    title: "Build a secure and resilient healthcare ecosystem",
    description:
      "Facing manual and fragmented recovery processes, a large healthcare network partnered with Rapidcode to automate disaster recovery and strengthen system resilience.",
    link: "#",
  },
];

// ==============================
// HERO SECTION
// ==============================

import heroBg from "@/assets/hero-healthcare.jpg";

export const healthcareHeroData = {
  industryLabel: "Healthcare",

  title: {
    light: "Your care",
    bold: "shapes lives",
  },

  subtitle: {
    line1: "Deliver it through intelligent,",
    line2: "secure, and connected digital platforms",
  },

  backgroundImage: heroBg,

  defaultAccordionId: "overview",

  accordionItems: [
    {
      id: "overview",
      title: "Overview",
      content:
        "We help healthcare leaders modernize IT and digital platforms to improve patient outcomes, operational efficiency, and care continuity.",
    },
    {
      id: "modernizing",
      title: "Modernizing healthcare IT for clinical excellence",
      content:
        "Rapidcode is transforming end-to-end IT operations for healthcare organizations to improve availability, performance, and care delivery.",
      link: "#",
    },
    {
      id: "innovating",
      title:
        "Innovating digital care delivery and patient engagement",
      content:
        "Rapidcode built integrated teams to modernize legacy systems and enable real-time, data-driven decision-making across clinical and administrative workflows.",
      link: "#",
    },
    {
      id: "securing",
      title:
        "Securing and strengthening healthcare digital platforms",
      content:
        "Rapidcode enhances core healthcare IT systems, enables advanced digital capabilities, and supports compliance across global healthcare regulations.",
      link: "#",
    },
  ],
};

// ==============================
// REGULATION SECTION
// ==============================

export const healthcareRegulationData = {
  heading:
    "Stay regulation-ready while advancing healthcare innovation",

  subText:
    "You don’t need to double effort to meet evolving healthcare regulations.",

  highlightText: "Expand impact with Rapidcode",

  links: [
    {
      title: "Modernize to support care priorities",
      link: "#",
    },
    {
      title: "Innovate for connected patient experiences",
      link: "#",
    },
    {
      title: "Build a secure healthcare ecosystem",
      link: "#",
    },
  ],
};

// ==============================
// MARQUEE SECTION
// ==============================

export const healthcareMarqueeData = {
  text:
    "Download now — Explore emerging healthcare trends and strategies — ",
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
    highlight: "91% of healthcare leaders",
    description:
      "agree that digital transformation directly improves patient experience and quality of care.",
    source: "IDC",
    sourceLink: "#",
  },
  {
    number: "02",
    highlight: "79% of executives",
    description:
      "say that data-driven insights are critical to improving clinical and operational outcomes.",
    source: "Frost & Sullivan",
    sourceLink: "#",
  },
  {
    number: "03",
    highlight: "By 2026",
    description:
      "75% of healthcare organizations will prioritize resilience to address cyber risks and system disruptions.",
    source: "Gartner",
    sourceLink: "#",
  },
];

// ==============================
// COMPLIANCE SECTION
// ==============================

export const complianceContent = {
  title: "Is your healthcare organization compliance-ready?",
  paragraphs: [
    "Regulatory compliance is a fundamental requirement in healthcare as data privacy, patient safety, and clinical regulations continue to intensify worldwide.",
    "Many healthcare organizations are adopting shift-left compliance strategies to ensure care continuity while protecting patient trust and sensitive data.",
    "Rapidcode’s Regulatory Compliance Consulting Services leverage AI-driven capabilities to reduce risk through continuous monitoring, automated compliance reporting, and advanced threat detection.",
  ],
};

// ==============================
// EXPERT SECTION
// ==============================

import expertPortrait from "@/assets/expert-portrait.jpg";

export const expertSectionData = {
  tag: "industry experts",
  heading: "Our experts, your healthcare challenges",
  introText:
    "Read the Q&A with Rapidcode expert, Jayakrishnan Rajagopalan",

  qas: [
    {
      question:
        "What are the key digital challenges facing healthcare organizations today?",
      answer:
        "Healthcare organizations must balance patient outcomes, data security, and operational efficiency while modernizing complex clinical and administrative systems.",
    },
    {
      question:
        "How can legacy platforms and compliance risks be effectively addressed?",
      answer:
        "A phased modernization approach reduces technical debt while ensuring continuity. AI-driven analytics, interoperability platforms, and real-time monitoring strengthen care delivery and compliance.",
    },
  ],

  expert: {
    name: "Jayakrishnan Rajagopalan",
    designation: "Chief Architect",
    domain: "Healthcare Enterprise Architecture",
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
  heading: "Latest insights from healthcare industry experts",

  insights: [
    {
      image: insightAi,
      category: "Rapidcode Institute",
      title: "AI-driven platforms shaping the future of healthcare",
      meta: "Article | Sep 30, 2025 | Read time: 14 min",
      link: "#",
    },
    {
      image: insightFintech,
      category: "Rapidcode Institute",
      title:
        "Digital technologies transforming healthcare delivery models",
      meta: "Article | Sep 30, 2025 | Read time: 7 min",
      link: "#",
    },
    {
      image: insightBusiness,
      category: "Data and AI",
      title:
        "4 technology trends redefining modern healthcare",
      meta: "Article | Sep 13, 2024 | Read time: 4 min",
      link: "#",
    },
    {
      image: insightSecurity,
      category: "Cyber resilience",
      title:
        "Why cybersecurity is now critical for healthcare providers",
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
    title: "Explore emerging healthcare trends and proven strategies",
    meta: "Healthcare Industry Recommendation Paper | Sep 2025",
    link: "#",
  },
  {
    image: resourceReadiness,
    title: "Identify your healthcare readiness tipping point",
    meta: "The Rapidcode Healthcare Readiness Report 2025 | PDF",
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
    "Connect — with an expert to discuss your Healthcare IT Transformation — ",
  repeatCount: 4,
};
