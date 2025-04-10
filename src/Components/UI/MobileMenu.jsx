'use client'

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Link from "next/link";
import Button from "@/app/_components/Button";
import dynamic from "next/dynamic";
import { ChevronDown, ChevronUp } from "lucide-react";


const DynamicComponentWithNoSSR = dynamic(() => import("./call"), {
    ssr: false,
});

const MobileDropdown = ({ label, children }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left font-medium text-black flex justify-between items-center"
            >
                {label}
                <span>
                    {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        className="py-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MobileMenu = ({
    isMobile,
    isMenuOpen,
    setIsMenuOpen,
    solutions,
    components,
    pricing,
    aboutUs,
    contactUs,
}
) => {
    return (
        <>
            {isMobile && (
                <>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black focus:outline-none text-2xl"
                    >
                        ☰
                    </button>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                key="mobile-menu"
                                className="absolute top-full left-0 w-full bg-white shadow-md p-8 space-y-4 z-50"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <MobileDropdown label="Solutions">
                                    {solutions.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={`${item.href}`}
                                            className="block py-2 text-sm text-gray-700"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </MobileDropdown>

                                <MobileDropdown label="Knowledge Base">
                                    {components.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block py-2 text-sm text-gray-700"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </MobileDropdown>

                                <Link href={pricing} className="block">
                                    Pricing
                                </Link>
                                <Link href={aboutUs} className="block">
                                    Meet Our Team
                                </Link>
                                <Link href={contactUs} className="block">
                                    Contact Us
                                </Link>

                                <div className="flex gap-2 pt-4">
                                    <Button variant="outline">Login</Button>
                                    <DynamicComponentWithNoSSR />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </>
    );
};

export default MobileMenu;
