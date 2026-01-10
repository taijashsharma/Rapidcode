import { Cpu, Cloud, Shield } from "lucide-react";

/* ==============================
   HIGH TECH PAGE
================================ */

export const highTechPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "High Tech",
    subtitle:
      "Accelerating innovation with scalable, secure, and intelligent digital platforms",
    backgroundImage: "/assets/hero-hightech.jpg",
    cards: [
      {
        title: "Accelerate innovation at digital speed",
        linkText: "Explore the case study",
        href: "#",
      },
      {
        title:
          "Is your technology platform future-ready?",
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
      "Modernizing high-tech platforms to scale innovation",
    description:
      "We help high-tech enterprises modernize platforms, engineer intelligent products, and scale digital ecosystems with speed and resilience.",
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
        "Building intelligent, cloud-native, and resilient technology ecosystems",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Cloud,
        title: "Platform modernization and cloud transformation",
        description:
          "Re-architect core platforms using cloud-native technologies to improve scalability, performance, and speed to market.",
        href: "#",
      },
      {
        icon: Cpu,
        title: "Data, AI, and intelligent product engineering",
        description:
          "Embed AI and analytics across products and platforms to enable real-time intelligence, personalization, and innovation.",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cybersecurity, compliance, and digital resilience",
        description:
          "Secure complex digital ecosystems with zero-trust architectures, compliance automation, and disaster recovery.",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Cpu,
        title: "Deep high-tech engineering expertise",
        description:
          "Experience across software, platforms, devices, and global digital ecosystems.",
      },
      {
        icon: Shield,
        title: "Security-first, innovation-friendly approach",
        description:
          "Security and compliance embedded without slowing product velocity.",
      },
    ],
  },

  /* ================= CASE STUDIES ================= */
  caseStudies: {
    heading: "High-tech innovation success stories",
    items: [
      {
        category: "High Tech",
        title: "Accelerate innovation at digital speed",
        description:
          "Enabled scalable cloud transformation for a global high-tech enterprise to drive innovation and market responsiveness.",
        link: "#",
      },
      {
        category: "High Tech",
        title: "Engineer intelligent, connected products",
        description:
          "Embedded data-driven intelligence across products to enable smarter experiences and faster time-to-market.",
        link: "#",
      },
      {
        category: "High Tech",
        title: "Strengthen resilience across digital ecosystems",
        description:
          "Automated recovery and improved operational resilience for uninterrupted digital operations.",
        link: "#",
      },
    ],
  },

  /* ================= REGULATION ================= */
  regulation: {
    heading:
      "Stay compliant while accelerating high-tech innovation",
    subText:
      "Manage evolving regulations without slowing down product development or platform scale.",
    highlightText: "Scale with confidence using Rapidcode",
    links: [
      {
        title: "Modernize technology platforms",
        href: "#",
      },
      {
        title: "Innovate smarter digital products",
        href: "#",
      },
      {
        title: "Build resilient tech ecosystems",
        href: "#",
      },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      highlight: "88% of high-tech leaders",
      description:
        "say platform modernization is essential to remain competitive in fast-moving markets.",
      source: "IDC",
    },
    {
      highlight: "81% of executives",
      description:
        "report that data-driven decision-making accelerates innovation and product delivery.",
      source: "McKinsey",
    },
    {
      highlight: "By 2026",
      description:
        "70% of high-tech enterprises will prioritize cyber resilience as digital complexity increases.",
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
          "What are the biggest challenges facing high-tech enterprises today?",
        answer:
          "High-tech organizations must scale innovation rapidly while managing platform complexity, cybersecurity risks, and global compliance demands.",
      },
      {
        question:
          "How can legacy systems and operational risk be addressed?",
        answer:
          "A modernization-first strategy combined with cloud-native platforms, AI-driven analytics, and automation reduces technical debt and strengthens resilience.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    link: "#",
    marqueeText:
      "Connect — with an expert to discuss your High-Tech Transformation — ",
    repeatCount: 4,
  },
};
