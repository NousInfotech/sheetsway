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

  // Variants for the image/info container parent
  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // space out child animations
      },
    },
  };

  // Variant for the image
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  // Variant for the info container
  const infoVariants = {
    hidden: { opacity: 0, y: 20, x: "-50%" },
    visible: { opacity: 1, y: 0, x: "-50%", transition: { duration: 0.8 } },
  };

  return (
    <div className="lg:min-h-screen text-center flex flex-col items-center lg:mb-60 max-sm:px-12 md:pb-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-8 lg:mb-10 sm:mb-2 mb-0 z-50 gap-5 flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl max-sm:text-3xl font-medium font-bodoni tracking-normal">
          Financial Audits <br />
          with <span className="text-secondary">AI</span> Automation.
        </h1>
        <p className="text-gray-600 mt-4 font-montserrat sm:text-base text-sm">
          Leverage AI, OCR, and Custom Risk-Based Audits in One Powerful Platform.
        </p>
        <div className="mt-8 flex w-3/4 mx-auto justify-evenly relative z-20 my-5">
          <Button type="secondary" size="lg">
            Try it for Free
          </Button>
          <Button type="primary">Book an Demo</Button>
        </div>
      </motion.div>

      {/* Dashboard Preview */}
      <div className="w-full relative max-sm:-mt-8 flex items-center justify-center">
        {/* Parent container for image and info container */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto relative z-20"
        >
          <div className="mx-auto max-md:w-screen relative">
            {/* Image fades in first */}
            <motion.img
              src={navigationOptions[currImg].src}
              alt={navigationOptions[currImg].label}
              className="max-md:scale-90 lg:scale-105 max-md:translate-y-16"
              loading="eager"
              variants={imageVariants}
            />

            {/* Info Container fades/slides in second */}
            <motion.div
              variants={infoVariants}
              className="bg-slate-50 max-md:w-full py-6 w-[85%] text-center md:absolute -bottom-72 left-1/2 md:rounded-2xl outline outline-2 outline-white md:outline-offset-[12px] md:shadow-lightBlack"
            >
              <p className="md:text-3xl text-xl font-medium font-bodoni">
                {navigationOptions[currImg].label}
              </p>
              <p className="lg:text-base text-gray-500 md:text-sm text-xs mt-2 max-md:px-6">
                {navigationOptions[currImg].text}
              </p>
              <div
                ref={containerRef}
                className="flex md:flex-wrap overflow-auto scrollbar-hide py-4 gap-4 mt-2 cursor-pointer md:justify-center xs:mx-2"
              >
                {navigationOptions.map((option, index) => (
                  <motion.div
                    onClick={() => setCurrImg(index)}
                    key={index}
                    ref={index === currImg ? activeButtonRef : null}
                    whileHover={{ scale: 1.09 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-3 bg-white shadow-md rounded-xl flex flex-col items-center justify-start gap-2.5 min-w-[7rem] w-[7rem]"
                  >
                    <span
                      className={`p-1.5 text-white rounded-lg ${
                        index === currImg ? "bg-primary" : "bg-gray-300"
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
            </motion.div>
          </div>
        </motion.div>

        {/* Gradient Overlay appears after the main content */}
        <motion.div
          className="absolute -top-28 z-10 h-full w-full bg-gradient-to-b from-white via-gray-200 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
