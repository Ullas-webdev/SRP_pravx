"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Never SSR the LoadingScreen — prevents it appearing in server HTML
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

// Key that stores the performance.timeOrigin of the last hard page load.
// performance.timeOrigin changes on every browser refresh / first visit,
// but stays the same across client-side Next.js navigations.
const ORIGIN_KEY = "srp_page_origin";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const [skip, setSkip] = useState(false);  // true = skip loader
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const currentOrigin = String(performance.timeOrigin);
    const storedOrigin = sessionStorage.getItem(ORIGIN_KEY);

    if (storedOrigin === currentOrigin) {
      // Same hard-load session → client-side navigation → skip loader
      setSkip(true);
    } else {
      // New hard load (first visit or browser refresh) → show loader
      sessionStorage.setItem(ORIGIN_KEY, currentOrigin);
    }

    setReady(true);
  }, []);

  const handleComplete = () => setSkip(true);

  if (!ready) return null;

  return (
    <>
      {/* Loader — only on hard page loads (refresh / first visit) */}
      {!skip && <LoadingScreen onComplete={handleComplete} />}

      {/* Page content */}
      <AnimatePresence>
        {skip && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

