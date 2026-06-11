import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://kin-interior.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kin Interior Design & Consulting PLC",
    template: "%s — Kin Interior Design",
  },
  description:
    "Kin Interior Design & Consulting PLC crafts sophisticated, minimalist interiors for residential, commercial and hospitality spaces. Explore our portfolio and book a consultation.",
  keywords: [
    "interior design",
    "interior consulting",
    "residential design",
    "commercial design",
    "hospitality design",
    "Kin Interior",
  ],
  openGraph: {
    title: "Kin Interior Design & Consulting PLC",
    description:
      "Sophisticated, minimalist interiors for living, working and hospitality spaces.",
    type: "website",
    url: siteUrl,
  },
  icons: {
    icon: "/brand/kin-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
