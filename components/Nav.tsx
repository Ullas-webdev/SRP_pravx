"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Services", href: "services" },
  { label: "Projects", href: "projects" },
  { label: "Why SRP", href: "why-us" },
  { label: "Clients", href: "clients" },
  { label: "Contact", href: "contact" },
];

// Smooth scroll with offset for fixed navbar height (80px)
function scrollToSection(id: string) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section based on scroll position
      const offsets = LINKS.map(({ href }) => {
        const el = document.getElementById(href);
        if (!el) return { href, top: Infinity };
        return { href, top: el.getBoundingClientRect().top };
      });
      const current = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];
      setActive(current ? current.href : "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-matte/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20">
        <button
          onClick={() => scrollToSection("top")}
          className="flex items-baseline gap-2 focus:outline-none"
          aria-label="Scroll to top"
        >
          <span className="font-display text-xl tracking-wide">SRP</span>
          <span className="hidden sm:inline eyebrow text-pearl/50">Space Right Projects</span>
        </button>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollToSection(l.href)}
                className={`eyebrow transition-colors duration-300 ${
                  active === l.href
                    ? "text-gold"
                    : "text-pearl/70 hover:text-gold"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="btn-primary hidden md:inline-flex items-center border border-pearl/30 px-5 py-2.5 eyebrow hover:text-matte transition-colors duration-300"
        >
          Get Free Consultation
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 w-8 h-6 flex flex-col justify-between"
        >
          <span
            className={`h-px w-full bg-pearl transition-transform duration-300 ${
              open ? "translate-y-[11px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-pearl transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-full bg-pearl transition-transform duration-300 ${
              open ? "-translate-y-[11px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-matte border-b border-line overflow-hidden"
          >
            <ul className="container-x py-8 flex flex-col gap-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => {
                      scrollToSection(l.href);
                      setOpen(false);
                    }}
                    className="font-display text-2xl text-left w-full"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setOpen(false);
                  }}
                  className="inline-block mt-2 border border-gold text-gold px-5 py-2.5 eyebrow"
                >
                  Get Free Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
