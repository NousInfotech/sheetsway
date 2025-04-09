import { ActionIcon, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  return (
    <div className="bg-zinc-900 text-gray-500 p-16 grid gap-16 grid-cols-10">
      <div className="col-span-3 flex justify-between flex-col gap-10">
        <div className="flex flex-col gap-8">
          <Image width={200} height={200} src="/logo.svg" alt="" />
          <div className="flex gap-4">
            <ActionIcon
              size="lg"
              className="border bg-zinc-900 hover:bg-zinc-800 border-gray-500"
              radius="xl"
            >
              <TiSocialFacebook />
            </ActionIcon>
            <ActionIcon
              size="lg"
              className="border bg-zinc-900 hover:bg-zinc-800 border-gray-500"
              radius="xl"
            >
              <FaLinkedinIn />
            </ActionIcon>
            <ActionIcon
              size="lg"
              className="border bg-zinc-900 hover:bg-zinc-800 border-gray-500"
              radius="xl"
            >
              <CiYoutube />
            </ActionIcon>
          </div>
        </div>
        <p>@{new Date().getFullYear()} A4 Malta Limited.</p>
      </div>
      <div className="col-span-2 flex flex-col gap-6">
        <p className="font-bold text-white text-lg">Product</p>
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/how-to-guide">How To Guide</Link>
        <Link href="/how-to-guide">FAQ</Link>
      </div>
      <div className="col-span-2 flex flex-col gap-6">
        <p className="font-bold text-white text-lg">Solutions</p>
        <Link href="/about-us">Audit Portal</Link>
        <Link href="/about-us#blogs">Drafting</Link>
        <Link href="/contact-us">Workspace</Link>
        <Link href="/contact-us">Client Portal</Link>
      </div>
      <div className="col-span-2 flex flex-col gap-6">
        <p className="font-bold text-white text-lg">Company</p>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
      <div className="col-span-2 flex flex-col gap-6">
        <p className="font-bold text-white text-lg">More</p>
        <Link href="/terms-and-condition">Terms and Condition</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/license">License</Link>
        <Link href="/about-us#why-us">Why Us?</Link>
      </div>
    </div>
  );
}

export default Footer;
