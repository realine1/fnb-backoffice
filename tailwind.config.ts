import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#facc15",
        darkAccent: "#eab308",
        lightAccent: "#fde047",
      }
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#eab308",
              foreground: "#000000",
            },
            focus: "#facc15",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#facc15",
              foreground: "#000000",
            },
            focus: "#facc15",
          },
        },
      },
    }),
  ],
} satisfies Config;
