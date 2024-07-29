interface ColorObject {
  [key: string]: string | ColorObject;
}

export function generateCssVariables(colorObject: ColorObject, baseVariable = "--nextui"): React.CSSProperties {
  const cssVariables: Record<string, string> = {};

  Object.entries(colorObject).forEach(([key, value]) => {
    if (typeof value === "string") {
      cssVariables[`${baseVariable}-${key}`] = value;
    } else {
      Object.entries(value).forEach(([subKey, subValue]) => {
        const color = String(subValue);
        cssVariables[`${baseVariable}-${key}-${subKey}`] = color;
      });
    }
  });

  return cssVariables;
}
