export const bankingCaseStudies = [
  {
    id: 1,
    category: "Banking and Financial Markets",
    title: "Accelerate modernization to drive business priorities",
    description:
      "When a major bank committed to a cloud-first approach, Rapidcode migrated its core systems to help improve customers' digital banking experience.",
    link: "#",
  },
  {
    id: 2,
    category: "Banking and Financial Markets",
    title: "Innovate to deliver exceptional customer experience",
    description:
      "Rapidcode helped a Middle Eastern bank harness the power of its data to provide best-in-class experience and personalized offerings to its customers.",
    link: "#",
  },
  {
    id: 3,
    category: "Banking and Financial Markets",
    title: "Build a secure and resilient financial ecosystem",
    description:
      "Faced with a time-consuming and manual disaster recovery (DR) process, a national stock exchange sought the right tool to automate its DR operations.",
    link: "#",
  },
]; 

//hero

import heroBg from "@/assets/hero-banking.jpg";

export const bankingHeroData = {
  industryLabel: "Banking and Financial Markets",

  title: {
    light: "Your clients",
    bold: "are your future",
  },

  subtitle: {
    line1: "Delight them with real-time,",
    line2: "secure, and innovative experiences",
  },

  backgroundImage: heroBg,

  defaultAccordionId: "overview",

  accordionItems: [
    {
      id: "overview",
      title: "Overview",
      content:
        "We help banking, payments, and financial markets leaders optimize their IT workloads for a superior customer experience.",
    },
    {
      id: "modernizing",
      title: "Modernizing Canara Bank's IT Operations",
      content:
        "Rapidcode is upgrading Canara Bank's end-to-end IT operations and improving their customer experience and availability.",
      link: "#",
    },
    {
      id: "innovating",
      title:
        "Innovating Grameen's microloan process and fueling economic growth",
      content:
        "Rapidcode established a single, integrated team to modernize the bank's IT operations and deliver faster, more accessible services to communities around rural India.",
      link: "#",
    },
    {
      id: "securing",
      title:
        "Securing and strengthening the ESAF bank's cybersecurity posture",
      content:
        "Rapidcode will enhance the bank's core IT infrastructure, power new digital banking capabilities, and provide risk and regulatory compliance support.",
      link: "#",
    },
  ],
};
  
// regulation 

  export const bankingRegulationData = {
  heading:
    "Get regulation ready for today and tomorrow without doing the work of two",

  subText:
    "You don't need another you to get cybersecurity regulation ready.",

  highlightText: "Double your impact with Rapidcode",

  links: [
    {
      title: "Modernize to drive business priorities",
      link: "#",
    },
    {
      title: "Innovate for exceptional customer experience",
      link: "#",
    },
    {
      title: "Build a secure financial ecosystem",
      link: "#",
    },
  ],
};  
  
// marque 

export const bankingMarqueeData = {
  text:
    "Download now — Explore emerging banking trends and opportunities with practical strategies — ",
  repeatCount: 4, // future flexibility
  bgClass: "bg-primary",
  hoverBgClass: "hover:bg-primary/90",
};
 
//statsSection 

// statsData.js
export const stats = [
  {
    number: "01",
    highlight: "85% of executives",
    description:
      "agree that a better employee experience translates to a better customer experience and higher revenue.",
    source: "IDC",
    sourceLink: "#",
  },
  {
    number: "02",
    highlight: "73% of CEOs",
    description:
      "say that deriving value from data is their top priority and is essential to remaining competitive.",
    source: "Frost & Sullivan",
    sourceLink: "#",
  },
  {
    number: "03",
    highlight: "By 2025",
    description:
      "70% of CEOs will mandate resilience to survive threats from cybercrime, severe weather, and political instabilities.",
    source: "Gartner",
    sourceLink: "#",
  },
];
 
// ComplianceSection 

