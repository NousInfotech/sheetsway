"use client";

import Heading from "@/Components/UI/Heading";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { badges, team } from "../_constants/about-us-data";
import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      backgroundColor: "#fff",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };


  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex text-center mx-auto justify-center items-center flex-col sm:mt-14 mt-4 gap-8">
          <Heading
            heading={
              <span>
                The{" "}
                <span className="text-green-500 italic bg-green-100 px-4">
                  Innovators
                </span>{" "} <br />
                Behind Your Success
              </span>
            }
            description="At Sheetsway, our visionary founders are dedicated to pushing the boundaries of what's possible in audit automation. Meet the team driving your business forward."
          />
        </div>
        {/* <div className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,15rem))] justify-between gap-4 sm:mt-20 mt-8"> */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-[repeat(1,15rem)] lg:grid-cols-[repeat(3,15rem)] lg:justify-center justify-center gap-4 sm:mt-20 mt-5"
        >
          {team.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                backgroundColor: i % 2 === 0 ? "#FFCE33" : "#3B4EFF",
                color: "white",
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                rotate: 3,
              }}
              className="flex flex-col items-center font-sans p-2 rounded-xl"
            >
              <Image
                width={500}
                height={500}
                className="rounded-b-full sm:w-32 w-20 object-cover mb-2"
                src={item.src}
                alt="img"
              />
              <p className="font-semibold max-sm:text-sm">{item.name}</p>
              <p className="max-sm:text-xs">{item.role}</p>
              <div className="flex items-center gap-2 mt-2">
                <Link href={"#"}>
                  <CiLinkedin size={16} />
                </Link>
                <Link href={"#"}>
                  <CiMail size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>


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
          <div id="brd" className="flex flex-col items-center md:items-start gap-8 md:gap-16 text-center md:text-left font-sans">
            <h4 className="text-4xl md:text-7xl font-bold font-bodoni">
              Become a <br />
              Regional <br />
              Distributor
            </h4>

            <h2 className="text-base sm:text-xl text-gray-500 max-sm:max-w-[95%]">
              We invite you to join our team as a regional distributor. This is your chance to partner with a forward-thinking company and contribute to our success. Reach out to us to discover more about this exciting opportunity and how you can help us grow.
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

        <div className="sm:my-24 my-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-10">
          {/* Left Section */}
          <div className="flex flex-col md:gap-y-8 lg:gap-16">
            <h4 className="sm:text-5xl text-4xl lg:text-7xl heading sm:mb-5 mb-4">
              How we Thrive
            </h4>
            <h2 className="sm:text-lg text-base lg:text-xl text-gray-500">
              Our success is intertwined with the well-being of our community. We work hand-in-hand with local partners and neighbors to drive positive change and development
            </h2>
          </div>

          {/* Right Section (Badges) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 lg:gap-8">
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
