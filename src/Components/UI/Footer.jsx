
import * as React from "react";
import { cn } from "@/utils/helper";
import Logo from "@/app/_components/Logo";

function Footer({ className, ...props }) {
  return (
    <div
      data-slot="footer"
      className={cn("bg-background text-foreground pt-12 pb-4", className)}
      {...props}
    />
  );
}

function FooterContent({ className, ...props }) {
  return (
    <div
      data-slot="footer-content"
      className={cn(
        "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        className,
      )}
      {...props}
    />
  );
}

function FooterColumn({ className, ...props }) {
  return (
    <div
      data-slot="footer-column"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function FooterBottom({ className, ...props }) {
  return (
    <div
      data-slot="footer-bottom"
      className={cn(
        "border-border dark:border-border/15 text-muted-foreground mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 text-xs sm:flex-row",
        className,
      )}
      {...props}
    />
  );
}

export { Footer, FooterColumn, FooterBottom, FooterContent };


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
  {
    title: "What we offer?",
    links: [
      { name: "Customizable Audit Methodology", href: "/" },
      { name: "Advanced Procedures Generation", href: "/" },
      { name: "Accounting Software Connect", href: "/" },
      { name: "Secure Clound Storage", href: "/" },
      { name: "Customizable Branding", href: "/" },
    ],
  },
  {
    title: "Who we Serve?",
    links: [
      { name: "Organizations", href: "/" },
      { name: "Enterprise", href: "/" },
      { name: "Audit Firms", href: "/" },
      { name: "External Auditors", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/" },
      { name: "Meet Our Team", href: "/" },
      { name: "Newsletters", href: "/" },
      { name: "Media and Broadcast", href: "/" },
    ],
  },
  {
    title: "Knowledge Base",
    links: [
      { name: "Blogs", href: "/" },
      { name: "Media and Broadcast", href: "/" },
      { name: "Case Studies", href: "/" },
      { name: "Seminars and Webinars", href: "/" },
      { name: "Tutorials & Guides", href: "/" },
      { name: "Community", href: "/" },
    ],
  },

  {
    title: "Social Media",
    links: [
      { name: "Twitter", href: "/" },
      { name: "Linkedin", href: "/" },
      { name: "Youtube", href: "/" },
      { name: "Facebook", href: "/" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { name: "Overview", href: "/" },
      { name: "License", href: "/" },
    ],
  },
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
      { name: "Invest in us", href: "/" },
      { name: "Meet with us", href: "/" },
      { name: "Career", href: "/" },
      { name: "Security", href: "/" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-32 border-t">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <Logo className="h-8" />
            </FooterColumn>
            {footerLinks.map((section, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{section.title}</h3>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-sm text-muted-foreground"
                  >
                    {link.name}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>
              © {new Date().getFullYear()} A4 Malta. All rights reserved
            </div>
            <div className="flex items-center gap-4">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <a href="/">License</a>
              <a href="/">Application Security</a>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
