import { MainLayout } from "@/components/layout/main";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

interface ProviderProps {
    children: React.ReactNode;
    themeProps?: Omit<ThemeProviderProps, "children">;
}

export function Provider({ children, themeProps }: Readonly<ProviderProps>) {
    return (
        <NextUIProvider>
            <NextThemesProvider {...themeProps}>
                <MainLayout>
                    {children}
                </MainLayout>
            </NextThemesProvider>
        </NextUIProvider>
    );
}