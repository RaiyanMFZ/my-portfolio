"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function SimpleFooter() {
  return (
    <footer className="relative z-20 bg-black border-t border-white/10 py-10 sm:py-12 md:py-16 safe-bottom">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
            <div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-normal mb-1 sm:mb-2 text-white">
                Raiyan Mahfuz
              </h3>
              <p className="text-sm text-white/50 tracking-wide">
                Developer & Student — Zurich
              </p>
            </div>

            <ul className="flex gap-6 sm:gap-8">
              <li>
                <a
                  href="https://www.linkedin.com/in/raiyan-mahfuz-52aaa419a/"
                  className="text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300 min-h-[44px] inline-flex items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RaiyanMFZ"
                  className="text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300 min-h-[44px] inline-flex items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <nav className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/40">
              <a href="/legal/privacy" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                Privacy
              </a>
              <a href="/legal/imprint" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                Imprint
              </a>
              <a href="/legal/disclaimer" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                Disclaimer
              </a>
              <a href="/legal/copyright" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                Copyright
              </a>
              <a href="/legal/terms" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                Terms
              </a>
            </nav>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/30 shrink-0">
              © 2026 Raiyan Mahfuz. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
