import "./globals.css";

import Header from "./_components/Header.js";
import Footer from "./_components/Footer.js";

export const metadata = {
  title: "MAIA AI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        suppressHydrationWarning
        data-overlayscrollbars-initialize
        className="dark"
      >
        {/* <Providers> */}
        <Header />
        {children}
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
