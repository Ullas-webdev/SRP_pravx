"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "Interiors",
    desc: "End-to-end interior design and execution for corporate and commercial environments.",
  },
  {
    n: "02",
    title: "Commercial Spaces",
    desc: "Office fit-outs built around workflow, brand and long-term flexibility.",
  },
  {
    n: "03",
    title: "Dark Stores",
    desc: "Rapid-deploy quick-commerce facilities engineered for throughput.",
  },
  {
    n: "04",
    title: "MEP Solutions",
    desc: "Mechanical, electrical and plumbing systems, planned and installed in-house.",
  },
  {
    n: "05",
    title: "Flooring",
    desc: "Epoxy, vitrified, vinyl and stone flooring finished to a premium standard.",
  },
  {
    n: "06",
    title: "Painting",
    desc: "Surface prep and finish coatings for interior and exterior facades.",
  },
  {
    n: "07",
    title: "Branding Solutions",
    desc: "Signage, wayfinding and in-store branding integrated at the build stage.",
  },
  {
    n: "08",
    title: "Turnkey Solutions",
    desc: "Single point of accountability from design intent to handover.",
  },
];

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
    <section id="services" className="relative py-28 md:py-36 bg-matte">
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
            <motion.div
              variants={item}
              key={s.n}
              className="card-glass group relative p-8 min-h-[240px] flex flex-col justify-between bg-matte hover:bg-charcoal transition-colors duration-500"
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow text-gold">{s.n}</span>
                <span className="w-8 h-8 rounded-full border border-pearl/20 flex items-center justify-center text-pearl/40 group-hover:border-gold group-hover:text-gold group-hover:rotate-45 transition-all duration-500">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-gold transition-colors duration-400">
                  {s.title}
                </h3>
                <p className="text-pearl/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
