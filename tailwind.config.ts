import { Baskervville } from "next/font/google"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-baskervville)"],
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        "gray-dark-primary": "#080A0D",
        "gray-dark-secundary": "#171717",

        "gray-text-primary": "#121214",

        "gray-light-primary": "#F8F9FA",

        "gray-light-secundary": "#F5F5F7",

        "pink-highlight": "#FF8DED",

        "purple-bg-primary": "#393345",

        "purple-shadow-primary": "#1E163A",

        "purple-text-primary": "#2E006C",
      },
    },
  },
  plugins: [],
}
export default config
