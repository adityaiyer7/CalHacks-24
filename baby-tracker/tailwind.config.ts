import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        strongText: "var(--strong-text)",
        gradientPrimary: "var(--gradient-primary)",
        gradientSecondary: "var(--gradient-secondary)",
      },
    },
  },
  plugins: [],
};

export default config;
