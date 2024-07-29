import { PopoverChangeColor } from "@/components/ui/popover-change-color";
import { Typography } from "@/components/ui/typography";
import { Button } from "@nextui-org/react";

export function HomeColors() {
  return (
    <section className="flex flex-col items-center justify-center py-16 space-y-8">
      <Typography as="h1" className="hidden md:block text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        Add colors. Make it yours.
      </Typography>
      <Typography as="h1" className="md:hidden text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        Make it yours.
      </Typography>
      <Typography as="h2" className="text-center md:text-balance max-w-2xl text-lg font-light text-foreground">
        Hand-picked themes that you can copy and paste into your apps.
      </Typography>
      <div className="flex items-center space-x-4">
        {/* <div className="hidden md:flex space-x-2">
          <Button
            size="lg"
            radius="full"
            className="min-w-4 bg-gray-600 rounded-full"
          />
          <Button size="lg" radius="full" className="min-w-4 bg-red-600" />
          <Button size="lg" radius="full" className="min-w-4 bg-pink-600" />
          <Button
            size="lg"
            radius="full"
            className="min-w-4 bg-blue-600 ring-blue-400"
          />
          <Button size="lg" radius="full" className="min-w-4 bg-orange-600" />
          <Button size="lg" radius="full" className="min-w-4 bg-green-600" />
        </div> */}
        <PopoverChangeColor />
        <Button variant="ghost">Copy code</Button>
      </div>
    </section>
  );
}
