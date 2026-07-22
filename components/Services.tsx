"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-matte">
      <div className="container-x">
        <div className="mb-16">
          <p className="eyebrow text-gold mb-4">What We Deliver</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
            Eight disciplines,
            <span className="italic gold-gradient-text"> one accountable team.</span>
          </h2>
          <p className="text-pearl/65 text-base md:text-lg leading-relaxed font-light">
            SRP runs design, execution and MEP under one roof — so nothing gets lost between the drawing and the delivered space.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line"
        >
          {SERVICES.map((s) => (
            <motion.div key={s.n} variants={item}>
              <Link
                href={`/services/${s.slug}`}
                className="card-glass group relative p-8 min-h-[240px] flex flex-col justify-between bg-matte hover:bg-charcoal transition-colors duration-500 block"
              >
                {/* Hover background image preview */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.bgImage})` }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-charcoal to-transparent" />

                <div className="relative flex items-start justify-between">
                  <span className="eyebrow text-gold">{s.n}</span>
                  <span
                    className="w-8 h-8 rounded-full border border-pearl/20 flex items-center justify-center text-pearl/40 group-hover:border-gold group-hover:text-gold group-hover:rotate-45 transition-all duration-500"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </div>
                <div className="relative">
                  <h3 className="font-display text-2xl mb-3 group-hover:text-gold transition-colors duration-400">
                    {s.title}
                  </h3>
                  <p className="text-pearl/55 text-sm leading-relaxed">{s.tagline}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialized Divisions Unified Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="card-glass rounded-xl p-8 md:p-12 mt-12 border border-gold/20 relative overflow-hidden bg-gradient-to-br from-charcoal/30 via-[#121213] to-matte/90"
        >
          {/* Decorative glowing background circle */}
          <div
            className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(201,166,107,0.15) 0%, transparent 80%)",
            }}
          />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 relative z-10">
            {/* Division 01: F&B */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="eyebrow text-gold text-xs tracking-widest block mb-4">Specialized Division 01</span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-4">
                  Commercial Kitchen &amp; Restaurant Setup
                </h3>
                <p className="text-pearl/60 text-sm md:text-base font-light leading-relaxed mb-6">
                  We engineer and execute high-performance industrial kitchen layouts, 
                  integrated exhaust/HVAC solutions, fire-suppression systems, and luxury dining interiors 
                  designed to withstand high-volume restaurant service.
                </p>
              </div>
              <Link
                href="#contact"
                className="text-gold hover:text-white text-sm eyebrow tracking-wider transition-colors duration-300 inline-flex items-center gap-2 mt-4"
              >
                Consult Division <span>→</span>
              </Link>
            </div>

            {/* Division 02: Partitions */}
            <div className="flex flex-col justify-between md:pl-16 border-t md:border-t-0 md:border-l border-pearl/10 pt-8 md:pt-0">
              <div>
                <span className="eyebrow text-gold text-xs tracking-widest block mb-4">Specialized Division 02</span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-4">
                  Partitions &amp; Custom Fabrication
                </h3>
                <p className="text-pearl/60 text-sm md:text-base font-light leading-relaxed mb-6">
                  We plan and execute high-quality <strong>Aluminium partitions</strong>, <strong>Aerocon partitions</strong>, 
                  and heavy-duty <strong>structural fabrication work</strong>. Built for optimal durability and delivered at highly <strong>affordable costs</strong>.
                </p>
              </div>
              <Link
                href="#contact"
                className="text-gold hover:text-white text-sm eyebrow tracking-wider transition-colors duration-300 inline-flex items-center gap-2 mt-4"
              >
                Request Quote <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
