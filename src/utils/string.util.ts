import { ThemeColors } from "@nextui-org/react";

interface ITHEME_TEMPLATE_OUTPUT {
  name: string
  schemas: Record<"light" | 'dark', ThemeColors>
}

export const THEME_TEMPLATE_OUTPUT = ({ name, schemas }: ITHEME_TEMPLATE_OUTPUT) => {

  const theme = Object.entries(schemas).reduce((acc: any, [schema, colors]) => {

    const label = `${name}-${schema}-theme`;
  
    if(!acc[label]) acc[label] = {};

    acc[label] = {
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
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: ${JSON.stringify(theme, null, 2)}
    }),
  ],
};
export default config;
    `
};
