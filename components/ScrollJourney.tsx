"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  {
    n: "01",
    label: "Site Visit",
    note: "Comprehensive inspection of structural alignments, orientations, and site parameters to lay a flawless foundation."
  },
  {
    n: "02",
    label: "Blueprint",
    note: "Meticulous design planning, drafting precise zoning maps, architectural layouts, and 3D visual specifications."
  },
  {
    n: "03",
    label: "BOQ Preparation and Commercial",
    note: "Granular Bill of Quantities outlining transparent cost projections, procurement lists, and timeline parameters."
  },
  {
    n: "04",
    label: "Construction and Luxury Interior",
    note: "Flawless execution of MEP installations, structural divisions, and bespoke premium layers with complete quality control."
  },
  {
    n: "05",
    label: "Final Reveal",
    note: "Detailed quality audit and client walkthrough followed by a seamless handover of the turnkey, performance-ready space."
  },
];

function renderGeometry(stageIndex: number) {
  switch (stageIndex) {
    case 0: // Site Visit
      return (
        <g stroke="#C9A66B" strokeWidth="0.8" fill="none">
          {/* Compass / radar outer dial */}
          <circle cx="300" cy="300" r="180" strokeDasharray="4,4" opacity="0.4" />
          <circle cx="300" cy="300" r="100" opacity="0.6" />
          {/* Vertical and horizontal axis */}
          <line x1="120" y1="300" x2="480" y2="300" opacity="0.3" />
          <line x1="300" y1="120" x2="300" y2="480" opacity="0.3" />
          {/* Radial mapping lines */}
          <line x1="172" y1="172" x2="428" y2="428" strokeDasharray="3,3" opacity="0.25" />
          <line x1="428" y1="172" x2="172" y2="428" strokeDasharray="3,3" opacity="0.25" />
          {/* Measuring point markers */}
          <polygon points="300,115 305,120 300,125 295,120" fill="#C9A66B" />
          <polygon points="300,475 305,480 300,485 295,480" fill="#C9A66B" />
          <polygon points="115,300 120,305 125,300 120,295" fill="#C9A66B" />
          <polygon points="475,300 480,305 485,300 480,295" fill="#C9A66B" />
          {/* Target scanning circles in center */}
          <circle cx="300" cy="300" r="24" strokeWidth="1" />
          <circle cx="300" cy="300" r="6" fill="#C9A66B" />
          {/* Laser distance measuring box silhouette */}
          <rect x="250" y="220" width="100" height="50" strokeWidth="1.2" />
          <line x1="250" y1="245" x2="350" y2="245" strokeDasharray="2,2" />
          <text x="300" y="210" fill="#C9A66B" fontSize="10" textAnchor="middle" style={{ fontFamily: 'monospace', letterSpacing: '2px' }}>LASER RANGE FINDER</text>
        </g>
      );
    case 1: // Blueprint
      return (
        <g stroke="#C9A66B" strokeWidth="0.8" fill="none">
          {/* Blueprint wall outlines */}
          <rect x="140" y="160" width="320" height="280" strokeWidth="1.5" />
          <rect x="140" y="160" width="160" height="140" strokeWidth="1.2" />
          {/* Door swing arc symbol */}
          <path d="M 300 300 A 60 60 0 0 1 360 360" strokeWidth="1.2" strokeDasharray="3,3" />
          <line x1="300" y1="300" x2="300" y2="360" />
          <line x1="300" y1="360" x2="360" y2="360" />
          {/* Window elements */}
          <rect x="200" y="155" width="40" height="10" fill="#161616" strokeWidth="1" />
          <rect x="380" y="155" width="40" height="10" fill="#161616" strokeWidth="1" />
          {/* Dimension lines with endpoints */}
          <line x1="140" y1="465" x2="460" y2="465" strokeWidth="1" />
          <line x1="140" y1="460" x2="140" y2="470" />
          <line x1="460" y1="460" x2="460" y2="470" />
          <text x="300" y="490" fill="#C9A66B" fontSize="12" textAnchor="middle" style={{ fontFamily: 'monospace', letterSpacing: '1px' }}>ZONING PLAN: 12,800 mm</text>
          {/* North arrow icon in corner */}
          <g transform="translate(420, 190)">
            <circle cx="20" cy="20" r="16" strokeDasharray="2,2" opacity="0.5" />
            <polygon points="20,5 25,20 20,17 15,20" fill="#C9A66B" />
            <text x="20" y="32" fill="#C9A66B" fontSize="8" textAnchor="middle">N</text>
          </g>
        </g>
      );
    case 2: // BOQ Preparation and Commercial
      return (
        <g stroke="#C9A66B" strokeWidth="0.8" fill="none">
          {/* Balancing scales representing budget/commercial alignment */}
          <line x1="150" y1="200" x2="450" y2="200" strokeWidth="1.5" />
          <polygon points="300,130 290,200 310,200" fill="#C9A66B" opacity="0.3" />
          <line x1="300" y1="200" x2="300" y2="440" strokeWidth="1.5" />
          <line x1="150" y1="200" x2="120" y2="290" />
          <line x1="150" y1="200" x2="180" y2="290" />
          <path d="M 110 290 Q 150 310 190 290" strokeWidth="1.2" />
          <line x1="450" y1="200" x2="420" y2="290" />
          <line x1="450" y1="200" x2="480" y2="290" />
          <path d="M 410 290 Q 450 310 490 290" strokeWidth="1.2" />
          {/* Checklist grid of BOQ line items */}
          <g transform="translate(160, 335)">
            <rect x="0" y="0" width="280" height="24" opacity="0.4" />
            <rect x="0" y="24" width="280" height="24" opacity="0.4" />
            <rect x="0" y="48" width="280" height="24" opacity="0.4" />
            <rect x="8" y="6" width="12" height="12" />
            <rect x="8" y="30" width="12" height="12" />
            <rect x="8" y="54" width="12" height="12" />
            <polyline points="10,12 13,15 18,8" strokeWidth="1.2" />
            <polyline points="10,36 13,39 18,32" strokeWidth="1.2" />
            <polyline points="10,60 13,63 18,56" strokeWidth="1.2" />
            <line x1="30" y1="12" x2="160" y2="12" opacity="0.7" />
            <line x1="30" y1="36" x2="180" y2="36" opacity="0.7" />
            <line x1="30" y1="60" x2="140" y2="60" opacity="0.7" />
            <circle cx="240" cy="12" r="4" fill="#C9A66B" />
            <circle cx="240" cy="36" r="4" fill="#C9A66B" />
            <circle cx="240" cy="60" r="4" fill="#C9A66B" />
          </g>
        </g>
      );
    case 3: // Construction and Luxury Interior
      return (
        <g stroke="#C9A66B" strokeWidth="0.8" fill="none">
          {/* Structural brick courses / Wall sections */}
          <rect x="90" y="160" width="180" height="280" strokeWidth="1.2" />
          <line x1="90" y1="216" x2="270" y2="216" />
          <line x1="90" y1="272" x2="270" y2="272" />
          <line x1="90" y1="328" x2="270" y2="328" />
          <line x1="90" y1="384" x2="270" y2="384" />
          <line x1="150" y1="160" x2="150" y2="216" />
          <line x1="210" y1="160" x2="210" y2="216" />
          <line x1="120" y1="216" x2="120" y2="272" />
          <line x1="180" y1="216" x2="180" y2="272" />
          <line x1="240" y1="216" x2="240" y2="272" />
          <line x1="150" y1="272" x2="150" y2="328" />
          <line x1="210" y1="272" x2="210" y2="328" />
          {/* MEP plumbing & conduit pipelines */}
          <path d="M 310 160 L 310 290 Q 310 350 370 350 L 490 350" strokeWidth="2.5" />
          <path d="M 340 160 L 340 270 Q 340 320 390 320 L 490 320" strokeWidth="1.2" />
          {/* Sprinkler/Nozzle outline */}
          <circle cx="310" cy="180" r="6" fill="#C9A66B" />
          {/* Leveling ruler icon */}
          <polygon points="360,230 440,190 460,230 380,270" opacity="0.6" />
          <circle cx="410" cy="230" r="4" fill="#C9A66B" />
        </g>
      );
    case 4: // Final Reveal
      return (
        <g stroke="#C9A66B" strokeWidth="0.8" fill="none">
          {/* Grand arch reveal entry */}
          <path d="M 180 460 L 180 240 A 120 120 0 0 1 420 240 L 420 460" strokeWidth="1.6" />
          <path d="M 220 460 L 220 260 A 80 80 0 0 1 380 260 L 380 460" strokeWidth="0.8" strokeDasharray="3,3" />
          {/* Chandelier / Pendant Light radiating */}
          <line x1="300" y1="180" x2="300" y2="120" strokeWidth="1.2" />
          <line x1="300" y1="180" x2="240" y2="130" opacity="0.4" />
          <line x1="300" y1="180" x2="360" y2="130" opacity="0.4" />
          <line x1="300" y1="180" x2="180" y2="180" opacity="0.4" />
          <line x1="300" y1="180" x2="420" y2="180" opacity="0.4" />
          {/* Sparkles / Light nodes */}
          <circle cx="300" cy="180" r="10" fill="#C9A66B" opacity="0.8" />
          <circle cx="240" cy="130" r="4" fill="#C9A66B" />
          <circle cx="360" cy="130" r="4" fill="#C9A66B" />
          {/* Handover key silhouette */}
          <circle cx="300" cy="350" r="16" strokeWidth="1.2" />
          <circle cx="300" cy="350" r="6" />
          <line x1="300" y1="366" x2="300" y2="430" strokeWidth="1.5" />
          <line x1="300" y1="390" x2="315" y2="390" strokeWidth="1.5" />
          <line x1="300" y1="410" x2="315" y2="410" strokeWidth="1.5" />
        </g>
      );
    default:
      return null;
  }
}

