import { Database, Shield, HeartPulse } from "lucide-react";

/* ==============================
   HEALTHCARE PAGE
================================ */

export const healthcarePage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Healthcare",
    subtitle:
      "Delivering better patient outcomes through intelligent, secure, and connected digital platforms",
    backgroundImage: "/assets/hero-healthcare.jpg",
    cards: [
      {
        title:
          "Accelerate modernization to improve patient outcomes",
        linkText: "Explore the case study",
        href: "#",
      },
      {
        title:
          "Is your healthcare IT ready for secure, connected care?",
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
      "Modernizing healthcare platforms for connected, patient-centric care",
    description:
      "We help healthcare organizations modernize IT and digital platforms to improve care delivery, strengthen clinical collaboration, and enhance operational efficiency.",
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
        "Building secure, interoperable, and resilient healthcare ecosystems",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Healthcare IT modernization and cloud transformation",
        description:
          "Modernize clinical and administrative platforms using cloud-first architectures to improve availability, scalability, and care continuity.",
        href: "#",
      },
      {
        icon: HeartPulse,
        title: "Data, AI, and connected care platforms",
        description:
          "Enable personalized, data-driven care delivery and real-time clinical insights using advanced analytics and AI.",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cybersecurity, compliance, and healthcare resilience",
        description:
          "Protect sensitive patient data and critical systems with security-first architectures, compliance automation, and disaster recovery.",
        href: "#",
      },
    ],
    differences: [
      {
        icon: HeartPulse,
        title: "Deep healthcare domain expertise",
        description:
          "Experience across providers, payers, clinical systems, and regulated healthcare environments.",
      },
      {
        icon: Shield,
        title: "Privacy- and compliance-first foundations",
        description:
          "Platforms designed to meet global healthcare regulations and patient data protection requirements.",
      },
    ],
  },

  /* ================= CASE STUDIES ================= */
  caseStudies: {
    heading: "Healthcare transformation success stories",
    items: [
      {
        category: "Healthcare",
        title:
          "Accelerate modernization to improve patient outcomes",
        description:
          "Modernized core platforms for a leading healthcare organization to enhance care delivery, efficiency, and clinical collaboration.",
        link: "#",
      },
      {
        category: "Healthcare",
        title:
          "Innovate to deliver connected patient experiences",
        description:
          "Enabled data-driven intelligence to support personalized care, patient engagement, and optimized clinical workflows.",
        link: "#",
      },
      {
        category: "Healthcare",
        title:
          "Build a secure and resilient healthcare ecosystem",
        description:
          "Automated disaster recovery and strengthened system resilience for a large healthcare network.",
        link: "#",
      },
    ],
  },

  /* ================= REGULATION ================= */
  regulation: {
    heading:
      "Stay regulation-ready while advancing healthcare innovation",
    subText:
      "Meet evolving healthcare regulations without slowing care delivery or innovation.",
    highlightText: "Expand impact with Rapidcode",
    links: [
      {
        title: "Modernize to support care priorities",
        href: "#",
      },
      {
        title:
          "Innovate for connected patient experiences",
        href: "#",
      },
      {
        title: "Build a secure healthcare ecosystem",
        href: "#",
      },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      highlight: "91% of healthcare leaders",
      description:
        "agree that digital transformation directly improves patient experience and quality of care.",
      source: "IDC",
    },
    {
      highlight: "79% of executives",
      description:
        "say data-driven insights are critical to improving clinical and operational outcomes.",
      source: "Frost & Sullivan",
    },
    {
      highlight: "By 2026",
      description:
        "75% of healthcare organizations will prioritize resilience to address cyber risks and system disruptions.",
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
          "What are the key digital challenges facing healthcare organizations today?",
        answer:
          "Healthcare organizations must balance patient outcomes, data security, and operational efficiency while modernizing complex clinical and administrative systems.",
      },
      {
        question:
          "How can legacy platforms and compliance risks be addressed effectively?",
        answer:
          "A phased modernization approach combined with AI-driven analytics, interoperability platforms, and real-time monitoring strengthens care delivery and regulatory compliance.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    link: "#",
    marqueeText:
      "Connect — with an expert to discuss your Healthcare IT Transformation — ",
    repeatCount: 4,
  },
};
