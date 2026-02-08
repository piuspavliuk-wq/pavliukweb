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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0 },
  },
};

interface AnimatedServiceListProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedServiceList({
  children,
  className = "",
}: AnimatedServiceListProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      variants={containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

interface AnimatedServiceCardProps {
  children: React.ReactNode;
}

export function AnimatedServiceCard({ children }: AnimatedServiceCardProps) {
  return (
    <motion.li
      variants={fadeUpVariants}
      className="min-w-[min(18rem,85vw)] shrink-0 sm:min-w-0 sm:shrink"
    >
      <article className="h-full rounded-lg border border-text-secondary/10 bg-surface p-6 transition-[background-color,box-shadow] duration-200 hover:bg-[#25334a] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
        {children}
      </article>
    </motion.li>
  );
}
