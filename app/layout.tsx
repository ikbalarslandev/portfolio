import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ikbal Arslan | JavaScript Developer",
    template: "%s | Ikbal Arslan",
  },
  description: "Personal website of Ikbal Arslan, a JavaScript developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5ZRS84CWHW"
      />
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5ZRS84CWHW');');`}
      </Script>
    </html>
  );
}
