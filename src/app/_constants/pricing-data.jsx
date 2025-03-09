import { Expand, Gift, Sprout, Unlock } from "lucide-react";

export const elements = [
  {
    name: "Usage",
    data: [
      { label: "Collaboration", tier: ["✓", "✗", "✗", "✗", "✗", "✗"] },
      { label: "Communication", tier: ["✗", "✓", "✗", "✗", "✗", "✗"] },
      { label: "Productivity", tier: ["✗", "✗", "✓", "✗", "✗", "✗"] },
      { label: "Project Management", tier: ["✓", "✓", "✓", "✗", "✗", "✗"] },
    ],
  },
  {
    name: "Features",
    data: [
      { label: "Real-time Editing", tier: ["✓", "✓", "✗", "✗", "✗", "✗"] },
      { label: "Task Tracking", tier: ["✗", "✓", "✓", "✗", "✗", "✗"] },
      { label: "File Sharing", tier: ["✗", "✗", "✗", "✓", "✗", "✗"] },
      { label: "Notifications", tier: ["✓", "✗", "✓", "✗", "✓", "✗"] },
    ],
  },
  {
    name: "Accessibility",
    data: [
      { label: "Mobile App", tier: ["✓", "✗", "✗", "✗", "✗", "✗"] },
      { label: "Web App", tier: ["✗", "✓", "✗", "✗", "✗", "✗"] },
      { label: "Offline Mode", tier: ["✗", "✗", "✓", "✗", "✗", "✗"] },
      { label: "Voice Commands", tier: ["✗", "✗", "✗", "✓", "✗", "✗"] },
    ],
  },
];

export const cardData = [
  {
    title: "Scalable",
    icon: <Expand />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Full Access",
    icon: <Unlock />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Grow with Us",
    icon: <Sprout />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Reward Growth",
    icon: <Gift />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
