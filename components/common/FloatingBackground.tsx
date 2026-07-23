"use client";

import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-20 top-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-24 right-20 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/10 blur-3xl"
      />
    </div>
  );
}