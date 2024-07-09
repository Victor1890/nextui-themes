import { ThemeProvider } from "next-themes";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ThemeWrapperProps extends HTMLAttributes<HTMLDivElement> {
}

export function ThemeWrapper({ children, ...props }: ThemeWrapperProps) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}