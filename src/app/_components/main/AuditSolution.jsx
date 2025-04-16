"use client";

import AnimatedTextPortal from "@/app/_components/AnimatedTextPortal";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import { features } from "@/app/_constants/audit-solution-data";
import useInterval from "@/hooks/useInterval";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ScrollableFeatures = ({ setCurrFeature, currFeature, wasClicked, setWasClicked }) => {
  const scrollRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    if (wasClicked && scrollRef.current && dragRef.current) {
      const container = scrollRef.current;
      const activeButton = dragRef.current.children[currFeature];

      if (activeButton) {
        const containerWidth = container.offsetWidth;
        const activeButtonWidth = activeButton.offsetWidth;
        const activeButtonLeft = activeButton.offsetLeft;

        const scrollLeft =
          activeButtonLeft - containerWidth / 2 + activeButtonWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });

        setWasClicked(false); // reset the flag
      }
    }
  }, [currFeature, wasClicked, setWasClicked]);

  return (
    <div className="relative sm:mt-12 mt-6">
      <div
        ref={scrollRef}
        className="overflow-x-auto px-12 custom-scrollbar-color"
      >
        <motion.div
          ref={dragRef}
          className="inline-flex gap-8 cursor-grab active:cursor-grabbing min-w-max"
          drag="x"
          dragConstraints={{
            left:
              -(
                dragRef.current?.scrollWidth - scrollRef.current?.offsetWidth
              ) || 0,
            right: 0,
          }}
          whileTap={{ cursor: "grabbing" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center w-[100px] md:w-[140px] justify-center bg-white sm:p-4 my-5 p-2 rounded-lg cursor-pointer transition-transform shadow-lg ${index === features.length - 1 ? "mr-12" : ""}`} // <-- Add space only to the last
              whileHover={{ scale: 0.9 }}
              onClick={() => setCurrFeature(index)}
            >
              <img
                src={feature.icon}
                alt={feature.label}
                className="h-8 w-8 sm:h-16 sm:w-16 object-contain mb-2"
              />
              <p className="sm:text-sm text-[10px] font-sans font-medium text-gray-600 text-center mb-6">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

const AuditSolution = () => {
  const [wasClicked, setWasClicked] = useState(false);
  const [currFeature, setCurrFeature] = useInterval(0, features.length, 5000);

  return (
    <div className="px-6 my-10 relative z-40">
      {/* Top Border Decoration */}
      <div className="border-t-[30px] border-primary relative z-40 mb-6 -mx-6 shadow-xl"></div>

      <FadeUpAnimation
        amount={0.2}
        duration={0.8}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h1 className="sm:text-3xl text-2xl font-medium text-center font-serif sm:mt-24 mt-10">
          Experience the Ultimate <br />
          <span className="text-primary">Multi-packed Audit Solution</span>
        </h1>
        <p className="text-center text-gray-600 font-medium mt-6 sm:text-base text-sm">
          Key features users love
        </p>

        <ScrollableFeatures
          setCurrFeature={setCurrFeature}
          currFeature={currFeature}
          wasClicked={wasClicked}
          setWasClicked={setWasClicked}
        />

        <FadeUpAnimation
          amount={0.2}
          duration={0.8}
          className="flex flex-col items-center justify-center"
        >
          <AnimatedTextPortal
            className="lg:text-sm sm:mt-10 mt-14 md:text-sm max-sm:text-xs max-xs:text-xs font-medium text-gray-600 xl:max-w-[60%] lg:max-w-[65%] md:max-w-[70%]"
            paraText={features[currFeature].text}
          />

          <div className="relative w-full max-w-[1440px] lg:max-w-[1000px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto flex items-center justify-center min-h-[15rem] sm:min-h-[22rem] md:min-h-[26rem] lg:min-h-[32rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currFeature}
                src={features[currFeature].src}
                alt={features[currFeature].label}
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
