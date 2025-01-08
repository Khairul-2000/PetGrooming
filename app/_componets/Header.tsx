"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";
import { Oswald } from "next/font/google";
import { CartContext } from "../_context/CartContext";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-oswald",
});

const Header = () => {
  const [show, setShow] = useState(false);
  const { setCart } = useContext(CartContext);
  return (
    <div>
      <div className="my-20 flex flex-col items-center justify-center gap-4 xl:flex-row">
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 space-y-4 text-left xl:items-start xl:justify-start">
          <h1 className="text-center text-7xl font-extrabold text-[#3f2e1f] xl:text-left">
            Pamper your pet with expert care
          </h1>
          <p className="text-center text-2xl text-[#3f2e1f] xl:text-left">
            Providing expert care and personalized grooming for happy, healthy
            pets every time
          </p>
          <motion.button
            onHoverStart={() => setShow(true)}
            onHoverEnd={() => setShow(false)}
            onClick={() => setCart((prev) => prev + 1)}
            className={`btn flex items-center justify-center gap-2 ${oswald.variable} font-sans`}
          >
            <Link href="/">Book appointement</Link>
            <motion.span animate={{ x: show ? 10 : 0 }}>
              <GoArrowRight />
            </motion.span>
          </motion.button>
        </div>
        <div>
          <Image
            src="https://cdn.prod.website-files.com/66f4c90bc0e226cdc99190a7/66f530dff843236906c1fff8_Pet%20Grooming.webp"
            alt="pet grooming"
            width={900}
            height={900}
            className="lg:h-[700px] lg:w-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
