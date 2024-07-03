'use client';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Example01 } from './examples/example-01'

export function UIElements() {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1400: 3 }}>
            <Masonry gutter="20px">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Example01 key={index} />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}