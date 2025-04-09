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
        <div className="flex sm:gap-8 gap-4 relative z-50">
          <Link href={customPricing}>
            <button
              type="primary"
              className="bg-[#e4f1fc] text-blue-400 hover:bg-blue-100 font-semibold font-sans lg:px-6 lg:py-3 px-4 py-2 max-sm:text-sm rounded-lg shadow-md"
            >
              Get Custom Price
            </button>
          </Link>

          <TryButton type="primary" />
        </div>
      </div>

      <div className="grid xs:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6 xs:my-20 my-10 sm:mx-20 mx-10">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="relative sm:p-6 p-4 flex flex-col gap-3 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-300 shadow-md"
            whileHover={{ backgroundColor: "#cfc6c6", scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="sm:text-2xl text-xl text-zinc-600 flex items-center gap-2">
              {card.icon}
            </div>
            <p className="sm:text-xl text-base font-semibold text-zinc-700">
              {card.title}
            </p>
            <p className="text-zinc-600 max-sm:text-sm">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="container lg:max-w-screen-lg mx-auto px-4">
        <div className="sm:my-16 my-8 flex flex-col ">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl heading md:mb-5 sm:mb-3 mb-2">
            Full Tier Comparison
          </h1>
          <h2 className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-500  mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </h2>

          {/* Responsive Table Container */}
          <div className="overflow-x-auto ">
          {elements.map((tb) => (
  <Table
    key={tb.name} className="mb-10 w-full min-w-[700px] ">
                <TableThead className="border">
                  <TableTr className="bg-zinc-100 ">
                    <TableTh className="p-4">{tb.name}</TableTh>
                    <TableTh className="p-4 text-center w-32 sm:w-44">
                      TIER 1
                    </TableTh>
                    <TableTh className="p-4 text-center w-32 sm:w-44">
                      TIER 2
                    </TableTh>
                    <TableTh className="p-4 text-center w-32 sm:w-44">
                      TIER 3
                    </TableTh>
                    <TableTh className="p-4 text-center w-32 sm:w-44">
                      TIER 4
                    </TableTh>
                    <TableTh className="p-4 text-center w-32 sm:w-44">
                      TIER 5
                    </TableTh>
                    <TableTh className="p-4 text-center w-32 sm:w-44">
                      TIER 6
                    </TableTh>
                  </TableTr>
                </TableThead>
                <TableTbody className="border">
                  {tb.data.map((pricing) => (
                    <TableTr key={pricing.label}>
                      <TableTd className="p-4">{pricing.label}</TableTd>
                      {pricing.tier.map((tier, index) => (
                        <TableTd
                          key={index}
                          className={`font-bold text-center ${
                            tier === "✗"
                              ? "text-red-500"
                              : tier === "✓"
                              ? "text-green-500"
                              : ""
                          }`}
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
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between p-5 sm:p-8 bg-zinc-50 rounded text-center lg:text-left">
          <div className="w-full lg:w-[75%]">
            <h1 className="text-2xl sm:text-3xl font-bold">Get Custom Plan</h1>
            <p className="text-sm md:text-lg text-gray-500 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <Link href={customPricing}>
            <Button type="secondary" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <ShowSection />
    </>
  );
}
