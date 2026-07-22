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

    // Variant 2: Light Bulb Geometry (representing Electrical and Lighting)
    <g key="2" stroke="#C9A66B" strokeWidth="0.8" fill="none" opacity="0.65">
      {/* Outer radiating aura lines */}
      <line x1="300" y1="100" x2="300" y2="60" strokeWidth="1.2" />
      <line x1="420" y1="160" x2="450" y2="130" strokeWidth="1.2" />
      <line x1="180" y1="160" x2="150" y2="130" strokeWidth="1.2" />
      <line x1="450" y1="260" x2="490" y2="260" strokeWidth="1.2" />
      <line x1="150" y1="260" x2="110" y2="260" strokeWidth="1.2" />
      
      {/* Sparkle symbols */}
      <path d="M 425 100 L 428 105 L 433 106 L 428 107 L 425 112 L 422 107 L 417 106 L 422 105 Z" fill="#C9A66B" />
      <path d="M 175 100 L 178 105 L 183 106 L 178 107 L 175 112 L 172 107 L 167 106 L 172 105 Z" fill="#C9A66B" />

      {/* Main glass contour */}
      <path d="M 210 260 A 90 90 0 1 1 390 260 C 390 320, 345 350, 345 390 L 255 390 C 255 350, 210 320, 210 260 Z" strokeWidth="1.3" />
      
      {/* Screw Base */}
      <rect x="255" y="390" width="90" height="12" rx="4" />
      <rect x="260" y="402" width="80" height="12" rx="4" />
      <rect x="265" y="414" width="70" height="12" rx="4" />
      {/* Bottom contact point */}
      <path d="M 275 426 L 325 426 C 320 440, 280 440, 275 426 Z" fill="#C9A66B" opacity="0.35" />

      {/* Filaments and support wires */}
      <line x1="282" y1="390" x2="282" y2="290" />
      <line x1="318" y1="390" x2="318" y2="290" />
      <line x1="300" y1="390" x2="300" y2="310" strokeDasharray="2,2" opacity="0.5" />
      {/* Loop connector wire */}
      <path d="M 282 290 L 293 260 L 307 260 L 318 290" strokeWidth="1.4" />
      
      {/* Inner glass reflection arc */}
      <path d="M 235 220 A 70 70 0 0 1 365 220" strokeDasharray="3,3" opacity="0.4" />
    </g>,

    // Variant 3: Power Drill Machine Geometry (representing Fabrication and Construction)
    <g key="3" stroke="#C9A66B" strokeWidth="0.8" fill="none" opacity="0.65">
      {/* Main Motor Housing */}
      <rect x="180" y="190" width="180" height="96" rx="14" strokeWidth="1.3" fill="#161616" />
      <line x1="210" y1="190" x2="210" y2="286" strokeWidth="0.6" strokeDasharray="2,2" />
      
      {/* Ventilation cooling slots */}
      <line x1="230" y1="210" x2="230" y2="266" strokeWidth="1.2" />
      <line x1="240" y1="210" x2="240" y2="266" strokeWidth="1.2" />
      <line x1="250" y1="210" x2="250" y2="266" strokeWidth="1.2" />
      <line x1="260" y1="210" x2="260" y2="266" strokeWidth="1.2" />

      {/* Pistol Grip Handle */}
      <path d="M 210 286 L 235 436 C 235 442, 280 442, 280 436 L 280 286 Z" strokeWidth="1.3" fill="#161616" />
      {/* Trigger switch */}
      <path d="M 206 315 Q 186 335 212 355" strokeWidth="1.6" />

      {/* Battery Pack Base */}
      <rect x="215" y="436" width="80" height="34" rx="6" strokeWidth="1.2" />
      <line x1="215" y1="446" x2="295" y2="446" />

      {/* Chuck Assembly */}
      <rect x="360" y="213" width="16" height="50" rx="2" />
      <rect x="376" y="218" width="34" height="40" rx="3" strokeWidth="1.2" />
      <line x1="393" y1="218" x2="393" y2="258" />

      {/* Long Drill Bit */}
      <rect x="410" y="233" width="90" height="10" rx="1.5" strokeWidth="1.2" />
      {/* Helical flutes on drill bit */}
      <path d="M 420 233 C 430 243, 435 233, 445 243 C 455 233, 460 243, 470 233 C 480 243, 485 233, 495 243" strokeWidth="1.2" />

      {/* Sparks / Work lines at drill tip */}
      <line x1="510" y1="238" x2="530" y2="238" strokeWidth="1" />
      <line x1="506" y1="230" x2="522" y2="214" strokeWidth="1" />
      <line x1="506" y1="246" x2="522" y2="262" strokeWidth="1" />
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
