import { Button, cn } from "@nextui-org/react"

export function RadiusSectionPopover() {

    const config = {
        radius: 0,
    }

    return (
        <div className="space-y-1.5">
            <span className="text-xs">Radius</span>
            <div className="grid grid-cols-5 gap-2">
                {/* <ButtonGroup> */}
                {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
                    return (
                        <Button
                            variant={"flat"}
                            size="sm"
                            key={value}
                            onClick={() => {
                                // setConfig({
                                //     ...config,
                                //     radius: parseFloat(value),
                                // })
                            }}
                            className={cn(
                                "!min-w-[2rem] !min-h-[2rem]",
                                config.radius === parseFloat(value) && "border-2 border-primary"
                            )}
                        >
                            {value}
                        </Button>
                    )
                })}
                {/* </ButtonGroup> */}
            </div>
        </div>
    )
}