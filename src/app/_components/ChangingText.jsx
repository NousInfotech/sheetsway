import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textVariants = {
  fast: {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.01 } },
  },
  slow: {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
};

export default function ChangingText({
  headingText = "Sheetsway Portal",
  paraTextStart = "Reach more",
  paraTextEnd = "with Sheetsway Portal",
  className = "",
  speed = 3000,
  changingText = [],
  colorOftext = "text-orange-500",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < changingText.length ? prevIndex + 1 : 0
      );
    }, speed);

    return () => clearInterval(interval);
  }, [changingText, speed]);

  // Find the longest word to set a uniform width

  return (
    <div className="text-gray-800 text-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-6 sm:mb-8">
      {/* Heading with Typing Effect */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-700 font-bodoni mb-6 sm:mb-8">
        <TypingText text={headingText} />
      </h1>

      {/* Description (Para Text) */}
      <p
        className={`text-gray-800 text-2xl sm:text-3xl text-left md:text-4xl lg:text-5xl font-medium font-nunito leading-none ${className}`}
      >
        {paraTextStart}{" "}
        <span className="inline-block relative h-[0.85em] w-[14%]">
          <motion.span
            key={changingText[currentIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className={`absolute -left-1 top-0 w-full text-left ${colorOftext} font-bold`}
          >
            {changingText[currentIndex]}
          </motion.span>
        </span>
        <br />
        {paraTextEnd}
      </p>
    </div>
  );
}

// Typing effect for heading
const TypingText = ({ text, className = "", speed = "slow" }) => {
  return (
    <motion.span
      variants={textVariants[speed]}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
