
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
  "slate-theme-light-theme": {
    "extend": "light",
    "colors": {
      "background": {
        "DEFAULT": "0 0% 100%"
      },
      "foreground": {
        "DEFAULT": "222.2 47.4% 11.2%"
      },
      "default": {
        "DEFAULT": "222.2 47.4% 11.2%",
        "foreground": "0 0% 0%"
      },
      "primary": {
        "DEFAULT": "222.2 47.4% 11.2%",
        "foreground": "210 40% 98%"
      },
      "secondary": {
        "DEFAULT": "210 40% 96.1%",
        "foreground": "222.2 47.4% 11.2%"
      },
      "danger": {
        "DEFAULT": "0 84.2% 60.2%",
        "foreground": "210 40% 98%"
      },
      "overlay": {
        "DEFAULT": "0 0% 100%"
      },
      "focus": {
        "DEFAULT": "222.2 47.4% 11.2%"
      }
    }
  },
  "slate-theme-dark-theme": {
    "extend": "dark",
    "colors": {
      "background": {
        "DEFAULT": "222.2 84% 4.9"
      },
      "foreground": {
        "DEFAULT": "210 40% 98%"
      },
      "default": {
        "DEFAULT": "210 40% 98%"
      },
      "primary": {
        "DEFAULT": "210 40% 98%",
        "foreground": "222.2 47.4% 11.2%"
      },
      "secondary": {
        "DEFAULT": "217.2 32.6% 17.5%",
        "foreground": "210 40% 98%"
      },
      "danger": {
        "DEFAULT": "0 62.8% 30.6%",
        "foreground": "210 40% 98%"
      },
      "overlay": {
        "DEFAULT": "222.2 84% 4.9"
      },
      "focus": {
        "DEFAULT": "210 40% 98%"
      },
      "content1": {
        "DEFAULT": "222.2 47.4% 11.2%"
      }
    }
  }
}
    }),
  ],
};
export default config;
      