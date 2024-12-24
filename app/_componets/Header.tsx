"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="my-20 flex flex-col items-center justify-center gap-4">
        <div className="flex max-w-[500px] flex-col items-center justify-center gap-3 space-y-4">
          <h1 className="text-center font-[Baloo] text-6xl font-extrabold text-[#3f2e1f]">
            Pamper your pet with expert care
          </h1>
          <p className="text-center text-2xl text-[#3f2e1f]">
            Providing expert care and personalized grooming for happy, healthy
            pets every time
          </p>
          <motion.button
            onHoverStart={() => setShow(true)}
            onHoverEnd={() => setShow(false)}
            className="btn flex items-center justify-center gap-2 text-2xl"
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
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
