"use client";

import Logo from "./Logo";
import { footerData, icons } from "../_constants/footer-data";
import FadeUpAnimation from "./FadeUpAnimation";
import Link from "next/link";
import { motion } from "framer-motion";

function RenderList({ data }) {
  if (!data) return;
  return (
    <div>
      <h4 className="text-white font-semibold mb-3 font-sans">
        {data.heading}
      </h4>
      <ul className="space-y-2">
        {data.links.map((link) => (
          <motion.li
            key={link.label}
            initial={{
              rotate: 0,
            }}
            whileHover={{
              rotate: -3,
            }}
          >
            <Link
              href={link.href}
              className="hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <FadeUpAnimation>
      <footer className="bg-black text-gray-400 py-14">
        <div className="container mx-auto px-6 lg:px-10 xl:px-20">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Logo & Social Icons */}
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <div className="flex items-center space-x-2 text-2xl font-bold text-white">
                <Logo className="h-8" />
              </div>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                {icons.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="p-2 border border-gray-600 rounded-full hover:text-white"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
              <div className="text-center text-gray-500 text-sm mt-8">
                &copy;{new Date().getFullYear()} A4 Malta Limited.
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
              {footerData.map((section, index) => {
                const name = Object.keys(section)[0];
                const data = section[name];
                return <RenderList key={index} data={data} />;
              })}
            </div>
          </div>
        </div>
      </footer>
    </FadeUpAnimation>
  );
}
