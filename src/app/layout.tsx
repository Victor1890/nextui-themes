import "@/styles/globals.css";
import { cn } from "@nextui-org/react";
import { Provider } from "./provider";
import { fontSans } from "@/config/fonts";
import { type Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Victor J. Rosario V.",
      url: "https://shadcn.com",
    },
  ],
  creator: "Victor J. Rosario V.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.className)}>
        <Provider
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            themes: ["light", "dark", "slate-theme-light-theme", "slate-theme-dark-theme"],
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
