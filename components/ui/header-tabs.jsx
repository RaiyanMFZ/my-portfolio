"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import Link from "next/link";

export function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef(null);
  
  useEffect(() => {
    const sections = [
      { id: "home", element: document.body }, 
      { id: "about", element: document.getElementById("about") },
      { id: "skills", element: document.getElementById("skills") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact", element: document.getElementById("contact") }
    ];

    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY;
      
 
      setIsVisible(scrollPosition > window.innerHeight * 0.7);
      
      // Add offset for better UX when detecting active section
      const scrollPositionWithOffset = scrollPosition + 100;
      
      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section.element) continue;
        
        const offsetTop = getOffsetTop(section.element);
        
        if (scrollPositionWithOffset >= offsetTop) {
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
    setIsMobileMenuOpen(false); // Close mobile menu when a tab is clicked
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
    <header 
      className={`fixed top-0 z-30 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm py-2 sm:py-4 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" onClick={() => handleTabClick("home")} className="text-blue-500 dark:text-blue-400 text-lg sm:text-xl font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300">
          Raiyan Mahfuz
        </Link>
        
        {/* Mobile Menu Button - Always visible on iPhone */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation - Only visible on large screens */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="bg-white/40 dark:bg-gray-800/40 rounded-full p-1 shadow-sm flex flex-wrap justify-center">
            <button 
              onClick={() => handleTabClick("home")}
              className={`rounded-full px-3 py-2 transition-all duration-300 ${
                activeTab === "home" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleTabClick("about")}
              className={`rounded-full px-3 py-2 transition-all duration-300 ${
                activeTab === "about" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleTabClick("skills")}
              className={`rounded-full px-3 py-2 transition-all duration-300 ${
                activeTab === "skills" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => handleTabClick("projects")}
              className={`rounded-full px-3 py-2 transition-all duration-300 ${
                activeTab === "projects" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleTabClick("contact")}
              className={`rounded-full px-3 py-2 transition-all duration-300 ${
                activeTab === "contact" 
                  ? "bg-blue-500 text-white shadow-md transform scale-105" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Improved for iPhone */}
        <div 
          className={`lg:hidden fixed top-[56px] sm:top-[72px] left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col p-4 space-y-2">
            <button 
              onClick={() => handleTabClick("home")}
              className={`w-full text-left px-4 py-4 rounded-lg transition-colors text-base ${
                activeTab === "home" 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleTabClick("about")}
              className={`w-full text-left px-4 py-4 rounded-lg transition-colors text-base ${
                activeTab === "about" 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleTabClick("skills")}
              className={`w-full text-left px-4 py-4 rounded-lg transition-colors text-base ${
                activeTab === "skills" 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => handleTabClick("projects")}
              className={`w-full text-left px-4 py-4 rounded-lg transition-colors text-base ${
                activeTab === "projects" 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleTabClick("contact")}
              className={`w-full text-left px-4 py-4 rounded-lg transition-colors text-base ${
                activeTab === "contact" 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
} 