import { Button, ButtonGroup } from "@nextui-org/react";

export function HomeColors() {
    return (
        <section className="flex flex-col items-center justify-center py-16 space-y-8">
            <h1 className="text-4xl font-bold">Add colors. Make it yours.</h1>
            <p className="text-gray-400">Hand-picked themes that you can copy and paste into your apps.</p>
            <div className="flex items-center space-x-4">
                <ButtonGroup radius="full" className="flex space-x-2">
                    <Button className="w-8 h-8 bg-gray-600 rounded-full" />
                    <Button className="w-8 h-8 bg-red-600 rounded-full" />
                    <Button className="w-8 h-8 bg-pink-600 rounded-full" />
                    <Button className="w-8 h-8 bg-blue-600 rounded-full ring-2 ring-blue-400" />
                    <Button className="w-8 h-8 bg-orange-600 rounded-full" />
                    <Button className="w-8 h-8 bg-green-600 rounded-full" />
                </ButtonGroup>
                <Button variant="solid" className="bg-gray-800 text-white">
                    Customize
                </Button>
                <Button variant="flat" className="text-white border-gray-600">
                    Copy code
                </Button>
            </div>
        </section>
    );
}