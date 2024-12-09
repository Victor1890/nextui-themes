'use client';

import React, { useMemo } from 'react';
import { useWindowWidth } from './hooks/useWindowWidth';
import { DEFAULT_COLUMNS_COUNT } from './constants';

interface MasonryResponsiveProps {
    columnsCountBreakPoints?: Record<number, number>;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

function MasonryResponsive({
    columnsCountBreakPoints = {
        350: 1,
        750: 2,
        900: 3,
    },
    children,
    className,
    style = {},
}: MasonryResponsiveProps) {
    const windowWidth = useWindowWidth();
    const columnsCount = useMemo(() => {
        const breakPoints = Object.keys(columnsCountBreakPoints).sort(
            (a, b) => parseInt(a) - parseInt(b)
        );
        let count = breakPoints.length > 0 ? columnsCountBreakPoints[parseInt(breakPoints[0])] : DEFAULT_COLUMNS_COUNT;

        breakPoints.forEach((breakPoint) => {
            if (parseInt(breakPoint) < windowWidth) {
                count = columnsCountBreakPoints[parseInt(breakPoint)];
            }
        });

        return count;
    }, [windowWidth, columnsCountBreakPoints]);

    return (
        <div className={className} style={style}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child as React.ReactElement<any>, {
                    key: index,
                    columnsCount: columnsCount,
                })
            )}
        </div>
    );
};

export default MasonryResponsive;