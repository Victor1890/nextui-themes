"use client";

import { useCallback, useState } from "react";
import { useHasMounted } from "./useHasMounted";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useWindowWidth = () => {
  const hasMounted = useHasMounted();
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);

  useIsomorphicLayoutEffect(() => {
    if (!hasMounted || typeof window === "undefined")
      return console.log("useWindowWidth: window is undefined");

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [hasMounted, handleResize]);

  return width;
};
