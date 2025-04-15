"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";

export function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("home");
  
  return (
    <header className="sticky top-0 z-30 w-full bg-white/70 backdrop-blur-sm py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-blue-500 text-xl font-medium">
          Raiyan Mahfuz
        </Link>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="relative z-10">
          <TabsList className="bg-white/40 rounded-full p-1 shadow-sm">
            <TabsTrigger 
              value="home" 
              asChild
              className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="/">Home</Link>
            </TabsTrigger>
            <TabsTrigger 
              value="about"
              asChild
              className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="#about">About</Link>
            </TabsTrigger>
            <TabsTrigger 
              value="skills"
              asChild
              className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="#skills">Skills</Link>
            </TabsTrigger>
            <TabsTrigger 
              value="projects"
              asChild
              className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="#projects">Projects</Link>
            </TabsTrigger>
            <TabsTrigger 
              value="contact"
              asChild
              className="rounded-full px-4 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="#contact">Contact</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
} 