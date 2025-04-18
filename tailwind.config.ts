
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        wood: {
          50: "#F6F0EA",
          100: "#E6D5C3",
          200: "#D4B79D",
          300: "#C19876",
          400: "#B0794F",
          500: "#8B613F",
          600: "#664830",
          700: "#442F20",
          800: "#221710",
        },
        sage: {
          50: "#F2F5F3",
          100: "#DCE5DF",
          200: "#C5D4CB",
          300: "#ACC3B6",
          400: "#93B3A1",
          500: "#769082",
          600: "#5A6D63",
          700: "#3D4842",
          800: "#1F2421",
        },
        primary: {
          DEFAULT: "#8B613F",
          foreground: "#FAFAF8",
        },
        secondary: {
          DEFAULT: "#93B3A1",
          foreground: "#1F2421",
        },
        muted: {
          DEFAULT: "#F6F0EA",
          foreground: "#664830",
        },
        accent: {
          DEFAULT: "#E6D5C3",
          foreground: "#442F20",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
