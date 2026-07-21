"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featuredImages = [
  { 
    src: "/featured/batch2_2.jpg", 
    span: "md:col-span-2 md:row-span-2", 
    label: "Bespoke Corporate Boardroom" 
  },
  { 
    src: "/featured/batch1_1.jpg", 
    span: "md:col-span-1 md:row-span-1", 
    label: "Premium Executive Suite" 
  },
  { 
    src: "/featured/batch1_4.jpg", 
    span: "md:col-span-1 md:row-span-2", 
    label: "Modern Collaboration Zone" 
  },
  { 
    src: "/featured/batch1_2.jpg", 
    span: "md:col-span-1 md:row-span-1", 
    label: "Aesthetic Café Fit-out" 
  },
  { 
    src: "/featured/batch2_1.jpg", 
    span: "md:col-span-2 md:row-span-1", 
    label: "Luxury Residential Lounge" 
  },
  { 
    src: "/featured/batch1_5.jpg", 
    span: "md:col-span-1 md:row-span-1", 
    label: "Acoustic Lecture Hall" 
  },
  { 
    src: "/featured/batch1_3.jpg", 
    span: "md:col-span-1 md:row-span-1", 
    label: "Precision MEP Infrastructure" 
  },
];

export default function FeaturedGallery() {
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {featuredImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-xl overflow-hidden group ${img.span}`}
            >
              {/* 
                Image scaled to 1.05 initially to automatically crop out 
                any thin baked-in white borders around the image edge.
              */}
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover scale-[1.05] group-hover:scale-[1.10] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

