"use client";
import { FeatureCard } from "@/app/page";
import Cta from "@/Components/UI/Cta";
import Footer from "@/Components/UI/Footer";
import Heading, { SubHeading } from "@/Components/UI/Heading";
import Navbar, { Icon } from "@/Components/UI/Navbar";
import { Button, ScrollAreaAutosize } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { CiPen, CiShare2 } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

function about() {
  const [active, setActive] = useState(0);
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />
        {/* Hero Section */}
        <div className="flex mt-24 gap-32 mx-auto">
          <div className="flex flex-col gap-4">
            <SubHeading
              heading={
                <span className="bg-orange-100 font-semibold italic px-4 text-theme">
                  Drafting
                </span>
              }
            />
            <span className="text-xl text-zinc-500">
              Lorem ipsum dolor sit amet. Id error quia et libero voluptatem aut
              nihil omnis id iusto dignissimos.Lorem ipsum dolor sit amet.
            </span>
            <br />
            <Button
              color="black"
              className="w-fit"
              rightSection={<IoIosArrowForward />}
              variant="light"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex mt-16 gap-16">
          <div>
            <div className="bg-zinc-100 rounded pt-8 pl-8">
              <Image
                src={`/download.png`}
                className="rounded"
                alt="sheetsway logo"
                width={1200}
                height={0}
              />
            </div>
            <p className="text-xl font-bold mt-8 mb-2">
              Import/Export projects
            </p>
            <p className="text-gray-500 text-sm">
              Using the Import/Export functionality, share projects among your
              team, facilitating a seamless workflow without losing progress.
            </p>
          </div>
          <div>
            <div className="bg-zinc-100 rounded pt-8 pl-8">
              <Image
                src={`/var.png`}
                className="rounded"
                alt="sheetsway logo"
                width={1200}
                height={0}
              />
            </div>
            <p className="text-xl font-bold mt-8 mb-2">
              Designed for auditors{" "}
            </p>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet. Aut neque sapiente est error
              asperiores est consequatur recusandae.{" "}
            </p>
          </div>
        </div>
        <div className="my-56">
          <Heading
            heading={"Focus on your Meaningful work"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia"
            }
          />
          <div className="mt-24 ">
            <div className="bg-zinc-100 rounded flex justify-center items-center p-8 pb-0">
              <Image
                src={`/dash.png`}
                className="rounded w-full"
                alt="sheetsway logo"
                width={1200}
                height={0}
              />
            </div>
            <div className="flex mt-12">
              {[
                {
                  label: "Capture",
                  description: "Lorem ipsum dolor sit amet, consectetur",
                },
                {
                  label: "Plan",
                  description: "Lorem ipsum dolor sit amet, consectetur",
                },
                {
                  label: "Excecute",
                  description: "Lorem ipsum dolor sit amet, consectetur",
                },
              ].map((item, index) => (
                <button
                  onClick={() => setActive(index)}
                  className={`w-full p-4 border-b-2 ${
                    active === index && "border-theme"
                  } text-left flex flex-col gap-2`}
                >
                  <p className="text-xl flex items-center gap-4 font-semibold">
                    {active === index && <IoIosArrowForward />} {item.label}
                  </p>
                  <p className="text-gray-500">{item.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="my-56 flex flex-col gap-16">
            <Heading
              heading={<p>A Plan to scale.</p>}
              description="Lorem ipsum dolor sit amet. Id error quia et libero voluptatem aut nihil omnis id iusto dignissimos.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
            />
            <div className="grid grid-cols-2 mt-16 gap-16">
              <FeatureCard
                icon={<FaRegCommentAlt />}
                heading="Comment"
                description="Lorem ipsum dolor sit amet. Id error quia Lorem ipsum dolor sit amet. Id error quia Id error quia Lorem ipsum dolor sit amet. Id error quia"
              />
              <FeatureCard
                icon={<LuLibrary />}
                heading="Library"
                description="Lorem ipsum dolor sit amet. Id error quia Lorem ipsum dolor sit amet. Id error quia Id error quia Lorem ipsum dolor sit amet. Id error quia"
              />
              <FeatureCard
                icon={<CiPen />}
                heading="Custom Draft"
                description="Lorem ipsum dolor sit amet. Id error quia Lorem ipsum dolor sit amet. Id error quia Id error quia Lorem ipsum dolor sit amet. Id error quia"
              />
              <FeatureCard
                icon={<IoEyeOutline />}
                heading="Early Access"
                description="Lorem ipsum dolor sit amet. Id error quia Lorem ipsum dolor sit amet. Id error quia Id error quia Lorem ipsum dolor sit amet. Id error quia"
              />
              <FeatureCard
                icon={<MdHistory />}
                heading="History"
                description="Lorem ipsum dolor sit amet. Id error quia Lorem ipsum dolor sit amet. Id error quia Id error quia Lorem ipsum dolor sit amet. Id error quia"
              />
              <FeatureCard
                icon={<CiShare2 />}
                heading="Share"
                description="Lorem ipsum dolor sit amet. Id error quia Lorem ipsum dolor sit amet. Id error quia Id error quia Lorem ipsum dolor sit amet. Id error quia"
              />
            </div>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </ScrollAreaAutosize>
  );
}

export default about;
