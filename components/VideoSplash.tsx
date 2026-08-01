"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSplash() {
  const [showSplash, setShowSplash] = useState(true);

  // Lock scrolling while splash is active, but bypass on mobile
  useEffect(() => {
    // Bypass entirely on mobile screens (under 768px)
    if (window.innerWidth < 768) {
      setShowSplash(false);
      document.body.style.overflow = "unset";
      return;
    }

    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] w-screen h-screen bg-black hidden md:flex flex-col items-center justify-center"
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src="/VideoSplash.mp4" type="video/mp4" />
          </video>

          {/* Grain Overlay for cinematic texture */}
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>

          {/* Interactive Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => setShowSplash(false)}
                className="group relative flex items-center gap-6 px-10 py-5 overflow-hidden transition-all duration-700"
              >
                {/* Ultra-thin elegant glass border */}
                <div className="absolute inset-0 border-[0.5px] border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-700 group-hover:bg-white/10 group-hover:border-white/40 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"></div>
                
                {/* Text */}
                <span className="relative z-10 text-white font-light tracking-[0.3em] text-xs uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                  Enter Experience
                </span>
                
                {/* Elegant Animated Arrow */}
                <div className="relative z-10 flex items-center overflow-hidden w-6 h-4">
                  <svg 
                    className="absolute left-0 w-4 h-4 text-white transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-8" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  {/* Secondary arrow that slides in from the left */}
                  <svg 
                    className="absolute left-0 w-4 h-4 text-white transform -translate-x-8 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-0" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Sweeping accent line on hover */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:w-full"></div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
