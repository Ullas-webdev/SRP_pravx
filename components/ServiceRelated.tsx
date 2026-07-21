"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { ServiceData } from "@/lib/services-data";

interface Props {
  services: ServiceData[];
  accentColor: string;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServiceRelated({ services, accentColor }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 border-t border-line overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-matte pointer-events-none" />

      <div className="container-x relative z-10">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow mb-4"
            style={{ color: accentColor }}
          >
            Related disciplines
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl font-light mb-12"
          >
            Explore more of what we deliver
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-3 gap-px bg-line"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={fadeUp}>
                <Link href={`/services/${s.slug}`} className="block group relative overflow-hidden">
                  {/* BG image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${s.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/70 to-matte/20 group-hover:via-matte/55 transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative p-8 min-h-[260px] flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="eyebrow" style={{ color: s.accentColor }}>
                        {s.n}
                      </span>
                      <span
                        className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-400 group-hover:rotate-45"
                        style={{
                          borderColor: `${s.accentColor}40`,
                          color: `${s.accentColor}60`,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl mb-2 group-hover:text-pearl transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="text-pearl/45 text-xs leading-relaxed line-clamp-2">
                        {s.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Back to all services CTA */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <Link
              href="/#services"
              className="group inline-flex items-center gap-3 eyebrow text-pearl/40 hover:text-gold transition-colors duration-300"
            >
              <span className="w-5 h-px bg-pearl/30 group-hover:bg-gold group-hover:w-10 transition-all duration-400" />
              View all eight disciplines
              <span className="w-5 h-px bg-pearl/30 group-hover:bg-gold group-hover:w-10 transition-all duration-400" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
