import { IThemeType } from "@/constants";
import { ThemeColors } from "@nextui-org/react";

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

export function mapSchemaToThemeColors(schemas: IThemeType['schemas']): Record<"dark" | "light", ThemeColors> {
  const payload: Record<string, any> = {};

  Object.entries(schemas).forEach(([themeType, colors]) => {
    const themeColors: Partial<any> = {};

    Object.entries(colors).forEach(([colorKey, colorValue]) => {
      const [primaryColor, modifier] = colorKey.split("-")

      if (primaryColor) {
        if (!themeColors[primaryColor]) {
          themeColors[primaryColor] = {};
        }

        if (modifier === "foreground") {
          themeColors[primaryColor] = { ...themeColors[primaryColor], foreground: colorValue };
        } else {
          themeColors[primaryColor] = { ...themeColors[primaryColor], DEFAULT: colorValue };
        }
      }
    });

    payload[themeType] = themeColors
  });

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
