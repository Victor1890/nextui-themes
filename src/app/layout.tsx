import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "./provider";
import { cn } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-black text-white")}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
