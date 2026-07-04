"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "To Do List",
      description: "A simple to do list app built with Next.js and Tailwind CSS",
      tags: ["Next.js", "Tailwind CSS", "Node.js"],
      githubLink: "https://github.com/RaiyanMFZ/my-todo-app",
      image: "/projects/todo-list.png",
    },
    {
      id: 2,
      title: "Tutoring Site",
      description: "A simple tutoring site built for my friend Moses Okwuike",
      tags: ["Next.js", "Tailwind CSS"],
      githubLink: "https://github.com/RaiyanMFZ/nachhilfe_moses",
      image: "/projects/tutoring.png",
    },
    {
      id: 3,
      title: "Budget Tracker",
      description: "A simple Budget Tracker app built with Next.js and Tailwind CSS",
      tags: ["Next.js", "Tailwind CSS"],
      githubLink: "https://github.com/RaiyanMFZ/my-app-budgettracker",
      image: "/projects/budget-tracker.png",
    },
    {
      id: 4,
      title: "Konkursfälle der Schweiz",
      description: "An interactive web app for managing and displaying bankruptcy cases in Switzerland",
      tags: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/im23b-mahfuzr/PrWr_Projekt",
      image: "/projects/konkursfaelle.png",
    },
    {
      id: 5,
      title: "I2B Mensa App",
      description: "Search and save recipes with filtering and favorites",
      tags: ["React", "Tailwind Css", "postgre"],
      githubLink: "https://github.com/MikolajKulig/I2b-Mensa-app",
      image: "/projects/mensa-app.png",
    },
    {
      id: 6,
      title: "Application management system",
      description: "Team-built web hackathon app for managing your application.",
      tags: ["next.js", "postgre", "prisma"],
      githubLink: "https://github.com/aebyl-bzz/hackts",
      image: "/projects/application-system.png",
    },
  ];

  return (
    <div className="slide-container">
      <ScrollReveal>
        <span className="section-label">03 — Work</span>
        <h2 className="section-title">My Projects</h2>
        <div className="section-divider" />
        <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed font-light">
          Here are some of my recent projects. Feel free to check them out!
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-fr items-stretch">
        {projects.map((project, index) => (
          <StaggerItem key={project.id} className="h-full">
            <ProjectCard project={project} index={index} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card group h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="h-52 shrink-0 relative overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-white/30"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 min-h-[3.5rem] line-clamp-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed font-light flex-1 min-h-[5.5rem] line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem] content-start">
          {project.tags.map((tag) => (
            <span key={tag} className="premium-tag">
              {tag}
            </span>
          ))}
        </div>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 group/link mt-auto pt-2"
          >
            <GithubIcon className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
            View on GitHub
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

function GithubIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
