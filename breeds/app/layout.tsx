import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Awesome breeds",
  description:
    "Best place to find pets of any breed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} px-15 xl:px-20 py-5`}
      >
        {children}
      </body>
    </html>
  );
}
