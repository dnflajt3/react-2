export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        blog layout header
      </header>
      <body>
        {children}
      </body>
      <footer>
        blog layout footer
      </footer>
    </html>
  );
}
