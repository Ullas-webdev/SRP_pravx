"use client";

import HoverBrandLogo from "@/components/ui/hover-brand-logo";

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative py-16 md:py-24 bg-matte border-y border-line overflow-hidden"
    >
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,166,107,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative z-10">
        {/* section header */}
        <div className="mb-14 text-center">
          <p className="eyebrow text-gold mb-4">Trusted By</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-balance">
            Brands that choose to build with SRP.
          </h2>
        </div>

        {/* hairline divider */}
        <div className="hairline mb-12" />

        {/* interactive brand logos */}
        <HoverBrandLogo />

        {/* hairline divider */}
        <div className="hairline mt-12" />
      </div>
    </section>
  );
}
