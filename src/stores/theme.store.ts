import { THEME, IThemeType } from "@/constants";
import { create } from "zustand";

interface IThemeStore {
  theme: IThemeType["name"];
  radius: string;
  setTheme: (_theme: "light" | "dark") => void;
}

export const useThemeStore = create<IThemeStore>((set) => ({
  radius: "",
  theme: "",
  setTheme: (theme: "light" | "dark") => set({ theme }),
}));
