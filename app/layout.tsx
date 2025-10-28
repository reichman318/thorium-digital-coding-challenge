import type { Metadata } from "next";
import { Krona_One } from "next/font/google";
import "./globals.css";

const kronaOne = Krona_One({ weight: "400", subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Magnacare",
  description: "Magnacare landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kronaOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
