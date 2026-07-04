"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const SKILL_ICONS = {
  HTML: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg",
  CSS: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg",
  JavaScript: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg",
  Python: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
  React: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
  "Node.js": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
  MySQL: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
  MongoDB: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg",
};

const skills = Object.keys(SKILL_ICONS);

export function Skills() {
  return (
    <section id="skills" className="slide-section bg-black relative z-10 overflow-hidden">
      <div className="slide-container">
        <ScrollReveal>
          <span className="section-label">02 — Expertise</span>
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider animate-line-grow" />
          <p className="text-muted-foreground font-light max-w-lg mb-14">
            Technologies and languages I work with.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map((name, index) => (
            <SkillCard key={name} name={name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, index }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -72 : 72, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.35 } }}
      className="h-full"
    >
      <div className="skill-logo-card group cursor-default h-full min-h-[160px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.div
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center relative z-10"
          whileHover={{ scale: 1.12, rotate: 3 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <Image
            src={SKILL_ICONS[name]}
            alt={`${name} logo`}
            width={56}
            height={56}
            className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            unoptimized
          />
        </motion.div>
        <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10">
          {name}
        </span>
      </div>
    </motion.div>
  );
}
