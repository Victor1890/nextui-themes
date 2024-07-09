'use client';

import React, { useMemo } from 'react';

interface MasonryProps {
    children: React.ReactNode;
    columnsCount?: number;
    gutter?: string;
    className?: string;
    style?: React.CSSProperties;
}

function Masonry({
    children,
    columnsCount = 3,
    gutter = "0",
    className,
    style
}: Readonly<MasonryProps>) {
    // useMemo to optimize performance by memoizing the columns structure
    const columns = useMemo(() => {
        const columnsArray: Record<number, React.ReactNode[]> = {};

        let validIndex = 0;

        React.Children.forEach(children, (child) => {
            if (child && React.isValidElement(child)) {
                if (!columnsArray[validIndex % columnsCount]) {
                    columnsArray[validIndex % columnsCount] = [];
                }
                columnsArray[validIndex % columnsCount].push(child);
                validIndex++;
            }
        });
        return columnsArray;
    }, [children, columnsCount]);

    const renderColumns = () => {
        return Object.entries(columns).map(([key, column]) => (
            <div
                key={key}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignContent: 'stretch',
                    flex: 1,
                    width: 0, // Consider if this is necessary or should be adjusted
                    gap: gutter,
                }}
            >
                {column.map((item: any, index) => React.cloneElement(item, { key: `${index}-${index}` }))}
            </div>
        ));
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'stretch',
                boxSizing: 'border-box',
                width: '100%',
                gap: gutter,
                ...style,
            }}
            className={className}
        >
            {renderColumns()}
        </div>
    );
};

export default Masonry;