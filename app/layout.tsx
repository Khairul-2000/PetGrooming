import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_componets/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#fff9e5] antialiased`}>
        <div>
          <Navbar />
          <hr className="w-full" />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
