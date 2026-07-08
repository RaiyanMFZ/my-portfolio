"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1400&q=70&auto=format&fit=crop";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden z-20 bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Developer workspace with monitors"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/45 md:bg-gradient-to-r md:from-black md:via-black/90 md:to-black/30" />

      <div className="relative z-10 min-h-[100dvh] flex items-end md:items-center pb-16 pt-24 md:py-0 px-5 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="max-w-2xl text-left w-full">
          <motion.p
            className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/50 mb-4 sm:mb-6"
            initial={false}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            className="font-display text-[2.35rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white mb-4 sm:mb-6 tracking-tight"
            initial={false}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            Raiyan Mahfuz
          </motion.h1>

          <div className="h-px bg-white/30 mb-6 sm:mb-8 max-w-[4.5rem]" />

          <motion.p
            className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 leading-snug sm:leading-relaxed max-w-[18rem] sm:max-w-none"
            initial={false}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            Student at Kantonsschule Hottingen
          </motion.p>

          <motion.p
            className="font-sans text-xs sm:text-sm md:text-base text-white/45 mt-2 sm:mt-3 tracking-wide"
            initial={false}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
          >
            Zurich, Switzerland
          </motion.p>
        </div>
      </div>
    </section>
  );
}
