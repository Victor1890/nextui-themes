import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { ThemeWrapper } from "../theme-wrapper";
import { RefreshCcw } from "lucide-react";

interface PopoverChangeColorProps {
    btnText?: string
}

export function PopoverChangeColor({ btnText = "Customize" }: PopoverChangeColorProps) {
    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="solid">{btnText}</Button>
            </PopoverTrigger>
            <PopoverContent
                className="z-40 w-[340px] rounded-[12px] p-6"
            >
                <ThemeWrapper
                    className="flex flex-col space-y-4 md:space-y-6"
                >
                    <div className="flex items-start pt-4 md:pt-0">
                        <div className="space-y-1 pr-2">
                            <div className="font-semibold leading-none tracking-tight">
                                Customize
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Pick a style and color for your components.
                            </div>
                        </div>
                        <Button
                            variant="light"
                            className="ml-auto rounded-[0.5rem]"
                            startContent={<RefreshCcw />}
                            onClick={() => {
                                // setConfig({
                                //     ...config,
                                //     theme: "zinc",
                                //     radius: 0.5,
                                // })
                            }}
                        >
                            <span className="sr-only">Reset</span>
                        </Button>
                    </div>
                    <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
                        <div className="space-y-1.5">
                            <div className="flex w-full items-center">
                                <Label className="text-xs">Style</Label>
                                <Popover>
                                    <PopoverTrigger>
                                        <InfoCircledIcon className="ml-1 h-3 w-3" />
                                        <span className="sr-only">About styles</span>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="space-y-3 rounded-[0.5rem] text-sm"
                                        side="right"
                                        align="start"
                                        alignOffset={-20}
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
                                    variant={"outline"}
                                    size="sm"
                                    onClick={() => setConfig({ ...config, style: "default" })}
                                    className={cn(
                                        config.style === "default" && "border-2 border-primary"
                                    )}
                                >
                                    Default
                                </Button>
                                <Button
                                    variant={"outline"}
                                    size="sm"
                                    onClick={() => setConfig({ ...config, style: "new-york" })}
                                    className={cn(
                                        config.style === "new-york" && "border-2 border-primary"
                                    )}
                                >
                                    New York
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs">Color</Label>
                            <div className="grid grid-cols-3 gap-2">
                                {themes.map((theme) => {
                                    const isActive = config.theme === theme.name

                                    return mounted ? (
                                        <Button
                                            variant={"outline"}
                                            size="sm"
                                            key={theme.name}
                                            onClick={() => {
                                                setConfig({
                                                    ...config,
                                                    theme: theme.name,
                                                })
                                            }}
                                            className={cn(
                                                "justify-start",
                                                isActive && "border-2 border-primary"
                                            )}
                                            style={
                                                {
                                                    "--theme-primary": `hsl(${theme?.activeColor[mode === "dark" ? "dark" : "light"]
                                                        })`,
                                                } as React.CSSProperties
                                            }
                                        >
                                            <span
                                                className={cn(
                                                    "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                                                )}
                                            >
                                                {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                                            </span>
                                            {theme.label}
                                        </Button>
                                    ) : (
                                        <Skeleton className="h-8 w-full" key={theme.name} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs">Radius</Label>
                            <div className="grid grid-cols-5 gap-2">
                                {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
                                    return (
                                        <Button
                                            variant={"outline"}
                                            size="sm"
                                            key={value}
                                            onClick={() => {
                                                setConfig({
                                                    ...config,
                                                    radius: parseFloat(value),
                                                })
                                            }}
                                            className={cn(
                                                config.radius === parseFloat(value) &&
                                                "border-2 border-primary"
                                            )}
                                        >
                                            {value}
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs">Mode</Label>
                            <div className="grid grid-cols-3 gap-2">
                                {mounted ? (
                                    <>
                                        <Button
                                            variant={"outline"}
                                            size="sm"
                                            onClick={() => setMode("light")}
                                            className={cn(mode === "light" && "border-2 border-primary")}
                                        >
                                            <SunIcon className="mr-1 -translate-x-1" />
                                            Light
                                        </Button>
                                        <Button
                                            variant={"outline"}
                                            size="sm"
                                            onClick={() => setMode("dark")}
                                            className={cn(mode === "dark" && "border-2 border-primary")}
                                        >
                                            <MoonIcon className="mr-1 -translate-x-1" />
                                            Dark
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Skeleton className="h-8 w-full" />
                                        <Skeleton className="h-8 w-full" />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </ThemeWrapper>
            </PopoverContent>
        </Popover>
    )
}