import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Space Right Projects — Building Spaces That Perform",
  description:
    "SRP designs and delivers premium interior fit-outs, commercial spaces, retail stores, dark stores, MEP and luxury residential projects across India.",
  metadataBase: new URL("https://spacerightprojects.com"),
  openGraph: {
    title: "Space Right Projects",
    description: "Building Spaces That Perform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-matte text-pearl font-body antialiased selection:bg-gold selection:text-matte">
        {children}
      </body>
    </html>
  );
}
