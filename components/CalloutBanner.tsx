"use client";

import { motion } from "framer-motion";

export default function CalloutBanner() {
  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden border-t border-b border-line/30">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('/blueprint-bg.png')",
        }}
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-matte/80 via-matte/60 to-matte/90" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl text-white font-medium tracking-tight mb-6"
        >
          Precision at the Speed of Scale
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-pearl/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
        >
          We execute complex commercial ecosystems and specialized interiors with zero inter-trade friction, turning aggressive timelines into architectural realities.
        </motion.p>
      </div>
    </section>
  );
}
