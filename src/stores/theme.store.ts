import { THEME_PROVIDERS } from "@/constants";
import { create } from "zustand";

interface IThemeStore {
  theme: "light" | "dark";
  themes: string[];
  radius: string[];
  radio: string;
  setTheme: (_theme: "light" | "dark") => void;
}

export const useThemeStore = create<IThemeStore>((set) => ({
  radius: [],
  radio: "",
  themes: THEME_PROVIDERS,
  theme: "light",
  setTheme: (theme: "light" | "dark") => set({ theme }),
}));
