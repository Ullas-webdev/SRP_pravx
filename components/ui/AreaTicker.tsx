"use client";

import { useState, useEffect, useRef } from "react";
import { useMotionValue, useTransform, motion, animate, useInView } from "framer-motion";

interface Props {
  area: string;
}

export default function AreaTicker({ area }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [numVal, setNumVal] = useState(0);
  const [suffix, setSuffix] = useState("");
  const [hasComma, setHasComma] = useState(false);

  useEffect(() => {
    // Extract the first consecutive sequence of digits and commas
    const match = area.match(/^([\d,]+)(.*)$/);
    if (match) {
      const numStr = match[1];
      const parsedNum = parseInt(numStr.replace(/,/g, ""), 10);
      setNumVal(parsedNum || 0);
      setSuffix(match[2] || "");
      setHasComma(numStr.includes(","));
    } else {
      setNumVal(0);
      setSuffix(area);
      setHasComma(false);
    }
  }, [area]);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const val = Math.round(latest);
    if (hasComma) {
      return val.toLocaleString("en-US");
    }
    return val.toString();
  });

  useEffect(() => {
    if (isInView && numVal > 0) {
      const controls = animate(count, numVal, {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1], // premium out-expo ease
      });
      return () => controls.stop();
    }
  }, [isInView, numVal, count]);

  if (numVal === 0) {
    return <span ref={ref}>{area}</span>;
  }

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
