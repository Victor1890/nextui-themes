import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { RefreshCcw } from "lucide-react";
import { ColorsSectionPopover, ModeSectionPopover, RadiusSectionPopover } from "./sections";

export function PopoverChangeColor() {
  return (
    <Popover showArrow as="article">
      <PopoverTrigger>
        <Button variant="solid" color="primary">
          Customize
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-40 w-[340px] rounded-[12px] p-6">
        <div className="flex flex-col space-y-4 md:space-y-6">
          <div className="flex items-start pt-4 md:pt-0">
            <div className="space-y-1 pr-2">
              <div className="font-semibold leading-none tracking-tight text-large">Customize</div>
              <div className="text-xs text-muted-foreground">Pick a style and color for your components.</div>
            </div>
            <Button variant="light" isIconOnly className="ml-auto rounded-[0.5rem]">
              <RefreshCcw className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
            {/* <StyleSectionPopover /> */}
            <ColorsSectionPopover />
            <RadiusSectionPopover />
            <ModeSectionPopover />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
