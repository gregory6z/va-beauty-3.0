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
        "gray-bgdark-primary": "#080A0D",
        "gray-bgdark-secundary": "#171717",

        "gray-bglight-primary": "#F8F9FA",

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
