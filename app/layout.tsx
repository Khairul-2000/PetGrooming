import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_componets/Navbar";
import { Fredoka } from "next/font/google";
import CartContextContainer from "./_context/CartContext";
import Footer from "./_componets/Footer";
import Transition from "./_componets/Transition";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Pet Grooming",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#fff9e5] antialiased ${fredoka.variable} font-serif text-[#3f2e1f]`}
      >
        <div>
          <CartContextContainer>
            <Navbar />
            <hr className="w-full" />

            <main>{children}</main>
            <Footer />
          </CartContextContainer>
        </div>
      </body>
    </html>
  );
}
