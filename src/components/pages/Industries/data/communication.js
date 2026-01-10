import { Database, Shield, Lightbulb } from "lucide-react";

/* ==============================
   COMMUNICATIONS & MEDIA PAGE
================================ */

export const communicationsPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Communications & Media",
    subtitle:
      "Engaging audiences with intelligent, secure, and scalable digital experiences",
    backgroundImage: "/assets/hero-communications-media.jpg",
    cards: [
      {
        title: "Accelerate modernization to power digital scale",
        linkText: "Explore the case study",
        href: "#",
      },
      {
        title:
          "Is your communications IT ready for immersive audience experiences?",
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
      "Modernizing communications and media platforms for scale and engagement",
    description:
      "We help communications and media organizations modernize IT and digital platforms to improve agility, enhance audience engagement, and unlock new revenue streams.",
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
        "Building resilient, data-driven, and future-ready media ecosystems",
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
          "Modernize legacy communications platforms using cloud-first architectures to improve performance, scalability, and availability.",
        href: "#",
      },
      {
        icon: Lightbulb,
        title: "Data, AI, and audience intelligence",
        description:
          "Unlock real-time insights to personalize content, optimize monetization, and enhance audience engagement across channels.",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cybersecurity, compliance, and resilience",
        description:
          "Secure communications platforms, protect content, and ensure compliance with global regulations through resilient architectures.",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep communications and media expertise",
        description:
          "Proven experience across networks, content platforms, advertising systems, and digital distribution ecosystems.",
      },
      {
        icon: Shield,
        title: "Security- and compliance-first delivery",
        description:
          "Digital platforms designed to meet privacy, content governance, and communications regulations globally.",
      },
    ],
  },

  /* ================= CASE STUDIES ================= */
  caseStudies: {
    heading:
      "Communications and media transformation success stories",
    items: [
      {
        category: "Communications & Media",
        title:
          "Accelerate modernization to power digital scale",
        description:
          "Modernized core platforms for a communications and media enterprise to improve agility across networks, content, and customer operations.",
        link: "#",
      },
      {
        category: "Communications & Media",
        title:
          "Innovate to deliver immersive audience experiences",
        description:
          "Enabled data-driven personalization and monetization for a global media organization.",
        link: "#",
      },
      {
        category: "Communications & Media",
        title:
          "Build a secure and resilient media ecosystem",
        description:
          "Automated disaster recovery to strengthen resilience for a large communications provider.",
        link: "#",
      },
    ],
  },

  /* ================= REGULATION ================= */
  regulation: {
    heading:
      "Stay regulation-ready while scaling media innovation",
    subText:
      "Meet evolving communications and media regulations without slowing digital growth.",
    highlightText: "Expand impact with Rapidcode",
    links: [
      { title: "Modernize to support digital priorities", href: "#" },
      {
        title: "Innovate for immersive audience experiences",
        href: "#",
      },
      { title: "Build a secure media ecosystem", href: "#" },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      highlight: "89% of media executives",
      description:
        "agree that digital platforms directly improve audience engagement and revenue growth.",
      source: "IDC",
    },
    {
      highlight: "78% of leaders",
      description:
        "say data-driven insights are essential to staying competitive in the media landscape.",
      source: "Frost & Sullivan",
    },
    {
      highlight: "By 2026",
      description:
        "73% of communications organizations will prioritize resilience to manage cyber risks and service disruptions.",
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
          "What are the biggest digital challenges for communications and media companies?",
        answer:
          "Organizations must manage massive content volumes, real-time delivery expectations, and evolving security requirements while modernizing complex digital ecosystems.",
      },
      {
        question:
          "How can organizations address legacy platforms and cybersecurity risks?",
        answer:
          "A phased modernization approach combined with AI-driven analytics and continuous monitoring reduces technical debt while strengthening performance and security.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    link: "#",
    marqueeText:
      "Connect — with an expert to discuss your Communications & Media IT Transformation — ",
    repeatCount: 4,
  },
};
