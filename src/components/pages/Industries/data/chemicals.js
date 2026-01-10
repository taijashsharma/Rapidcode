import { Database, Shield, Lightbulb } from "lucide-react";

/* ==============================
   CHEMICALS PAGE DATA
================================ */

export const chemicalsPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Chemicals",
    subtitle:
      "Enabling intelligent, secure, and sustainable digital platforms for the chemical industry",
    backgroundImage: "/assets/hero-chemicals.jpg",
    cards: [
      {
        title:
          "Accelerate modernization to power sustainable growth",
        linkText: "Explore the case study",
        href: "#",
      },
      {
        title:
          "Is your chemical IT ready for efficiency, safety, and sustainability?",
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
      "Modernizing chemical operations to improve efficiency and sustainability",
    description:
      "We help chemical enterprises modernize IT and digital platforms to enhance operational efficiency, accelerate innovation, and support sustainability and safety initiatives.",
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
        "Building resilient, intelligent, and future-ready chemical ecosystems",
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
          "Modernize legacy chemical IT systems using cloud-first architectures to improve reliability, scalability, and performance.",
        href: "#",
      },
      {
        icon: Lightbulb,
        title: "Data, AI, and digital manufacturing intelligence",
        description:
          "Enable data-driven decision-making across plants, R&D, and supply chains using advanced analytics and AI.",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cybersecurity, compliance, and operational resilience",
        description:
          "Protect critical chemical operations with secure architectures, automated recovery, and regulatory compliance.",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep chemical industry expertise",
        description:
          "Experience across manufacturing, R&D, supply chains, and regulatory-heavy chemical environments.",
      },
      {
        icon: Shield,
        title: "Security- and compliance-first foundations",
        description:
          "Digital platforms designed to meet safety, environmental, and global compliance requirements.",
      },
    ],
  },

  /* ================= CASE STUDIES ================= */
  caseStudies: {
    heading: "Chemical industry transformation success stories",
    items: [
      {
        category: "Chemicals",
        title:
          "Accelerate modernization to power sustainable growth",
        description:
          "Modernized core systems for a leading chemical manufacturer to improve agility across production, R&D, and supply chains.",
        link: "#",
      },
      {
        category: "Chemicals",
        title:
          "Innovate to enhance operational and customer value",
        description:
          "Enabled a global chemicals enterprise to unlock data-driven insights for efficiency, quality, and customer engagement.",
        link: "#",
      },
      {
        category: "Chemicals",
        title:
          "Build a secure and resilient chemicals ecosystem",
        description:
          "Automated disaster recovery to strengthen resilience for a large chemical organization.",
        link: "#",
      },
    ],
  },

  /* ================= REGULATION ================= */
  regulation: {
    heading:
      "Stay regulation-ready while accelerating chemical innovation",
    subText:
      "Meet evolving chemical regulations without slowing operational progress.",
    highlightText: "Increase impact with Rapidcode",
    links: [
      { title: "Modernize to support operational priorities", href: "#" },
      { title: "Innovate for efficiency and sustainability", href: "#" },
      { title: "Build a secure chemical ecosystem", href: "#" },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      highlight: "86% of chemical executives",
      description:
        "say digital transformation improves operational efficiency and accelerates innovation.",
      source: "IDC",
    },
    {
      highlight: "75% of leaders",
      description:
        "believe data-driven decision-making is essential to remain competitive.",
      source: "Frost & Sullivan",
    },
    {
      highlight: "By 2026",
      description:
        "70% of chemical companies will prioritize cyber and operational resilience.",
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
          "How can chemical companies modernize legacy systems safely?",
        answer:
          "A phased, cloud-first modernization approach reduces technical debt while maintaining safety, compliance, and operational continuity.",
      },
      {
        question:
          "How can AI support sustainability and compliance goals?",
        answer:
          "AI-driven analytics enable predictive maintenance, process optimization, emissions monitoring, and real-time compliance reporting.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    link: "#",
    marqueeText:
      "Connect — with an expert to discuss your Chemicals IT Transformation — ",
    repeatCount: 4,
  },
};
