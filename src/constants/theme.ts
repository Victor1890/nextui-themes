import {} from "";
import { ThemeColors } from "@nextui-org/react";

export const THEME_PROVIDERS = [
  "dark",
  "light",
  "blue-theme",
  "green-theme",
  "pink-theme",
  "red-theme",
  "orange-theme",
];

interface ITheme {
  name: string;
  label: string;
  colors: Partial<ThemeColors>;
}

export const THEME: ITheme[] = [
  {
    name: "blue-theme",
    label: "Blue",
    colors: {
      default: "#0d6efd",
    },
  },
];
