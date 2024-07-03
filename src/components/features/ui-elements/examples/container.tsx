import { cn } from "@nextui-org/react";
import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: ReactNode;
    className?: string;
    style?: CSSProperties
}

export function Container({ children, className, ...props }: Readonly<ContainerProps>) {
    return (
        <article className={cn("border-solid border-1 border-[#eaecf0] rounded-xl", className)} {...props}>
            {children}
        </article>
    )
}