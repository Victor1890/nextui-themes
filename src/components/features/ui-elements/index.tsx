"use client";

import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry";

import { UIElementsExamples } from "./examples";
import { ThemeWrapper } from "@/components/ui/theme-wrapper";
import { useEffect, useMemo, useState } from "react";
import { IThemeType } from "@/constants";
import { useThemeStore } from "@/stores/theme.store";

export function UIElements() {
  const { theme: themeDefault, mode } = useThemeStore();
  const [theme, setTheme] = useState<IThemeType>(themeDefault);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const UIElements = useMemo(() => UIElementsExamples, [theme, themeDefault, mode]);

  useEffect(() => {
    const unsubscribe = useThemeStore.subscribe(({ theme }) => {
      setTheme(theme);
    });

    return () => unsubscribe();
  }, [theme, themeDefault, mode]);

  return (
    <ThemeWrapper mode={mode} theme={theme}>
      <ResponsiveMasonry
        className="h-auto w-full m-auto flex items-center justify-center"
        columnsCountBreakPoints={{
          640: 2,
          1400: 3,
          1920: 4,
        }}
      >
        <Masonry className="max-w-[1280px]" gutter="20px">
          {UIElements.map((Element, index) => (
            <Element key={`ui-element-${index}`} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </ThemeWrapper>
  );
}
