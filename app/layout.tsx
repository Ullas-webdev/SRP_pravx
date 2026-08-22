import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-matte text-pearl font-body antialiased selection:bg-gold selection:text-matte">
        {children}
      </body>
    </html>
  );
}
