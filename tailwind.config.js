/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        heroZoom: "heroZoom 6s ease-out forwards",
        headlightGlow: "headlightGlow 2s ease-in-out infinite",
        textFadeIn: "textFadeIn 1.5s ease-out forwards",
        brightnessPulse: "brightnessPulse 2s ease-in-out 1",
        fadeIn: "fadeIn 0.8s ease-in forwards",
      },
      keyframes: {
        heroZoom: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.05)" },
        },
        headlightGlow: {
          "0%": { opacity: "0.6", filter: "blur(32px)" },
          "50%": { opacity: "0.8", filter: "blur(36px)" },
          "100%": { opacity: "0.6", filter: "blur(32px)" },
        },
        textFadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        brightnessPulse: {
          "0%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.1)" },
          "100%": { filter: "brightness(1)" },
        },
        fadeInRays: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};