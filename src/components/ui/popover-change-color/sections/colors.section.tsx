import { THEME } from "@/constants";
import { useThemeStore } from "@/stores/theme.store";
import { Button, cn, Skeleton } from "@nextui-org/react";
import { Check } from "lucide-react";

export function ColorsSectionPopover() {
  const { theme, mode, setConfig } = useThemeStore();

  const mounted = true;

  return (
    <div className="space-y-1.5">
      <span className="text-xs">Color</span>
      <div className="grid grid-cols-3 gap-2">
        {THEME.map(({ label, name, activeColor }) => {
          const isActive = name === theme;

          return mounted ? (
            <Button
              variant={"flat"}
              size="sm"
              key={name}
              style={
                {
                  "--nextui-primary": activeColor[mode === "dark" ? "dark" : "light"],
                } as React.CSSProperties
              }
              startContent={
                <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary")}>{isActive && <Check className="h-4 w-4 text-white" />}</span>
              }
              onClick={() => setConfig({ theme: name })}
              className={cn("justify-start")}
            >
              {label}
            </Button>
          ) : (
            <Skeleton className="h-8 w-full rounded-lg" key={theme} />
          );
        })}
      </div>
    </div>
  );
}
