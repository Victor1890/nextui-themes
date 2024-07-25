export const THEME = [
  {
    name: "blue-theme",
    label: "Blue",
    activeColor: {
      light: "210 80% 40%", // Adjust based on your blue palette
      dark: "210 70% 60%", // Adjust based on your blue palette
    },
    schemas: {
      light: {
        background: "#e0e7ff",
        foreground: "#000000",
        primary: {
          50: "#e0e7ff",
          100: "#c7d2ff",
          200: "#9eabff",
          300: "#748ffc",
          400: "#5673fd",
          500: "#4259cc",
          600: "#38499b",
          700: "#2e3a6a",
          800: "#242b38",
          900: "#1a1c26",
          DEFAULT: "#4259cc",
        },
        focus: "#0570c0",
      },
      dark: {
        background: "#242b38",
        foreground: "#ffffff",
        primary: {
          50: "#2e3a6a",
          100: "#38499b",
          200: "#4259cc",
          300: "#5673fd",
          400: "#748ffc",
          500: "#9eabff",
          600: "#c7d2ff",
          700: "#e0e7ff",
          800: "#f4f7fc",
          900: "#ffffff",
          DEFAULT: "#9eabff",
        },
        focus: "#007bff",
      },
    },
  },
  {
    name: "green-theme",
    label: "Green",
    activeColor: {
      light: "120 80% 40%", // Adjust based on your green palette
      dark: "120 70% 60%", // Adjust based on your green palette
    },
    schemas: {
      light: {
        background: "#e5f5e0",
        foreground: "#000000",
        primary: {
          50: "#e5f5e0",
          100: "#d0e9c6",
          200: "#badcd2",
          300: "#a4cfb8",
          400: "#8fc39e",
          500: "#7fb784",
          600: "#74a56a",
          700: "#699350",
          800: "#5e8136",
          900: "#536f1c",
          DEFAULT: "#7fb784",
        },
        focus: "#8fc39e",
      },
      dark: {
        background: "#5e8136",
        foreground: "#ffffff",
        primary: {
          50: "#699350",
          100: "#74a56a",
          200: "#7fb784",
          300: "#8fc39e",
          400: "#a4cfb8",
          500: "#badcd2",
          600: "#d0e9c6",
          700: "#e5f5e0",
          800: "#f1f9f2",
          900: "#ffffff",
          DEFAULT: "#badcd2",
        },
        focus: "#a4cfb8",
      },
    },
  },
  {
    name: "pink-theme",
    label: "Pink",
    activeColor: {
      light: "330 80% 60%", // Adjust based on your pink palette
      dark: "330 70% 70%", // Adjust based on your pink palette
    },
    schemas: {
      light: {
        background: "#ffe0f0",
        foreground: "#000000",
        primary: {
          50: "#ffe0f0",
          100: "#fdc2d8",
          200: "#fca5b6",
          300: "#f88794",
          400: "#f46972",
          500: "#eb4b54",
          600: "#e0383c",
          700: "#d52a2b",
          800: "#ca1b19",
          900: "#c00d08",
          DEFAULT: "#eb4b54",
        },
        focus: "#f46972",
      },
      dark: {
        background: "#ca1b19",
        foreground: "#ffffff",
        primary: {
          50: "#d52a2b",
          100: "#e0383c",
          200: "#eb4b54",
          300: "#f46972",
          400: "#f88794",
          500: "#fca5b6",
          600: "#fdc2d8",
          700: "#ffe0f0",
          800: "#f5f9f8",
          900: "#ffffff",
          DEFAULT: "#fca5b6",
        },
        focus: "#f88794",
      },
    },
  },
  {
    name: "red-theme",
    label: "Red",
    activeColor: {
      light: "0 72.2% 50.6%", // Adjust based on your red palette
      dark: "0 72.2% 50.6%", // Adjust based on your red palette
    },
    schemas: {
      light: {
        background: "#f8e0e0",
        foreground: "#000000",
        primary: {
          50: "#f8e0e0",
          100: "#f5c2c2",
          200: "#f2a4a4",
          300: "#ef8686",
          400: "#ec6868",
          500: "#e94b4b",
          600: "#e53939",
          700: "#e02727",
          800: "#db1515",
          900: "#d60303",
          DEFAULT: "#e94b4b",
        },
        focus: "#ec6868",
      },
      dark: {
        background: "#db1515",
        foreground: "#ffffff",
        primary: {
          50: "#e02727",
          100: "#e53939",
          200: "#e94b4b",
          300: "#ec6868",
          400: "#ef8686",
          500: "#f2a4a4",
          600: "#f5c2c2",
          700: "#f8e0e0",
          800: "#faf2f2",
          900: "#ffffff",
          DEFAULT: "#f2a4a4",
        },
        focus: "#ef8686",
      },
    },
  },
  {
    name: "orange-theme",
    label: "Orange",
    activeColor: {
      light: "30 80% 60%", // Adjust based on your orange palette
      dark: "30 70% 70%", // Adjust based on your orange palette
    },
    schemas: {
      light: {
        background: "#fef5e7",
        foreground: "#000000",
        primary: {
          50: "#fef5e7",
          100: "#fdebd0",
          200: "#fcd7b9",
          300: "#fbc0a2",
          400: "#faaa8b",
          500: "#f99374",
          600: "#f87c5e",
          700: "#f76547",
          800: "#f55030",
          900: "#f33a19",
          DEFAULT: "#f99374",
        },
        focus: "#faaa8b",
      },
      dark: {
        background: "#f55030",
        foreground: "#ffffff",
        primary: {
          50: "#f76547",
          100: "#f87c5e",
          200: "#f99374",
          300: "#faaa8b",
          400: "#fbc0a2",
          500: "#fcd7b9",
          600: "#fdebd0",
          700: "#fef5e7",
          800: "#f9f7f6",
          900: "#ffffff",
          DEFAULT: "#fcd7b9",
        },
        focus: "#fbc0a2",
      },
    },
  },
];

export type IThemeType = (typeof THEME)[number];
