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
import Link from "next/link";
import { useState } from "react";

export default function Faq() {
  const [search, setSearch] = useState("");

  //null returs if we use filter then the questions arr will not filter.
  const filterData = !search.length
    ? faq
    : faq
        .map((dt) => {
          const questions = dt.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(search.toLowerCase()) ||
              q.answer.toLowerCase().includes(search.toLowerCase())
          );

          return questions.length > 0 ? { ...dt, questions: questions } : null;
        })
        // not return null
        .filter(Boolean);

  console.log(filterData);

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

        <div className="flex relative flex-col sm:gap-8 gap-6 xl:max-w-screen-xl lg:max-w-screen-lg container mx-auto sm:py-10 py-4">
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
            size="lg" // Default size
            className="w-full text-base sm:text-lg md:text-xl"
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
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg container mx-auto mb-20">
        <div className="sm:mt-14 mt-8 flex flex-col sm:gap-16 gap-8">
          {/**every check where all the results are null or not (when i use only map not filter at the end) */}
          {
            // filterData.every((dt) => dt === null) ? (
            //   <p className="text-xl text-center">No Results Found!🙂</p>
            // )
            !filterData.length ? (
              <p className="text-xl text-center">No Results Found!🙂</p>
            ) : (
              filterData?.map((item) => {
                if (item === null) return;
                return (
                  <div>
                    <p className="sm:text-xl text-lg font-semibold font-sans ">
                      {item?.heading}
                    </p>
                    <br />
                    <Accordion>
                      {item?.questions?.map((item, index) => (
                        <AccordionItem key={item.key} value={item?.question}>
                          <AccordionControl className="max-sm:text-base">
                            {index + 1}. {item?.question}
                          </AccordionControl>
                          <AccordionPanel className="text-gray-500 max-sm:text-xs">
                            {item?.answer}
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })
            )
          }
        </div>
      </div>
    </>
  );
}
