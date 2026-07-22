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

    // Variant 2: Industrial Electrical Panel Schematic
    <g key="2" stroke="#C9A66B" strokeWidth="0.8" fill="none" opacity="0.6">
      {/* Outer panel outline */}
      <rect x="150" y="100" width="300" height="400" rx="8" strokeWidth="1.2" />
      <line x1="150" y1="180" x2="450" y2="180" />
      <line x1="150" y1="420" x2="450" y2="420" />
      
      {/* Digital status screen */}
      <rect x="190" y="120" width="220" height="40" rx="4" />
      <path d="M 210 140 Q 230 125 250 140 T 290 140" strokeWidth="1.2" opacity="0.8" />
      <circle cx="340" cy="140" r="4" fill="#C9A66B" />
      <circle cx="360" cy="140" r="4" fill="#C9A66B" />
      <circle cx="380" cy="140" r="4" fill="#C9A66B" />
      
      {/* Circuit Breakers Stack */}
      <g transform="translate(180, 200)">
        {/* Breaker 1 */}
        <rect x="0" y="0" width="240" height="30" rx="2" />
        <line x1="80" y1="0" x2="80" y2="30" />
        <circle cx="40" cy="15" r="5" fill="#C9A66B" />
        <line x1="120" y1="15" x2="200" y2="15" strokeDasharray="3,3" />
        {/* Toggle switch in ON position */}
        <line x1="80" y1="15" x2="65" y2="5" strokeWidth="1.5" />
        
        {/* Breaker 2 */}
        <rect x="0" y="45" width="240" height="30" rx="2" />
        <line x1="80" y1="45" x2="80" y2="75" />
        <circle cx="40" cy="60" r="5" fill="#C9A66B" />
        <line x1="120" y1="60" x2="200" y2="60" strokeDasharray="3,3" />
        {/* Toggle switch in OFF position */}
        <line x1="80" y1="60" x2="95" y2="70" strokeWidth="1.5" />
        
        {/* Breaker 3 */}
        <rect x="0" y="90" width="240" height="30" rx="2" />
        <line x1="80" y1="90" x2="80" y2="120" />
        <circle cx="40" cy="105" r="5" fill="#C9A66B" />
        <line x1="120" y1="105" x2="200" y2="105" strokeDasharray="3,3" />
        <line x1="80" y1="105" x2="65" y2="95" strokeWidth="1.5" />
      </g>
      
      {/* Wiring Bus & Ground Symbols */}
      <g transform="translate(180, 350)">
        <line x1="20" y1="0" x2="220" y2="0" strokeWidth="1.5" />
        {/* Junction points */}
        <circle cx="40" cy="0" r="4" fill="#C9A66B" />
        <circle cx="120" cy="0" r="4" fill="#C9A66B" />
        <circle cx="200" cy="0" r="4" fill="#C9A66B" />
        
        {/* Ground symbol 1 */}
        <line x1="40" y1="0" x2="40" y2="30" />
        <line x1="30" y1="30" x2="50" y2="30" />
        <line x1="33" y1="34" x2="47" y2="34" />
        <line x1="37" y1="38" x2="43" y2="38" />

        {/* Ground symbol 2 */}
        <line x1="200" y1="0" x2="200" y2="30" />
        <line x1="190" y1="30" x2="210" y2="30" />
        <line x1="193" y1="34" x2="207" y2="34" />
        <line x1="197" y1="38" x2="203" y2="38" />
      </g>
      
      {/* HVAC/AC cooling fan emblem at bottom */}
      <circle cx="300" cy="458" r="22" strokeWidth="1" />
      <path d="M 300 436 C 308 446 312 458 300 458 C 288 458 292 446 300 436 Z" fill="#C9A66B" opacity="0.3" />
      <path d="M 300 480 C 292 470 288 458 300 458 C 312 458 308 470 300 480 Z" fill="#C9A66B" opacity="0.3" />
      <path d="M 278 458 C 288 450 300 446 300 458 C 300 470 288 466 278 458 Z" fill="#C9A66B" opacity="0.3" />
      <path d="M 322 458 C 312 466 300 470 300 458 C 300 446 312 450 322 458 Z" fill="#C9A66B" opacity="0.3" />
    </g>,

    // Variant 3: Electronics Rack Cabinet Schematic
    <g key="3" stroke="#C9A66B" strokeWidth="0.8" fill="none" opacity="0.6">
      {/* Server Cabinet Outer Frame */}
      <rect x="140" y="80" width="320" height="440" rx="6" strokeWidth="1.5" />
      {/* Rack rails */}
      <line x1="160" y1="80" x2="160" y2="520" strokeWidth="0.5" strokeDasharray="3,3" />
      <line x1="440" y1="80" x2="440" y2="520" strokeWidth="0.5" strokeDasharray="3,3" />
      
      {/* Unit 1: Power Unit */}
      <g transform="translate(170, 110)">
        <rect x="0" y="0" width="260" height="50" rx="3" strokeWidth="1" fill="#161616" />
        <circle cx="30" cy="25" r="10" />
        <path d="M 30 18 L 30 32 M 23 25 L 37 25" />
        {/* Heat vents slots */}
        <line x1="80" y1="15" x2="80" y2="35" />
        <line x1="90" y1="15" x2="90" y2="35" />
        <line x1="100" y1="15" x2="100" y2="35" />
        <line x1="110" y1="15" x2="110" y2="35" />
        <line x1="120" y1="15" x2="120" y2="35" />
        {/* Connection jack */}
        <rect x="160" y="15" width="20" height="20" />
        <circle cx="170" cy="25" r="3" fill="#C9A66B" />
        <rect x="200" y="15" width="40" height="20" rx="1" />
        <text x="220" y="28" fill="#C9A66B" fontSize="8" textAnchor="middle" stroke="none" style={{ fontFamily: 'monospace' }}>230V</text>
      </g>
      
      {/* Unit 2: Server Blade */}
      <g transform="translate(170, 190)">
        <rect x="0" y="0" width="260" height="70" rx="3" fill="#161616" />
        <circle cx="20" cy="20" r="3" fill="#C9A66B" />
        <circle cx="20" cy="35" r="3" fill="#C9A66B" />
        <circle cx="20" cy="50" r="3" fill="#C9A66B" />
        
        {/* Network port arrays */}
        <rect x="50" y="15" width="16" height="12" />
        <rect x="72" y="15" width="16" height="12" />
        <rect x="94" y="15" width="16" height="12" />
        <rect x="116" y="15" width="16" height="12" />
        
        <rect x="50" y="38" width="16" height="12" />
        <rect x="72" y="38" width="16" height="12" />
        <rect x="94" y="38" width="16" height="12" />
        <rect x="116" y="38" width="16" height="12" />
        
        {/* CPU cooling shroud */}
        <circle cx="190" cy="35" r="18" strokeDasharray="2,2" />
        <circle cx="190" cy="35" r="8" fill="#C9A66B" />
      </g>
      
      {/* Unit 3: Cable Management */}
      <g transform="translate(170, 290)">
        <rect x="0" y="0" width="260" height="30" rx="2" />
        {/* Wire paths looping outside the panel */}
        <path d="M 60 15 C 60 70, 100 70, 100 15" strokeWidth="1.2" opacity="0.7" />
        <path d="M 80 15 C 80 85, 140 85, 140 15" strokeWidth="1.2" opacity="0.7" />
        <path d="M 180 15 C 180 90, 230 90, 230 15" strokeWidth="1.2" opacity="0.7" />
      </g>
      
      {/* Unit 4: Control Module */}
      <g transform="translate(170, 390)">
        <rect x="0" y="0" width="260" height="70" rx="3" fill="#161616" />
        {/* VU meter */}
        <path d="M 30 50 A 25 25 0 0 1 70 50" />
        <line x1="50" y1="50" x2="35" y2="25" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="3" fill="#C9A66B" />
        
        {/* Slide controllers */}
        <line x1="110" y1="15" x2="110" y2="55" />
        <rect x="105" y="25" width="10" height="6" fill="#C9A66B" />
        
        <line x1="130" y1="15" x2="130" y2="55" />
        <rect x="125" y="40" width="10" height="6" fill="#C9A66B" />

        <line x1="150" y1="15" x2="150" y2="55" />
        <rect x="145" y="20" width="10" height="6" fill="#C9A66B" />
        
        {/* Grid pattern status display */}
        <rect x="185" y="15" width="55" height="40" strokeWidth="0.6" strokeDasharray="1,1" />
        <path d="M 185 35 Q 200 15 210 35 T 240 35" strokeWidth="1.2" />
      </g>
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
