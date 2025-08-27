"use client";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "To Do List",
      description: "A simple to do list app built with Next.js and Tailwind CSS",
      tags: ["Next.js", "Tailwind CSS", "Node.js"],
      githubLink: "https://github.com/RaiyanMFZ/my-todo-app",
      demoLink: "https://my-todo-app-plum-one.vercel.app/"
    },
    {
      id: 2,
      title: "Loginsystem",
      description: "A secure login and registration system built with React",
      tags: ["React", "API", "Tailwind CSS"],
      githubLink: "https://github.com/RaiyanMFZ/Loginsystem",
      demoLink: "https://react-weather-app-raiyanmfz.vercel.app"
    },
    {
      id: 3,
      title: "Calculator App",
      description: "A simple calculator app built with Next.js and Tailwind CSS",
      tags: ["Next.js", "Tailwind CSS",],
      githubLink: "https://github.com/RaiyanMFZ/my-app-calculator",
    },
    {
      id: 4,
      title: "Konkursfälle der Schweiz",
      description: "An interactive web app for managing and displaying bankruptcy cases in Switzerland",
      tags: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/im23b-mahfuzr/PrWr_Projekt",
      demoLink: "https://konkursfaelle.vercel.app/"
    },
    {
      id: 5,
      title: "I2B Mensa App",
      description: "Search and save recipes with filtering and favorites",
      tags: ["React", "Tailwind Css", "postgre"],
      githubLink: "https://github.com/MikolajKulig/I2b-Mensa-app"
    },
    {
      id: 6,
      title: "Application mangement system",
      description: "Team-built web hackathon app for managing your application.",
      tags: ["next.js", "postgre", "prisma"],
      githubLink: "https://github.com/aebyl-bzz/hackts",
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my recent projects. Feel free to check them out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 h-40 sm:h-48 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-blue-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.tags.map((tag) => {
            return (
              <span 
                key={tag} 
                className={`px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-white-700 dark:text-white-300 rounded-full text-xs font-medium`}
              >
                {tag}
              </span>
            );
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <GithubIcon className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Demo
          </a>
        </div>
      </div>
    </div>
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
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
} 