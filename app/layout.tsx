import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanos",
  description: "Generate your Web Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <main className="bg-[#051119]">
          <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[100vh]">
            <Navbar/>
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
