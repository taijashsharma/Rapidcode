import { Database, Shield, Lightbulb } from "lucide-react";

/* ==============================
   BANKING & FINANCIAL MARKETS PAGE
================================ */

export const bankingPage = {
  /* ================= HERO ================= */
  hero: {
    breadcrumb: {
      label: "Industries",
      href: "#",
    },
    title: "Banking & Financial Markets",
    subtitle:
      "Delivering real-time, secure, and innovative digital banking experiences",
    backgroundImage: "/assets/hero-banking.jpg",
    cards: [
      {
        title:
          "Accelerate modernization to drive business priorities",
        linkText: "Explore the case study",
        href: "#",
      },
      {
        title:
          "Is your banking IT ready for real-time, data-driven growth?",
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
      "Modernizing banking platforms to drive growth, resilience, and trust",
    description:
      "We help banks, payments firms, and financial market institutions modernize IT platforms, unlock data value, and deliver secure, customer-centric digital experiences.",
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
        "Enabling secure, intelligent, and resilient financial ecosystems",
    },
    tabs: [
      { id: "services", label: "Our services" },
      { id: "difference", label: "The Rapidcode difference" },
    ],
    services: [
      {
        icon: Database,
        title: "Core banking modernization and cloud transformation",
        description:
          "Modernize legacy core systems using cloud-first architectures to improve agility, scalability, and customer experience.",
        href: "#",
      },
      {
        icon: Lightbulb,
        title: "Data, AI, and intelligent banking platforms",
        description:
          "Leverage AI, analytics, and alternative data to enable personalization, credit intelligence, and real-time decision-making.",
        href: "#",
      },
      {
        icon: Shield,
        title: "Cybersecurity, risk, and regulatory compliance",
        description:
          "Strengthen security posture, automate compliance, and build resilience across banking and financial market operations.",
        href: "#",
      },
    ],
    differences: [
      {
        icon: Lightbulb,
        title: "Deep BFSI and fintech expertise",
        description:
          "Proven experience across banking, payments, capital markets, and large-scale financial ecosystems.",
      },
      {
        icon: Shield,
        title: "Security- and compliance-first approach",
        description:
          "Platforms designed to meet regulatory, risk, and data protection requirements across regions.",
      },
    ],
  },

  /* ================= CASE STUDIES ================= */
  caseStudies: {
    heading: "Banking and financial services success stories",
    items: [
      {
        category: "Banking and Financial Markets",
        title:
          "Accelerate modernization to drive business priorities",
        description:
          "Migrated core banking systems to a cloud-first architecture to enhance digital customer experiences.",
        link: "#",
      },
      {
        category: "Banking and Financial Markets",
        title:
          "Innovate to deliver exceptional customer experience",
        description:
          "Enabled a Middle Eastern bank to unlock data intelligence for personalized, best-in-class customer offerings.",
        link: "#",
      },
      {
        category: "Banking and Financial Markets",
        title:
          "Build a secure and resilient financial ecosystem",
        description:
          "Automated disaster recovery operations for a national stock exchange to improve resilience and availability.",
        link: "#",
      },
    ],
  },

  /* ================= REGULATION ================= */
  regulation: {
    heading:
      "Get regulation-ready for today and tomorrow without doubling effort",
    subText:
      "Meet evolving cybersecurity and financial regulations with confidence and speed.",
    highlightText: "Double your impact with Rapidcode",
    links: [
      { title: "Modernize to drive business priorities", href: "#" },
      { title: "Innovate for exceptional customer experience", href: "#" },
      { title: "Build a secure financial ecosystem", href: "#" },
    ],
  },

  /* ================= STATS ================= */
  stats: [
    {
      highlight: "85% of executives",
      description:
        "say better employee experience leads to improved customer experience and higher revenue.",
      source: "IDC",
    },
    {
      highlight: "73% of CEOs",
      description:
        "state that deriving value from data is essential to remain competitive.",
      source: "Frost & Sullivan",
    },
    {
      highlight: "By 2025",
      description:
        "70% of CEOs will mandate resilience to address cyber, climate, and geopolitical risks.",
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
          "How can banks modernize legacy systems without disrupting operations?",
        answer:
          "A phased modernization strategy allows institutions to reduce technical debt while maintaining availability, security, and regulatory compliance.",
      },
      {
        question:
          "How can AI help manage NPAs and credit risk?",
        answer:
          "AI-powered early warning systems, alternative data-based credit scoring, and predictive analytics help proactively manage risk and improve portfolio performance.",
      },
    ],
  },

  /* ================= CTA ================= */
  cta: {
    heading: "Take the next step",
    link: "#",
    marqueeText:
      "Connect — with an expert to discuss your Banking & Financial Services IT Transformation — ",
    repeatCount: 4,
  },
};
