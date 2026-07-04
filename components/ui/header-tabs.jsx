"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

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
      { id: "contact", element: document.getElementById("contact") },
    ];

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > window.innerHeight * 0.5);

      const scrollPositionWithOffset = scrollPosition + 120;

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

    function getOffsetTop(element) {
      let offsetTop = 0;
      while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
      }
      return offsetTop;
    }

    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isScrolling]);

  const handleTabClick = (value) => {
    setIsMobileMenuOpen(false);
    setIsScrolling(true);
    setActiveTab(value);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const element = document.getElementById(value);
    const headerOffset = 100;

    if (value === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }

    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <motion.header
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ opacity: 0, y: -24 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -32,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Desktop — Apple Bubble Nav */}
      <nav className="hidden md:flex apple-nav-bubble">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`apple-nav-item relative ${
              activeTab === item.id ? "apple-nav-item-active" : ""
            }`}
          >
            {activeTab === item.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/15"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile — Bubble with menu */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="apple-nav-bubble px-5 gap-2"
          aria-label="Toggle menu"
        >
          <span className="text-sm font-semibold text-white">
            {navItems.find((i) => i.id === activeTab)?.label ?? "Menu"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-white/60 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 apple-nav-bubble flex-col !items-stretch !gap-0 !py-2 transition-all duration-300 origin-top ${
            isMobileMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`apple-nav-item !rounded-xl text-left ${
                activeTab === item.id ? "apple-nav-item-active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
