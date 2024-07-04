'use client'

import { Button } from '@nextui-org/react';
import { createContext, useContext, useMemo, useState } from 'react';
import { ContextValue, ItemProps, RootProps } from './toggle-button.interface';

const ToggleContext = createContext<Pick<ContextValue, "value">>({
    value: "",
});

export function ToggleButton({ children, defaultValue, onChange }: RootProps) {
    const [value, setValue] = useState(defaultValue);
    const valueProvider: ContextValue = { value, setValue, onChange };

    return (
        <ToggleContext.Provider value={valueProvider}>
            <div className="flex items-center justify-center w-fit gap-2 p-1 rounded-lg bg-default-50">{children}</div>
        </ToggleContext.Provider>
    );
}

export function ToggleButtonItem({ children, value }: ItemProps) {
    const { value: activeValue, setValue, onChange } = useContext(ToggleContext) as ContextValue;
    const isEnabled = useMemo(() => value === activeValue, [value, activeValue]);

    return (
        <Button
            aria-pressed={isEnabled ? "true" : "false"}
            aria-label='Toggle Button Item'
            title='Toggle Button Item'
            aria-labelledby='Toggle Button Item'
            size='md'
            color={'primary'}
            variant={isEnabled ? 'solid' : 'flat'}
            onClick={() => {
                setValue(value);
                onChange?.(value);
            }}
        >
            {children}
        </Button>
    );
}