// complianceData.js
export const complianceContent = {
  title: "Is your institution ready for regulatory compliance?",
  paragraphs: [
    "Regulatory compliance stands as a fundamental pillar for the BFSI sector, and as it faces stringent oversight from authorities worldwide, robust adherence to evolving regulations is quickly becoming a necessity.",
    "Many enterprises are embracing a shift-left compliance strategy to operate within legal and ethical boundaries while safeguarding market integrity and consumer trust.",
    "Rapidcode’s Regional Regulatory Compliance Consulting and Services leverage AI-driven compliance capabilities to help BFSI organizations reduce errors and inefficiencies through real-time monitoring, automated regulatory reporting, and advanced risk detection.",
  ],
};

//ExpertData 

// expertData.js
import expertPortrait from "@/assets/expert-portrait.jpg";

export const expertSectionData = {
  tag: "industry experts",
  heading: "Our experts, your challenges",
  introText:
    "Read the Q&A with Rapidcode expert, Jayakrishnan Rajagopalan",

  qas: [
    {
      question:
        "How can we tackle the key challenges of financial inclusion and rural penetration for every bank and financial services organisation in India?",
      answer:
        "For fintech particularly, digital public infrastructure and innovative business solutions are essential for tackling financial inclusion and rural penetration effectively. Furthermore, the design and integration of voice and vernacular interfaces into products and services helps deliver substantial value and should be prioritized.",
    },
    {
      question:
        "Non-performing assets (NPAs) and Credit Risk with legacy tech modernisation are things that every financial institution is facing today. What insights can you offer to enterprises trying to overcome them?",
      answer:
        "In legacy modernization, systematically dismantling the core allows institutions to address their technical debt and establish a suitable timeline for the modernization program. The implementation of AI and machine learning-based deep learning models serves as the foundation for creating Early Warning Systems (EWS), AI-powered credit scoring using alternative data sets, and digital platforms for collections. Additionally, tracking NPA resolutions helps to continually reduce friction across the entire credit risk ecosystem.",
    },
  ],

  expert: {
    name: "Jayakrishnan Rajagopalan",
    designation: "Chief Architect",
    domain: "BFSI in Enterprise Architecture",
    company: "Rapidcode India",
    image: expertPortrait,
  },
};
 
//InsightData

// insightsData.js
import insightAi from "@/assets/insight-ai.jpg";
import insightFintech from "@/assets/insight-fintech.jpg";
import insightBusiness from "@/assets/insight-business.jpg";
import insightSecurity from "@/assets/insight-security.jpg";

export const insightsSectionData = {
  heading: "Latest Insights from banking experts",

  insights: [
    {
      image: insightAi,
      category: "Rapidcode Institute",
      title: "Agentic AI and the future of financial services",
      meta: "Article | Sep 30, 2025 | Read time: 14 min",
      link: "#",
    },
    {
      image: insightFintech,
      category: "Rapidcode Institute",
      title:
        "Navigating the emerging technology terrain shaping the future of finance",
      meta: "Article | Sep 30, 2025 | Read time: 7 min",
      link: "#",
    },
    {
      image: insightBusiness,
      category: "Data and AI",
      title:
        "4 disruptive tech trends that will define the future of banking",
      meta: "Article | Sep 13, 2024 | Read time: 4 min",
      link: "#",
    },
    {
      image: insightSecurity,
      category: "Cyber resilience",
      title:
        "Taking cybersecurity from an IT issue to a strategic business imperative",
      meta: "Podcast | May 1, 2024",
      link: "#",
    },
  ],
};

 //Resourcesdata 

 import resourceTrends from "@/assets/resource-trends.jpg";
import resourceReadiness from "@/assets/resource-readiness.jpg";

export const resources = [
  {
    image: resourceTrends,
    title: "Explore emerging banking trends and practical strategies",
    meta: "Banking Recommendation Paper | Sep 2025",
    link: "#",
  },
  {
    image: resourceReadiness,
    title: "Identify your readiness tipping point",
    meta: "The Rapidcode Readiness Financial Services Report 2025 | PDF",
    link: "#",
  },
];

//CTAsection 

export const ctaData = {
  heading: "Take the next step",
  link: "#",
  marqueeText: "Connect — with an expert to discuss your IT Transformation — ",
  repeatCount: 4,
};