export default function ScrollJourney() {
  const [stage, setStage] = useState(0);

  const handleNext = () => {
    setStage((prev) => Math.min(prev + 1, STAGES.length - 1));
  };

  const handlePrev = () => {
    setStage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="relative bg-charcoal py-24 overflow-hidden" id="journey">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,244,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,238,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-x relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Interactive Stepper & Content */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-gold mb-4">The SRP Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance mb-10 leading-tight">
            From blueprint concept to
            <span className="italic gold-gradient-text"> flawless reality.</span>
          </h2>

          {/* Steps Stepper Panel */}
          <div className="space-y-3 mb-10">
            {STAGES.map((s, i) => {
              const isActive = i === stage;
              return (
                <button
                  key={s.n}
                  onClick={() => setStage(i)}
                  className={`w-full text-left flex items-start gap-4 p-4 border rounded-xl transition-all duration-400 focus:outline-none ${
                    isActive
                      ? "bg-[#1C1B1A]/80 border-gold/40 shadow-lg shadow-gold/5"
                      : "bg-transparent border-line/10 opacity-55 hover:opacity-85 hover:border-line/30"
                  }`}
                >
                  <span className={`eyebrow mt-1 flex-shrink-0 ${isActive ? "text-gold" : "text-pearl/40"}`}>
                    {s.n}
                  </span>
                  <div>
                    <p className={`font-display text-lg md:text-xl transition-colors duration-300 ${isActive ? "text-pearl" : "text-pearl/65"}`}>
                      {s.label}
                    </p>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-pearl/55 text-sm md:text-base leading-relaxed font-light">
                            {s.note}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* "One by One" Button Controller */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={stage === 0}
              className={`flex-1 border px-6 py-4 eyebrow text-center transition-all duration-300 ${
                stage === 0
                  ? "border-line/10 text-pearl/20 cursor-not-allowed"
                  : "border-line text-pearl hover:border-gold hover:text-gold"
              }`}
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              disabled={stage === STAGES.length - 1}
              className={`flex-1 border px-6 py-4 eyebrow text-center transition-all duration-300 ${
                stage === STAGES.length - 1
                  ? "border-line/10 text-pearl/20 cursor-not-allowed"
                  : "border-gold text-gold hover:bg-gold hover:text-matte"
              }`}
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* Right Column: Glowing Geometric Figure Display */}
        <div className="relative h-[45vh] md:h-[55vh] w-full flex items-center justify-center overflow-hidden">
          {/* Radial ambient glow behind geometry */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle 280px at 50% 50%, rgba(201,166,107,0.12) 0%, transparent 100%)",
            }}
          />

          <svg viewBox="0 0 600 600" className="w-full h-full max-w-[540px] relative z-10 select-none">
            {/* Background architectural fine grids */}
            <g stroke="#C9A66B" strokeWidth="0.35" opacity="0.12">
              {Array.from({ length: 13 }).map((_, i) => (
                <line key={`h${i}`} x1="40" y1={40 + i * 43.3} x2="560" y2={40 + i * 43.3} />
              ))}
              {Array.from({ length: 13 }).map((_, i) => (
                <line key={`v${i}`} x1={40 + i * 43.3} y1="40" x2={40 + i * 43.3} y2="560" />
              ))}
            </g>

            {/* Dynamic visual reveal */}
            <AnimatePresence>
              <motion.g
                key={stage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {renderGeometry(stage)}
              </motion.g>
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </section>
  );
}
