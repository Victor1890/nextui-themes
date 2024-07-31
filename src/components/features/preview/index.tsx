"use client";

import { ToggleButton, ToggleButtonItem } from "@/components/ui";
import { useEffect, useState } from "react";
import { PREVIEW_MODES } from "./constants";
import { UIElements } from "../ui-elements";
import { LandingPage } from "../landing-page";
import { ThemeWrapper } from "@/components/ui/theme-wrapper";
import { useThemeStore } from "@/stores/theme.store";
import { IThemeType } from "@/constants";

export function Preview() {
  const [previewMode, setPreviewMode] = useState<string>(PREVIEW_MODES.uiElements);

  const { theme: themeDefault, mode } = useThemeStore();
  const [theme, setTheme] = useState<IThemeType>(themeDefault);

  useEffect(() => {
    const unsubscribe = useThemeStore.subscribe(({ theme }) => {
      setTheme(theme);
    });

    return () => unsubscribe();
  }, [theme, themeDefault, mode]);

  return (
    <section className="w-full px-4 md:px-6">
      <div className="flex items-center justify-center text-center mb-6">
        <ToggleButton defaultValue={previewMode} onChange={setPreviewMode}>
          <ToggleButtonItem value={PREVIEW_MODES.uiElements}>UI Elements</ToggleButtonItem>
          <ToggleButtonItem value={PREVIEW_MODES.minimalistPage}>Minimalist Page</ToggleButtonItem>
        </ToggleButton>
      </div>
      <ThemeWrapper mode={mode} theme={theme}>
        {previewMode === PREVIEW_MODES.minimalistPage ? <LandingPage /> : <UIElements />}
      </ThemeWrapper>
    </section>
  );
}
