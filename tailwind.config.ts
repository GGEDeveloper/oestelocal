import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        // Marca Oeste Local
        cream: {
          50: "#FBF7F0",
          100: "#F5EFE2",
          200: "#EDE2CB",
        },
        ocean: {
          50: "#E8F0F4",
          400: "#3B7794",
          600: "#1F4E66",
          800: "#0E2E40",
          900: "#082030",
        },
        sunset: {
          200: "#F8C9A0",
          400: "#F08A56",
          500: "#E86A3A",
          600: "#C84A1E",
        },
        moss: {
          400: "#7B9569",
          600: "#4F6A40",
          800: "#2E3F25",
        },
        ink: "#161413",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.75rem, 8vw, 6.5rem)",
        "fluid-h1": "clamp(2rem, 5vw, 3.75rem)",
        "fluid-h2": "clamp(1.5rem, 3.5vw, 2.5rem)",
        "fluid-h3": "clamp(1.25rem, 2.4vw, 1.75rem)",
      },
      borderRadius: { card: "20px" },
      letterSpacing: { tightish: "-0.02em", tighter2: "-0.035em" },
      boxShadow: {
        card: "0 1px 2px rgba(8,32,48,0.04), 0 12px 32px -16px rgba(8,32,48,0.18)",
      },
      backgroundImage: {
        "sunset-gradient":
          "linear-gradient(120deg, #F08A56 0%, #E86A3A 35%, #C84A1E 60%, #1F4E66 100%)",
        grain:
          "radial-gradient(circle at 25% 25%, rgba(0,0,0,0.05) 0%, transparent 35%), radial-gradient(circle at 75% 65%, rgba(0,0,0,0.04) 0%, transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
