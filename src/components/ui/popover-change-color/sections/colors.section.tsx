import { Button, cn, Skeleton } from "@nextui-org/react";
import { Check } from "lucide-react";

const config = {
    theme: "default",
    name: "default",
    label: "Default",
    activeColor: {
        light: 200,
        dark: 200,
    },
};
const themes = [
    {
        name: "default",
        label: "Default",
        activeColor: {
            light: 200,
            dark: 200,
        },
    },
    {
        name: "red",
        label: "Red",
        activeColor: {
            light: 0,
            dark: 0,
        },
    },
    {
        name: "pink",
        label: "Pink",
        activeColor: {
            light: 320,
            dark: 320,
        },
    },
    {
        name: "blue",
        label: "Blue",
        activeColor: {
            light: 200,
            dark: 200,
        },
    },
    {
        name: "orange",
        label: "Orange",
        activeColor: {
            light: 30,
            dark: 30,
        },
    },
    {
        name: "green",
        label: "Green",
        activeColor: {
            light: 120,
            dark: 120,
        },
    },

]

export function ColorsSectionPopover() {

    const mounted = true

    return (
        <div className="space-y-1.5">
            <span className="text-xs">Color</span>
            <div className="grid grid-cols-3 gap-2">
                {themes.map((theme) => {
                    const isActive = config.theme === theme.name

                    return mounted ? (
                        <Button
                            variant={"flat"}
                            size="sm"
                            key={theme.name}
                            startContent={
                                <span
                                    className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary")}
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
                            {theme.label}
                        </Button>
                    ) : (
                        <Skeleton className="h-8 w-full rounded-lg" key={theme.name} />
                    )
                })}
            </div>
        </div>
    )
}