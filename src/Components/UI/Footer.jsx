"use client";
import * as React from "react";
import Link from "next/link";
import Logo from "@/app/_components/Logo";
import { PopupModal } from "react-calendly";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { name: "Sheetsway Audit Software", href: "/solution/audit-software" },
      { name: "Sheetsway Client Connect", href: "/solution/client-portal" },
      { name: "Advanced Extraction Excel Plugin", href: "/solution/workspace" },
      { name: "Financial Statement Word Plugin", href: "/solution/drafting" },
    ],
  },
  {
    title: "Company",
    links: [{ name: "Meet Our Team", href: "/about-us" }],
  },
  {
    title: "Knowledge Base",
    links: [
      { name: "Tutorials & Guides", href: "/knowledge-base/faq" },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/sheetsway-audit",
      },
      { name: "YouTube", href: "https://www.youtube.com/@Sheetsway" },
    ],
  },
  {
    title: "Partner with us",
    links: [{ name: "Grow with us", href: "/about-us#brd" }],
  },
  {
    title: "Care Center",
    links: [
      { name: "Contact Us", href: "/contact-us" },
      { name: "Meet with us", href: "/" }, // this one will be handled by Calendly modal
    ],
  },
];

export default function FooterSection() {
  const [open, setOpen] = React.useState(false);
  const [rootEl, setRootEl] = React.useState(null);

  React.useEffect(() => {
    // Runs only on client after component mounts
    const el = document.getElementById("calendly-root");
    if (el) {
      setRootEl(el);
    }
  }, []);

  return (
    <footer className="w-full bg-background border-t px-6 lg:px-32 py-12">
      <div className="mx-auto max-w-screen-xl">
        {/* Top Content */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:row-span-3 col-span-2 sm:col-span-3 md:col-span-1 flex flex-col gap-4">
            <Logo className="h-8" />
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-md pt-1 font-semibold">{section.title}</h3>
              {section.links.map((link, linkIndex) => {
                const isExternal =
                  section.title === "Social Media" &&
                  link.href.startsWith("http");

                const isCalendly =
                  section.title === "Care Center" &&
                  link.name === "Meet with us";

                if (isCalendly) {
                  return (
                    <button
                      key={linkIndex}
                      onClick={() => setOpen(true)}
                      className="text-left text-sm text-muted-foreground hover:underline"
                    >
                      {link.name}
                    </button>
                  );
                }

                return isExternal ? (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} A4 Malta. All rights reserved</div>
          <div className="flex items-center gap-4">
            <Link href="/">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/">License</Link>
            <Link href="/">Application Security</Link>
          </div>
        </div>
      </div>
      {rootEl && (
        <PopupModal
          url="https://calendly.com/dhruv-sheetsway/30min"
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={rootEl}
        />
      )}
    </footer>


  );
}
