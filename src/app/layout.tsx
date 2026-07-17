import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata: Metadata = {
  title: {
    default: "Akanu Ibiam Memorial Seminary",
    template: "%s | Akanu Ibiam Memorial Seminary",
  },

  description:
    "Akanu Ibiam Memorial Seminary - Building leaders through academic excellence, Christian values, discipline, and innovation.",

  authors: [
    {
      name: "Mathias Chikaodili Ede", 
    },
  ],

  creator: "Mathias Chikaodili Ede", 

  publisher: "Akanu Ibiam Memorial Seminary",

  keywords: [
    "Akanu Ibiam Memorial Seminary",
    "AIMS",
    "Secondary School",
    "Boarding School",
    "Christian School",
    "Education",
    "Nigeria",
  ],

  icons: {
    icon: "/logo/aims-logo.jpg",
    shortcut: "/logo/aims-logo.jpg",
    apple: "/logo/aims-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}