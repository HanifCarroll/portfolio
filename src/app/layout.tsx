import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layout-client";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hanif Carroll | Digital Showroom Developer",
  description: "I build Digital Showrooms for creative businesses—custom-coded, high-performance Next.js websites designed to showcase the true quality of your work and turn visitors into high-value clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/webclip.jpg" />
        <script
          defer
          data-domain="fixbuild.hanifcarroll.com"
          src="https://plausible.hanifcarroll.com/js/script.js"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        <LayoutClient>{children}</LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
