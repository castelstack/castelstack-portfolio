/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#DDDDDD",
        tag: "#FF3E01",
        light: "#011436",
        bluee: "#2819ff",
        dim: "rgba(34, 34, 34, 0.31)",
        dark: "#151515;",
      },
      fontFamily: {
        canela: ["canela bold", "system-ui"],
      },
    },
  },
  plugins: [],
};
