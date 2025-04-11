import { Facebook, Linkedin, Youtube } from "lucide-react";

export const icons = [
  {
    icon: <Facebook size={16} />,
    href: "a",
  },
  {
    icon: <Linkedin size={16} />,
    href: "b",
  },
  {
    icon: <Youtube size={16} />,
    href: "x",
  },
];

export const footerData = [
  {
    product: {
      heading: "Product",
      links: [
        { label: "Home", href: "/" },
        // { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "/knowledge-base/faq" },
      ],
    },
  },
  {
    solutions: {
      heading: "Solutions",
      links: [
        { label: "Audit Portal", href: "/solution/audit-software" },
        { label: "Drafting", href: "/solution/drafting" },
        { label: "Workspace", href: "/solution/workspace" },
        { label: "Client Portal", href: "/solution/client-portal" },
      ],
    },
  },
  {
    company: {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  },
  {
    more: {
      heading: "More",
      links: [
        { label: "Terms and Conditions", href: "/terms-and-conditions" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "License", href: "/license" },
      ],
    },
  },
];
