"use client";

import { useThemeStore } from "@/stores/theme.store";
import { Button, cn, Skeleton } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Fragment } from "react";

export function ModeSectionPopover() {
  const { theme: mode, setTheme: setMode } = useTheme();
  useThemeStore.setState({ mode: mode === "dark" ? "dark" : "light" });
  const mounted = true;

  const themes = ["light", "dark", "blue-theme"];

  return (
    <div className="space-y-1.5">
      <span className="text-xs">Mode</span>
      <div className="grid grid-cols-3 gap-2">
        {themes.map((theme) => (
          <Fragment key={theme}>
            <Button variant={"flat"} size="sm" startContent={<Sun />} onClick={() => setMode(theme)} className={cn(mode === theme && "border-2 border-primary")}>
              {theme}
            </Button>
            {/* <Button variant={"flat"} size="sm" startContent={<Moon />} onClick={() => setMode(theme)} className={cn(mode === theme && "border-2 border-primary")}>
              Dark
            </Button> */}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
