import { motion } from 'framer-motion';
import React from 'react';

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up"
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  direction?: "up" | "none"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === "up" ? 30 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
