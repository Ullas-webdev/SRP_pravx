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

        {/* Specialized Highlight Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {/* Specialized Card 1: Kitchen & Restaurant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="card-glass rounded-xl p-8 border border-gold/25 relative overflow-hidden flex flex-col justify-between min-h-[320px] bg-gradient-to-br from-charcoal/40 via-[#101011] to-matte/80"
          >
            {/* Decorative glowing background circle */}
            <div
              className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full pointer-events-none opacity-15"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,166,107,0.18) 0%, transparent 80%)",
              }}
            />

            <div>
              <div className="flex items-center gap-4 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18h12M12 2v4M12 6a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4z" />
                    <path d="M4 14h16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
                    <circle cx="9" cy="10" r="1" fill="currentColor" />
                    <circle cx="15" cy="10" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="eyebrow text-gold text-[0.68rem] tracking-wider mb-0.5">Specialized Division</p>
                  <h3 className="font-display text-xl text-white font-light">
                    Commercial Kitchen &amp; Restaurant Setup
                  </h3>
                </div>
              </div>
              <p className="text-pearl/65 text-sm font-light leading-relaxed mb-6">
                We specialize in engineering and executing high-performance industrial kitchen layouts, 
                integrated exhaust/HVAC solutions, fire-suppression systems, and luxury dining interiors 
                designed to withstand high-volume restaurant service.
              </p>
            </div>

            <div className="relative z-10 font-mono">
              <Link
                href="#contact"
                className="btn-primary border border-gold text-gold px-5 py-2.5 eyebrow text-[0.7rem] hover:bg-gold hover:text-matte transition-all duration-300 inline-block"
              >
                Consult Division
              </Link>
            </div>
          </motion.div>

          {/* Specialized Card 2: Partitions & Fabrication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="card-glass rounded-xl p-8 border border-gold/25 relative overflow-hidden flex flex-col justify-between min-h-[320px] bg-gradient-to-br from-charcoal/40 via-[#101011] to-matte/80"
          >
            {/* Decorative glowing background circle */}
            <div
              className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full pointer-events-none opacity-15"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,166,107,0.18) 0%, transparent 80%)",
              }}
            />

            <div>
              <div className="flex items-center gap-4 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                  </svg>
                </div>
                <div>
                  <p className="eyebrow text-gold text-[0.68rem] tracking-wider mb-0.5">Specialized Division</p>
                  <h3 className="font-display text-xl text-white font-light">
                    Partitions &amp; Custom Fabrication
                  </h3>
                </div>
              </div>
              <p className="text-pearl/65 text-sm font-light leading-relaxed mb-6">
                We plan and execute high-quality <strong>Aluminium partitions</strong>, <strong>Aerocon partitions</strong>, 
                and heavy-duty <strong>structural fabrication work</strong>. Built for optimal durability and delivered at highly <strong>affordable costs</strong>.
              </p>
            </div>

            <div className="relative z-10 font-mono">
              <Link
                href="#contact"
                className="btn-primary border border-gold text-gold px-5 py-2.5 eyebrow text-[0.7rem] hover:bg-gold hover:text-matte transition-all duration-300 inline-block"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
