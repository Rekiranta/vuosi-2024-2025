import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF5F0",
        lavender: "#F5F0FF",
        coral: "#FF6B6B",
        yellow: "#FFE66D",
        mint: "#4ECDC4",
        sky: "#45B7D1",
        charcoal: "#3D3D3D",
      },
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
      },
      animation: {
        "bounce-in": "bounceIn 0.6s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "wobble": "wobble 0.5s ease-in-out",
        "float": "float 3s ease-in-out infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
