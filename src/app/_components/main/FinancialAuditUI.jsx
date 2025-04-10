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
    <div className="text-center flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 lg:mb-60 md:mb-48 sm:mb-32 mb-24 md:pb-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-8 lg:mb-10 md:mb-6 sm:mb-4 mb-2 z-50 gap-4 sm:gap-5 flex flex-col justify-center items-center max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-bodoni tracking-normal">
          Financial Audits <br />
          with <span className="text-secondary">AI</span> Automation.
        </h1>
        <p className="text-gray-600 mt-2 sm:mt-4 font-montserrat text-sm sm:text-base px-2 sm:px-6 md:px-8 lg:px-0">
          Leverage AI, OCR, and Custom Risk-Based Audits in One Powerful Platform.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-3/4 mx-auto justify-center items-center sm:justify-evenly relative z-20 my-3 sm:my-5">
          <Button type="secondary" size="lg" className="w-full sm:w-auto">
            Try it for Free
          </Button>
          <Button type="primary" className="w-full sm:w-auto">
            Book an Demo
          </Button>
        </div>
      </motion.div>

      {/* Dashboard Preview */}
      <div className="w-full relative -mt-4 sm:mt-0 flex items-center justify-center">
        {/* Parent container for image and info container */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full mx-auto relative z-20"
        >
          <div className="mx-auto w-full relative">
            {/* Image fades in first */}
            <motion.img
              src={navigationOptions[currImg].src}
              alt={navigationOptions[currImg].label}
              className="w-full object-contain scale-90 sm:scale-95 md:scale-100 lg:scale-105 translate-y-8 sm:translate-y-12 md:translate-y-16"
              loading="eager"
              variants={imageVariants}
            />

            {/* Info Container fades/slides in second */}
            <motion.div
              variants={infoVariants}
              className="bg-slate-50 w-11/12 sm:w-10/12 md:w-[85%] py-4 md:py-6 text-center absolute -bottom-64 sm:-bottom-68 md:-bottom-72 left-1/2 transform -translate-x-1/2 rounded-xl md:rounded-2xl outline outline-2 outline-white outline-offset-[6px] md:outline-offset-[12px] shadow-md md:shadow-lightBlack"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-medium font-bodoni px-2">
                {navigationOptions[currImg].label}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 sm:mt-2 px-3 sm:px-4 md:px-6">
                {navigationOptions[currImg].text}
              </p>
              <div
                ref={containerRef}
                className="flex lg:flex-wrap max-[425px]:overflow-x-auto max-[425px]:scrollbar-hide py-3 md:py-4 gap-2 sm:gap-3 md:gap-4 mt-2 cursor-pointer justify-start md:justify-center px-3 sm:px-4"
              >
                {navigationOptions.map((option, index) => (
                  <motion.div
                    onClick={() => setCurrImg(index)}
                    key={index}
                    ref={index === currImg ? activeButtonRef : null}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-2 sm:px-3 py-2 sm:py-3 bg-white shadow-md rounded-lg sm:rounded-xl flex flex-col items-center justify-start gap-1 sm:gap-2 md:gap-2.5 min-w-[5rem] sm:min-w-[6rem] md:min-w-[7rem] w-[5rem] sm:w-[6rem] md:w-[7rem] flex-shrink-0"
                  >
                    <span
                      className={`p-1 sm:p-1.5 text-white rounded-lg ${index === currImg ? "bg-primary" : "bg-gray-300"
                        }`}
                    >
                      {option.icon}
                    </span>
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-gray-800">
                      {option.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6">
                <Button type="primary">Learn More</Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Gradient Overlay appears after the main content */}
        <motion.div
          className="absolute -top-16 sm:-top-20 md:-top-24 lg:-top-28 z-10 h-full w-full bg-gradient-to-b from-white via-gray-200 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
}