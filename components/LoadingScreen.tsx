"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";

// ─── constants ──────────────────────────────────────────────────────────────
const MESSAGES = [
  "Designing Luxury Spaces...",
  "Creating Timeless Interiors...",
  "Building Beautiful Experiences...",
  "Welcome to SPACE RIGHT PROJECTS...",
];

// ─── sub-components ──────────────────────────────────────────────────────────

/** Subtle architectural grid drawn on a canvas */
function ArchitecturalGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; a: number }[] = Array.from(
      { length: 55 },
      () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        a: Math.random(),
      })
    );

    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;
      const gridSize = 80;
      const shift = (t * 8) % gridSize;

      // vertical grid lines
      ctx.strokeStyle = "rgba(201,166,107,0.06)";
      ctx.lineWidth = 0.5;
      for (let x = -gridSize + shift; x < W + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      // horizontal grid lines
      for (let y = -gridSize + shift; y < H + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // gold particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const alpha = 0.15 + 0.12 * Math.sin(t * 1.2 + p.a * 6.28);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,166,107,${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

/** Inline SVG logo with sequenced stroke + fade animations */
function AnimatedLogo({ done }: { done: boolean }) {
  // Geometry mirrors logo-square-light.svg exactly
  // Main notched square path: M50,50 H310 V190 H450 V450 H50 Z
  const bigPathLength = 1530; // approximate total stroke length

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const SPACE = "SPACE";
  const RIGHT = "RIGHT";

  return (
    <motion.div
      animate={done ? { scale: 1.06 } : { scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center select-none"
    >
      {/* SVG mark */}
      <svg
        viewBox="0 0 500 500"
        className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] mb-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Floating small square — slides from top */}
        <motion.rect
          x="350" y="50" width="100" height="100"
          fill="#FFFFFF"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />

        {/* Main notched square — SVG stroke draw */}
        <motion.path
          d="M50,50 H310 V190 H450 V450 H50 Z"
          stroke="#FFFFFF"
          strokeWidth="3"
          fill="none"
          strokeDasharray={bigPathLength}
          initial={{ strokeDashoffset: bigPathLength, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
        />
        {/* Fill appears after stroke completes */}
        <motion.path
          d="M50,50 H310 V190 H450 V450 H50 Z"
          fill="#FFFFFF"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 1.75 }}
        />
      </svg>

      {/* Text: SPACE — letter by letter */}
      <motion.div
        className="flex gap-[0.25em] mb-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ transitionDelay: "1.9s" } as React.CSSProperties}
        // override: start stagger only after big square fill
        custom={1.9}
      >
        {SPACE.split("").map((ch, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            transition={{ delay: 1.9 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            initial="hidden"
            animate="visible"
            className="text-white font-bold tracking-[0.25em] text-4xl md:text-5xl"
            style={{ fontFamily: "'Montserrat','Helvetica Neue',sans-serif" }}
          >
            {ch}
          </motion.span>
        ))}
      </motion.div>

      {/* Text: RIGHT — letter by letter */}
      <div className="flex gap-[0.25em] mb-3">
        {RIGHT.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-bold tracking-[0.25em] text-4xl md:text-5xl"
            style={{ fontFamily: "'Montserrat','Helvetica Neue',sans-serif" }}
          >
            {ch}
          </motion.span>
        ))}
      </div>

      {/* Text: PROJECTS — blur-to-focus */}
      <motion.span
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 2.7 }}
        className="text-[#C9A66B] tracking-[0.45em] text-sm md:text-base font-medium"
        style={{ fontFamily: "'Montserrat','Helvetica Neue',sans-serif" }}
      >
        PROJECTS
      </motion.span>
    </motion.div>
  );
}

/** Glassmorphism progress bar */
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="flex flex-col items-center gap-3 mt-12">
      {/* track */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: "250px",
          height: "3px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 0 18px rgba(201,166,107,0.08)",
        }}
      >
        {/* fill */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(201,166,107,0.7) 0%, rgba(231,220,201,0.95) 100%)",
            boxShadow: "0 0 14px rgba(201,166,107,0.55)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      {/* percentage */}
      <motion.span
        className="text-[#C9A66B] text-xs tracking-[0.22em]"
        style={{ fontFamily: "'JetBrains Mono',monospace", opacity: 0.75 }}
        key={Math.round(progress)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 0.25 }}
      >
        {Math.round(progress)}%
      </motion.span>
    </div>
  );
}

/** Rotating loading message */
function LoadingMessage({ index }: { index: number }) {
  return (
    <div className="h-5 mt-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.45, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-white text-[0.68rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'JetBrains Mono','Courier New',monospace" }}
        >
          {MESSAGES[index % MESSAGES.length]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

// ─── main export ─────────────────────────────────────────────────────────────
interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Progress ticker — eased to simulate real loading feel
  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const TOTAL_MS = 2800; // full 0→100 duration

    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const raw = Math.min((ts - start) / TOTAL_MS, 1);
      const p = ease(raw) * 100;
      setProgress(p);

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        // brief pause at 100%, then exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 750);
        }, 450);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  // Message rotator every 900ms
  useEffect(() => {
    const id = setInterval(() => setMsgIndex((i) => i + 1), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* animated grid + particles */}
          <ArchitecturalGrid />

          {/* radial glow from center */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 40% at 50% 50%, rgba(201,166,107,0.06) 0%, transparent 70%)",
            }}
          />

          {/* central content */}
          <div className="relative z-10 flex flex-col items-center">
            <AnimatedLogo done={done} />
            <ProgressBar progress={progress} />
            <LoadingMessage index={msgIndex} />
          </div>

          {/* corner marks — architectural detail */}
          {[
            "top-6 left-6",
            "top-6 right-6 rotate-90",
            "bottom-6 right-6 rotate-180",
            "bottom-6 left-6 -rotate-90",
          ].map((pos, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              className={`absolute ${pos} w-5 h-5 opacity-20`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
              fill="none"
            >
              <path d="M0 10 L0 0 L10 0" stroke="#C9A66B" strokeWidth="1" />
            </motion.svg>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
