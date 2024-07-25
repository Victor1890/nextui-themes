import { IThemeType } from "@/constants";
import { create } from "zustand";

interface IThemeConfig {
  theme: IThemeType["name"] | "light" | "dark";
  radius: string;
}

interface IThemeStore {
  theme: IThemeType["name"];
  mode: "dark" | "light";
  radius: string;
  setConfig: (data: Partial<IThemeConfig>) => void;
}

export const useThemeStore = create<IThemeStore>((set) => ({
  radius: "",
  theme: "",
  mode: "light",
  setConfig: (data: Partial<IThemeConfig>) => set({ ...data }),
}));
