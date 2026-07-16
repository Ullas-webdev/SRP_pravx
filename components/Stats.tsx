"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const STATS = [
  { value: 25, suffix: "+", label: "Blinkit Stores" },
  { value: 200000, suffix: "+", label: "Sqft Completed", format: true },
  { value: 20, suffix: "+", label: "Zepto Projects" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

function Counter({ value, suffix, format }: { value: number; suffix: string; format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const n = Math.floor(v);
        setDisplay(format ? n.toLocaleString("en-IN") : String(n));
      },
    });
    return () => controls.stop();
  }, [inView, value, format]);

  return (
    <span ref={ref} className="num-stat">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="why-us" className="relative py-28 md:py-36 bg-charcoal">
      <div className="container-x">
        <div className="mb-16">
          <p className="eyebrow text-gold mb-4">Why Choose SRP</p>
          <h2 className="font-display text-4xl md:text-5xl font-light max-w-xl text-balance">
            Numbers that come from
            <span className="italic gold-gradient-text"> sites, not slides.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-charcoal p-8 md:p-10"
            >
              <p className="font-display text-4xl md:text-5xl mb-3 gold-gradient-text">
                <Counter value={s.value} suffix={s.suffix} format={s.format} />
              </p>
              <p className="eyebrow text-pearl/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
