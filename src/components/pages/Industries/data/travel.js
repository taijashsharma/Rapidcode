import { Plane, ShieldCheck, Lightbulb } from "lucide-react";

export const travelPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Travel",
    subtitle:
      "Delivering connected, secure, and personalized travel experiences at global scale",
    backgroundImage: "/assets/hero-travel.jpg",
    cards: [
      {
        title:
          "Accelerate digital journeys with modern travel platforms",
        linkText: "Explore case studies",
        href: "#",
      },
      {
        title:
          "Is your travel ecosystem ready for disruption and demand volatility?",
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
      "Modernizing travel technology to power seamless journeys",
    description:
      "We help travel and hospitality organizations modernize platforms, unlock data-driven experiences, and scale resilient operations across global ecosystems.",
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
        "Enabling agility, personalization, and resilience in travel enterprises",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],

    services: [
      {
        icon: Plane,
        title: "Travel platform and ecosystem modernization",
        description:
          "Upgrade legacy travel systems to cloud-native platforms that improve performance, scalability, and availability.",
        href: "#",
      },
      {
        icon: Plane,
        title: "Data-driven traveler experiences",
        description:
          "Activate real-time data across booking, loyalty, and operations to deliver personalized, connected journeys.",
        href: "#",
      },
      {
        icon: ShieldCheck,
        title: "Resilience, security, and continuity",
        description:
          "Ensure cyber resilience, automated recovery, and uninterrupted service delivery in high-demand travel environments.",
        href: "#",
      },
    ],

    differences: [
      {
        icon: Lightbulb,
        title: "Deep travel and hospitality expertise",
        description:
          "Experience across airlines, hospitality, travel platforms, and global travel ecosystems.",
      },
      {
        icon: ShieldCheck,
        title: "Built for trust, compliance, and uptime",
        description:
          "Secure-by-design architectures that protect traveler data and ensure operational continuity.",
      },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      number: "89%",
      label:
        "of travel leaders say digital experience is the primary driver of customer loyalty",
      source: "IDC",
    },
    {
      number: "76%",
      label:
        "of executives believe real-time data is critical to demand management and personalization",
      source: "McKinsey",
    },
    {
      number: "71%",
      label:
        "of travel enterprises will prioritize resilience by 2026",
      source: "Gartner",
    },
  ],

  /* ================= INSIGHTS ================= */
  insights: {
    heading: "Latest insights from travel industry experts",
    items: [
      {
        category: "Rapidcode Institute",
        title: "AI-driven personalization in travel experiences",
        meta: "Article | Sep 30, 2025 | 14 min read",
        href: "#",
      },
      {
        category: "Digital Platforms",
        title:
          "How digital platforms are reshaping the travel industry",
        meta: "Article | Sep 30, 2025 | 7 min read",
        href: "#",
      },
      {
        category: "Cyber resilience",
        title:
          "Why cyber resilience is critical for travel platforms",
        meta: "Podcast | May 1, 2024",
        href: "#",
      },
    ],
  },

  /* ================= RESOURCES ================= */
  resources: [
    {
      title: "Explore travel industry trends and strategies",
      meta: "Travel Industry Recommendation Paper | Sep 2025",
      href: "#",
    },
    {
      title: "Identify your travel readiness tipping point",
      meta: "Rapidcode Travel Readiness Report 2025 | PDF",
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
          "What are the biggest digital challenges in the travel industry?",
        answer:
          "Travel organizations must balance seamless customer experiences with demand volatility, legacy systems, cybersecurity risks, and regulatory complexity.",
      },
      {
        question:
          "How can travel enterprises improve agility and resilience?",
        answer:
          "Modernizing core systems, adopting cloud-native platforms, and using real-time analytics enables faster response to disruption and changing demand.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    marqueeText:
      "Connect — with an expert to discuss your Travel Transformation — ",
    href: "#",
  },
};
