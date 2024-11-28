import type { PluginAPI, Config } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        mxd: "826px",
      },
      spacing: {
        "calc-10": "calc(100% - 2rem)",
      },
      backgroundImage: {
        "custom-bg": "url('/bg.png')",
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        port: "#207c49",
        portgray: "#47444a",
        lightport: "#7fb32b",
        liteport: "#acdb53",
        thickport: "#153e2e",
        darkport: "#1f3428",
        portblack: "#1b1d1e",
      },
      fontFamily: {
        Averia: ["Averia Serif Libre", "serif"],
        Lato: ["Lato", "sans-serif"],
        Esetban: ["Esteban", "serif"],
        Fredoka: ["Fredoka", "sans-serif"],
        Mont: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto Slab", "serif"],
        Open_Sans: ["Open Sans", "sans-serif"],
      },
      scrollBehavior: {
        smooth: "smooth",
      },
      textColor: {
        gradient: "transparent",
      },
      keyframes_testimonial: {
        'infinite-slider': 'infiniteSlider 20s linear infinite',
      },
      animation_testimonial: {
        'infinite-slider': 'infiniteSlider 20s linear infinite',
      },
      keyframes: {
        "border-grow": {
          "0%": { border: "solid 1px transparent" },
          "20%": { border: "solid .8px #acdb53a7" },
          "40%": { border: "solid .6px #153e2ea5" },
          "60%": { border: "solid .4px #acdb53a7" },
          "80%": { border: "solid .6px #acdb53a7" },
          "100%": { border: ".8px solid #acdb53a7" },
        },
      },
      animation: { "border-grow": "border-grow 3s ease-in-out infinite" },
    },
  },

  plugins: [
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      addUtilities(
        {
          ".scroll-smooth": {
            scrollBehavior: "smooth",
          },

          ".w-calc-10": {
            width: "calc(100% - 2rem)",
          },
          ".text-gradient": {
            background: "linear-gradient(90deg, #207c49, #acdb53)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            color: "transparent",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
export default config;
