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
      backdropBlur: {
        '50px': '50px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'head-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'head-bob': 'head-bob 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

export default config;
