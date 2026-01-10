import { Layers, ShieldCheck, Lightbulb } from "lucide-react";

export const softwarePlatformsPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Software & Platforms",
    subtitle:
      "Building scalable, secure, and intelligent platforms that power product-led growth",
    backgroundImage: "/assets/hero-software-platforms.jpg",
    cards: [
      {
        title:
          "Scale software innovation with modern, platform-first architectures",
        linkText: "Explore case studies",
        href: "#",
      },
      {
        title:
          "Is your platform architecture ready for scale, resilience, and growth?",
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
      "Modernizing software and platform ecosystems for sustained growth",
    description:
      "We help software and platform companies modernize architectures, accelerate innovation, and deliver reliable, always-on digital experiences at scale.",
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
        "Enabling scalable, resilient, and data-driven software platforms",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],

    services: [
      {
        icon: Layers,
        title: "Platform and architecture modernization",
        description:
          "Upgrade legacy stacks to cloud-native, API-driven architectures that scale with demand.",
        href: "#",
      },
      {
        icon: Layers,
        title: "Data-driven and intelligent platforms",
        description:
          "Activate platform data to deliver personalized experiences and faster product evolution.",
        href: "#",
      },
      {
        icon: ShieldCheck,
        title: "Reliability, resilience, and security at scale",
        description:
          "Ensure high availability, automated recovery, and cyber resilience across always-on platforms.",
        href: "#",
      },
    ],

    differences: [
      {
        icon: Lightbulb,
        title: "Deep software and platform engineering expertise",
        description:
          "Proven experience across SaaS, platform ecosystems, and global digital products.",
      },
      {
        icon: ShieldCheck,
        title: "Built-in resilience and compliance",
        description:
          "Architectures designed for uptime, security, and regulatory compliance from day one.",
      },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      number: "90%",
      label:
        "of software leaders say scalable platforms are critical to sustaining product-led growth",
      source: "IDC",
    },
    {
      number: "78%",
      label:
        "of executives report data-driven platforms improve customer engagement",
      source: "McKinsey",
    },
    {
      number: "72%",
      label:
        "of software companies will prioritize platform resilience by 2026",
      source: "Gartner",
    },
  ],

  /* ================= INSIGHTS ================= */
  insights: {
    heading: "Latest insights from software and platform experts",
    items: [
      {
        category: "Rapidcode Institute",
        title: "Building AI-powered software platforms",
        meta: "Article | Sep 30, 2025 | 14 min read",
        href: "#",
      },
      {
        category: "Platform Strategy",
        title:
          "How platform ecosystems are reshaping digital businesses",
        meta: "Article | Sep 30, 2025 | 7 min read",
        href: "#",
      },
      {
        category: "Cyber resilience",
        title: "Why uptime and security define platform success",
        meta: "Podcast | May 1, 2024",
        href: "#",
      },
    ],
  },

  /* ================= RESOURCES ================= */
  resources: [
    {
      title: "Explore software and platform trends",
      meta:
        "Software & Platforms Recommendation Paper | Sep 2025",
      href: "#",
    },
    {
      title: "Find your platform readiness tipping point",
      meta:
        "Rapidcode Software & Platforms Readiness Report 2025 | PDF",
      href: "#",
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
          "What challenges do software and platform companies face today?",
        answer:
          "Software and platform companies must scale rapidly while managing architectural complexity, security risks, and evolving compliance requirements.",
      },
      {
        question:
          "How do legacy systems impact platform scalability?",
        answer:
          "Legacy systems increase technical debt and limit agility. Modern, cloud-native architectures enable faster releases, better scalability, and higher reliability.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    marqueeText:
      "Connect — with an expert to discuss your Software & Platform Transformation — ",
    href: "#",
  },
};
