"use client";

import { IThemeType } from "@/constants";
import { generateCssVariables } from "@/utils/color.util";
import { ComponentProps, forwardRef } from "react";

interface ThemeWrapperProps extends ComponentProps<"div"> {
  theme: IThemeType;
  mode: "dark" | "light";
}

export const ThemeWrapper = forwardRef<HTMLDivElement, ThemeWrapperProps>(({ mode, theme, className, ...props }, ref) => {
  return <div ref={ref} data-layer-label="theme-wrapper" className={className} style={generateCssVariables(theme.schemas[mode === "dark" ? "dark" : "light"])} {...props} />;
});

ThemeWrapper.displayName = "ThemeWrapper";
