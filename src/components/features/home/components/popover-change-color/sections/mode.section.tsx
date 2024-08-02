"use client";

import { useThemeStore } from "@/stores/theme.store";
import { Button, cn, Skeleton } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Fragment, useMemo } from "react";

export function ModeSectionPopover() {
  const { theme: mode, setTheme: setMode } = useTheme();
  useThemeStore.setState({ mode: mode === "dark" ? "dark" : "light" });

  const themes = useMemo(() => ["light", "dark", "slate-theme-light-theme", "slate-theme-dark-theme"], []);

  return (
    <div className="space-y-1.5">
      <span className="text-xs">Mode</span>
      <div className="grid grid-cols-3 gap-2">
        {themes.map((theme) => (
          <Fragment key={theme}>
            <Button
              variant={"flat"}
              size="sm"
              startContent={theme === "dark" ? <Moon /> : <Sun />}
              onClick={() => setMode(theme)}
              className={cn(mode === theme && "border-2 border-primary")}
            >
              {theme}
            </Button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
