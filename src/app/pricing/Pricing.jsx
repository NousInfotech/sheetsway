"use client";
import Heading from "@/Components/UI/Heading";
import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import Link from "next/link";

import { motion } from "framer-motion";
import ShowSection from "../_components/ShowSection";
import { cardData, elements } from "../_constants/pricing-data";
import TryButton from "../_components/TryButton";
import Button from "../_components/Button";

export default function Pricing() {
  const customPricing = "/contact-us?message=Give me custom pricing";
  return (
    <>
      <div className="flex relative text-center mx-auto justify-center items-center flex-col py-5 gap-8 ">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/Background pattern.png')",
            opacity: 0.08,
          }}
        ></div>
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
        <div className="flex gap-8 relative z-50">
          <Link href={customPricing}>
            <Button
              type="primary"
              className="bg-[#e4f1fc] text-blue-400 hover:bg-blue-100"
            >
              Get Custom Price
            </Button>
          </Link>

          <TryButton type="primary" />
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 mt-5">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="relative p-6 flex flex-col gap-3 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-300 shadow-md"
              whileHover={{ backgroundColor: "#cfc6c6", scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="text-2xl text-zinc-600 flex items-center gap-2">
                {card.icon}
              </div>
              <p className="text-xl font-semibold text-zinc-700">
                {card.title}
              </p>
              <p className="text-zinc-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="my-16 flex flex-col ">
          <h1 className="text-7xl heading mb-5">Full Tier Comparison</h1>
          <h2 className="text-xl text-gray-500 mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </h2>
          {elements.map((tb) => (
            <Table className="mb-10">
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
            <Button type="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
      <ShowSection />
    </>
  );
}
