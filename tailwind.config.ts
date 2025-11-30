import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1152d4",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "text-light": "#222222",
        "text-dark": "#f8f8f8",
        "text-muted-light": "#555555",
        "text-muted-dark": "#a0a0a0",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2230",
        "border-light": "#e5e5e5",
        "border-dark": "#333333"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      }
    },
    fontFamily: {
      display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
    }
  },
  plugins: []
}
export default config

