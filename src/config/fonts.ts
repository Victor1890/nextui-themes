import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = Inter({
  variable: "--font-sans",
  adjustFontFallback: true,
  display: "optional",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  preload: true,
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const tuskerGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/tusker-grotesk-2800-super.ttf",
      style: "normal",
    },
  ],
});
