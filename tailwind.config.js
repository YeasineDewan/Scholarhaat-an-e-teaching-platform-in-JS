import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f3ff",
          100: "#cce7ff",
          200: "#99cfff",
          300: "#66b7ff",
          400: "#339fff",
          500: "#39A7FF", // Main primary color (replacing green)
          600: "#0078cc",
          700: "#005a99",
          800: "#003c66",
          900: "#001e33",
          DEFAULT: "#39A7FF",
          foreground: "#FFFFFF"
        },
        background: {
          DEFAULT: "#E0F4FF" // Light blue background (replacing white)
        },
        content1: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}
