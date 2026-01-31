import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import FloatingControls from "@/components/FloatingControls";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "DoodyDo | Pet Waste Removal Services in North Atlanta",
  description: "Professional pet waste removal for homes and businesses. We scoop so you don't have to.",
  icons: {
    icon: '/custom-icon.png',
    shortcut: '/custom-icon.png',
    apple: '/custom-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <FloatingControls />
      </body>
    </html>
  );
}
