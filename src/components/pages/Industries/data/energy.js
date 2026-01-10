import { Database, Shield, Lightbulb } from "lucide-react";

/* ==============================
   ENERGY PAGE
================================ */

export const energyPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Energy",
    subtitle:
      "Powering the energy transition with intelligent, secure, and sustainable digital platforms",
    backgroundImage: "/assets/hero-energy.jpg",
    cards: [
      {
        title:
          "Accelerate modernization to power the energy transition",
        linkText: "Explore the case study",
        href: "#",
      },
      {
        title:
          "Is your energy IT ready for operational and market resilience?",
        linkText: "View industry insights",
        href: "#",
      },
    ],
  },

  /* ================= WHAT WE DO ================= */
  whatWeDo: {
    sectionMeta: {
      id: "what-we-do",
      eyebrow: "What we do",
    },
    heading:
      "Modernizing energy platforms for efficiency, resilience, and sustainability",
    description:
      "We help energy organizations modernize IT and digital platforms to improve asset performance, strengthen resilience, and support the global energy transition.",
    video: {
      enabled: false,
      label: "",
    },
  },

  /* ================= HOW WE HELP ================= */
  howWeHelp: {
    sectionMeta: {
      id: "how-we-help",
      eyebrow: "How Rapidcode helps",
      heading:
        "Building resilient, data-driven, and future-ready energy ecosystems",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "IT modernization and cloud transformation",
        description:
          "Modernize legacy energy platforms using cloud-first architectures to improve scalability, performance, and reliability across operations.",
        href: "#",
      },
      {
        icon: Lightbulb,
        title: "Data, AI, and digital energy intelligence",
        description:
          "Enable real-time, data-driven decisions across assets, grids, and markets using advanced analytics and AI.",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cybersecurity, compliance, and operational resilience",
        description:
          "Protect critical energy infrastructure with secure architectures, automated recovery, and regulatory compliance.",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep energy industry expertise",
        description:
          "Experience across generation, transmission, trading, and asset-intensive energy environments.",
      },
      {
        icon: Shield,
        title: "Security- and compliance-first foundations",
        description:
          "Digital platforms designed to meet environmental, safety, and global energy regulations.",
      },
    ],
  },

  /* ================= CASE STUDIES ================= */
  caseStudies: {
    heading: "Energy transformation success stories",
    items: [
      {
        category: "Energy",
        title:
          "Accelerate modernization to power the energy transition",
        description:
          "Modernized core platforms for a leading energy enterprise to improve agility across generation, transmission, and trading operations.",
        link: "#",
      },
      {
        category: "Energy",
        title:
          "Innovate to optimize production and market performance",
        description:
          "Enabled data-driven intelligence to improve asset performance, trading decisions, and customer value.",
        link: "#",
      },
      {
        category: "Energy",
        title:
          "Build a secure and resilient energy ecosystem",
        description:
          "Automated disaster recovery to strengthen resilience for a major energy provider.",
        link: "#",
      },
    ],
  },

  /* ================= REGULATION ================= */
  regulation: {
    heading:
      "Stay regulation-ready while accelerating the energy transition",
    subText:
      "Meet evolving energy regulations without slowing operational or sustainability goals.",
    highlightText: "Maximize impact with Rapidcode",
    links: [
      {
        title: "Modernize to support transition priorities",
        href: "#",
      },
      {
        title:
          "Innovate for operational and market performance",
        href: "#",
      },
      {
        title: "Build a secure energy ecosystem",
        href: "#",
      },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      highlight: "90% of energy executives",
      description:
        "agree that digital transformation is critical to improving operational efficiency and profitability.",
      source: "IDC",
    },
    {
      highlight: "77% of leaders",
      description:
        "say real-time data intelligence is essential for managing market volatility and asset performance.",
      source: "Frost & Sullivan",
    },
    {
      highlight: "By 2026",
      description:
        "74% of energy organizations will prioritize resilience to manage cyber threats and grid disruptions.",
      source: "Gartner",
    },
  ],

  /* ================= FAQ ================= */
  faqs: {
    sectionMeta: {
      heading: "You have questions. We have answers.",
    },
    items: [
      {
        question:
          "What are the key digital challenges facing energy companies today?",
        answer:
          "Energy organizations must balance reliability, sustainability, and cost efficiency while modernizing complex, asset-intensive operations.",
      },
      {
        question:
          "How can legacy systems and market risks be addressed effectively?",
        answer:
          "A phased modernization approach combined with AI-driven analytics, predictive maintenance, and real-time monitoring improves asset performance and risk management.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    link: "#",
    marqueeText:
      "Connect — with an expert to discuss your Energy IT Transformation — ",
    repeatCount: 4,
  },
};
