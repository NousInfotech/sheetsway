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
      <div className=" max-w-screen-xl mx-auto">
        <div className="flex text-center mx-auto justify-center items-center flex-col mt-14 gap-8">
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
        <div className="grid grid-cols-4 gap-32 mt-20">
          {team.map((item) => (
            <div className="flex flex-col items-center">
              <Image
                width={500}
                height={500}
                className="rounded-b-full w-32 object-cover"
                src={item.src}
              />
              <br />
              <p className="font-semibold">{item.name}</p>
              <p className="text-zinc-500">{item.role}</p>
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
        <div className="my-32 grid grid-cols-2 gap-16">
          <div className="flex flex-col items-end gap-16">
            <Image
              src="https://images.pexels.com/photos/8117462/pexels-photo-8117462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={1200}
              className="rounded-2xl"
              height={1200}
            />
            <Image
              src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-[80%] rounded-2xl"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-16">
            <h4 className="text-7xl heading">
              We're good <br /> neighbors
            </h4>
            <h2 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <Link href="/contact-us?message=Hii, I want to become a part of your journey">
              <button className="relative flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black group">
                <div className="absolute inset-0 flex items-center justify-start">
                  <div className="w-12 h-12 bg-accent rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
                <span className="relative z-10 text-lg font-bold tracking-wide text-theme">
                  Join Us, Make a Change
                </span>
                <ChevronRight className="relative z-10 text-theme" />
              </button>
            </Link>
            <Image
              className="rounded-2xl"
              src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=800"
              width={1200}
              height={1200}
            />
          </div>
        </div>
        <div className="my-24 grid grid-cols-2 gap-16">
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
        </div>
      </div>
    </>
  );
}
