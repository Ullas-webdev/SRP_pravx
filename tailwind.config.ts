import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matte: "#0B0B0C",
        charcoal: "#171615",
        pearl: "#F7F4EE",
        beige: "#E7DCC9",
        gold: "#C9A66B",
        copper: "#B5652E",
        ember: "#E08A4B",
        line: "rgba(247,244,238,0.14)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
      },
    },
  },
  plugins: [],
};
export default config;
