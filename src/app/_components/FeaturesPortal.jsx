import useInterval from "@/hooks/useInterval";
import DynamicIcon from "./DynamicIcon";
import FadeUpAnimation from "./FadeUpAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesPortal({
  features,
  headingText = "",
  paraText = "",
  boxHeading = "",
  dotDrop = 10,
}) {
  const [currFeature, setCurrFeature] = useInterval(0, features.length, 7000);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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

      <div className="flex flex-col md:flex-row items-center space-x-10 gap-60">
        <FadeUpAnimation
          className="relative bg-white rounded-[80px] hidden md:block w-60 shadow-[10px_15px_30px_rgba(232,222,255,0.7)] p-5"
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
                className={`absolute left-1/2 -translate-x-1/2  -translate-y-1/2 w-2 h-2 bg-gray-200 rounded-full transition-all duration-300 ease-in-out`}
              ></div>
            </div>
            <Image src={features[currFeature].gif} className="w-20 " alt="" />
          </div>

          <div
            className="bg-white rounded-2xl p-6 w-64 border-gray-200 absolute top-[20%] left-[75%] "
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

        <FadeUpAnimation
          duration={1.2}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-14 lg:max-w-2xl"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 cursor-pointer"
              onClick={() => setCurrFeature(index)}
            >
              <div
                className={` ${currFeature === index ? "text-primary" : "text-gray-300"
                  }`}
              >
                <DynamicIcon iconName={feature.icon} />
              </div>
              <div>
                <h4
                  className={`text-base font-serif font-bold ${currFeature === index ? "text-primary" : "text-gray-800"
                    }`}
                >
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </div>
            </div>
          ))}
        </FadeUpAnimation>
      </div>
    </div>
  );
}
