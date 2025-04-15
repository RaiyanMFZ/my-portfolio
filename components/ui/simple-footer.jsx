"use client";

import { cn } from "@/lib/utils";

export function SimpleFooter() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/sadgidmahfuz" },
    { name: "GitHub", href: "https://github.com/sadgidmahfuz" },
    { name: "Email", href: "mailto:sadgidmahfuz@email.com" }
  ];

  return (
    <footer className="relative z-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">Raiyan Mahfuz</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Frontend Developer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-6">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Raiyan Mahfuz. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 