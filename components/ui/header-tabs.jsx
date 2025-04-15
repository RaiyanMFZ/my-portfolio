"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("home");
  
  useEffect(() => {
    const sections = [
      { id: "home", element: document.body }, // Home is the default, so use body as fallback
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact", element: document.getElementById("contact") }
    ];

    const handleScroll = () => {
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
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleTabClick = (value) => {
    setActiveTab(value);
    
    // Scroll to the section
    const element = document.getElementById(value);
    if (element && value !== "home") {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the header
        behavior: "smooth"
      });
    } else if (value === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <header className="sticky top-0 z-30 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-blue-500 dark:text-blue-400 text-xl font-medium">
          Raiyan Mahfuz
        </Link>
        
        <div className="flex-1 flex justify-center">
          <Tabs value={activeTab} onValueChange={handleTabClick} className="relative z-10">
            <TabsList className="bg-white/40 dark:bg-gray-800/40 rounded-full p-1 shadow-sm">
              <TabsTrigger 
                value="home" 
                className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Home
              </TabsTrigger>
              <TabsTrigger 
                value="projects"
                className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger 
                value="contact"
                className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Contact
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <ThemeSwitch />
      </div>
    </header>
  );
} 