"use client";
import useWindowPosition from "@/hooks/useWindowPosition";
import { Button, NavLink, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const data = [
  {
    label: "About Us",
    description: "Item with description",
    link: "/about-us",
  },
  {
    label: "Solution",
    description: "Item with description",
    link: "/solution",
  },
  {
    label: "Pricing",
    description: "Item with description",
    link: "/pricing",
  },
  {
    label: "How to Guide",
    description: "Item with description",
    link: "/how-to-guide",
  },
  {
    label: "Contact Us",
    description: "Item with description",
    link: "/contact-us",
  },
];
function Navbar() {
  const pathname = usePathname();
  return (
    <div className="lg:py-8 py-2 sticky items-baseline backdrop-blur-sm z-10 justify-between flex top-0">
      <Link href="/">
        <Image src={`/logo.svg`} alt="sheetsway logo" width={150} height={0} />
      </Link>
      <div className="flex gap-8 items-center">
        {data.map((item) => (
          <Link href={item.link}>
            <NavLink
              active={pathname === item.link}
              className="w-fit"
              label={item.label}
              key={item.label}
            />
          </Link>
        ))}
      </div>
      <div className="item-center gap-2 flex">
        <NavLink className="w-fit" label="Login" />
        <Button variant="light">Try for Free</Button>
      </div>
    </div>
  );
}

export default Navbar;
