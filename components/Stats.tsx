"use client";

import { motion } from "framer-motion";

const VALUE_PROPS = [
  {
    title: "Quality Assured",
    desc: "ISO-grade materials and rigorous quality checks at every milestone to ensure institutional endurance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    desc: "Structured timelines with real-time progress tracking, delivering dark stores in 4 weeks and retail in 3.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Innovative Design",
    desc: "Aesthetic spaces integrated with high-performance MEP, acoustics, and custom functional joinery.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: "Dedicated Teams",
    desc: "In-house project managers and execution crews eliminating subcontractor gaps and delays.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section id="why-us" className="relative py-28 md:py-36 bg-matte overflow-hidden border-t border-line/40">
      {/* Subtle background details */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-[0.03] bg-gold" />

      <div className="container-x">
        <div className="mb-20">
          <p className="eyebrow text-gold mb-4">Why Choose SRP</p>
          <h2 className="font-display text-4xl md:text-5xl font-light max-w-xl text-balance">
            Built Different,
            <span className="italic gold-gradient-text"> Delivered Better.</span>
          </h2>
        </div>

        {/* 4-column Grid Layout matches reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-charcoal/30 hover:bg-charcoal/50 border border-line/60 hover:border-gold/50 rounded-2xl p-8 transition-all duration-500 flex flex-col gap-6"
            >
              {/* Icon Container with elegant rounded design */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-matte transition-all duration-500 scale-100 group-hover:scale-110">
                {prop.icon}
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl font-normal text-white group-hover:text-gold transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-pearl/50 text-sm leading-relaxed font-light group-hover:text-pearl/75 transition-colors duration-500">
                  {prop.desc}
                </p>
              </div>

              {/* Dynamic bottom highlights for premium interactive feel */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/30 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

