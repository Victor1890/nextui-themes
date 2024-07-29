import { IThemeType, THEME } from "@/constants";
import { create } from "zustand";

interface IThemeConfig {
  theme: IThemeType;
  radius: string;
}

interface IThemeStore {
  theme: IThemeType;
  mode: "dark" | "light";
  radius: string;
  setConfig: (data: Partial<IThemeConfig>) => void;
}

export const useThemeStore = create<IThemeStore>((set) => ({
  radius: "",
  theme: THEME[0],
  mode: "light",
  setConfig: (data: Partial<IThemeConfig>) => set({ ...data }),
}));
