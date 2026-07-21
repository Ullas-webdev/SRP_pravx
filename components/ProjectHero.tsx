"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects-data";

interface Props {
  project: ProjectData;
}

export default function ProjectHero({ project }: Props) {
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
