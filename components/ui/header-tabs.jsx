"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import Link from "next/link";

export function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  
  useEffect(() => {
    const sections = [
      { id: "home", element: document.body }, // Home is the default
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact", element: document.getElementById("contact") }
    ];

    const handleScroll = () => {
      if (isScrolling) return; // Skip scroll detection if programmatic scrolling
      
      const scrollPosition = window.scrollY + 100; // Offset for better UX
      
      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section.element) continue;
        
        const offsetTop = getOffsetTop(section.element);
        
        if (scrollPosition >= offsetTop) {
          setActiveTab(section.id);
          break;
        }
      }
    };
    
    // Helper function to get element's top position
    function getOffsetTop(element) {
      let offsetTop = 0;
      while(element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
      }
      return offsetTop;
    }
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check after a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      handleScroll();
    }, 300);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);
  
  const handleTabClick = (value) => {
    // Prevent scroll detection during programmatic scrolling
    setIsScrolling(true);
    setActiveTab(value);
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Scroll to the section
    const element = document.getElementById(value);
    const headerOffset = 80; // Height of your header + some padding
    
    if (value === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Re-enable scroll detection after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Slightly longer than typical scroll animation
  };
  
  return (
    <header className="sticky top-0 z-30 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" onClick={() => handleTabClick("home")} className="text-blue-500 dark:text-blue-400 text-xl font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300">
          Raiyan Mahfuz
        </Link>
        
        <div className="flex-1 flex justify-center">
          <div className="bg-white/40 dark:bg-gray-800/40 rounded-full p-1 shadow-sm flex">
            <button 
              onClick={() => handleTabClick("home")}
              className={`rounded-full px-4 py-2 transition-all duration-300 ${
                activeTab === "home" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleTabClick("projects")}
              className={`rounded-full px-4 py-2 transition-all duration-300 ${
                activeTab === "projects" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleTabClick("contact")}
              className={`rounded-full px-4 py-2 transition-all duration-300 ${
                activeTab === "contact" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
        
        <ThemeSwitch />
      </div>
    </header>
  );
} 