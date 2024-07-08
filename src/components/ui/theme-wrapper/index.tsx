import { ThemeProvider } from "next-themes";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ThemeWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode
}

export function ThemeWrapper({ children, ...props }: ThemeWrapperProps) {
    return (
        <div {...props}>

        </div>
    )
}