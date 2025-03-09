"use client";

import { NavLink } from "@mantine/core";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import TryButton from "./TryButton";
import { usePathname } from "next/navigation";

const solutions = [
  {
    label: "Audit Software",
    desc: "Manage and execute audit tasks efficiently.",
    icon: "Au",
    href: "audit-software",
  },
  {
    label: "Drafting",
    desc: "Editor for financial statements and audit letters.",
    icon: "Dr",
    href: "drafting",
  },
  {
    label: "Workspace",
    desc: "Online spreadsheets with OCR for fieldwork testing.",
    icon: "Ws",
    href: "workspace",
  },
  {
    label: "Client Portal",
    desc: "Platform for clients to answer queries and upload documents.",
    icon: "Cp",
    href: "client-portal",
  },
];

const knowledgebase = [
  {
    label: "How to guide",
    desc: "Manage and execute audit tasks efficiently.",
    href: "guide",
  },
  {
    label: "FAQ",
    desc: "Editor for financial statements and audit letters.",
    href: "faq",
  },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-6 px-10 relative ">
      <div className="lg:hidden flex items-center">
        <button
          className="text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="hidden lg:block">
        <Logo />
      </div>

      <nav className="hidden lg:flex relative flex-grow justify-center items-center gap-4 font-inter">
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen("solution")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button className="text-gray-700  hover:text-theme hover:bg-accent py-1 px-2 rounded-md flex items-center gap-1">
            Solutions
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-200 ease-in-out `}
            />
          </button>
          {dropdownOpen === "solution" && (
            <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-200 z-[100]">
              {solutions.map((item) => (
                <Link
                  onClick={() => setDropdownOpen("")}
                  href={`/solution/${item.href}`}
                  key={item.label}
                  className="flex items-center p-2 gap-3 border-b cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <span className="p-2 w-10 flex italic justify-center items-center font-extrabold border text-gray-800 rounded-lg ">
                    {item.icon}
                  </span>
                  <div className="">
                    <p className="font-medium  text-xs text-gray-700">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen("knowledge-base")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button className="text-gray-700  hover:text-theme hover:bg-accent py-1 px-2 rounded-md flex items-center gap-1">
            knowledge base
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-200 ease-in-out `}
            />
          </button>
          {dropdownOpen === "knowledge-base" && (
            <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-200 z-[100]">
              {knowledgebase.map((item) => (
                <Link
                  onClick={() => setDropdownOpen("")}
                  href={`/knowledge-base/${item.href}`}
                  key={item.label}
                  className="flex items-center p-2 border-b cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <div>
                    <p className="font-medium text-xs text-gray-700">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {[
          { label: "Pricing", to: "/pricing" },
          { label: "About Us", to: "/about-us" },
          { label: "Contact Us", to: "/contact-us" },
        ].map((link) => (
          <Link
            key={link.label}
            href={link.to}
            className={`text-gray-700  hover:text-theme hover:bg-accent py-1 px-2 rounded-md text-sm md:text-base ${
              pathname === link.to ? "text-theme bg-accent" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex gap-1 md:gap-2">
        {/* <Button type="tertiary">Login</Button> */}
        <NavLink
          target="_blank"
          href="https://audit.sheetsway.com/login"
          className="w-fit"
          label="Login"
        />
        <TryButton />
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-50 shadow-lg flex flex-col items-center justify-center space-y-6 p-6 md:hidden z-50">
          <button
            className="absolute top-5 right-5 text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="text-gray-700 font-semibold text-lg flex items-center gap-1"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            Solutions
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                mobileDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {mobileDropdownOpen && (
            <div className="flex flex-col space-y-2">
              {solutions.map((item) => (
                <Link
                  key={item.label}
                  href={`/solution/${item.href}`}
                  className="text-gray-700 hover:text-primary font-semibold text-md"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          {[
            { label: "Knowledge Base", to: "/knowledge-base" },
            { label: "Pricing", to: "/pricing" },
            { label: "About Us", to: "/about" },
            { label: "Contact Us", to: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.to}
              className="text-gray-700 hover:text-primary font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
