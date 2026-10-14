import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jharavi | Full Stack Developer & Software Engineer",
  description: "Jharavi is Ravi Jha's portfolio of full-stack applications, business systems, cloud infrastructure, and automation, using React, Next.js, Spring Boot, and AWS. His Google Business profile is named ravi.tech.",
  icons: {
    icon: [{ url: "/logo1.png", type: "image/png" }],
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jharavi | Ravi Jha's Development Portfolio",
    description: "Explore Ravi Jha's full-stack applications, business systems, cloud infrastructure, and automation. Jharavi is his portfolio brand; ravi.tech is his Google Business profile name.",
    url: SITE_URL,
    siteName: "Jharavi",
    images: [{ url: "/logo1.png", width: 1200, height: 630, alt: "Jharavi portfolio logo" }],
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
