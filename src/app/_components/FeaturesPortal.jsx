import useInterval from "@/hooks/useInterval";
import DynamicIcon from "./DynamicIcon";
import FadeUpAnimation from "./FadeUpAnimation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FeaturesPortal({
  features,
  headingText = "",
  paraText = "",
  boxHeading = "",
  dotDrop = 10,
}) {
  const [currFeature, setCurrFeature] = useInterval(0, features.length, 7000);
  // Mobile feature state will follow the current feature for auto-open behavior
  const [mobileOpenFeature, setMobileOpenFeature] = useState(null);

  // Auto-open the currently selected feature on mobile
  useEffect(() => {
    setMobileOpenFeature(currFeature);
  }, [currFeature]);

  const listVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const handleFeatureClick = (index) => {
    setCurrFeature(index);
    // No need to toggle - it will auto-open based on currFeature
  };

  return (
    <div className="flex flex-col items-center pb-10 container section-spacing mx-auto">
      <FadeUpAnimation className="text-center max-w-2xl lg:mb-28 mb-16">
        <h1 className="text-4xl font-medium font-bodoni">{headingText}</h1>
        <FadeUpAnimation duration={1}>
          <p className="text-gray-400 mt-4 px-4 text-xs max-w-lg mx-auto">
            {paraText}
          </p>
        </FadeUpAnimation>
      </FadeUpAnimation>

      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-10 gap-16 md:gap-60 w-full">
        {/* Desktop visualization - hidden on mobile */}
        <FadeUpAnimation
          className="relative bg-white rounded-[80px] hidden md:block w-60 shadow-[10px_15px_30px_rgba(232,222,255,0.7)] p-5 lg:ml-10"
          duration={0.5}
        >
          <div className="absolute top-[20%] left-[-10%] bg-primary p-3 rounded-xl z-50 shadow-[0px_1px_10px_rgba(0,0,0,0.2)] rotate-45">
            <div className="-rotate-45 ">
              <DynamicIcon
                iconName={features[currFeature].icon}
                className="w-10 h-10 text-white"
              />
            </div>
          </div>

          <div className="flex flex-col items-center my-4 relative gap-10">
            <h2 className="text-2xl font-bold text-gray-600 text-center font-bodoni">
              {boxHeading}
            </h2>
            <div className="w-[1.6px] bg-gray-200 h-36 relative">
              <div
                style={{
                  top: `${10 + currFeature * dotDrop}%`,
                  backgroundColor: `orange`,
                }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ease-in-out"
              ></div>
            </div>
            <img src={features[currFeature].gif} className="w-20" alt="" />
          </div>

          <div
            className="bg-white rounded-2xl p-6 w-64 border-gray-200 absolute top-[20%] left-[75%]"
            style={{
              boxShadow: "10px 15px 30px rgba(232, 222, 255, 0.7)", // Soft purple glow
            }}
          >
            <h4 className="text-sm font-bold text-gray-900 mb-5 text-left">
              {features[currFeature].title}
            </h4>
            <motion.ul
              className="space-y-2"
              key={currFeature}
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {features[currFeature].boxText.map((text, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  key={index}
                  className="grid grid-cols-[1rem_1fr] gap-2 items-center justify-center space-x-4 px-[10px] rounded-md p-1 border border-gray-100 shadow-[0px_0px_10px_rgba(232,222,255,0.7)]"
                >
                  <span className="bg-accent/40 text-gray-900 font-semibold h-6 w-6 flex items-center justify-center rounded-full text-xs">
                    {index + 1}
                  </span>
                  <p className="text-gray-500 font-medium text-xs font-sans">
                    {text}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </FadeUpAnimation>

        {/* Mobile and desktop feature list */}
        <FadeUpAnimation
          duration={1.2}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 gap-x-8 md:gap-x-14 lg:max-w-2xl w-full px-4 md:px-0"
        >
          {features.map((feature, index) => (
            <div key={index} className="w-full">
              {/* Feature header with title and icon - clickable */}
              <div
                className="flex flex-row justify-between items-start gap-4 cursor-pointer"
                onClick={() => handleFeatureClick(index)}
              >
                {/* Left side content */}
                <div className="flex flex-col items-start gap-3">
                  {/* Desktop icon - always visible on desktop */}
                  <div
                    className={`${currFeature === index ? "text-primary" : "text-gray-300"} 
                      mt-1 hidden md:block`}
                  >
                    <DynamicIcon iconName={feature.icon} />
                  </div>
                  
                  {/* Mobile icon - only visible when NOT active */}
                  {mobileOpenFeature !== index && (
                    <div
                      className={`${currFeature === index ? "text-primary" : "text-gray-300"} 
                        mt-1 md:hidden block`}
                    >
                      <DynamicIcon iconName={feature.icon} />
                    </div>
                  )}
                  
                  {/* Desktop title and description - always visible on desktop */}
                  <div className="flex flex-col hidden md:block">
                    <h4
                      className={`text-base font-serif font-bold ${
                        currFeature === index ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs mt-1">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Mobile title and description - only visible when NOT active */}
                  {mobileOpenFeature !== index && (
                    <div className="flex flex-col md:hidden">
                      <h4
                        className={`text-base font-serif font-bold ${
                          currFeature === index ? "text-primary" : "text-gray-800"
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs mt-2">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Mobile-only open/close icon */}
                <div className="md:hidden block">
                  {mobileOpenFeature !== index && (
                    <div className="border border-gray-300 mt-2 rounded-full h-8 w-8 flex items-center justify-center">
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Mobile-only expanded content */}
              <div className="md:hidden block">
                {mobileOpenFeature === index && (
                  <motion.div
                    className="mt-4"
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                  >
                    {/* Mobile content in active mode */}
                    <div className="flex flex-col items-start">
                      {/* 1. Mobile GIF centered horizontally */}
                      {feature.gif && (
                        <div className="w-full flex justify-center mb-3">
                          <img src={feature.gif} className="w-20" alt="" />
                        </div>
                      )}
                      
                      {/* 2. Title left-aligned in active mode */}
                      <h4 className="text-base font-serif font-bold text-primary mb-2">
                        {feature.title}
                      </h4>
                      
                      {/* 3. Description left-aligned when active */}
                      <p className="text-gray-600 text-xs mb-4">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Mobile list items */}
                    <motion.ul className="space-y-2">
                      {feature.boxText.map((text, idx) => (
                        <motion.li
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: idx * 0.1,
                            ease: "easeInOut",
                          }}
                          key={idx}
                          className="grid grid-cols-[1rem_1fr] gap-2 items-center justify-center rounded-md p-2 border border-gray-100 shadow-[0px_0px_5px_rgba(232,222,255,0.5)]"
                        >
                          <span className="bg-accent/40 text-gray-900 font-semibold h-6 w-6 flex items-center justify-center rounded-full text-xs">
                            {idx + 1}
                          </span>
                          <p className="text-gray-500 font-medium text-xs font-sans">
                            {text}
                          </p>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </FadeUpAnimation>
      </div>
    </div>
  );
}