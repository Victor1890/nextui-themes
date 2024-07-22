import { cn } from "@nextui-org/react";
// import { ThemeProvider } from "next-themes";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {}

export function ThemeWrapper({ className, ...props }: ThemeWrapperProps) {
  return (
    // <ThemeProvider
    //   themes={["light", "dark", "custom-theme"]}
    //   defaultTheme="custom-theme"
    //   forcedTheme="custom-theme"
    // >
    <div
      data-layer="theme-wrapper"
      className={cn(className, "blue-theme")}
      {...props}
    />
    // </ThemeProvider>
  );
}
