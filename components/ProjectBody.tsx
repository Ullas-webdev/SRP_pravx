"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectData } from "@/lib/projects-data";
import Image from "next/image";

interface Props {
  project: ProjectData;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ProjectBody({ project }: Props) {
  const challengeRef = useRef(null);
  const diffRef = useRef(null);
  
  const challengeInView = useInView(challengeRef, { once: true, margin: "-100px" });
  const diffInView = useInView(diffRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 md:py-40 bg-matte overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${project.accentColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${project.accentColor} 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container-x">
        {/* Top Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-32"
        >
          <p className="text-2xl md:text-4xl font-light font-display text-pearl/90 leading-snug">
            {project.detail}
          </p>
        </motion.div>

        {/* The Challenge */}
        <motion.div
          ref={challengeRef}
          variants={stagger}
          initial="hidden"
          animate={challengeInView ? "show" : "hidden"}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 mb-32"
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow text-pearl/40 mb-4">Phase 01</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white">
              The Challenge
            </h2>
            <div className="w-12 h-px mt-6 bg-pearl/20" />
          </motion.div>
          
          <motion.div variants={stagger} className="flex flex-col gap-6">
            {project.challenge.map((para, i) => (
              <motion.p 
                key={i}
                variants={fadeUp}
                className="text-pearl/60 text-lg md:text-xl leading-relaxed font-light"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* The SRP Difference (Highlighted block) */}
        <motion.div
          ref={diffRef}
          variants={stagger}
          initial="hidden"
          animate={diffInView ? "show" : "hidden"}
          className="relative p-10 md:p-20 rounded-2xl border border-line bg-[#161616]"
        >
          {/* Subtle glow behind the difference block */}
          <div 
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[100px] opacity-[0.07] pointer-events-none"
            style={{ background: project.accentColor }}
          />

          <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <motion.div variants={fadeUp}>
              <p className="eyebrow mb-4" style={{ color: project.accentColor }}>Phase 02</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-white">
                The SRP Difference
              </h2>
              <div 
                className="w-12 h-px mt-6" 
                style={{ background: project.accentColor }} 
              />
            </motion.div>
            
            <motion.div variants={stagger} className="flex flex-col gap-6">
              {project.srpDifference.map((para, i) => (
                <motion.p 
                  key={i}
                  variants={fadeUp}
                  className="text-pearl/80 text-lg md:text-xl leading-relaxed font-light"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Rolling Gallery Showcase */}
        <div className="mt-32 border-t border-line/50 pt-20">
          <p className="eyebrow text-pearl/40 mb-6">Project Gallery</p>
          <h3 className="font-display text-2xl md:text-3xl font-light mb-12">
            Execution in focus
          </h3>
          
          <div className="relative w-full overflow-hidden py-4">
            {/* Edge fades for smooth visual blending */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-matte to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-matte to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 marquee-track w-max">
              {/* Double the list to ensure seamless looping */}
              {[
                ...Array.from({ length: project.slug === "tata-1mg" ? 4 : 5 }, (_, idx) => `/projects/gallery/${project.slug}/${idx + 1}.jpg`),
                ...Array.from({ length: project.slug === "tata-1mg" ? 4 : 5 }, (_, idx) => `/projects/gallery/${project.slug}/${idx + 1}.jpg`)
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="relative shrink-0 w-[260px] md:w-[420px] aspect-[3/4] md:aspect-[3/2] rounded-xl overflow-hidden border border-line"
                >
                  <Image
                    src={src}
                    alt={`${project.client} site photo`}
                    fill
                    quality={100}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 300px, 420px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
