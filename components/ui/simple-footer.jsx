"use client";

import { cn } from "@/lib/utils";

export function SimpleFooter() {
  return (
    <footer className="relative z-20 bg-gray-900 dark:bg-black border-t border-gray-700 dark:border-gray-800 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 dark:text-blue-300">Raiyan Mahfuz</h3>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Frontend Developer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="https://www.linkedin.com/in/raiyan-mahfuz-52aaa419a/"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => console.log("LinkedIn clicked")}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/RaiyanMFZ"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => console.log("GitHub clicked")}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sadgidmahfuz@gmail.com"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  onClick={(e) => console.log("Email clicked")}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Raiyan Mahfuz. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 