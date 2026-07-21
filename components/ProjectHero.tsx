"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects-data";

interface Props {
  project: ProjectData;
}

export default function ProjectHero({ project }: Props) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect for background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={project.image}
          alt={`${project.client} project interior`}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Cinematic overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/80 to-matte/30" />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Soft radial glow matching project accent color */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${project.accentColor}40 0%, transparent 70%)`
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-x w-full">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 md:mb-20"
        >
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-3 border border-pearl/20 hover:border-gold px-5 py-3 transition-all duration-400 hover:bg-gold/10 backdrop-blur-sm"
          >
            <span className="w-7 h-7 rounded-full border border-pearl/25 group-hover:border-gold flex items-center justify-center text-pearl/50 group-hover:text-gold transition-all duration-400 group-hover:-translate-x-0.5">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M2 6L6 2M2 6L6 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="eyebrow text-pearl/60 group-hover:text-gold transition-colors duration-300">
              Back to Selected Work
            </span>
          </button>
        </motion.div>

        {/* Client Name & Type */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="eyebrow"
            style={{ color: project.accentColor }}
          >
            {project.type}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1]"
          >
            {project.client}
          </motion.h1>
        </div>

        {/* Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-pearl/15 pt-8"
        >
          <div>
            <p className="eyebrow text-pearl/40 mb-2">Area</p>
            <p className="font-display text-xl md:text-2xl text-pearl">{project.area}</p>
          </div>
          <div>
            <p className="eyebrow text-pearl/40 mb-2">Timeline</p>
            <p className="font-display text-xl md:text-2xl text-pearl">{project.timeline}</p>
          </div>
          <div className="col-span-2">
            <p className="eyebrow text-pearl/40 mb-2">Scope</p>
            <p className="font-display text-xl md:text-2xl text-pearl">{project.tech}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
