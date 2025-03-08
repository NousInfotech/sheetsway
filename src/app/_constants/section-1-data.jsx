import {
  BookMarked,
  BrainCircuit,
  CaseUpper,
  ChartNetwork,
  CircleEllipsis,
  LibraryBig,
  PanelRightDashed,
  SendIcon,
  SquareActivity,
  SquareUserRound,
  WandSparkles,
} from "lucide-react";

export const navigationOptions = [
  {
    label: "Easy Navigation",
    icon: <SendIcon className="h-5 w-5" />,
    src: "/sec-1/navigation Page.png",
    text: "Give your time to your clients, not learning a new software.",
  },
  {
    label: "Auto Classification",
    src: "/sec-1/Auto_Classification.png",
    text: "Automatically classify your trial balance for instant results and eliminating manual mistakes.",
    icon: <CircleEllipsis className="h-5 w-5" />,
  },
  {
    label: "Automated Letters",
    icon: <WandSparkles className="h-5 w-5" />,
    src: "/sec-1/Automated_Letters_Financial_Statement.png",
    text: "Generate entire letters with key details auto-filled, no repetitive typing needed.",
  },
  {
    label: "Document Extraction",
    src: "/sec-1/Document_Extraction.png",
    icon: <CaseUpper className="h-5 w-5" />,
    text: "Pull text and figures directly from PDFs in a few clicks.",
  },
  {
    label: "Reconciliation",
    src: "/sec-1/Reconciliation.png",
    icon: <PanelRightDashed className="h-5 w-5" />,
    text: "Spot discrepancies between ledgers or statements fast, minimizing financial errors.",
  },
  {
    label: "Industry Intelligence AI",
    src: "/sec-1/Industry_Intelligence_AI.png",
    icon: <BrainCircuit className="h-5 w-5" />,
    text: "Leverage AI-driven insights tailored to your client’s unique sector demands.",
  },
  {
    label: "Organization",
    src: "/sec-1/Library_Organization.png",
    icon: <LibraryBig className="h-5 w-5" />,
    text: "Keep files, tasks, and updates in one place for easier tracking.",
  },
  {
    label: "Dashboard",
    icon: <ChartNetwork className="h-5 w-5" />,
    src: "/sec-1/Audit_Dashboard_Metric.png",
    text: "View critical metrics, deadlines, and audit statuses on a single screen.",
  },
  {
    label: "Risk Analysis",
    icon: <SquareActivity className="h-5 w-5" />,
    src: "/sec-1/risk_analysis.png",
    text: "Identify top-priority areas and allocate resources where they matter most.",
  },
  {
    label: "Client Portal",
    src: "/sec-1/Client_Portal.png",
    icon: <SquareUserRound className="h-5 w-5" />,
    text: "Enable direct document uploads and live collaboration with clients.",
  },
  {
    label: "Cross Referencing",
    src: "/sec-1/Audit_memos_queries.png",
    icon: <BookMarked className="h-5 w-5" />,
    text: "Centralize discussions, client feedback, and internal reviews, keeping everyone aligned in one place.",
  },
];
