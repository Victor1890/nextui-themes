"use client";

import { IThemeType, THEME } from "@/constants";
import { useThemeStore } from "@/stores/theme.store";
import { generateCssVariables } from "@/utils/color.util";
import { useTheme } from "next-themes";
import { ComponentProps, createContext, useEffect, useState } from "react";

interface ThemeWrapperProps extends ComponentProps<"div"> {
  theme?: IThemeType;
}

const ThemeContext = createContext<Omit<ThemeWrapperProps, "children">>({
  // theme: THEME[0],
});

export function ThemeWrapper({ className, children }: ThemeWrapperProps) {
  const { theme: mode } = useTheme();
  const [theme, setTheme] = useState<IThemeType>(THEME[0]);

  useEffect(() => {
    const unsubscribe = useThemeStore.subscribe(({ theme }) => {
      const themeData = THEME.find((t) => t.name === theme);
      if (!themeData) return;
      setTheme(themeData);
    });

    return () => unsubscribe();
  }, [theme, mode]);

  console.log("theme: ", theme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div data-layer-label="theme-wrapper" className={className} style={generateCssVariables(theme.schemas[mode === "dark" ? "dark" : "light"])}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
