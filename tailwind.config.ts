import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#050508",
        charcoal: "#0D0D12",
        graphite: "#17171F",
        "graphite-light": "#1F1F29",
        porcelain: "#F4F5F8",
        mist: "#9497A6",
        smoke: "#5D6072",
        electric: {
          DEFAULT: "#3D74FF",
          soft: "#6E93FF",
          dim: "#1A3A8F",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
          dim: "#4C2E8F",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-satoshi)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "aurora-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(61,116,255,0.25), transparent), radial-gradient(ellipse 60% 40% at 80% 10%, rgba(139,92,246,0.18), transparent)",
        "glow-blue-violet":
          "linear-gradient(135deg, #3D74FF 0%, #8B5CF6 100%)",
        "card-glass":
          "linear-gradient(155deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(61,116,255,0.25)",
        "glow-violet": "0 0 40px rgba(139,92,246,0.25)",
        "glass-inset": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 1.5s",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};

export default config;
