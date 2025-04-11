import { Eye } from "lucide-react";

export const features = [
  {
    gif: "/client-portal/Gifs/analytics.gif",
    icon: "ChartNoAxesColumnIncreasing",
    title: "Customizable Shared Metrics",
    description:
      "Auditors can customize and share key metrics for better visibility and understanding.",
    boxText: [
      "Tailor metrics to each client.",
      "Create relevant KPI dashboards quickly.",
      "Focus on real-time data insights.",
    ],
  },
  {
    gif: "/client-portal/Gifs/calendar.gif",
    icon: "MessageCircle",
    title: "Shared Queries",
    description:
      "Clients and auditors can manage and respond to audit queries collaboratively in real-time.",
    boxText: [
      "Work together on audit questions.",
      "Track responses without email overload.",
      "Everyone sees updates live instantly.",
    ],
  },
  {
    gif: "/client-portal/Gifs/folder.gif",
    icon: "Upload",
    title: "Document Uploads",
    description:
      "Clients can upload necessary documents directly to the portal for auditor review.",
    boxText: [
      "Upload critical files with ease.",
      "Prevent overlooked attachments and confusion.",
      "Grant auditors immediate document access.",
    ],
  },
  {
    gif: "/client-portal/Gifs/infographic.gif",
    icon: "Clock",
    title: "Progress Tracking",
    description:
      "Clients can monitor the progress of the audit process, ensuring they are always informed.",
    boxText: [
      "Reveal each project phase clearly.",
      "Show real-time milestone completion stats.",
      "Minimize status check anxieties daily.",
    ],
  },
  {
    gif: "/client-portal/Gifs/notification.gif",
    icon: "Lock",
    title: "Secure Messaging",
    description:
      "Clients can communicate securely with auditors, ensuring privacy and data protection.",
    boxText: [
      "Encrypt sensitive conversations by default.",
      "Keep discussions in one place.",
      "Protect privacy with robust encryption.",
    ],
  },
  {
    gif: "/client-portal/Gifs/speech-bubble.gif",
    icon: "Bell",
    title: "Notifications and Alerts",
    description:
      "Receive real-time notifications and alerts for any updates or required actions.",
    boxText: [
      "Stay updated on urgent changes.",
      "Never miss pressing deadlines again.",
      "Respond quickly to emerging issues.",
    ],
  },
  {
    gif: "/client-portal/Gifs/swatches.gif",
    icon: "SquareCheckBig",
    title: "Task Assignment",
    description:
      "Clients can view tasks assigned to them and ensure timely completion.",
    boxText: [
      "Delegate tasks to responsible teammates.",
      "Clarify roles and due dates.",
      "Track progress from one screen.",
    ],
  },
  {
    gif: "/client-portal/Gifs/task.gif",
    icon: "LayoutGrid",
    title: "Dashboard Overview",
    description:
      "Provides a comprehensive overview of all audit-related activities and statuses in one place.",
    boxText: [
      "View all audit activities together.",
      "Spot bottlenecks before they grow.",
      "Customize layouts for each stakeholder",
    ],
  },
  {
    gif: "/client-portal/Gifs/upload.gif",
    icon: "File",
    title: "Report Access",
    description:
      "Clients can access and download audit reports and other relevant documents directly from the portal.",
    boxText: [
      "Instantly retrieve finalized audit reports.",
      "Eliminate extra email requests altogether.",
      "Keep vital documents centralized now.",
    ],
  },
];

export const images = [
  { alt: "customizable", src: "/client-portal/Customizable_shared_metrics.png" },
  {
    alt: "viewable",
    src: "/client-portal/Viewable_Engagements.png",
  },
  { alt: "shared", src: "/client-portal/Shared_Queries.png" },
];

export const tabs = [
  {
    icon: <Eye className="text-primary  md:size-6 size-4" />,
    btnText: "Customizable Shared Metrics",
    primaryText: "Client retention and transparent work",
    secondaryText:
      "Auditors can customize and share key metrics for better visibility and understanding.",
  },
  {
    icon: <Eye className="text-primary  md:size-6 size-4" />,
    btnText: "Viewable Engagements",
    primaryText: "Client retention and transparent work",
    secondaryText:
      "Clients can easily view and track the status of their audit engagements in real-time.",
  },
  {
    icon: <Eye className="text-primary md:size-6 size-4" />,
    btnText: "Shared Queries",
    primaryText: "Client retention and transparent work",
    secondaryText:
      "Clients and auditors can manage and respond to audit queries collaboratively in real-time.",
  },
];

export const enhancedCollection = [
  {
    src: "/client-portal/know_your_client.png",
    alt: "KYC",
    heading: "Know Your Client (KYC)",
    para: "Clients can easily fill in and edit KYC fields, with data linked to the audit portal.",
  },
  {
    src: "/client-portal/Shared_Libraries.png",
    alt: "Shared Libraries",
    heading: "Shared Libraries",
    para: "Shared library where both auditor and client can access and manage documents collaboratively.",
  },
];
