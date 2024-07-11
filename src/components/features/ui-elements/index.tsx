'use client';

import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry"

import { UIElementsExamples } from './examples';

export function UIElements() {
    return (
        <ResponsiveMasonry
            className="h-auto w-full m-auto flex items-center justify-center"
            columnsCountBreakPoints={{ 0: 1, 640: 2, 1400: 3 }}
        >
            <Masonry className="max-w-[1280px]" gutter="20px">
                {UIElementsExamples.map((Element, index) => (
                    <Element key={index} />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}