import localFont from "next/font/local";
import "./globals.css";

import { Inter } from "next/font/google";

//layout components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${inter.className} h-full antialiased`}
      >
        <Header />
        <main className="container mx-auto h-full px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
