/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(var(--primaryColor), <alpha-value>)",
        primaryColorLight: "rgba(var(--primaryColorLight), <alpha-value>)",
        secondaryColor: "rgba(var(--secondaryColor), <alpha-value>)",
        secondaryColorLight: "rgba(var(--secondaryColorLight), <alpha-value>)",
        lightColor: "rgba(var(--lightColor), <alpha-value>)",
        accentColor: "rgba(var(--accentColor), <alpha-value>)",
        accentColorLight: "rgba(var(--accentColorLight), <alpha-value>)",
      },
      fontFamily: {
        manrope: [`var(--manrope)`],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
