import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        navbar_button: "rgba(234, 234, 251, 0.1) 0px -4px 12px 0px inset",
        main_tag: "rgba(234, 234, 251, 0.1) 0px -4px 12px 0px inset",
      },
      fontSize: {
        xs: "0.70rem",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(115.54deg, #FFFFFF -75.36%, #FF7D7D 59.61%, #8CA5FF 218.05%)",
        card_comp_bg:
          "linear-gradient(45deg, hsla(0, 73%, 25%, 1) 0%, hsla(10, 100%, 79%, 1) 100%);",
        bg_navbar_button:
          "linear-gradient(rgba(234, 234, 251, 0) 0%, rgba(234, 234, 251, 0.05) 100%)",
        "bg_nav":
          "linear-gradient(to left, #E0E0E0 20%, #E0E0E0 44%, #6B7280 50%, #9CA3AF 60%, #E0E0E0 63%, #E0E0E0 100%)",
      },
      backgroundColor: {
        "custom-purple": "rgba(46, 7, 33)",
        "nav-background": "rgba(255, 255, 255, 0.04)",
        "cards-comp-background": "rgba(20, 20, 20, 1)",
        "cards-comp-background_middle": "rgba(20, 20, 20, 1)",
        "nav-background-button": "rgba(206, 206, 251, 0.01)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        back: "rgba(9, 9, 11)",

        // navbar
        navbar_border: "rgba(206, 206, 251, 0.06)",
        navbar_text_color: "rgba(232, 232, 232, .75)",
        navbar_border_color: "rgba(206, 206, 251, 0.2)",
        navbar_border_color2: "rgba(206, 206, 251, 0.16)",
        navbar_shadow: "rgba(234, 234, 251, 0.1)",

        // Cards
        card_bg: "rgba(78, 78, 78, 0.1)",
        card_bg_darker: "rgba(15, 15, 15, 0.5)",
        text_gray: "rgba(255, 255, 255, 0.4)",
        text_red: "#FF9D9D",

        // adapt section
        purple: "#aa2570",

        // navbar
        nav_border: "#bebebe80",
        nav_text: "#999",
        nav_text_active: "#000",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "image-glow": {
          "0%": {
            opacity: "0",
            "animation-timing-function": "cubic-bezier(0.74, 0.25, 0.76, 1)",
          },
          "10%": {
            opacity: "0.7",
            "animation-timing-function": "cubic-bezier(0.12, 0.01, 0.08, 0.99)",
          },
          "100%": {
            opacity: "0.4",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor 5s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
        "fade-up": "fade-up 1000ms var(--animation-delay, 0ms) ease forwards",
        shimmer: "shimmer 8s infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },

  use: {
    loader: "file-loader",
    option: {
      limit: false,
      name: "[name]",
      outputPath: "assets/",
    },
  },
  test: /\.(jpe?g|png|gif|svg)$/i,
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
