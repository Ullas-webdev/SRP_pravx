"use client";

import Image from "next/image";

const brands = [
  {
    id: "blinkit",
    name: "Blinkit",
    logo: "/logos/blinkit.png",
    w: 120, h: 120,
  },
  {
    id: "gwalia",
    name: "Gwalia",
    logo: "/logos/gwalia.png",
    w: 120, h: 120,
  },
  {
    id: "tata1mg",
    name: "Tata 1mg",
    logo: "/logos/tata1mg.png",
    w: 110, h: 110,
  },
  {
    id: "weschool",
    name: "WeSchool",
    logo: "/logos/weschool.png",
    w: 200, h: 70,
  },
  {
    id: "zepto",
    name: "Zepto",
    logo: "/logos/zepto.png",
    w: 160, h: 70,
  },
];

// Repeat 8× so the 50% translateX loop is always wider than any screen
const marqueeBrands = Array.from({ length: 8 }, () => brands).flat();

export default function HoverBrandLogo() {
  return (
    <div className="w-full relative overflow-hidden py-8">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-matte to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-matte to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex items-center w-max marquee-track">
        {marqueeBrands.map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-10 sm:mx-14 flex items-center justify-center"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={brand.w}
              height={brand.h}
              className="object-contain"
              style={{ width: brand.w, height: brand.h }}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
