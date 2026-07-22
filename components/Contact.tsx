"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICE_OPTIONS = [
  "Interior Fit-out",
  "Commercial Space",
  "Retail Store",
  "Dark Store",
  "MEP Solutions",
  "Luxury Residential",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICE_OPTIONS[0],
    message: "",
    website: "", // honeypot — stays empty for real users, hidden from view
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Could not reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-matte">
      <div className="container-x grid lg:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow text-gold mb-4">Start A Project</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-balance">
            Let&rsquo;s build your
            <span className="italic gold-gradient-text"> next space.</span>
          </h2>
          <p className="text-pearl/60 leading-relaxed mb-10 max-w-md">
            Tell us about the site and the scope. Our team will get back to you
            within one business day to schedule a site visit or a call.
          </p>

          <div className="space-y-6 mb-10">
            <a href="tel:+919663813861" className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full border border-pearl/25 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                ☎
              </span>
              <span className="text-pearl/75 group-hover:text-gold transition-colors duration-300">
                +91 9663813861
              </span>
            </a>
            <a href="tel:+918884887878" className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full border border-pearl/25 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                ☎
              </span>
              <span className="text-pearl/75 group-hover:text-gold transition-colors duration-300">
                +91 8884887878
              </span>
            </a>
            <a href="mailto:info@spaceright.co.in" className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full border border-pearl/25 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                ✉
              </span>
              <span className="text-pearl/75 group-hover:text-gold transition-colors duration-300">
                info@spaceright.co.in
              </span>
            </a>
            <a
              href="https://wa.me/918884887878"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full border border-pearl/25 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="text-pearl/75 group-hover:text-gold transition-colors duration-300">
                Chat with us on WhatsApp
              </span>
            </a>
          </div>

          <div className="border border-line h-64 md:h-72 overflow-hidden">
            <iframe
              title="SRP location"
              src="https://www.google.com/maps?q=Banaswadi,+Bengaluru,+Karnataka+560043&output=embed"
              className="w-full h-full grayscale invert-[0.92] contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="card-glass p-8 md:p-10">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center text-center py-16"
            >
              <p className="font-display text-3xl mb-3 gold-gradient-text">Request received.</p>
              <p className="text-pearl/60 max-w-xs">
                Our team will reach out shortly to schedule your consultation
                or site visit.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot — hidden from sighted users and screen readers, bots often fill it in */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {status === "error" && (
                <p className="text-sm text-ember border border-ember/40 bg-ember/10 px-4 py-3">
                  {errorMessage}
                </p>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="eyebrow text-pearl/50 block mb-2">Full Name</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-pearl/25 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-pearl/50 block mb-2">Phone</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-pearl/25 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="+91"
                  />
                </label>
              </div>

              <label className="block">
                <span className="eyebrow text-pearl/50 block mb-2">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-pearl/25 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="you@company.com"
                />
              </label>

              <label className="block">
                <span className="eyebrow text-pearl/50 block mb-2">Service Required</span>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-transparent border-b border-pearl/25 py-3 focus:outline-none focus:border-gold transition-colors duration-300 [&>option]:text-matte"
                >
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="eyebrow text-pearl/50 block mb-2">Project Details</span>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-pearl/25 py-3 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  placeholder="Site size, location, timeline..."
                />
              </label>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary border border-pearl px-7 py-3.5 eyebrow hover:text-matte transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {status === "submitting" ? "Sending..." : "Book Site Visit"}
                </button>
                <span className="eyebrow text-pearl/40 self-center">
                  or call +91 88848 87878
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
