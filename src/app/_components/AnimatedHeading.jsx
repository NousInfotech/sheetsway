import { motion } from "framer-motion";

// Variants for text animation
const textVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

//modify if needed
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Reusable TypingText Component
const TypingText = ({ text, className }) => {
  return (
    <motion.span
      variants={textVariants}
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

export default function AnimatedHeading() {
  return (
    <div className="text-gray-800 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl max-sm:text-3xl font-medium font-bodoni max-w-screen-xs tracking-normal ">
        <TypingText text="Financial Audits with" />{" "}
        <TypingText text="AI" className="text-secondary" />{" "}
        <TypingText text="Automation." />
      </h1>
      <p className="text-gray-600 mt-4 font-montserrat sm:text-base text-sm">
        <TypingText text="Leverage AI, OCR, and Custom Risk-Based Audits in One Powerful Platform." />
      </p>
    </div>
  );
}
