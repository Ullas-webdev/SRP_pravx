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
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="eyebrow text-gold mb-4">What We Deliver</p>
            <h2 className="font-display text-4xl md:text-5xl font-light max-w-xl text-balance">
              Eight disciplines,
              <span className="italic gold-gradient-text"> one accountable team.</span>
            </h2>
          </div>
          <p className="max-w-xs text-pearl/55 text-sm leading-relaxed">
            SRP runs design, execution and MEP under one roof — so nothing gets
            lost between the drawing and the delivered space.
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
      </div>
    </section>
  );
}
