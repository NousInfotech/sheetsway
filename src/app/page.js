import React from "react";
import { Button, Input, ScrollAreaAutosize } from "@mantine/core";
import Navbar from "@/Components/UI/Navbar";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Heading, { SubHeading } from "@/Components/UI/Heading";
import { FaRegCommentAlt } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { CiPen, CiShare2 } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Cta from "@/Components/UI/Cta";
import Footer from "@/Components/UI/Footer";
export const FeatureCard = ({ icon, heading, description }) => (
  <div className="col-span-1 flex flex-col gap-2">
    <span className="text-4xl text-gray-300">{icon}</span>
    <p className="text-xl mt-4 font-bold">{heading}</p>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);
const NumberCard = ({ percentage, description, className }) => (
  <div className={`flex items-center flex-col ${className}`}>
    <p className="text-9xl relative z-1 heading">
      <span className="italic">{percentage}%</span>
    </p>
    <div className="p-2 w-full bg-orange-200 mt-[-40px]" />
    <p className="text-gray-500 mt-4">{description}</p>
  </div>
);
function page() {
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />

        {/* Hero Section */}
        <div className="flex text-center mx-auto justify-center items-center flex-col mt-24 gap-8">
          <Heading
            heading="Lorem ipsum dolor sit amet. Id quia et libero."
            description="Lorem ipsum dolor sit amet. Id error quia et libero voluptatem aut nihil omnis id iusto dignissimos.Lorem ipsum dolor sit amet."
          />
          <div className="flex items-center gap-6">
            <Input
              className="w-[25vw]"
              size="xl"
              radius={10}
              placeholder="Enter your work email."
            />
            <Button className="px-12 text-base" size="xl">
              Try for Free
            </Button>
          </div>
          <Image
            src={`/dash.png`}
            alt="sheetsway logo"
            width={1200}
            className="border-black rounded-[2.5rem] mt-12 border-[14px]"
            height={0}
          />
        </div>

        {/* Collaboraion Section */}
        <div className="my-56 flex flex-col gap-8">
          <Heading
            heading={
              <span>
                Write it in your <br />
                <strong className="text-theme italic bg-orange-100 px-4">
                  Own Style
                </strong>
              </span>
            }
            description="Lorem ipsum dolor sit amet. Id error quia et libero voluptatem aut nihil omnis id iusto dignissimos.Lorem ipsum dolor sit amet."
          />
          <div className="rounded flex flex-col gap-8 mx-auto">
            <div className="bg-zinc-100 rounded flex justify-center items-center p-8 pt-16 pb-0">
              <Image
                src={`/draft.png`}
                className="rounded"
                alt="sheetsway logo"
                width={1200}
                height={0}
              />
            </div>
            <div className="flex gap-8">
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
                <p className="text-xl font-bold mt-8 mb-2">Download in .docx</p>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet. Aut neque sapiente est error
                  asperiores est consequatur recusandae.{" "}
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
          </div>
        </div>

        {/* Client Portal Section */}
        <div className="my-56 flex gap-16">
          <div className="bg-gray-200 rounded w-[125%] p-8 pb-0 pr-0">
            <Image
              src={`/client.png`}
              className="rounded"
              alt="sheetsway logo"
              width={1200}
              height={0}
            />
          </div>
          <div className="flex flex-col gap-16">
            <h1 className="text-6xl heading">
              Keep your
              <br />
              <strong className="text-theme italic bg-orange-100 px-4">
                Client
              </strong>{" "}
              Updated
            </h1>
            <h2 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet. Nam voluptas nisi in quia nesciunt rem
              vitae modi qui rerum animi! Rem quas totam et maiores dolores et
              vitae necessitatibus aut animi Quis ut harum
            </h2>
            <Button
              rightSection={<GoArrowRight />}
              className="w-fit"
              variant="light"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Workspace Portal Section */}
        <div className="my-56 flex gap-16">
          <div className="flex flex-col gap-16">
            <h1 className="text-6xl heading">
              Keep your
              <br />
              <strong className="text-theme italic bg-orange-100 px-4">
                Client
              </strong>{" "}
              Updated
            </h1>
            <h2 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet. Nam voluptas nisi in quia nesciunt rem
              vitae modi qui rerum animi! Rem quas totam et maiores dolores et
              vitae necessitatibus aut animi Quis ut harum
            </h2>
            <Button
              rightSection={<GoArrowRight />}
              className="w-fit"
              variant="light"
            >
              Learn More
            </Button>
          </div>
          <div className="bg-gray-200 rounded w-[125%] p-8 pb-0 pr-0">
            <Image
              src={`/client.png`}
              className="rounded"
              alt="sheetsway logo"
              width={1200}
              height={0}
            />
          </div>
        </div>

        {/* Features */}
        <div className="my-56 w-[90%] flex flex-col gap-16">
          <SubHeading
            heading={
              <p>
                A Plan to <br />
                <strong className="bg-green-100 italic text-green-700 px-4">
                  Succeed
                </strong>{" "}
                at scale.
              </p>
            }
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

        <div className="my-56 mt-72 flex mx-auto justify-around gap-16">
          <NumberCard percentage={98} description={"Of User saved time."} />
          <NumberCard
            percentage={26}
            className="relative top-[-50px]"
            description={"less email sent and recieved."}
          />
          <NumberCard
            percentage={32}
            className="relative top-[-100px]"
            description={"faster project completion."}
          />
        </div>
      </div>
      <div className="mt-56">
        <Cta />
      </div>
      <Footer />
    </ScrollAreaAutosize>
  );
}

export default page;
