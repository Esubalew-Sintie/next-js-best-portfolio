"use client";

import { motion } from "framer-motion";

export const MotionH2 = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    className="text-3xl font-bold mb-4"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.h2>
);

export const MotionP = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    className="text-lg leading-relaxed text-muted-foreground"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    {children}
  </motion.p>
);

export const MotionDiv = motion.div;
