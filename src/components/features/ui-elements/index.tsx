"use client";

import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry";

import { UIElementsExamples } from "./examples";
import { ThemeWrapper } from "@/components/ui/theme-wrapper";

export function UIElements() {
  return (
    <ThemeWrapper>
      <ResponsiveMasonry
        className="h-auto w-full m-auto flex items-center justify-center"
        columnsCountBreakPoints={{
          0: 1,
          640: 2,
          1400: 3,
          1920: 4,
        }}
      >
        <Masonry className="max-w-[1280px]" gutter="20px">
          {UIElementsExamples.map((Element, index) => (
            <Element key={index} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </ThemeWrapper>
  );
}
