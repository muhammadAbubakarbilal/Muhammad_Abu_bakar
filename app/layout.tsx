import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./launchfolio.css";
import "./spacing.css";
import { LaunchMotion } from "@/components/LaunchMotion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AssistantLauncher } from "@/components/AssistantLauncher";
import { site } from "@/lib/site";
const description =
  "I design professional websites and build AI assistants, CRM workflows, automation, and custom software to help businesses improve their digital operations.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: { url: "/assets/abu_bakar.jpg", type: "image/jpeg" },
    apple: "/assets/abu_bakar.jpg",
  },
  openGraph: {
    title: `${site.name} — Websites, AI & Connected Systems`,
    description,
    type: "website",
    images: [
      {
        url: "/assets/abu_bakar.jpg",
        width: 912,
        height: 1136,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Websites, AI & Connected Systems`,
    description,
    images: ["/assets/abu_bakar.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/switzer-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <noscript>
          <nav className="container no-script-nav" aria-label="Site navigation">
            <Link href="/work">Work</Link>
            <Link href="/systems">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </noscript>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <AssistantLauncher />
        <LaunchMotion />
      </body>
    </html>
  );
}
