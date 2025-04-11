import { AlertCircle, Cable, Handshake } from "lucide-react";

export const images = [
  { alt: "customizable", src: "/audit-portal/Industry_Intelligence_AI.png" },
  {
    alt: "viewable",
    src: "/audit-portal/Auto_Classification.png"
  },
  { alt: "shared", src: "/audit-portal/Shared_Queries.png" },
];

export const tabs = [
  {
    icon: <Cable className="text-primary md:size-6 size-4" />,
    btnText: "Customization",
    primaryText: "Tailored Audit Procedures",
    secondaryText:
      "Quickly adapt procedures to each engagement’s needs. Our AI-driven tool generates comprehensive steps, ensuring nothing’s overlooked.",
  },
  {
    icon: <AlertCircle className="text-primary md:size-6 size-4" />,
    btnText: "Auto Classification",
    primaryText: "Comprehensive Risk Overview",
    secondaryText:
      "Get a clear view of high-risk accounts. AI flags potential issues, helping you focus on what matters most in every audit.",
  },
  {
    icon: <Handshake className="text-primary md:size-6 size-4" />,
    btnText: "Client Collaboration",
    primaryText: "Client Portal Integration",
    secondaryText:
      "Collaborate effortlessly with clients. They can upload files, respond to queries, and track audit progress—all in one place.",
  },
];

export const comprehensiveAudit = [
  {
    src: "/audit-portal/Client_onboarding.png",
    alt: "Client Onboarding",
    heading: "Client Onboarding",
    para: "The client onboarding feature simplifies the process of adding new clients to the system. It allows auditors to enter comprehensive client details, assign roles, and manage engagement specifics effectively.",
  },
  {
    src: "/audit-portal/Trial_Balance.png",
    alt: "Trial Balance Management",
    heading: "Trial Balance Management",
    para: "The Trial Balance Management tool helps auditors organize and upload TB documents. It includes features for auto-classifying accounts, manual classification, and detailed review of the TB data.",
  },
];

export const features = [
  {
    gif: "/audit-portal/Gifs/contract.gif",
    icon: "UserPlus",
    title: "Client Onboarding",
    description: "Manage new clients and engagement specifics.",
    boxText: [
      "Start engagements with minimal friction.",
      "Collect essential client data quickly.",
      "Maintain clarity from day one.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/balance.gif",
    icon: "FileBarChart",
    title: "Trial Balance Management",
    description: "Auto-classify and manually review TB documents.",
    boxText: [
      "Auto-classify entries for quick categorization.",
      "Catch manual errors more easily.",
      "Review each transaction with ease.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/online-test.gif",
    icon: "FileText",
    title: "Audit Memos",
    description: "Centralized management of audit queries and memos.",
    boxText: [
      "Log queries in one place.",
      "Retain thorough context for communications.",
      "Enhance clarity for subsequent reviews.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/prioritize.gif",
    icon: "Layers",
    title: "Audit Procedures",
    description:
      "Generate and customize procedures tailored to specific needs.",
    boxText: [
      "Generate procedures tailored to objectives.",
      "Incorporate best practices automatically now.",
      "Adjust steps for unique circumstances.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/warning.gif",
    icon: "Activity",
    title: "Risk Analysis",
    description: "Identify and focus on high-risk areas.",
    boxText: [
      "Identify key vulnerabilities early on.",
      "Prioritize resources where needed most.",
      "Evaluate severity for informed decisions.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/live-chat.gif",
    icon: "Users",
    title: "Client Portal",
    description: "Facilitate document uploads and query responses.",
    boxText: [
      "Simplify document sharing with clients.",
      "Receive immediate feedback from stakeholders.",
      "Enhance transparency across ongoing engagements.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/diagram.gif",
    icon: "Settings",
    title: "Materiality Setup",
    description: "Define significant areas of focus.",
    boxText: [
      "Determine focus areas quickly upfront.",
      "Filter critical items for detail.",
      "Prevent under- or over-auditing effectively.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/online-quiz.gif",
    icon: "Logs",
    title: "Audit Program Generation",
    description: "Create tailored programs with AI.",
    boxText: [
      "Leverage AI for customized steps.",
      "Auto-build frameworks for engagements swiftly.",
      "Adapt to changing client requirements.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/question.gif",
    icon: "CheckSquare",
    title: "Fieldwork Procedures",
    description: "Execute tasks efficiently with customizable procedures.",
    boxText: [
      "Organize tasks to reduce confusion.",
      "Modify procedures for unique scenarios.",
      "Enhance fieldwork accuracy under deadlines.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/nails.gif",
    icon: "Search",
    title: "Sampling Methods",
    description: "Implement various options for comprehensive audit coverage.",
    boxText: [
      "Select sampling strategies with flexibility.",
      "Improve coverage across different populations.",
      "Balance depth against time constraints.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/question 2.gif",
    icon: "FileSearch",
    title: "Query Management",
    description: "Track and resolve queries efficiently.",
    boxText: [
      "Track queries through final resolution.",
      "Cut delays with immediate follow-ups.",
      "Keep a complete discussion history.",
    ],
  },
  {
    gif: "/audit-portal/Gifs/law.gif",
    icon: "Book",
    title: "General Ledger Management",
    description:
      "Integrate ledgers from popular software, review in spreadsheet or advanced views, and categorize transactions.",
    boxText: [
      "Load ledgers from popular applications.",
      "View, categorize, and refine transactions.",
      "Uncover discrepancies for better clarity.",
    ],
  },
];
