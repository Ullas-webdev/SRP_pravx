"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Never SSR the LoadingScreen — prevents it appearing in server HTML
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

// Key that stores the performance.timeOrigin of the last hard page load.
const ORIGIN_KEY = "srp_page_origin";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const [skip, setSkip] = useState(false);  // true = skip loader, show content
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const currentOrigin = String(performance.timeOrigin);
    const storedOrigin = sessionStorage.getItem(ORIGIN_KEY);

    if (storedOrigin === currentOrigin) {
      // Same session (client-side nav) → skip loader
      setSkip(true);
    } else {
      // Hard refresh or new visit → show loader
      sessionStorage.setItem(ORIGIN_KEY, currentOrigin);
    }
    setReady(true);
  }, []);

  const handleComplete = () => {
    setSkip(true);
  };

  // We determine showContent as true if we are ready and skip is true
  const showContent = ready && skip;

  return (
    <>
      {/* Loader — only mount on first visit/refresh after client hydrates */}
      {ready && !skip && <LoadingScreen onComplete={handleComplete} />}

      {/* 
        Content is ALWAYS rendered in the DOM to preserve height, anchor tags, 
        and allow browser scroll restoration to work instantly.
      */}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? "none" : "translateY(20px)",
          transition: "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {children}
      </div>
    </>
  );
}


