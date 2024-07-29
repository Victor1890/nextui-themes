interface ColorObject {
  [key: string]: string | ColorObject | undefined;
}

export function generateCssVariables(colorObject: ColorObject, baseVariable = "--nextui"): React.CSSProperties {
  const cssVariables: ColorObject = {};

  Object.entries(colorObject).forEach(([key, value]) => {
    if (!value) return;

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
