import { Database, Shield, Lightbulb } from "lucide-react";

/* ==============================
   AUTOMOTIVE PAGE DATA
================================ */

export const automotivePage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Automotive",
    subtitle:
      "Powering next-generation mobility with intelligent, connected, and secure digital platforms",
    backgroundImage: "/assets/hero-automotive.jpg",
    cards: [
      {
        title:
          "Accelerate modernization to drive next-gen mobility",
        linkText: "Explore the case study",
        href: "#",
      },
      {
        title:
          "Is your automotive IT ready for connected and electric vehicles?",
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
      "Driving automotive innovation through digital and platform modernization",
    description:
      "We help automotive enterprises modernize IT and digital platforms to accelerate innovation, enhance driver experience, and support connected, electric, and autonomous mobility.",
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
        "Enabling scalable mobility platforms, intelligence, and resilience",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Automotive IT and platform modernization",
        description:
          "Modernize legacy automotive systems using cloud-first and platform-led approaches to improve agility and speed to market.",
        href: "#",
      },
      {
        icon: Lightbulb,
        title: "Data, AI, and connected mobility intelligence",
        description:
          "Enable intelligent, personalized, and connected vehicle experiences through advanced analytics and AI-driven platforms.",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cybersecurity and operational resilience",
        description:
          "Protect automotive digital ecosystems with secure architectures, automated recovery, and compliance across global markets.",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep automotive and mobility expertise",
        description:
          "Proven experience across connected vehicles, EV platforms, and complex automotive ecosystems.",
      },
      {
        icon: Shield,
        title: "Secure-by-design automotive platforms",
        description:
          "Digital foundations built for safety, compliance, cyber resilience, and long-term scalability.",
      },
    ],
  },

  /* ================= CASE STUDIES ================= */
  caseStudies: {
    heading: "Automotive transformation success stories",
    items: [
      {
        category: "Automotive",
        title:
          "Accelerate modernization to drive next-gen mobility",
        description:
          "Rapidcode modernized core platforms for a leading automotive manufacturer to support connected and electric vehicle programs.",
        link: "#",
      },
      {
        category: "Automotive",
        title:
          "Innovate to deliver superior driver experience",
        description:
          "Enabled a global automotive brand to leverage data intelligence for personalized and connected mobility experiences.",
        link: "#",
      },
      {
        category: "Automotive",
        title:
          "Build a secure and resilient automotive ecosystem",
        description:
          "Automated disaster recovery and strengthened resilience for a large automotive enterprise.",
        link: "#",
      },
    ],
  },

  /* ================= REGULATION ================= */
  regulation: {
    heading:
      "Stay regulation-ready while accelerating automotive innovation",
    subText:
      "Meet evolving automotive regulations without slowing down innovation or growth.",
    highlightText: "Scale impact with Rapidcode",
    links: [
      { title: "Modernize to support mobility priorities", href: "#" },
      { title: "Innovate for superior driver experience", href: "#" },
      { title: "Build a secure automotive ecosystem", href: "#" },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      highlight: "87% of automotive leaders",
      description:
        "say digital transformation directly improves customer experience and accelerates innovation.",
      source: "IDC",
    },
    {
      highlight: "74% of executives",
      description:
        "believe data-driven insights are critical to remaining competitive in the mobility market.",
      source: "Frost & Sullivan",
    },
    {
      highlight: "By 2026",
      description:
        "71% of automotive organizations will prioritize cyber and operational resilience.",
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
          "How can automotive organizations modernize legacy platforms?",
        answer:
          "A phased, cloud-first modernization approach helps reduce technical debt while ensuring performance, safety, and business continuity.",
      },
      {
        question:
          "Why is cybersecurity critical in connected and electric vehicles?",
        answer:
          "Cybersecurity protects vehicle data, customer privacy, and ensures the reliability of connected and autonomous mobility platforms.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    link: "#",
    marqueeText:
      "Connect — with an expert to discuss your Automotive IT Transformation — ",
    repeatCount: 4,
  },
};
