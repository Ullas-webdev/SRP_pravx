"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SCENES = [
  {
    label: "Luxury Office",
    tag: "01 — Corporate",
    gradient: "linear-gradient(155deg, #1c1b1a 0%, #35281c 45%, #0b0b0c 100%)",
  },
  {
    label: "Premium Retail Space",
    tag: "02 — Retail",
    gradient: "linear-gradient(155deg, #171615 0%, #402c1a 45%, #0b0b0c 100%)",
  },
  {
    label: "Luxury Residence",
    tag: "03 — Residential",
    gradient: "linear-gradient(155deg, #1a1918 0%, #322a20 45%, #0b0b0c 100%)",
  },
  {
    label: "Modern Commercial Interior",
    tag: "04 — Commercial",
    gradient: "linear-gradient(155deg, #191817 0%, #3a2415 45%, #0b0b0c 100%)",
  },
];

function ArchLines({ index }: { index: number }) {
  // Generates a distinct abstract architectural line composition per scene
  const variants = [
    <g key="0" stroke="#C9A66B" strokeWidth="0.6" fill="none" opacity="0.55">
      <rect x="60" y="80" width="480" height="440" />
      <line x1="60" y1="220" x2="540" y2="220" />
      <line x1="60" y1="360" x2="540" y2="360" />
      <line x1="230" y1="80" x2="230" y2="520" />
      <line x1="60" y1="80" x2="540" y2="520" opacity="0.25" />
    </g>,
    <g key="1" stroke="#C9A66B" strokeWidth="0.6" fill="none" opacity="0.55">
      <circle cx="300" cy="300" r="220" />
      <circle cx="300" cy="300" r="140" />
      <line x1="80" y1="300" x2="520" y2="300" />
      <line x1="300" y1="80" x2="300" y2="520" />
    </g>,
    <g key="2" stroke="#C9A66B" strokeWidth="0.6" fill="none" opacity="0.55">
      <polygon points="300,60 540,220 460,520 140,520 60,220" />
      <polygon points="300,160 440,260 390,460 210,460 160,260" />
    </g>,
    <g key="3" stroke="#C9A66B" strokeWidth="0.6" fill="none" opacity="0.55">
      <rect x="90" y="100" width="180" height="180" />
      <rect x="330" y="100" width="180" height="180" />
      <rect x="90" y="340" width="180" height="180" />
      <rect x="330" y="340" width="180" height="180" />
    </g>,
  ];
  return (
    <svg viewBox="0 0 600 600" className="w-full h-full">
      {variants[index]}
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % SCENES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden flex items-center">
      {/* Background scene crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            style={{ background: SCENES[active].gradient }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-matte via-matte/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-transparent to-matte/40" />
      </div>

      {/* Right side geometric composition */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[55%] opacity-70">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[70%] h-[70%]">
              <ArchLines index={active} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pt-24 w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow text-gold mb-6"
        >
          Space Right Projects — Turnkey Infrastructure &amp; Interiors
        </motion.p>

        <h1 className="font-display font-light leading-[0.95] text-balance">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[13vw] md:text-[6.4vw] leading-[0.96]"
          >
            Building spaces
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[13vw] md:text-[6.4vw] leading-[0.96] italic gold-gradient-text"
          >
            that perform.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 max-w-md text-pearl/65 text-lg leading-relaxed"
        >
          Premium interior fit-outs, commercial spaces, retail projects and
          luxury infrastructure solutions — engineered for how spaces are
          actually used.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary border border-pearl px-7 py-3.5 eyebrow hover:text-matte transition-colors duration-300"
          >
            Get Consultation
          </a>
          <a
            href="#projects"
            className="group flex items-center gap-3 px-2 py-3.5 eyebrow text-pearl/80 hover:text-gold transition-colors duration-300"
          >
            View Projects
            <span className="inline-block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </a>
        </motion.div>
      </div>

      {/* Scene label / index */}
      <div className="absolute bottom-10 right-6 md:right-16 z-10 text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow text-gold">{SCENES[active].tag}</p>
            <p className="font-display italic text-pearl/70 text-lg">
              {SCENES[active].label}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-6 md:left-16 z-10 hidden sm:flex items-center gap-3 text-pearl/50">
        <span className="w-8 h-px bg-pearl/40" />
        <span className="eyebrow">Scroll</span>
      </div>
    </section>
  );
}
