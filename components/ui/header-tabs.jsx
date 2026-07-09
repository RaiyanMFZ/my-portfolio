"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
  const reduceMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    const sections = [
      { id: "home", element: document.body },
      { id: "about", element: document.getElementById("about") },
      { id: "skills", element: document.getElementById("skills") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact", element: document.getElementById("contact") },
    ];

    const scrollPosition = window.scrollY;
    const isMobile = window.innerWidth < 768;
    setIsVisible(isMobile ? scrollPosition > 120 : scrollPosition > window.innerHeight * 0.5);

    const scrollPositionWithOffset = scrollPosition + (isMobile ? 80 : 120);

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (!section.element) continue;

      let offsetTop = 0;
      let el = section.element;
      while (el) {
        offsetTop += el.offsetTop;
        el = el.offsetParent;
      }

      if (scrollPositionWithOffset >= offsetTop) {
        setActiveTab(section.id);
        break;
      }
    }
  }, [isScrolling]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleTabClick = (value) => {
    setIsMobileMenuOpen(false);
    setIsScrolling(true);
    setActiveTab(value);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const element = document.getElementById(value);
    const headerOffset = window.innerWidth < 768 ? 72 : 100;

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
    <>
      <motion.header
        className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 safe-top"
        initial={false}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -28,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
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
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 30 }
                  }
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="md:hidden w-full max-w-sm">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="apple-nav-bubble w-full justify-between px-5 min-h-[48px]"
            aria-label="Open menu"
          >
            <span className="text-sm font-semibold text-white">
              {navItems.find((i) => i.id === activeTab)?.label ?? "Menu"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <button
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-x-4 top-4 safe-top rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-2 px-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">Navigation</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-white/60 hover:text-white"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-colors min-h-[48px] ${
                    activeTab === item.id
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
