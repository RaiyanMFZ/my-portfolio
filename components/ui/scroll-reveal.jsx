"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export function ScrollReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SlideFromSide({ children, className = "", from = "left", delay = 0 }) {
  const x = from === "left" ? -80 : 80;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.75, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInWords({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
