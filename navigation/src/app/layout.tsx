import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <header>
         root header<br/>
        <Link href={`/`}>Home |</Link>
        <Link href={`/blog`}> Blog |</Link>
        <Link href={`/blog2`}> Blog2 |</Link>
        <Link href={`/blog2/aa`}> Blog2Slug |</Link>
        <Link href={`/blog3`}> Blog3 |</Link>
        </header>
        {children}
        <footer>
          root footer
        </footer>
      </body>
    </html>
  );
}
