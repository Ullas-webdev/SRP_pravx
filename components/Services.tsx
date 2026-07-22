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

        {/* Specialized Divisions Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-12"
        >
          <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {[
              {
                title: "Commercial Kitchen & Restaurant Setup",
                description: "We engineer and execute high-performance industrial kitchen layouts, integrated exhaust/HVAC solutions, fire-suppression systems, and luxury dining interiors designed to withstand high-volume restaurant service.",
                link: "Consult Division"
              },
              {
                title: "Fabrication Work",
                description: "Heavy-duty structural fabrication work tailored for industrial and commercial environments, built for optimal durability and precision.",
                link: "Request Quote"
              },
              {
                title: "Aluminium Partitions",
                description: "High-quality aluminium and Aerocon partitions for modern offices and commercial spaces. Sleek design with fast installation.",
                link: "Request Quote"
              },
              {
                title: "Wall Panel Work",
                description: "Premium acoustic and decorative wall paneling solutions that elevate interior aesthetics while improving sound insulation.",
                link: "Request Quote"
              },
              {
                title: "Electrical Work",
                description: "Comprehensive MEP and electrical solutions, including high-load panel distribution, industrial lighting, and safety systems.",
                link: "Request Quote"
              }
            ].map((div, i) => (
              <div 
                key={i}
                className="snap-start shrink-0 w-[85vw] md:w-[400px] card-glass rounded-xl p-8 border border-gold/20 relative overflow-hidden bg-gradient-to-br from-charcoal/30 via-[#121213] to-matte/90 flex flex-col justify-between"
              >
                <div
                  className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full pointer-events-none opacity-20"
                  style={{
                    background: "radial-gradient(circle, rgba(201,166,107,0.15) 0%, transparent 80%)",
                  }}
                />
                <div className="relative z-10">
                  <span className="eyebrow text-gold text-xs tracking-widest block mb-4">Specialized Division 0{i + 1}</span>
                  <h3 className="font-display text-2xl font-light text-white mb-4">
                    {div.title}
                  </h3>
                  <p className="text-pearl/60 text-sm font-light leading-relaxed mb-6">
                    {div.description}
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="relative z-10 text-gold hover:text-white text-sm eyebrow tracking-wider transition-colors duration-300 inline-flex items-center gap-2 mt-auto"
                >
                  {div.link} <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
