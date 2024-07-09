import { Button, cn, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { BadgeInfo } from "lucide-react";

export function StyleSectionPopover() {

    return (
        <div className="space-y-1.5">
            <div className="flex w-full items-center">
                <span className="text-xs">Style</span>
                <Popover>
                    <PopoverTrigger>
                        <Button
                            size="sm"
                            variant="light"
                            isIconOnly
                        >
                            <BadgeInfo className="h-4 w-4" />
                            {/* <span className="sr-only">About styles</span> */}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="space-y-3 rounded-[0.5rem] text-sm max-w-[300px] p-4"
                    >
                        <p className="font-medium">
                            What is the difference between the New York and Default style?
                        </p>
                        <p>
                            A style comes with its own set of components, animations,
                            icons and more.
                        </p>
                        <p>
                            The <span className="font-medium">Default</span> style has
                            larger inputs, uses lucide-react for icons and
                            tailwindcss-animate for animations.
                        </p>
                        <p>
                            The <span className="font-medium">New York</span> style ships
                            with smaller buttons and cards with shadows. It uses icons
                            from Radix Icons.
                        </p>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Button
                    variant={"flat"}
                    size="sm"
                    // onClick={() => setConfig({ ...config, style: "default" })}
                    className={cn(
                        "default"
                        // config.style === "default" && "border-2 border-primary"
                    )}
                >
                    Default
                </Button>
                <Button
                    variant={"flat"}
                    size="sm"
                    // onClick={() => setConfig({ ...config, style: "new-york" })}
                    className={cn(
                        "border-2 border-primary"
                        // config.style === "new-york" && "border-2 border-primary"
                    )}
                >
                    New York
                </Button>
            </div>
        </div>
    )
}