export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        slugg layout header
      </header>
      <body>
        {children}
      </body>
      <footer>
        slugg layout footer
      </footer>
    </html>
  );
}
