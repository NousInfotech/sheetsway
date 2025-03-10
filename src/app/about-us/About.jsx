import Heading from "@/Components/UI/Heading";
import { Badge, Button } from "@mantine/core";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { badges, team } from "../_constants/about-us-data";

export default function About() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex text-center mx-auto justify-center items-center flex-col sm:mt-14 mt-4 gap-8">
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
        {/* <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-32 gap-4 sm:mt-20 mt-10"> */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,1fr))]  gap-4 sm:mt-20 mt-8">
          {team.map((item) => (
            <div className="flex flex-col items-center font-sans">
              <Image
                width={500}
                height={500}
                className="rounded-b-full sm:w-32 w-20 object-cover mb-2"
                src={item.src}
              />
              {/* <br /> */}
              <p className="font-semibold max-sm:text-sm">{item.name}</p>
              <p className="text-zinc-500 max-sm:text-xs">{item.role}</p>
              <div className="flex items-center gap-2">
                <Button variant="default" className="p-0 border-none text-lg">
                  <CiLinkedin />
                </Button>
                <Button variant="default" className="p-0 border-none text-lg">
                  <CiMail />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-0">
          <div className="flex flex-col items-center md:items-end gap-8 md:gap-16">
            <Image
              src="https://images.pexels.com/photos/8117462/pexels-photo-8117462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={1200}
              height={1200}
              className="rounded-2xl md:w-[90%] w-[85%] shadow-xl"
              alt="Image 1"
            />
            <Image
              src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={1000}
              height={1000}
              className="rounded-2xl md:w-[80%] w-[75%] shadow-md"
              alt="Image 2"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-8 md:gap-16 text-center md:text-left font-sans">
            <h4 className="text-4xl md:text-7xl font-bold">
              We're good <br /> neighbors
            </h4>
            <h2 className="text-base sm:text-xl text-gray-500 max-sm:max-w-[95%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <Link href="/contact-us?message=Hii, I want to become a part of your journey">
              <button className="relative flex items-center justify-center md:justify-start gap-2 px-6 py-3 w-full md:w-auto text-sm font-semibold text-black group">
                <div className="absolute inset-0 flex items-center justify-center md:justify-start">
                  <div className="w-12 h-12 bg-accent rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
                <span className="relative z-10 text-lg font-bold tracking-wide text-theme">
                  Join Us, Make a Change
                </span>
                <ChevronRight className="relative z-10 text-theme" />
              </button>
            </Link>
            <Image
              src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=800"
              width={1200}
              height={1200}
              className="rounded-2xl w-full md:w-[90%]"
              alt="Image 3"
            />
          </div>
        </div>

        {/* <div className="my-24 grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-16">
            <h4 className="text-7xl heading">How we Thrive</h4>
            <h2 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          <div className="flex flex-wrap gap-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="relative flex items-center bg-zinc-100  gap-4 px-4 rounded-3xl w-fit cursor-pointer group overflow-hidden"
              >
                <div className="relative w-8 h-8 scale-125 bg-accent rounded-full z-10 flex items-center justify-center transition-colors duration-500 ease-in-out ">
                  {badge.leftSection}
                </div>

                <p className="relative z-10 text-xl font-normal text-black capitalize transition-colors duration-500 ease-in-out group-hover:text-white">
                  {badge.text}
                </p>

                <div
                  className="absolute inset-0 bg-theme rounded-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"
                  style={{ transformOrigin: "left 50%" }}
                ></div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col gap-8 md:gap-16">
            <h4 className="text-4xl md:text-7xl heading">How we Thrive</h4>
            <h2 className="text-lg md:text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>

          {/* Right Section (Badges) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="relative flex items-center bg-zinc-100 gap-4 px-4 py-2 rounded-3xl w-fit cursor-pointer group overflow-hidden"
              >
                <div className="relative w-8 h-8 scale-125 bg-accent rounded-full z-10 flex items-center justify-center transition-colors duration-500 ease-in-out">
                  {badge.leftSection}
                </div>

                <p className="relative z-10 text-lg md:text-xl font-normal text-black capitalize transition-colors duration-500 ease-in-out group-hover:text-white">
                  {badge.text}
                </p>

                <div
                  className="absolute inset-0 bg-theme rounded-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"
                  style={{ transformOrigin: "left 50%" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
