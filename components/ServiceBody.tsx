"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ServiceData } from "@/lib/services-data";

interface Props {
  service: ServiceData;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ServiceBody({ service }: Props) {
  const descRef = useRef(null);
  const delRef = useRef(null);
  const statsRef = useRef(null);
  const descInView = useInView(descRef, { once: true, margin: "-100px" });
  const delInView = useInView(delRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle diagonal line background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            ${service.accentColor} 0px,
            ${service.accentColor} 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-[0.06]"
        style={{ background: service.accentColor }}
      />

      <div className="container-x">

        {/* Description */}
        <motion.div
          ref={descRef}
          variants={stagger}
          initial="hidden"
          animate={descInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-16 mb-28"
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-6" style={{ color: service.accentColor }}>
              About this service
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-snug text-balance mb-8">
              What sets SRP apart in{" "}
              <span className="italic" style={{ color: service.accentColor }}>
                {service.title.toLowerCase()}
              </span>
            </h2>
            <div className="w-12 h-px" style={{ background: service.accentColor }} />
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-5">
            {service.description.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-pearl/60 leading-relaxed text-[0.95rem]"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="hairline mb-28" />

        {/* Deliverables */}
        <motion.div
          ref={delRef}
          variants={stagger}
          initial="hidden"
          animate={delInView ? "show" : "hidden"}
          className="mb-28"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6" style={{ color: service.accentColor }}>
            Key deliverables
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl font-light mb-12"
          >
            What you can expect from us
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line"
          >
            {service.deliverables.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-matte p-8 hover:bg-charcoal transition-colors duration-500"
              >
                {/* Index */}
                <span
                  className="font-mono text-xs mb-5 block"
                  style={{ color: `${service.accentColor}60` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Accent line */}
                <div
                  className="w-0 group-hover:w-8 h-px mb-4 transition-all duration-500"
                  style={{ background: service.accentColor }}
                />

                <p className="text-pearl/80 text-sm leading-relaxed font-medium">{item}</p>

                {/* Corner accent */}
                <div
                  className="absolute bottom-4 right-4 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: service.accentColor }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="hairline mb-28" />

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={stagger}
          initial="hidden"
          animate={statsInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line"
        >
          {service.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-matte p-8 md:p-12 text-center flex flex-col justify-center items-center h-full"
            >
              <p
                className="font-display font-light num-stat mb-4 whitespace-nowrap"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: service.accentColor,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p className="eyebrow text-pearl/40 text-balance leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
