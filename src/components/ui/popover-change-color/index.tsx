import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

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
                <div>

                </div>
            </PopoverContent>
        </Popover>
    )
}