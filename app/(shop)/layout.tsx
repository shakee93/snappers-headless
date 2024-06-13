import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "../globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Shop",
  description: "Shop Here",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className="relative bg-[#f5f6f5] bg-snappers-bg bg-cover h-screen">
          <Header />
          <div className="container py-10">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
