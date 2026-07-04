"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=2400&q=85&auto=format&fit=crop";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden z-20"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
        role="img"
        aria-label="Developer programming at a desk with multiple monitors"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/25" />
      <motion.div
        className="absolute inset-0 bg-black/10"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="max-w-2xl text-left">
          <motion.p
            className="font-sans text-xs md:text-sm uppercase tracking-[0.35em] text-white/50 mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Portfolio 2026
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-white mb-6 tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
          >
            Raiyan Mahfuz
          </motion.h1>

          <motion.div
            className="h-px bg-white/30 mb-8 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.55, ease }}
          />

          <motion.p
            className="font-sans text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
          >
            Student at Kantonsschule Hottingen
          </motion.p>

          <motion.p
            className="font-sans text-sm md:text-base text-white/45 mt-3 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
          >
            Zurich, Switzerland
          </motion.p>
        </div>
      </div>
    </section>
  );
}
