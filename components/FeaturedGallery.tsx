"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featuredImages = [
  { src: "/featured/batch2_2.jpg", span: "md:col-span-2 md:row-span-2" }, // Large feature
  { src: "/featured/batch1_1.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/featured/batch1_4.jpg", span: "md:col-span-1 md:row-span-2" }, // Tall feature
  { src: "/featured/batch1_2.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/featured/batch2_1.jpg", span: "md:col-span-2 md:row-span-1" }, // Wide feature
  { src: "/featured/batch1_5.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/featured/batch1_3.jpg", span: "md:col-span-1 md:row-span-1" },
];

export default function FeaturedGallery() {
  return (
    <section className="py-24 md:py-32 bg-matte relative border-t border-line/40">
      <div className="container-x">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold mb-4">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Featured <span className="italic gold-gradient-text">Environments</span>
            </h2>
          </div>
          <p className="text-pearl/60 max-w-sm text-sm md:text-base">
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
              <div className="absolute inset-0 bg-pearl/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <Image
                src={img.src}
                alt={`Featured project ${i + 1}`}
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
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
