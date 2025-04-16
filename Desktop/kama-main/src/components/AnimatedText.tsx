"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: "heading" | "paragraph";
}

export default function AnimatedText({ 
  children, 
  className = "", 
  delay = 0,
  type = "paragraph"
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: type === "heading" ? 20 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 