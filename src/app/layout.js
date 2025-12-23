import localFont from "next/font/local";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper"; // this will be the client component
import Toaster from "@/components/Toaster";

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

const hankenGrotesk = localFont({
  src: [
    {
      path: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
      weight: "100 900", // adjust based on the font's supported range
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-hanken",
});

export const metadata = {
  title: "Car n Keys",
  description: "Buy & Sell Cars",
    icons: {
    icon: "/Images/Fav.PNG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100  ${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable}`}>
        <Toaster />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
