"use client";

import PageShell from "@/components/PageShell";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ROLES = [
  {
    title: "Site Engineer",
    dept: "Site Operations & Execution",
    exp: "2-3 Years",
    location: "On-Site Operations",
    desc: "Diploma in Civil/Electrical Engineering required. Responsible for executing on-site layouts, managing daily material inventory, directing subcontractor trades, and ensuring high-quality fit-out execution.",
  },
  {
    title: "Electrician / Plumber / Carpenter",
    dept: "Execution Team / Skilled Trades",
    exp: "2+ Years",
    location: "On-Site Operations",
    desc: "Skilled professionals needed for immediate execution of luxury commercial, kitchen, and turnkey retail fit-outs. Ability to read blueprints and execute MEP/millwork drawings accurately is highly preferred.",
  },
];

export default function CareersPage() {
  return (
    <PageShell>
      <Nav />
      <main className="min-h-screen bg-matte text-pearl pt-32 pb-24 relative z-10 selection:bg-gold/30 selection:text-pearl">
        {/* Ambient background detail */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-[0.03] bg-gold" />

        <div className="container-x">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="eyebrow text-gold mb-4">Careers</p>
            <h1 className="font-display text-4xl md:text-6xl font-light mb-6 text-balance leading-tight">
              Build spaces that
              <span className="italic gold-gradient-text"> perform.</span>
            </h1>
            <p className="text-pearl/65 text-lg md:text-xl font-light leading-relaxed">
              We operate at the intersection of architectural ambition and relentless execution. 
              At SRP, we eliminate contractor gaps by hiring elite design, project management, 
              and engineering minds who want to see their work built correctly, without compromises.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 border-y border-line/40 py-16">
            <div>
              <span className="font-display text-gold text-2xl font-light mb-3 block">01 / Pure In-House Execution</span>
              <p className="text-pearl/50 text-sm leading-relaxed font-light">
                We do not pass coordination risks onto subcontractors. Our own certified teams build our designs, ensuring unparalleled craftsmanship.
              </p>
            </div>
            <div>
              <span className="font-display text-gold text-2xl font-light mb-3 block">02 / Relentless Speed & Scale</span>
              <p className="text-pearl/50 text-sm leading-relaxed font-light">
                Whether deploying 25+ dark stores on a strict rollout template or executing bespoke corporate boardrooms, we build at the speed of business.
              </p>
            </div>
            <div>
              <span className="font-display text-gold text-2xl font-light mb-3 block">03 / Engineering First</span>
              <p className="text-pearl/50 text-sm leading-relaxed font-light">
                We treat MEP, structural load planning, acoustics, and custom millwork as interconnected disciplines, not separate procurement packages.
              </p>
            </div>
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mb-24">
            <h2 className="font-display text-3xl md:text-4xl font-light mb-10 text-white">
              Open Opportunities
            </h2>
            <div className="space-y-6">
              {ROLES.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-[#161616] border border-line/60 rounded-xl p-8 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-normal text-white mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-pearl/40 uppercase tracking-widest">
                        <span>{role.dept}</span>
                        <span className="w-1 h-1 bg-pearl/20 rounded-full" />
                        <span>{role.exp}</span>
                        <span className="w-1 h-1 bg-pearl/20 rounded-full" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-pearl/60 text-sm md:text-base leading-relaxed font-light">
                    {role.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA / Application */}
          <div className="bg-charcoal/30 border border-line/60 rounded-2xl p-10 md:p-16 max-w-4xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />
            <h2 className="font-display text-3xl md:text-4xl font-light mb-4 text-white">
              Apply Now
            </h2>
            <p className="text-pearl/60 text-base md:text-lg font-light mb-8 max-w-2xl mx-auto">
              Ready to execute work that carries real weight? Share your CV and portfolio 
              directly with our recruitment team and let us build something performance-driven.
            </p>
            <a
              href="mailto:info@spaceright.co.in"
              className="inline-flex items-center justify-center border border-pearl hover:border-gold hover:text-gold px-8 py-4 eyebrow transition-all duration-400 hover:bg-gold/10 backdrop-blur-sm"
            >
              info@spaceright.co.in
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </PageShell>
  );
}
