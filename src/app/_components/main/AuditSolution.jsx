"use client";

import AnimatedTextPortal from "@/app/_components/AnimatedTextPortal";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import { features } from "@/app/_constants/audit-solution-data";
import useInterval from "@/hooks/useInterval";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ScrollableFeatures = () => {
  const animationControls = useAnimation();
  const scrollRef = useRef(null);

  const SCROLL_SPEED = 50; // lower = faster

  // Start marquee-like animation
  const startAnimation = async () => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    await animationControls.start({
      x: [-0, -totalWidth],
      transition: {
        ease: "linear",
        duration: totalWidth / SCROLL_SPEED,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="relative overflow-hidden w-full sm:mt-12 mt-6">
      <motion.div
        ref={scrollRef}
        className="flex gap-8 w-max"
        animate={animationControls}
      >
        {/* Duplicate features to create infinite effect */}
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white sm:p-4 my-5 p-2 rounded-lg shadow-[0px_1px_10px_rgba(197,200,205,0.41)] min-w-[100px] sm:min-w-[140px]"
          >
            <img
              src={feature.icon}
              alt={feature.label}
              className="h-8 w-8 sm:h-16 sm:w-16 object-contain mb-2"
            />
            <p className="sm:text-sm text-[10px] font-sans font-medium text-gray-600 text-center mb-6">
              {feature.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};


const AuditSolution = () => {
  const [currFeature, setCurrFeature] = useInterval(0, features.length, 5000);

  return (
    <div className="px-6 py-10 relative z-40">
      {/* Top Border Decoration */}
      <div className="border-t-[30px] realtive z-40 border-[#FFB231] mb-6 -mx-6 shadow-xl"></div>

      <FadeUpAnimation
        amount={0.2}
        duration={0.8}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h1 className="sm:text-3xl text-2xl font-medium text-center font-serif sm:mt-24 mt-10">
          Experience the Ultimate <br />{" "}
          <span className="text-primary">Multi-packed Audit Solution</span>
        </h1>
        <p className="text-center text-gray-600 font-medium mt-6 sm:text-base text-sm">
          Key features users love
        </p>

        {/* Features Grid */}
        <ScrollableFeatures
          setCurrFeature={setCurrFeature}
          currFeature={currFeature}
        />

        {/* Document Extraction Section */}
        <FadeUpAnimation
          amount={0.2}
          duration={0.8}
          className="flex flex-col items-center justify-center"
        >
          <AnimatedTextPortal
            className="lg:text-sm sm:mt-10 mt-14 md:text-sm max-sm:text-xs max-xs:text-xs font-medium text-gray-600 xl:max-w-[60%] lg:max-w-[65%] md:max-w-[70%] "
            paraText={features[currFeature].text}
          />

          <div className="relative w-full max-w-[1440px] lg:max-w-[1000px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto flex items-center justify-center min-h-[15rem] sm:min-h-[22rem] md:min-h-[26rem] lg:min-h-[32rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currFeature}
                src={features[currFeature].src}
                alt={features[currFeature].label}
                // className="absolute w-full h-auto object-contain"
                className="absolute"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </FadeUpAnimation>
      </FadeUpAnimation>
    </div>
  );
};

export default AuditSolution;
