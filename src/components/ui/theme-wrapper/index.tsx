import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

interface ThemeWrapperProps extends ThemeProviderProps {
  className?: string;
}

export function ThemeWrapper(props: ThemeWrapperProps) {
  return <ThemeProvider attribute="class" forcedTheme="dark" {...props} />;
}
