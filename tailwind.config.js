const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          "2xl": "1200px",
        },
      },
      fontFamily: {
        sBold: "SpaceGrotesk-Bold",
        sSemiBold: "SpaceGrotesk-SemiBold",
        sMedium: "SpaceGrotesk-Medium",
        sRegular: "SpaceGrotesk-Regular",
        oSemibold: "Orbitron-SemiBold",
      },
      colors: {
        background: {
          DEFAULT: "#030303",
          50: "#111217"
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          50: "#B2B2B2",
          100: "#8C8C8C",
        },
        primary: {
          DEFAULT: "#00FFF6",
          50: "#F0FDFD",
          100: "#E0FCFC",
          200: "#D0F8F8",
          300: "#C0F4F4",
          400: "#B0F0F0",
          500: "#00FFF6",
          600: "#00E2E2",
          700: "#00C5C5",
          800: "#00A8A8",
          900: "#008B8B",
          950: "#006666",
        },
        secondary: {
          DEFAULT: "#5624DC",
          50: "#EEE9FB",
          100: "#DDD3F8",
          200: "#BBA7F1",
          300: "#997BEA",
          400: "#774FE3",
          500: "#5624DC",
          600: "#441CB0",
          700: "#331584",
          800: "#220E58",
          900: "#11072C",
          950: "#080416",
        },
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors, require("tailwindcss-animate")],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
