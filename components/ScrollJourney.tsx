"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STAGES = [
  { n: "01", label: "Blueprint", note: "Every project starts as measured intent." },
  { n: "02", label: "Architecture", note: "Form follows how the space will be used." },
  { n: "03", label: "Construction", note: "MEP, flooring and structure, executed on schedule." },
  { n: "04", label: "Luxury Interior", note: "Material, light and finish, layered with restraint." },
  { n: "05", label: "Final Reveal", note: "A space that performs — handed over turnkey." },
];

export default function ScrollJourney() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const grid = wrap.querySelectorAll(".sj-grid line");
      const structure = wrap.querySelectorAll(".sj-structure path");
      const walls = wrap.querySelector(".sj-walls");
      const glass = wrap.querySelector(".sj-glass");
      const glow = wrap.querySelector(".sj-glow");
      const floor = wrap.querySelector(".sj-floor");

      gsap.set(structure, { strokeDasharray: 1000, strokeDashoffset: 1000 });
      gsap.set(walls, { opacity: 0 });
      gsap.set(glass, { opacity: 0 });
      gsap.set(glow, { opacity: 0, scale: 0.9, transformOrigin: "50% 60%" });
      gsap.set(floor, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#journey-pin",
          start: "top top",
          end: "+=400%",
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            setStage(Math.min(4, Math.floor(self.progress * 5)));
          },
        },
      });

      tl.to(grid, { opacity: 0.9, duration: 1, stagger: 0.01 }, 0)
        .to(structure, { strokeDashoffset: 0, duration: 2, stagger: 0.06 }, 0.2)
        .to(grid, { opacity: 0.15, duration: 1 }, 1.6)
        .to(walls, { opacity: 1, duration: 1.5 }, 1.4)
        .to(floor, { opacity: 1, duration: 1.5 }, 1.8)
        .to(glass, { opacity: 0.9, duration: 1.5 }, 2.6)
        .to(glow, { opacity: 1, scale: 1, duration: 2 }, 3.2);
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey-pin"
      ref={wrapRef}
      className="relative bg-charcoal"
    >
      <div className="h-[100svh] sticky top-0 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full" style={{
            backgroundImage:
              "linear-gradient(rgba(247,244,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,238,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
        </div>

        <div className="container-x relative z-10 w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-gold mb-4">The SRP Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-balance mb-8">
              From line to
              <span className="italic gold-gradient-text"> lived-in space.</span>
            </h2>

            <div className="space-y-5">
              {STAGES.map((s, i) => (
                <div
                  key={s.n}
                  className={`flex items-start gap-4 transition-opacity duration-500 ${
                    i === stage ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <span className="eyebrow text-gold mt-1">{s.n}</span>
                  <div>
                    <p className="font-display text-xl md:text-2xl">{s.label}</p>
                    {i === stage && (
                      <p className="text-pearl/55 text-sm mt-1 max-w-sm">{s.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
            <svg viewBox="0 0 600 600" className="w-full h-full max-w-[520px]">
              <g className="sj-grid" stroke="#C9A66B" strokeWidth="0.4" opacity="0">
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`h${i}`} x1="40" y1={40 + i * 46} x2="560" y2={40 + i * 46} />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`v${i}`} x1={40 + i * 46} y1="40" x2={40 + i * 46} y2="560" />
                ))}
              </g>

              <g className="sj-structure" stroke="#F7F4EE" strokeWidth="1.4" fill="none">
                <path d="M120 480 L120 220 L300 120 L480 220 L480 480 Z" />
                <path d="M120 220 L300 320 L480 220" />
                <path d="M300 320 L300 480" />
                <path d="M180 480 L180 300 L230 300 L230 480" />
                <path d="M370 480 L370 300 L420 300 L420 480" />
              </g>

              <polygon
                className="sj-walls"
                points="120,480 120,220 300,120 480,220 480,480"
                fill="#1c1b1a"
                stroke="#3a352c"
              />

              <rect className="sj-floor" x="120" y="470" width="360" height="10" fill="#B5652E" opacity="0.5" />

              <g className="sj-glass" fill="#C9A66B" opacity="0">
                <rect x="180" y="300" width="50" height="180" opacity="0.18" />
                <rect x="370" y="300" width="50" height="180" opacity="0.18" />
                <polygon points="120,220 300,120 480,220 480,260 300,170 120,260" opacity="0.25" />
              </g>

              <ellipse className="sj-glow" cx="300" cy="360" rx="180" ry="120" fill="url(#glowGrad)" opacity="0" />
              <defs>
                <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E08A4B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#E08A4B" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
