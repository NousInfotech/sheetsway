import { Cable, CheckCircle, SaveAll, Target } from "lucide-react";


export const draftingPlugin = {
  imgSrc: "/drafting/Microsoft_Office_Word_(2019–present).svg.png",
  alt: "drafting-word-img",
  color: "#103f91",
  primaryHeading: "Turn word documents",
  secondaryHeading: "into dynamic audit tools",
  listData: [
    {
      primaryText: "Auto-Fill",
      secondaryText: "letters and IFRS statements with live data",
    },
    {
      primaryText: "Customize",
      secondaryText: "templates to fit your firm's needs",
    },
    {
      primaryText: "Eliminate",
      secondaryText: "manual copy-paste and reduce errors",
    },
  ],
  videoSrc: "https://www.youtube.com/embed/yA2N3vrK_l0",
  imgURL: "/drafting/word-placeholder.png"
};

export const tabs = [
  {
    icon: <SaveAll className="text-primary md:size-6 size-4" />,
    btnText: "Save & Reuse",
    primaryText: "Document Library",
    secondaryText:
      "Store key text once, and reuse it anywhere. Boost productivity while keeping content consistent across all your documents.",
  },
  {
    icon: <Target className="text-primary md:size-6 size-4" />,
    btnText: "Precision & Flexibility",
    primaryText: "Variables",
    secondaryText:
      "Set up custom or dynamic variables to quickly adapt your documents. Automate calculations for accurate, professional results every time.",
  },
  {
    icon: <CheckCircle className="text-primary md:size-6 size-4" />,
    btnText: "Show or Hide",
    primaryText: "Conditions",
    secondaryText:
      "Display only what's relevant based on specific criteria. Perfect for financial thresholds—keep your final documents concise yet fully detailed where needed.",
  },
];

export const images = [
  {
    alt: "conditions",
    src: "/drafting/Conditions.png",
  },
  { alt: "variable", src: "/drafting/Variables.png" },
  { alt: "library", src: "/drafting/Notes Library.png" },
];

export const features = [
  {
    gif: "/drafting/Gifs/file.gif",
    icon: "FileText",
    title: "Template and Library Integration",
    description:
      "Import templates for GAPSME or IFRS and access a comprehensive library of predefined documents for efficient and standardized drafting.",
    boxText: [
      "Import FS documents or local templates.",
      "Access templates from one library.",
      "Reduce manual editing across engagements.",
    ],
  },
  {
    gif: "/drafting/Gifs/share.gif",
    icon: "SlidersVertical",
    title: "Variables Management",
    description:
      "Create and manage custom and dynamic variables for accurate data calculations and financial reporting within your drafts.",
    boxText: [
      "Use custom and dynamic variables.",
      "Auto-populate data fields for accuracy.",
      "Reduce retyping across repeated fields.",
    ],
  },
  {
    gif: "/drafting/Gifs/wrong-decision.gif",
    icon: "ClipboardList",
    title: "Condition Management",
    description:
      "Set conditions on text to display or hide content based on specific criteria, and highlight text to manage content visibility based on account values or other factors.",
    boxText: [
      "Hide or show text automatically.",
      "Insert disclaimers only when needed.",
      "Personalize content based on data.",
    ],
  },
  {
    gif: "/drafting/Gifs/letter-h.gif",
    icon: "SquarePen",
    title: "Custom Headers",
    description:
      "Create custom headers with titles and subtitles, copy headers from previous pages, or choose no header.",
    boxText: [
      "Add titles, subtitles, or none.",
      "Carry headers from prior pages.",
      "Keep branding consistent throughout drafts.",
    ],
  },
  {
    gif: "/drafting/Gifs/note.gif",
    icon: "MessageSquareDot",
    title: "Annotations",
    description:
      "Add annotations and comments directly in your drafts for detailed review and collaboration.",
    boxText: [
      "Comment directly on draft sections.",
      "Tag colleagues for clarifications needed.",
      "Record discussions for future reference.",
    ],
  },
  {
    gif: "/drafting/Gifs/notebook.gif",
    icon: "File",
    title: "Index Generation",
    description:
      "Automatically generate an index for your document, ensuring easy navigation and reference.",
    boxText: [
      "Build an index automatically now.",
      "Simplify navigation in lengthy documents.",
      "Ensure quick reference to sections.",
    ],
  },
  {
    gif: "/drafting/Gifs/team.gif",
    icon: "Share2",
    title: "Real-Time Collaboration",
    description:
      "Collaborate with your team in real-time, ensuring everyone is aligned throughout the drafting process.",
    boxText: [
      "Work together on drafts instantly.",
      "See changes as they happen.",
      "Keep everyone aligned while editing.",
    ],
  },
  {
    gif: "/drafting/Gifs/clickbait.gif",
    icon: "FolderSymlink",
    title: "Global Variables",
    description:
      "Use global variables that can be accessed throughout all drafts in the portal for consistency.",
    boxText: [
      "Apply universal figures across documents.",
      "Update once, reflect everywhere automatically.",
      "Ensure multi-document data consistency always.",
    ],
  },
];

export const nextGeneration = [
  {
    src: "/drafting/Save_as_template.png",
    alt: "download in .docx-image",
    heading: "Save Letters as Templates",
    para: "Sheetsway lets you store your audit letters—complete with variables and conditions—as reusable templates. Quickly adapt them across multiple clients or engagements, preserving structure, logic, and efficiency in every draft.",
  },
  {
    src: "/drafting/Designed_for_auditors.png",
    alt: "designed for auditors-image",
    heading: "Designed for auditors",
    para: "Sheetsway, designed by auditors, includes all the essential tools needed for drafting, ensuring precise and efficient audit processes.",
  },
];
