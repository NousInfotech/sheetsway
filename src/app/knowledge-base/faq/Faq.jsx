"use client";
import { SubHeading } from "@/Components/UI/Heading";
import { faq } from "@/data/faq";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Input,
} from "@mantine/core";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Faq() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/Background pattern.png')",
            opacity: 0.08,
          }}
        ></div>

        <div className="flex relative flex-col gap-8 max-w-screen-xl mx-auto py-10">
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
            leftSection={<Search />}
            placeholder="Search Questions..."
          />
          <p>
            Haven't found what you're looking for?
            <br />
            <Link href="/contact-us" className="text-secondary">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mb-20">
        <div className="mt-14 flex flex-col gap-16">
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
    </>
  );
}
