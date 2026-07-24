"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const featuredImages = [
  { 
    src: "/featured/feat1.jpg", 
    span: "aspect-square md:aspect-auto md:col-span-2 md:row-span-2", 
    label: "Bespoke Modern Kitchen" 
  },
  { 
    src: "/featured/feat2.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Luxury Residential Lounge" 
  },
  { 
    src: "/featured/feat6.jpg", 
    span: "aspect-[3/4] md:aspect-auto md:col-span-1 md:row-span-2", 
    label: "Glass Partitioned Office" 
  },
  { 
    src: "/featured/feat3.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Commercial Retail Front" 
  },
  { 
    src: "/featured/feat7.jpg", 
    span: "aspect-video md:aspect-auto md:col-span-2 md:row-span-1", 
    label: "Premium Dining Area" 
  },
  { 
    src: "/featured/feat4.jpg", 
    span: "aspect-video md:aspect-auto md:col-span-2 md:row-span-1", 
    label: "Aesthetic Café Interior" 
  },
  { 
    src: "/featured/feat5.jpg", 
    span: "aspect-video md:aspect-auto md:col-span-2 md:row-span-1", 
    label: "Open-Plan Corporate Workspace" 
  },
  { 
    src: "/featured/feat8.jpg", 
    span: "aspect-video md:aspect-auto md:col-span-2 md:row-span-1", 
    label: "Food & Beverage Counter" 
  },
  { 
    src: "/featured/feat9.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Industrial Yellow Racking" 
  },
  { 
    src: "/featured/feat10.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Large Warehouse Facility" 
  },
  { 
    src: "/featured/feat11.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Cantilever Storage System" 
  },
  { 
    src: "/featured/feat12.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Heavy-Duty Metal Shelving" 
  },
  { 
    src: "/featured/feat13.jpg", 
    span: "aspect-square md:aspect-auto md:col-span-2 md:row-span-2", 
    label: "Industrial Yellow Bins Storage" 
  },
  { 
    src: "/featured/feat14.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Black Tiled Commercial Kitchen" 
  },
  { 
    src: "/featured/feat15.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Corporate Lounge Area" 
  },
  { 
    src: "/featured/feat16.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Cafe Outdoor Seating" 
  },
  { 
    src: "/featured/feat17.jpg", 
    span: "aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1", 
    label: "Commercial Exterior Shutter" 
  },
  { 
    src: "/featured/feat18.jpg", 
    span: "aspect-video md:aspect-[21/9] md:col-span-4 md:row-span-1", 
    label: "Industrial Metal Racking Setup" 
  },
];

export default function FeaturedGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }
    
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => prev !== null ? (prev + 1) % featuredImages.length : null);
        setScale(1);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => prev !== null ? (prev - 1 + featuredImages.length) % featuredImages.length : null);
        setScale(1);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
        setScale(1);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % featuredImages.length);
      setScale(1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + featuredImages.length) % featuredImages.length);
      setScale(1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-matte relative border-t border-line/40">
      <div className="container-x">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow text-gold mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
            Featured <span className="italic gold-gradient-text">Environments</span>
          </h2>
          <p className="text-pearl/60 text-base md:text-lg font-light leading-relaxed max-w-3xl">
            A closer look at the premium spaces, precision engineering, and bespoke interiors we deliver across sectors.
          </p>
        </div>

        {/* Minimalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 md:auto-rows-[300px]">
          {featuredImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setSelectedIndex(i)}
            >
              {/* 
                Image scaled to 1.05 initially to automatically crop out 
                any thin baked-in white borders around the image edge.
              */}
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  quality={100}
                  className="object-cover scale-[1.05] group-hover:scale-[1.10] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-full flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="overflow-hidden flex items-center justify-center rounded-md"
                onWheel={(e) => {
                  e.stopPropagation();
                  setScale(s => Math.min(Math.max(1, s - e.deltaY * 0.005), 5));
                }}
              >
                <img
                  src={featuredImages[selectedIndex].src}
                  alt="Expanded view"
                  className="max-w-full max-h-[90vh] object-contain transition-transform duration-100 ease-out"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>
              
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-matte/50 hover:bg-matte text-white border border-line rounded-full flex items-center justify-center hover:text-gold hover:border-gold transition-colors z-20 cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-matte/50 hover:bg-matte text-white border border-line rounded-full flex items-center justify-center hover:text-gold hover:border-gold transition-colors z-20 cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-0 right-0 md:-top-4 md:-right-4 w-10 h-10 bg-matte text-white border border-line rounded-full flex items-center justify-center hover:text-gold hover:border-gold transition-colors z-30 translate-x-1/4 -translate-y-1/4 md:translate-x-1/2 md:-translate-y-1/2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

