import { IThemeType } from "@/constants";

export const THEME_TEMPLATE_OUTPUT = (theme: IThemeType) => `
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
        light: {
          colors: ${JSON.stringify(theme.schemas.light, null, 2)
            .split("\n")
            .map((line, index, arr) => {
              if (index === 0) return line;
              if (index === arr.length - 1) return "            " + line;
              return "              " + line;
            })
            .join("\n")},
        },
        dark: {
          colors:  ${JSON.stringify(theme.schemas.dark, null, 2)
            .split("\n")
            .map((line, index, arr) => {
              if (index === 0) return line;
              if (index === arr.length - 1) return "            " + line;
              return "              " + line;
            })
            .join("\n")},
        }
      }
    }),
  ],
};
export default config;
    `;
