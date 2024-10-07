import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        lg: "1112px",
      },
    },
    fontFamily: {
      primary: "var(--font-roboto)",
    },
    extend: {
      fontSize: {
        "14": "14px",
      },
      colors: {
        headingTitle: "#022F5E",
        statusBg: "#FD94591F",
        dishes: "#FFFFFFB2",
        categoryIconBg: "#FFFFFF29",
        poweredLinkBg: "#E2E6EAB2",
        btnBg: "#121C251A",
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F5F6F7",
          200: "#F2F3F5",
          300: "#ECF3FA",
          400: "#E8F0FE",
          500: "#E0E5E9",
          600: "#FFFFFF1A",
        },
        black: {
          DEFAULT: "#000000",
          100: "#121C25",
        },
        gray: {
          DEFAULT: "#596066",
          100: "#8E9BA8",
        },
        yellow: {
          DEFAULT: "#FFE033",
          100: "#FD9459",
          200: "#FDE870",
        },
        blue: {
          DEFAULT: "#0000FF",
          100: "#4489f7",
        },
        green: {
          DEFAULT: "#16CC53",
          100: "#00B67A",
        },
        red: {
          DEFAULT: "#E52E30",
          100: "#FDEAEA",
        },
      },
      boxShadow: {
        searchWrapper: "0px -1px 0px 0px rgba(102, 117, 137, 0.3) inset",
        searchBottom: "0px 6px 20px -12px rgba(18, 28, 37, 0.14)",
        languageDesktop: "0px 4px 20px 0px #38383829",
        languageMobile: "0px 6px 20px -12px #121C2524",
        leftNavbar: "0px 6px 20px -12px #121C2524",
        sections: "0px -1px 0px 0px #C2C8D0 inset",
        foodCard: "0px -1px 0px 0px #6675894D inset",
        foodCardHover:
          "0 3px 20px #121c250f, 0 4px 30px #121c2512, inset 0 -1px #6675894d",
        mobileFoodBottom: "0px -12px 30px 0px rgba(51, 64, 85, 0.08)",
        feedback: "0px 6px 20px -12px rgba(18, 28, 37, 0.14)",
        showQr: "0px -12px 30px 0px rgba(51, 64, 85, 0.08)",
      },
      backgroundImage: {
        "desktop-gradient":
          "linear-gradient(to bottom, rgba(18, 28, 37, 0.4), rgba(18, 28, 37, 0.4))",

        "mobile-gradient":
          "linear-gradient(180deg, #090E14 0%, rgba(9, 14, 20, 0.8) 50%, rgba(9, 14, 20, 0) 100%)",

        "category-mobile-gradient":
          "linear-gradient(90deg, #121C25 30%, rgba(18, 28, 37, 0.7) 80%, rgba(18, 28, 37, 0.6) 100%)",
        "food-gradient":
          "linear-gradient(180deg, #121C25 -154.76%, rgba(18, 28, 37, 0) 50.56%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
