import { useThemeStore } from "@/stores/theme.store";
import { Button, cn, Skeleton } from "@nextui-org/react";
import { Check } from "lucide-react";

// const config = {
//   theme: "default",
//   name: "default",
//   label: "Default",
//   activeColor: {
//     light: 200,
//     dark: 200,
//   },
// };

export function ColorsSectionPopover() {
  const { themes, theme: defaultTheme } = useThemeStore();

  const mounted = true;

  return (
    <div className="space-y-1.5">
      <span className="text-xs">Color</span>
      <div className="grid grid-cols-3 gap-2">
        {themes.map((theme) => {
          const isActive = defaultTheme === theme;

          return mounted ? (
            <Button
              variant={"flat"}
              size="sm"
              key={theme}
              startContent={
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary"
                  )}
                >
                  {isActive && <Check className="h-4 w-4 text-white" />}
                </span>
              }
              onClick={() => {
                // setConfig({
                //     ...config,
                //     theme: theme.name,
                // })
              }}
              className={cn(
                "justify-start",
                isActive && "border-2 border-primary"
              )}
            >
              {theme
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Button>
          ) : (
            <Skeleton className="h-8 w-full rounded-lg" key={theme} />
          );
        })}
      </div>
    </div>
  );
}
