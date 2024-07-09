import { PopoverChangeColor } from "@/components/ui/popover-change-color";
import { Button } from "@nextui-org/react";

export function HomeColors() {
    return (
        <section className="flex flex-col items-center justify-center py-16 space-y-8">
            <h1 className="text-4xl font-bold">Add colors. Make it yours.</h1>
            <p className="">Hand-picked themes that you can copy and paste into your apps.</p>
            <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                    <Button size="lg" radius="full" className="min-w-4 bg-gray-600 rounded-full" />
                    <Button size="lg" radius="full" className="min-w-4 bg-red-600" />
                    <Button size="lg" radius="full" className="min-w-4 bg-pink-600" />
                    <Button size="lg" radius="full" className="min-w-4 bg-blue-600 ring-blue-400" />
                    <Button size="lg" radius="full" className="min-w-4 bg-orange-600" />
                    <Button size="lg" radius="full" className="min-w-4 bg-green-600" />
                </div>
                <PopoverChangeColor />
                <Button variant="light">
                    Copy code
                </Button>
            </div>
        </section>
    );
}