import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { ThemeWrapper } from "../theme-wrapper";
import { RefreshCcw } from "lucide-react";

interface PopoverChangeColorProps {
    btnText?: string
}

export function PopoverChangeColor({ btnText }: PopoverChangeColorProps) {
    return (
        <Popover>
            <PopoverTrigger>
                <Button>{btnText}</Button>
            </PopoverTrigger>
            <PopoverContent>
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
                            variant="ghost"
                            // size="icon"
                            className="ml-auto rounded-[0.5rem]"
                            onClick={() => {
                                // setConfig({
                                //     ...config,
                                //     theme: "zinc",
                                //     radius: 0.5,
                                // })
                            }}
                        >
                            <RefreshCcw />
                            <span className="sr-only">Reset</span>
                        </Button>
                    </div>
                </ThemeWrapper>
            </PopoverContent>
        </Popover>
    )
}