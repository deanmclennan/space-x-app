import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <Head>
        <title>My App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
