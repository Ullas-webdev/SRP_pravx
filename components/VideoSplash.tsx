"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSplash() {
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartY = useRef<number>(0);

  // Sync with the preloader in PageShell
  useEffect(() => {
    const handleReady = () => setAppReady(true);
    window.addEventListener("app-ready", handleReady);
    
    // Fallback: if we mount after PageShell already fired it
    const storedOrigin = sessionStorage.getItem("srp_page_origin");
    if (storedOrigin === String(performance.timeOrigin)) {
      setAppReady(true);
    }
    
    return () => window.removeEventListener("app-ready", handleReady);
  }, []);

  const handleDismiss = useCallback(() => {
    setShowSplash(false);
    document.body.style.overflow = "unset";
  }, []);

  // Listen to scroll, wheel, touch, and key events to continue into main content
  useEffect(() => {
    if (!showSplash || !appReady) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";

    // 1. Mouse wheel event
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 || Math.abs(e.deltaY) > 5) {
        handleDismiss();
      }
    };

    // 2. Touch gesture for mobile / trackpad touch
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY.current - currentY;
      // User swipes upward (diffY > 10) to scroll down
      if (diffY > 10) {
        handleDismiss();
      }
    };

    // 3. Key navigation (ArrowDown, PageDown, Space, Enter)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "Enter"
      ) {
        handleDismiss();
      }
    };

    // 4. Window scroll fallback
    const handleWindowScroll = () => {
      if (window.scrollY > 5) {
        handleDismiss();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [showSplash, appReady, handleDismiss]);

  return (
    <AnimatePresence>
      {showSplash && appReady && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] w-screen h-screen bg-black flex flex-col items-center justify-center cursor-pointer select-none"
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleDismiss}
            onCanPlay={(e) => {
              if (e.currentTarget.currentTime > 0) {
                e.currentTarget.currentTime = 0;
              }
              e.currentTarget.play().catch(console.error);
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src="/VideoSplash.mp4" type="video/mp4" />
          </video>

          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>

          {/* Scroll Indicator Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 md:pb-24 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-white/70 text-xs font-light tracking-[0.3em] uppercase">
                Scroll to Explore
              </span>
              <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="w-1.5 h-2.5 bg-white/80 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
