import { motion } from "framer-motion";

const textVariants = {
  fast: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.01 },
    },
  },
  slow: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TypingText = ({
  text,
  className = "",
  speed = "fast",
  coloredText = "",
  colorOftext = "text-orange-500",
}) => {
  const chosenSpeed = speed === "slow" ? "slow" : "fast";

  return (
    <motion.span
      variants={textVariants[chosenSpeed]}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className={word === coloredText ? `${colorOftext} font-bold` : ""}
            >
              {char}
            </motion.span>
          ))}
          {/* Space after the word (keeps spacing) */}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.span>
  );
};

export default function AnimatedTextPortal({
  headingText = "",
  paraText = "",
  className = "",
  speed = "fast",
  coloredText = "",
  colorOftext = "text-orange-500",
}) {
  return (
    <div className="text-gray-800 text-center lg:mb-6">
      {/* Heading */}
      {headingText && (
        <h1 className="xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-medium text-gray-700 font-bodoni mb-8">
          <TypingText text={headingText} speed={speed} />
        </h1>
      )}

      {/* Description */}
      <p
        className={`text-gray-500 mt-2 xl:max-w-2xl lg:max-w-lg md:max-w-md sm:max-w-md max-w-sm lg:text-lg md:text-base sm:text-base text-sm mx-auto ${className}`}
      >
        <TypingText
          text={paraText}
          speed={speed}
          coloredText={coloredText}
          colorOftext={colorOftext}
        />
      </p>
    </div>
  );
}
