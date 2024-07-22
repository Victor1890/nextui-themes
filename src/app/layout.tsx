import "@/styles/globals.css";
import { cn } from "@nextui-org/react";
import { Provider } from "./provider";
import { fontSans } from "@/config/fonts";
import { THEME_PROVIDERS } from "@/constants";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <Provider
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            themes: ["light", "dark"],
            enableSystem: true,
            enableColorScheme: true,
          }}
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
