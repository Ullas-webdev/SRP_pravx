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
      {/* Glowing aura circles */}
      <circle cx="300" cy="300" r="180" strokeDasharray="3,3" opacity="0.2" />
      <circle cx="300" cy="300" r="120" strokeDasharray="1,2" opacity="0.3" />
      {/* Bulb outer glass shell */}
      <path d="M 240 240 C 240 180, 360 180, 360 240 C 360 290, 330 320, 330 360 L 270 360 C 270 320, 240 290, 240 240 Z" strokeWidth="1.2" />
      {/* Screw base cap */}
      <rect x="270" y="360" width="60" height="10" rx="3" />
      <rect x="273" y="370" width="54" height="8" rx="2" />
      <rect x="276" y="378" width="48" height="8" rx="2" />
      <path d="M 285 386 L 315 386 L 300 396 Z" fill="#C9A66B" opacity="0.4" />
      {/* Filament mount wires */}
      <line x1="285" y1="360" x2="285" y2="280" />
      <line x1="315" y1="360" x2="315" y2="280" />
      <line x1="285" y1="280" x2="295" y2="270" />
      <line x1="315" y1="280" x2="305" y2="270" />
      {/* Glowing filament coil */}
      <path d="M 295 270 Q 300 250, 305 270" strokeWidth="1.5" />
      {/* Radiating light rays */}
      <line x1="300" y1="160" x2="300" y2="130" />
      <line x1="160" y1="300" x2="130" y2="300" />
      <line x1="440" y1="300" x2="470" y2="300" />
      <line x1="200" y1="200" x2="180" y2="180" />
      <line x1="400" y1="200" x2="420" y2="180" />
      <line x1="200" y1="400" x2="180" y2="420" opacity="0.2" />
      <line x1="400" y1="400" x2="420" y2="420" opacity="0.2" />
      <text x="300" y="440" fill="#C9A66B" fontSize="10" textAnchor="middle" style={{ fontFamily: 'monospace', letterSpacing: '2px' }}>LIGHTING FIXTURE</text>
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
      {/* Wall socket plate */}
      <rect x="180" y="150" width="240" height="240" rx="20" strokeWidth="1.5" />
      <rect x="200" y="170" width="200" height="200" rx="10" opacity="0.4" />
      {/* Circular receptacle cover */}
      <circle cx="300" cy="270" r="70" strokeWidth="1.2" />
      {/* Three pin socket holes */}
      <circle cx="300" cy="230" r="10" fill="#C9A66B" opacity="0.6" /> {/* Ground */}
      <circle cx="260" cy="285" r="8" fill="#C9A66B" opacity="0.6" /> {/* Neutral */}
      <circle cx="340" cy="285" r="8" fill="#C9A66B" opacity="0.6" /> {/* Live */}
      {/* Toggle switch at the top */}
      <rect x="280" y="100" width="40" height="30" rx="4" />
      <line x1="280" y1="115" x2="320" y2="115" strokeDasharray="2,2" />
      <circle cx="300" cy="110" r="3" fill="#C9A66B" />
      {/* Wiring schematic lines flowing out from back */}
      <path d="M 300 230 L 300 50 L 50 50" strokeDasharray="3,3" opacity="0.3" />
      <path d="M 260 285 L 260 480 L 50 480" strokeDasharray="3,3" opacity="0.3" />
      <path d="M 340 285 L 340 480 L 550 480" strokeDasharray="3,3" opacity="0.3" />
      <text x="300" y="430" fill="#C9A66B" fontSize="10" textAnchor="middle" style={{ fontFamily: 'monospace', letterSpacing: '2px' }}>POWER DIST. OUTLET</text>
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
