import { IThemeType } from "@/constants";
import { ThemeColors, ColorScale } from "@nextui-org/react";

interface ColorObject {
  [key: string]: string | ColorObject | undefined;
}

type ColorType = "hex" | "hsl" | "unknown";

export function generateCssVariables(colorObject: ColorObject, baseVariable = "--nextui"): React.CSSProperties {
  const cssVariables: ColorObject = {};

  Object.entries(colorObject).forEach(([key, value]) => {
    if (!value) return;

    if (typeof value === "string") {
      validColorType(value) === "hex" && (value = hexToHSL(value));

      cssVariables[`${baseVariable}-${key}`] = value;
    } else {
      Object.entries(value).forEach(([subKey, subValue]) => {
        let color = String(subValue);

        validColorType(color) === "hex" && (color = hexToHSL(color));

        cssVariables[`${baseVariable}-${key}-${subKey}`] = color;
      });
    }
  });

  return cssVariables;
}

export function mapSchemaToThemeColors(schemas: IThemeType['schemas']): Record<"light" | "dark", Partial<ThemeColors>> {
  const payload: Record<"light" | "dark", Partial<ThemeColors>> = {
    light: {},
    dark: {},
  };

  for (const [key, value] of Object.entries(schemas) as [string, Record<string, string>][]) {
    const themeColors: any = {};

    for (const color of Object.keys(value)) {
      const [primaryColor, foregroundColor] = color.split("-") as [string, string | undefined];

      const valuePrimaryColor: string = value[primaryColor];

      const [h, s, l] = valuePrimaryColor.split(/[$\s%]/g).filter(x => !!x).map(x => Number(x));
      const valueHexPrimaryColor = hslToHex(h, s, l);

      if (!themeColors[primaryColor]) {
        themeColors[primaryColor] = valueHexPrimaryColor;
      }

      if (foregroundColor) {
        const valueForegroundColor: string = value?.[color];
        const [h, s, l] = valueForegroundColor.split(/[$\s%]/g).filter(x => !!x).map(x => Number(x));
        const valueHexForegroundColor = hslToHex(h, s, l);

        themeColors[primaryColor] = {
          500: valueHexPrimaryColor,
          DEFAULT: valueHexPrimaryColor,
          foreground: valueHexForegroundColor,
        };
      }
    }

    payload[key as "light" | "dark"] = themeColors;
  }

  return payload;
}

function hexToHSL(hex: string): string {
  // Remove the hash symbol if present
  hex = hex.replace(/^#/, "");

  // Parse the hex color values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Calculate the maximum and minimum values of R, G, B
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }

    h /= 6;
  }

  // Convert to degrees and percentages
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

function validColorType(color: string): ColorType {
  // Regular expression for hex color (3 or 6 characters, with or without #)
  const hexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  // Regular expression for HSL color in the format "204, 70%, 57%"
  const hslRegex = /^\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*$/;

  if (hexRegex.test(color)) {
    return "hex";
  } else if (hslRegex.test(color)) {
    return "hsl";
  } else {
    return "unknown";
  }
}

function hslToHex(h: number, s: number, l: number): string {
  // Convert the saturation and lightness percentages to decimals
  s /= 100;
  l /= 100;

  // Helper function to convert a hue to RGB
  const hueToRgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r: number, g: number, b: number;

  if (s === 0) {
    // Achromatic case (no saturation)
    r = g = b = l; // Grayscale
  } else {
    // Chromatic case
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hueToRgb(p, q, h / 360 + 1/3);
    g = hueToRgb(p, q, h / 360);
    b = hueToRgb(p, q, h / 360 - 1/3);
  }

  // Convert RGB to hexadecimal
  const toHex = (x: number): string => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}