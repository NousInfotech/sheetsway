import { Eye } from "lucide-react";

export const tabs = [
  {
    icon: <Eye className="text-primary md:size-6 size-4" />,
    btnText: "Easy Upload",
    primaryText: "Effortless Document Upload",
    secondaryText:
      "Easily upload your documents and specify the details. You need to extract using our advanced OCR and AI technology. This step ensures precise data capture tailored to your audit requirements.",
  },
  {
    icon: <Eye className="text-primary md:size-6 size-4" />,
    btnText: "Data Extraction ",
    primaryText: "AI-Powered Data Extraction",
    secondaryText:
      "Automatically extract specified data from your uploaded documents. Our intelligent algorithms accurately identify and retrieve the necessary data, enhancing your audit process.",
  },
  {
    icon: <Eye className="text-primary md:size-6 size-4" />,
    btnText: "Reference and Export",
    primaryText: "Traceable Export & References",
    secondaryText:
      "Effortlessly export the extracted information into a spreadsheet. With each piece of data linked back to the original document through robust referencing. This feature ensures transparency and traceability throughout your audit workflow.",
  },
];

export const features = [
  {
    gif: "/workspace/Gifs/data.gif",
    icon: "File",
    title: "Library Manager",
    description:
      "Manage and access all documents from the primary portal directly within the workspace for easy retrieval and organization.",
    boxText: [
      "Manage documents from single workspace.",
      "Keep everything neatly in reach.",
      "Save time searching for files.",
    ],
  },
  {
    gif: "/workspace/Gifs/search.gif",
    icon: "Eye",
    title: "PDF Viewable",
    description:
      "View PDF documents directly within the workspace to facilitate direct data extraction and reference.",
    boxText: [
      "Open PDFs in one workspace.",
      "Extract data without extra tools.",
      "Minimize clicks for quick reference.",
    ],
  },
  {
    gif: "/workspace/Gifs/resize.gif",
    icon: "FileText",
    title: "Text Extraction",
    description:
      "Highlight text within a document and extract the data into the selected field in the spreadsheet, enhancing accuracy and efficiency.",
    boxText: [
      "Highlight text to capture instantly.",
      "Place selected data into cells.",
      "Eliminate retyping and reduce errors.",
    ],
  },
  {
    gif: "/workspace/Gifs/highlighter.gif",
    icon: "Clipboard",
    title: "Document Reference",
    description:
      "Effortlessly reference any cell in the spreadsheet to a selected document, ensuring consistency and traceability.",
    boxText: [
      "Link spreadsheet cells to documents.",
      "Trace back sources effortlessly now.",
      "Ensure consistency across multiple references.",
    ],
  },
  {
    gif: "/workspace/Gifs/maths.gif",
    icon: "Plus",
    title: "Sum Tool",
    description:
      "Highlight numbers within a document, and utilize OCR and AI to sum the values and extract the total into a selected cell.",
    boxText: [
      "Highlight numbers for automated totals.",
      "Combine OCR and AI calculations.",
      "Reduce manual math mistakes drastically.",
    ],
  },
  {
    gif: "/workspace/Gifs/experience.gif",
    icon: "FilePlus",
    title: "Reconciliation Tool",
    description:
      "Automate the reconciliation process to identify discrepancies between different sets of financial data quickly.",
    boxText: [
      "Spot discrepancies in financial statements.",
      "Compare two data sets quickly.",
      "Confirm matches, highlight missing links.",
    ],
  },
  {
    gif: "/workspace/Gifs/ebook.gif",
    icon: "Download",
    title: "Data Extraction",
    description:
      "Utilize AI and OCR to extract key financial data from client-provided documents into the spreadsheet, streamlining audit schedules and analysis workpapers.",
    boxText: [
      "Extract key numbers from PDFs.",
      "Populate cells automatically with details.",
      "Allow AI to identify fields.",
    ],
  },
  {
    gif: "/workspace/Gifs/bonding.gif",
    icon: "Link",
    title: "Linking",
    description:
      "Link directly to specific cells in the workspace, making referencing from the audit portal easier than ever.",
    boxText: [
      "Connect spreadsheet cells to portal.",
      "Retrieve figures without duplication hassles.",
      "Keep references updated in real-time.",
    ],
  },
];

export const images = [
  { alt: "upload", src: "/workspace/Upload.png" },
  {
    alt: "extract",
    src: "/workspace/Extract.png",
  },
  { alt: "export", src: "/workspace/Export.png" },
];

export const enhancedCollection = [
  {
    src: "/workspace/img1.png",
    alt: "Reconciliation-image",
    heading: "Reconciliation",
    para: "Match transactions from your documents to your general ledger. Highlight discrepancies and ensure accuracy in your financial records.",
  },
  {
    src: "/workspace/img2.png",
    alt: "Referencing-image",
    heading: "Referencing",
    para: "Link extracted data to its source document. Ensure each piece of information is traceable for comprehensive audit trails.",
  },
];

export const workspacePlugin = {
  imgSrc: "/workspace/Microsoft_Excel-Logo.wine.png",
  alt: "workspace-excel-img",
  color: "darkGreen",
  primaryHeading: "Transform any PDF into",
  secondaryHeading: "live Excel data",
  listData: [
    {
      primaryText: "Automate",
      secondaryText: "your data extraction",
    },
    {
      primaryText: "Reference",
      secondaryText: "every figure back to its source PDF",
    },
    {
      primaryText: "Accelerate",
      secondaryText: "audits with AI-driven accuracy",
    },
  ],
  imgURL: "/workspace/excel-placeholder.png",
  videoSrc: "https://www.youtube.com/embed/PjC4RCOCfag"
};
