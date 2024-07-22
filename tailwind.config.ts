import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: {
        "blue-theme": {
          extend: "light", // Inherit default values from light theme
          colors: {
            background: "#e0e7ff",
            foreground: "#000000",
            primary: {
              // Replace with your blue color palette (50 to 900)
              50: "#e0e7ff",
              100: "#c7d2ff",
              200: "#9eabff",
              300: "#748ffc",
              400: "#5673fd",
              500: "#4259cc", // Default color
              600: "#38499b",
              700: "#2e3a6a",
              800: "#242b38",
              900: "#1a1c26",
              DEFAULT: "#4259cc",
              foreground: "#ffffff",
            },
            focus: "#0570c0",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "pink-theme": {
          extend: "light", // Inherit default values from light theme
          colors: {
            background: "#ffe0f0",
            foreground: "#000000",
            primary: {
              // Replace with your pink color palette (50 to 900)
              50: "#ffe0f0",
              100: "#fdc2d8",
              200: "#fca5b6",
              300: "#f88794",
              400: "#f46972",
              500: "#eb4b54", // Default color
              600: "#e0383c",
              700: "#d52a2b",
              800: "#ca1b19",
              900: "#c00d08",
              DEFAULT: "#eb4b54",
              foreground: "#ffffff",
            },
            focus: "#f46972",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "orange-theme": {
          extend: "light", // Inherit default values from light theme
          colors: {
            background: "#fef5e7",
            foreground: "#000000",
            primary: {
              // Replace with your orange color palette (50 to 900)
              50: "#fef5e7",
              100: "#fdebd0",
              200: "#fcd7b9",
              300: "#fbc0a2",
              400: "#faaa8b",
              500: "#f99374", // Default color
              600: "#f87c5e",
              700: "#f76547",
              800: "#f55030",
              900: "#f33a19",
              DEFAULT: "#f99374",
              foreground: "#ffffff",
            },
            focus: "#faaa8b",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "red-theme": {
          extend: "light", // Inherit default values from light theme
          colors: {
            background: "#f8e0e0", // Adjust for your preference
            foreground: "#000000",
            primary: {
              // Replace with your red color palette (50 to 900)
              50: "#f8e0e0",
              100: "#f5c2c2",
              200: "#f2a4a4",
              300: "#ef8686",
              400: "#ec6868",
              500: "#e94b4b", // Default color
              600: "#e53939",
              700: "#e02727",
              800: "#db1515",
              900: "#d60303",
              DEFAULT: "#e94b4b",
              foreground: "#ffffff",
            },
            focus: "#ec6868",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "green-theme": {
          extend: "light", // Inherit default values from light theme
          colors: {
            background: "#e5f5e0", // Adjust for your preference
            foreground: "#000000",
            primary: {
              // Replace with your green color palette (50 to 900)
              50: "#e5f5e0",
              100: "#d0e9c6",
              200: "#badcd2",
              300: "#a4cfb8",
              400: "#8fc39e",
              500: "#7fb784", // Default color
              600: "#74a56a",
              700: "#699350",
              800: "#5e8136",
              900: "#536f1c",
              DEFAULT: "#7fb784",
              foreground: "#ffffff",
            },
            focus: "#8fc39e",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
