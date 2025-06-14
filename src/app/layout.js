import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "@/components/Navbar";
import { Toaster } from 'react-hot-toast';
import FontDialog from "@/components/FontDialog";
import Footer from "@/components/Footer";
import SplashWrapper from "@/components/SplashWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "श्रीमद् भगवद्गीता  यथारूप ",
  description: "श्रीमद् भगवद्गीता  यथारूप",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <SplashWrapper>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <Toaster />
          <FontDialog />
        </SplashWrapper>
      </body>
    </html>
  );
}
