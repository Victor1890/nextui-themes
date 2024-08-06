import { ThemeColors } from "@nextui-org/react";

interface ITHEME_TEMPLATE_OUTPUT {
  schemas: Record<"light" | 'dark', Partial<ThemeColors>>
}

export const THEME_TEMPLATE_OUTPUT = ({ schemas }: ITHEME_TEMPLATE_OUTPUT) => {
  const theme = Object.entries(schemas).reduce((acc: any, [schema, colors]) => {
    if(!acc[schema]) acc[schema] = {};
    acc[schema] = {
      extend: schema,
      colors
    }

    return acc
  }, {})

  return `
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: ${JSON.stringify(theme, null, 2).split("\n")
        .map((line, index, arr) => {
          if(index === 0) return line;
          if(index === arr.length - 1) return "".padStart(7, " ") + line;
          return "".padStart(8, " ") + line;
        })
        .join("\n")}
    }),
  ],
};
export default config;
    `
};
