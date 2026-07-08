"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
          <p className="text-muted-foreground font-light max-w-lg mb-10 sm:mb-14 text-[15px] sm:text-base">
            Technologies and languages I work with.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {skills.map((name, index) => (
            <SkillCard key={name} name={name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, index }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <div className="skill-logo-card group cursor-default h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center relative z-10">
          <img
            src={SKILL_ICONS[name]}
            alt={`${name} logo`}
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain brightness-0 invert opacity-70 md:group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
        <span className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground md:group-hover:text-foreground transition-colors duration-300 relative z-10 text-center">
          {name}
        </span>
      </div>
    </motion.div>
  );
}
