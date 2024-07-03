interface ContainerProps {
    children: React.ReactNode;
}

export function Container({ children }: Readonly<ContainerProps>) {
    return (
        <article>
            {children}
        </article>
    )
}