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
    // Variant 0: Modern House Contour / Building Structural Truss (Building a Home)
    <g key="0" stroke="#C9A66B" strokeWidth="0.75" fill="none" opacity="0.55">
      <polygon points="100,500 100,280 300,100 500,280 500,500" />
      <line x1="50" y1="500" x2="550" y2="500" strokeWidth="1.5" />
      <line x1="100" y1="380" x2="500" y2="380" />
      <line x1="100" y1="280" x2="500" y2="280" />
      <line x1="200" y1="280" x2="200" y2="500" />
      <line x1="300" y1="100" x2="300" y2="500" />
      <line x1="400" y1="280" x2="400" y2="500" />
      <line x1="100" y1="280" x2="300" y2="280" />
      <line x1="300" y1="280" x2="500" y2="280" />
      <line x1="200" y1="190" x2="200" y2="280" strokeDasharray="3,3" />
      <line x1="400" y1="190" x2="400" y2="280" strokeDasharray="3,3" />
      <line x1="100" y1="280" x2="200" y2="190" />
      <line x1="300" y1="100" x2="200" y2="280" />
      <line x1="300" y1="100" x2="400" y2="280" />
      <line x1="500" y1="280" x2="400" y2="190" />
      <rect x="135" y="310" width="30" height="40" opacity="0.4" />
      <rect x="435" y="310" width="30" height="40" opacity="0.4" />
      <rect x="235" y="410" width="30" height="60" opacity="0.4" />
      <line x1="100" y1="500" x2="200" y2="380" opacity="0.2" />
      <line x1="500" y1="500" x2="400" y2="380" opacity="0.2" />
    </g>,

    // Variant 1: Modular Kitchen Cabinetry Elevation (Kitchen Design)
    <g key="1" stroke="#C9A66B" strokeWidth="0.75" fill="none" opacity="0.55">
      <rect x="80" y="100" width="440" height="400" />
      <line x1="80" y1="320" x2="520" y2="320" strokeWidth="1.5" />
      <line x1="80" y1="220" x2="520" y2="220" />
      <line x1="190" y1="320" x2="190" y2="500" />
      <line x1="300" y1="320" x2="300" y2="500" />
      <line x1="410" y1="320" x2="410" y2="500" />
      <line x1="80" y1="380" x2="190" y2="380" />
      <line x1="80" y1="440" x2="190" y2="440" />
      <line x1="210" y1="340" x2="210" y2="380" strokeWidth="1.5" />
      <line x1="280" y1="340" x2="280" y2="380" strokeWidth="1.5" />
      <line x1="320" y1="340" x2="320" y2="440" strokeWidth="1.5" />
      <line x1="390" y1="340" x2="390" y2="440" strokeWidth="1.5" />
      <rect x="220" y="100" width="160" height="120" />
      <line x1="220" y1="180" x2="380" y2="180" strokeDasharray="3,3" />
      <circle cx="300" cy="140" r="12" />
      <line x1="80" y1="140" x2="200" y2="140" strokeWidth="1.2" />
      <line x1="80" y1="180" x2="200" y2="180" strokeWidth="1.2" />
      <line x1="400" y1="140" x2="520" y2="140" strokeWidth="1.2" />
      <line x1="400" y1="180" x2="520" y2="180" strokeWidth="1.2" />
      <polygon points="130,140 135,115 145,115 150,140" opacity="0.3" />
      <rect x="445" y="140" width="20" height="30" opacity="0.3" />
      <circle cx="490" cy="125" r="10" opacity="0.3" />
    </g>,

    // Variant 2: Electrical Wiring Schematics & Lighting Fixtures (MEP Systems)
    <g key="2" stroke="#C9A66B" strokeWidth="0.75" fill="none" opacity="0.55">
      <circle cx="300" cy="300" r="230" strokeDasharray="4,4" opacity="0.2" />
      <circle cx="300" cy="300" r="150" strokeDasharray="2,2" opacity="0.25" />
      <line x1="70" y1="300" x2="530" y2="300" />
      <line x1="300" y1="70" x2="300" y2="530" />
      <path d="M 150 150 L 300 200 L 450 150" strokeDasharray="3,3" />
      <path d="M 150 450 L 300 400 L 450 450" strokeDasharray="3,3" />
      <circle cx="300" cy="200" r="8" fill="#C9A66B" />
      <circle cx="300" cy="400" r="8" fill="#C9A66B" />
      <circle cx="150" cy="300" r="8" fill="#C9A66B" />
      <circle cx="450" cy="300" r="8" fill="#C9A66B" />
      <line x1="150" y1="300" x2="150" y2="350" />
      <polygon points="140,350 160,350 150,365" fill="#C9A66B" />
      <line x1="450" y1="300" x2="450" y2="350" />
      <polygon points="440,350 460,350 450,365" fill="#C9A66B" />
      <line x1="300" y1="200" x2="300" y2="270" />
      <circle cx="300" cy="275" r="5" fill="#C9A66B" />
      <polyline points="150,150 100,150 100,200" />
      <polyline points="450,150 500,150 500,200" />
      <polyline points="150,450 100,450 100,400" />
      <polyline points="450,450 500,450 500,400" />
    </g>,

    // Variant 3: Architectural Interior Isometric Room Corner (Space & Interiors)
    <g key="3" stroke="#C9A66B" strokeWidth="0.75" fill="none" opacity="0.55">
      <line x1="300" y1="60" x2="300" y2="400" strokeWidth="1.2" />
      <line x1="80" y1="180" x2="300" y2="400" strokeWidth="1.2" />
      <line x1="520" y1="180" x2="300" y2="400" strokeWidth="1.2" />
      <line x1="80" y1="100" x2="300" y2="320" />
      <line x1="80" y1="20" x2="300" y2="240" />
      <line x1="520" y1="100" x2="300" y2="320" />
      <line x1="520" y1="20" x2="300" y2="240" />
      <line x1="300" y1="400" x2="300" y2="550" />
      <line x1="245" y1="350" x2="190" y2="470" />
      <line x1="190" y1="300" x2="80" y2="390" />
      <line x1="355" y1="350" x2="410" y2="470" />
      <line x1="410" y1="300" x2="520" y2="390" />
      <line x1="300" y1="450" x2="120" y2="410" />
      <line x1="300" y1="450" x2="480" y2="410" />
      <line x1="300" y1="500" x2="150" y2="470" />
      <line x1="300" y1="500" x2="450" y2="470" />
      <polygon points="180,380 230,400 230,460 180,440 Z" />
      <polygon points="230,400 280,370 280,430 230,460 Z" />
      <polygon points="180,380 230,400 280,370 230,350 Z" />
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
