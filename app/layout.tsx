import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ravi Portfolio",
  description: "Black, white, and red motion portfolio.",
  icons: {
    icon: [{ url: "/logo1.png", type: "image/png" }],
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ravi Portfolio",
    description: "Software systems, business applications, cloud infrastructure, and automation.",
    url: SITE_URL,
    siteName: "Ravi Portfolio",
    images: [{ url: "/logo1.png", width: 1200, height: 630, alt: "Ravi Portfolio logo" }],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
