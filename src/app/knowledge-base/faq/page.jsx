"use client";
import Cta from "@/Components/UI/Cta";
import Footer from "@/Components/UI/Footer";
import Heading, { SubHeading } from "@/Components/UI/Heading";
import Navbar from "@/Components/UI/Navbar";
import { faq } from "@/data/faq";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Input,
  ScrollAreaAutosize,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function page() {
  const [search, setSearch] = useState("");
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] mb-72 lg:p-0 p-8 w-full mx-auto">
        <Navbar />
        <div className="flex relative flex-col mt-24 gap-8">
          <SubHeading
            heading={
              <span>
                Frequently Asked <br />
                Questions
              </span>
            }
          />
          <Input
            onChange={(e) => setSearch(e.target.value)}
            size="xl"
            className="w-full"
            leftSection={<CiSearch />}
            placeholder="Search Questions..."
          />
          <p>
            Haven't found what you're looking for?
            <br />
            <Link href="/contact-us" className="text-secondary">
              Contact Us
            </Link>
          </p>
          <Image
            width={1000}
            height={1000}
            className="absolute h-full object-cover z-[-1] opacity-5 top-0 left-0 w-full"
            src="/back.svg"
          />
        </div>
        <div className="mt-24 flex flex-col gap-16">
          {faq.map((item) => {
            const res = item.questions.filter(
              (p) =>
                p.question.toLowerCase().includes(search.toLowerCase()) ||
                p.answer.toLowerCase().includes(search.toLowerCase())
            );
            if (res.length === 0) return <></>;
            return (
              <div>
                <p className="text-xl font-semibold">{item.heading}</p>
                <br />
                <Accordion>
                  {res.map((item, index) => (
                    <AccordionItem key={item.key} value={item.question}>
                      <AccordionControl>
                        {index + 1}. {item.question}
                      </AccordionControl>
                      <AccordionPanel className="text-gray-500">
                        {item.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </ScrollAreaAutosize>
  );
}

export default page;
