interface ColorObject {
  [key: string]: string | ColorObject;
}

export function generateCssVariables(colorObject: ColorObject, baseVariable = "--nextui"): React.CSSProperties {
  const cssVariables: Record<string, string> = {};

  Object.entries(colorObject).forEach(([key, value]) => {
    if (typeof value === "string") {
      cssVariables[`${baseVariable}-${key}`] = hexToHsl(value);
    } else {
      Object.entries(value).forEach(([subKey, subValue]) => {
        let color = String(subValue);
        const type = isValidColorString(color);

        if (subKey === "DEFAULT") {
          cssVariables[`${baseVariable}-${subKey.toLowerCase()}`] = hexToHsl(color);
          cssVariables[`${baseVariable}-primary`] = hexToHsl(color);
        } else {
          if (type !== "HSL") {
            color = hexToHsl(color);
          }
          cssVariables[`${baseVariable}-${key}-${subKey}`] = color;
        }
      });
    }
  });

  return cssVariables;
}

function isValidColorString(colorString: string): "HSL" | "RGB" | "HEX" | "Invalid" {
  const hslRegex = /^\s*([0-9]|[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|360)\s*,\s*([0-9]|[1-9][0-9]|100)%\s*,\s*([0-9]|[1-9][0-9]|100)%\s*$/;
  const rgbRegex =
    /^\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*$/;
  const hexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

  if (hslRegex.test(colorString)) return "HSL";
  if (rgbRegex.test(colorString)) return "RGB";
  if (hexRegex.test(colorString)) return "HEX";
  return "Invalid";
}

function hexToRgb(hex: string) {
  let r, g, b;

  // Remove the leading #
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    // Convert 3-digit hex to 6-digit hex
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    throw new Error("Invalid HEX color.");
  }

  return { r, g, b };
}

function rgbToHsl(r: number, g: number, b: number) {
  // Normalize the RGB values by dividing by 255
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l;

  l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }

    h /= 6;
  }

  // Convert to degrees and percentage
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}

function hexToHsl(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const { h, l, s } = rgbToHsl(r, g, b);

  return `${h}, ${s}%, ${l}%`;
}
