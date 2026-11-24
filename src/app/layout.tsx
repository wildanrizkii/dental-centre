import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentèle — Specialist Dental Centre | Harley Street, London",
  description:
    "Experience advanced dental treatments with world-renowned specialists, modern diagnostic technology, and personalized care designed around your comfort and health.",
  keywords: [
    "dental clinic",
    "specialist dentist",
    "Harley Street dental",
    "porcelain veneers",
    "dental implants",
    "Invisalign",
    "cosmetic dentistry",
  ],
  authors: [{ name: "Dentèle Specialist Dental Centre" }],
  openGraph: {
    title: "Dentèle — Specialist Dental Centre",
    description:
      "Advanced dental treatments with world-renowned specialists and personalized care.",
    url: "https://dentele.co.uk",
    siteName: "Dentèle",
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcf9f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-surface font-sans text-on-surface antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
