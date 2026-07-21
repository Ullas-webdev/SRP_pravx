"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects-data";

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-matte overflow-hidden">
      <div className="container-x flex items-end justify-between flex-wrap gap-6 mb-14">
        <div>
          <p className="eyebrow text-gold mb-4">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-light max-w-xl text-balance">
            Projects that carry
            <span className="italic gold-gradient-text"> real weight.</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="eyebrow text-gold/60 animate-pulse text-[0.68rem] tracking-[0.2em] hidden sm:inline-block">
            Swipe / Scroll
          </span>
          <div className="flex gap-2.5">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 md:w-12 md:h-12 border border-pearl/25 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300 z-10 relative text-sm md:text-base bg-matte/40 backdrop-blur-sm"
            >
              ←
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 md:w-12 md:h-12 border border-pearl/25 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300 z-10 relative text-sm md:text-base bg-matte/40 backdrop-blur-sm"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-6 pl-[clamp(1.5rem,5vw,6rem)] pr-[clamp(1.5rem,5vw,6rem)] snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative"
      >
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.client}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="snap-start shrink-0 w-[86vw] sm:w-[440px] group"
          >
            <Link href={`/projects/${p.slug}`} className="block">
              <div className="relative h-[320px] mb-6 overflow-hidden flex items-end p-7 border border-line rounded-xl cursor-pointer">
                
                {/* Background Image */}
                <Image 
                  src={p.image}
                  alt={`${p.client} project interior`}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  unoptimized
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="font-display text-3xl text-pearl">{p.client}</span>
                  <span className="w-10 h-10 rounded-full border border-pearl/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-matte transition-all duration-400">
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <p className="eyebrow text-gold mb-2">{p.type}</p>
            <p className="text-pearl/60 text-sm mb-5 leading-relaxed">{p.detail}</p>

            <div className="grid grid-cols-2 gap-y-3 text-sm border-t border-line pt-5">
              <div>
                <p className="eyebrow text-pearl/35 mb-1">Area</p>
                <p className="text-pearl/80">{p.area}</p>
              </div>
              <div>
                <p className="eyebrow text-pearl/35 mb-1">Timeline</p>
                <p className="text-pearl/80">{p.timeline}</p>
              </div>
              <div className="col-span-2 mt-2">
                <p className="eyebrow text-pearl/35 mb-1">Scope</p>
                <p className="text-pearl/80">{p.tech}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
