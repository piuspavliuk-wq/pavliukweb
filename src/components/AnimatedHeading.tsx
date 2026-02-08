"use client";

import { motion, useReducedMotion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function AnimatedHeading({
  children,
  className = "",
  as: Tag = "h2",
}: AnimatedHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}
