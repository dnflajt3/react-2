import Link from "next/link";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <header>
        root layout header
      </header>
      <Link href={`/`}>Home</Link> | 
      <Link href={`/blog`}>Blog</Link> |
      <Link href={`/blog3`}>Blog3</Link> | 
      <Link href={`/products`}>Products</Link> | 
        {children}
      <footer>
        root layout footer
      </footer>
      </body>
    </html>
  );
}
