import Footer from "@/Components/UI/Footer";
import Heading from "@/Components/UI/Heading";
import Navbar from "@/Components/UI/Navbar";
import { Avatar, ScrollAreaAutosize } from "@mantine/core";
import Image from "next/image";
import React from "react";

function about() {
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />
        <div className="flex text-center mx-auto justify-center items-center flex-col mt-24 gap-8">
          <Heading
            heading={
              <span>
                A Tools for{" "}
                <span className="text-green-500 italic bg-green-100 px-4">
                  future
                </span>{" "}
                of work
              </span>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
        </div>
        <div className="grid grid-cols-4 gap-32 mt-24">
          {[
            {
              name: "Cleven Carl D'amato",
              role: "Founder and CEO",
            },
            {
              name: "Jean Vella",
              role: "Co-Founder and CCO",
            },
            {
              name: "Xiaoyang Lou",
              role: "Co-Founder and CFO",
            },
            {
              name: "Dhruv Aggarwal",
              role: "Co-Founder and CTO",
            },
          ].map((item) => (
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-32 object-cover h-32"
                src={
                  "https://png.pngtree.com/background/20230525/original/pngtree-anime-girl-holds-a-pumpkin-and-wears-black-hat-picture-image_2735703.jpg"
                }
              />
              <br />
              <p className="font-semibold">{item.name}</p>
              <p className="text-zinc-500">{item.role}</p>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h4>How we Thrive</h4>
          </div>
        </div>
        <div className="my-56">
          <Heading
            heading="Sheetsway in the News"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
          />
          <div className="grid grid-cols-4 text-center gap-8 mt-24">
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              Who'sWho.mt
            </div>
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              Times of Malta
            </div>
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              Lovin Malta
            </div>
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              EU Startups
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ScrollAreaAutosize>
  );
}

export default about;
