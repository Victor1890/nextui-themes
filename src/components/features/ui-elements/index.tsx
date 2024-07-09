'use client';

import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry"

import { Example01 } from './examples/example-01';

export function UIElements() {
    return (
        <ResponsiveMasonry
            className="h-auto w-full m-auto flex items-center justify-center"
            columnsCountBreakPoints={{ 0: 1, 640: 2, 1400: 3 }}
        >
            <Masonry className="max-w-[1024px]" gutter="20px">
                {Array.from({ length: 9 }).map((_, index) => (
                    <Example01 key={index} />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}