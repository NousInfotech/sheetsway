"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "../AnimatedHeading";
import useInterval from "@/hooks/useInterval";
import useAutoScroll from "@/hooks/useAutoScroll";
import { navigationOptions } from "@/app/_constants/section-1-data";
import Button from "../Button";

export default function FinancialAuditUI() {
  const [currImg, setCurrImg] = useInterval(0, navigationOptions.length, 5000);
  const { containerRef, activeButtonRef } = useAutoScroll(currImg);

  return (
    <div className="lg:min-h-screen text-center flex flex-col items-center lg:mb-60 max-sm:px-12 md:pb-32">
      {/* Hero Section */}
      <div className="pt-8 lg:mb-10 sm:mb-2 mb-0 z-50">
        <AnimatedHeading />
      </div>
      {/* Dashboard Preview */}
      <div className="w-full relative max-sm:-mt-8 flex items-center justify-center">
        <div className="absolute -top-28 z-10 h-full w-full bg-gradient-to-b from-white via-gray-200 to-white"></div>
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mx-auto max-md:w-screen relative z-20">
            <img
              src={navigationOptions[currImg].src}
              alt={navigationOptions[currImg].label}
              className=" max-md:scale-90 lg:scale-105 max-md:translate-y-16 "
            />

            <div className="bg-slate-50 max-md:w-full py-6 w-[78%] text-center md:absolute -bottom-80 left-28 md:rounded-2xl  outline outline-2 outline-white md:outline-offset-8 md:shadow-lightBlack">
              <p className="md:text-3xl text-xl font-medium font-bodoni">
                {navigationOptions[currImg].label}
              </p>

              <p className="lg:text-base text-gray-500 md:text-sm text-xs mt-2 max-md:px-6 ">
                {navigationOptions[currImg].text}
              </p>

              <div
                ref={containerRef}
                className="flex md:flex-wrap overflow-auto scrollbar-hide py-8 gap-4 mt-2 cursor-pointer md:justify-center xs:mx-2"
              >
                {navigationOptions.map((option, index) => (
                  <motion.div
                  onClick={() => setCurrImg(index)}
                  key={index}
                  ref={index === currImg ? activeButtonRef : null}
                  whileHover={{ scale: 1.09 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-3 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center gap-2.5 min-w-[7rem] w-[7rem]"
                  >
                    <span
                      className={`p-1.5 text-white rounded-lg ${index === currImg ? "bg-primary" : "bg-gray-300"
                        }`}
                    >
                      {option.icon}
                    </span>
                    <p className="text-[12px] max-md:scale-90 font-medium text-gray-800">
                      {option.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <Button type="primary">Learn More</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
