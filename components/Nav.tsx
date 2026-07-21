"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LINKS = [
  { label: "Services", href: "services" },
  { label: "Projects", href: "projects" },
  { label: "Why SRP", href: "why-us" },
  { label: "Clients", href: "clients" },
  { label: "Contact", href: "contact" },
];

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
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

  const handleMobileNav = (id: string) => {
    setOpen(false);
    // Small delay so the menu closes before scrolling starts
    setTimeout(() => scrollToSection(id), 320);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled || open
            ? "bg-matte/95 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center h-20 gap-4">

          {/* ── MOBILE: hamburger on the far left ── */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-[110] w-8 h-6 flex flex-col justify-between flex-shrink-0 mr-1"
          >
            <span
              className={`block h-px w-full bg-pearl origin-center transition-all duration-300 ${
                open ? "translate-y-[11px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-pearl transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-full bg-pearl origin-center transition-all duration-300 ${
                open ? "-translate-y-[11px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* Logo / brand — flex-1 on mobile so it centres, auto on desktop */}
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-3 focus:outline-none flex-1 md:flex-none"
            aria-label="Scroll to top"
          >
            {/* Square logo mark — visible on mobile, hidden on desktop */}
            <Image
              src="/logo.png"
              alt="SRP logo"
              width={100}
              height={32}
              className="md:hidden object-contain"
              unoptimized
            />
            {/* Desktop: text-only logo */}
            <span className="hidden md:inline font-display text-xl tracking-wide">SRP</span>
            <span className="hidden md:inline eyebrow text-pearl/50">Space Right Projects</span>
          </button>

          {/* ── DESKTOP: centre nav links ── */}
          <ul className="hidden md:flex items-center gap-10 flex-1 justify-center">
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

          {/* ── DESKTOP: CTA button ── */}
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-primary hidden md:inline-flex items-center border border-pearl/30 px-5 py-2.5 eyebrow hover:text-matte transition-colors duration-300"
          >
            Get Free Consultation
          </button>

        </nav>
      </header>

      {/* Full-screen mobile overlay — sits below header but above page */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-matte flex flex-col pt-28 pb-12 px-8 md:hidden"
          >
            {/* Nav links */}
            <ul className="flex flex-col gap-2 flex-1">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => handleMobileNav(l.href)}
                    className="w-full text-left font-display text-4xl py-4 border-b border-line/30 text-pearl hover:text-gold transition-colors duration-300"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* CTA button at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <button
                onClick={() => handleMobileNav("contact")}
                className="w-full border border-gold text-gold px-6 py-4 eyebrow text-center hover:bg-gold hover:text-matte transition-colors duration-300"
              >
                Get Free Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
