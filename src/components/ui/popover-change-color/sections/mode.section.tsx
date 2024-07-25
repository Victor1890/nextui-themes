"use client";

import { useThemeStore } from "@/stores/theme.store";
import { Button, cn, Skeleton } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeSectionPopover() {
  const { theme: mode, setTheme: setMode } = useTheme();
  useThemeStore.setState({ mode: mode === "dark" ? "dark" : "light" });
  const mounted = true;

  return (
    <div className="space-y-1.5">
      <span className="text-xs">Mode</span>
      <div className="grid grid-cols-3 gap-2">
        {mounted ? (
          <>
            <Button variant={"flat"} size="sm" startContent={<Sun />} onClick={() => setMode("light")} className={cn(mode === "light" && "border-2 border-primary")}>
              Light
            </Button>
            <Button variant={"flat"} size="sm" startContent={<Moon />} onClick={() => setMode("dark")} className={cn(mode === "dark" && "border-2 border-primary")}>
              {/* <MoonIcon className="mr-1 -translate-x-1" /> */}
              Dark
            </Button>
          </>
        ) : (
          <>
            <Skeleton className="h-8 w-full rounded-lg" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </>
        )}
      </div>
    </div>
  );
}
