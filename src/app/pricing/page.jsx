"use client";
import Cta from "@/Components/UI/Cta";
import Footer from "@/Components/UI/Footer";
import Heading from "@/Components/UI/Heading";
import Navbar from "@/Components/UI/Navbar";
import {
  Button,
  ScrollAreaAutosize,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import {
  FaExpandArrowsAlt,
  FaUnlockAlt,
  FaSeedling,
  FaGift,
} from "react-icons/fa";
import { useOpenBookADemo } from "../BookADemoModal";
import Link from "next/link";

const elements = [
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

const cardData = [
  {
    title: "Scalable",
    icon: <FaExpandArrowsAlt />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Full Access",
    icon: <FaUnlockAlt />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Grow with Us",
    icon: <FaSeedling />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Reward Growth",
    icon: <FaGift />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function about() {
  const call = useOpenBookADemo();
  const customPricing = "/contact-us?message=Give me custom pricing";
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />
        <div className="flex relative text-center mx-auto justify-center items-center flex-col mt-24 gap-8">
          <Heading
            heading={
              <span>
                Our Software for your
                <br />
                whole team
                <span className="text-theme italic bg-orange-100 px-4">
                  needs
                </span>
              </span>
            }
            description="Try Sheetsway for 30 days to start connected with all your teams. Cancel any time. No Credit card required."
          />
          <div className="flex gap-8">
            <Link href={customPricing}>
              <Button
                color="blue"
                variant="light"
                className="px-12 text-base"
                size="xl"
              >
                Get Custom Price
              </Button>
            </Link>
            <Button onClick={call} className="px-12 text-base" size="xl">
              Try for Free
            </Button>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className="absolute h-full object-cover z-[-1] opacity-5 top-0 left-0 w-full"
              src="/back.svg"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 my-24 gap-8">
          {cardData.map(({ icon, title, description }, index) => (
            <div className="bg-zinc-100 text-left p-4 flex flex-col gap-4 rounded-lg">
              <div className="text-2xl text-zinc-500 heading flex items-center gap-2">
                {icon}
              </div>
              <p className="text-xl font-semibold">{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="my-56 flex flex-col gap-16">
          <h1 className="text-7xl heading">Full Tier Comparison</h1>
          <h2 className="text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </h2>
          {elements.map((tb) => (
            <Table>
              <TableThead>
                <TableTr className="bg-zinc-100">
                  <TableTh className="p-4">{tb.name}</TableTh>
                  <TableTh className="p-4 text-center w-44">TIER 1</TableTh>
                  <TableTh className="p-4 text-center w-44">TIER 2</TableTh>
                  <TableTh className="p-4 text-center w-44">TIER 3</TableTh>
                  <TableTh className="p-4 text-center w-44">TIER 4</TableTh>
                  <TableTh className="p-4 text-center w-44">TIER 5</TableTh>
                  <TableTh className="p-4 text-center w-44">TIER 6</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {tb.data.map((pricing) => (
                  <TableTr key={pricing.label}>
                    <TableTd className="p-4">{pricing.label}</TableTd>
                    {pricing.tier.map((tier) => (
                      <TableTd
                        className={`font-bold text-center ${
                          tier === "✗" && " text-red-500"
                        } ${tier === "✓" && "text-green-500"}`}
                      >
                        {tier}
                      </TableTd>
                    ))}
                  </TableTr>
                ))}
              </TableTbody>
            </Table>
          ))}
        </div>
        <div className="flex gap-8 items-center justify-between p-8 bg-zinc-50 rounded">
          <div className="w-[75%]">
            <h1 className="text-3xl heading">Get Custom Plan</h1>
            <br />
            <h2 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </h2>
          </div>
          <Link href={customPricing}>
            <Button className="shrink-0" variant="light" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <Cta />
      <Footer />
    </ScrollAreaAutosize>
  );
}

export default about;
