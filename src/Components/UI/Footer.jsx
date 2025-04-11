"use client";
import * as React from "react";
import Logo from "@/app/_components/Logo";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { name: "Sheetsway Audit Software", href: "/" },
      { name: "Sheetsway Client Connect", href: "/" },
      { name: "Advanced Extraction Excel Plugin", href: "/" },
      { name: "Financial Statement Word Plugin", href: "/" },
    ],
  },
  // {
  //   title: "What we offer?",
  //   links: [
  //     { name: "Customizable Audit Methodology", href: "/" },
  //     { name: "Advanced Procedures Generation", href: "/" },
  //     { name: "Accounting Software Connect", href: "/" },
  //     { name: "Secure Clound Storage", href: "/" },
  //     { name: "Customizable Branding", href: "/" },
  //   ],
  // },
  // {
  //   title: "Who we Serve?",
  //   links: [
  //     { name: "Organizations", href: "/" },
  //     { name: "Enterprise", href: "/" },
  //     { name: "Audit Firms", href: "/" },
  //     { name: "External Auditors", href: "/" },
  //   ],
  // },
  {
    title: "Company",
    links: [
      // { name: "About Us", href: "/" },
      { name: "Meet Our Team", href: "/" },
      // { name: "Newsletters", href: "/" },
      // { name: "Media and Broadcast", href: "/" },
    ],
  },
  {
    title: "Knowledge Base",
    links: [
      { name: "Blogs", href: "/" },
      // { name: "Media and Broadcast", href: "/" },
      // { name: "Case Studies", href: "/" },
      // { name: "Seminars and Webinars", href: "/" },
      { name: "Tutorials & Guides", href: "/" },
      // { name: "Community", href: "/" },
    ],
  },
  {
    title: "Social Media",
    links: [
      // { name: "Twitter", href: "/" },
      { name: "Linkedin", href: "/" },
      { name: "Youtube", href: "/" },
      // { name: "Facebook", href: "/" },
    ],
  },
  // {
  //   title: "Pricing",
  //   links: [
  //     { name: "Overview", href: "/" },
  //     // { name: "License", href: "/" },
  //   ],
  // },
  {
    title: "Partner with us",
    links: [
      { name: "Overview", href: "/" },
      { name: "Grow with us", href: "/" },
    ],
  },
  {
    title: "Care Center",
    links: [
      { name: "Contact Us", href: "/" },
      // { name: "Invest in us", href: "/" },
      { name: "Meet with us", href: "/" },
      // { name: "Career", href: "/" },
      // { name: "Security", href: "/" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-background border-t px-6 lg:px-32 py-12">
      <div className="mx-auto max-w-screen-xl">
        {/* Top Content */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 md:col-span-1 flex flex-col gap-4">
            <Logo className="h-8" />
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-md pt-1 font-semibold">{section.title}</h3>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} A4 Malta. All rights reserved</div>
          <div className="flex items-center gap-4">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">License</a>
            <a href="/">Application Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
