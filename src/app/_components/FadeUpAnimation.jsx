"use client";

import { motion } from "framer-motion";

export default function FadeUpAnimation({
  children,
  className,
  amount = 0.4,
  duration = 1,
  initialY = 50,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}
