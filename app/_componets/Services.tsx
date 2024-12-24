"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaBath } from "react-icons/fa";
import { FiScissors } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

const Services = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center bg-[#fffbf1] py-12 text-[#3f2e1f]">
      <div className="my-20 flex flex-col items-center justify-center">
        <div className="text-center">
          <p>services</p>
          <h1 className="font-extrabold">We can help your buddies</h1>
        </div>
        <div className="mx-auto my-12 flex flex-col items-center justify-center gap-8 lg:flex-row">
          <div className="z-30 w-[500px] rounded-2xl bg-[#ffffff] p-4 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
            <div>
              <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#a6c1e7]">
                <CiHeart size={40} />
              </div>

              <h1>Full grooming</h1>
              <p>
                A comprehensive service that includes a bath, haircut, nail
                trimming, ear cleaning, and brushing for a fresh, clean look,
                ensuring your pet feels their best.
              </p>

              <Link href="/">read more</Link>
            </div>
          </div>
          <div className="z-30 w-[500px] rounded-lg bg-[#ffffff] p-4 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#fdcb6e]">
              <FaBath size={40} />
            </div>

            <h1>Full grooming</h1>
            <p>
              A comprehensive service that includes a bath, haircut, nail
              trimming, ear cleaning, and brushing for a fresh, clean look,
              ensuring your pet feels their best.
            </p>

            <Link href="/">read more</Link>
          </div>
          <div className="z-30 w-[500px] rounded-lg bg-[#ffffff] p-4 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#a6c1e7]">
              <FiScissors size={40} />
            </div>

            <h1>Full grooming</h1>
            <p>
              A comprehensive service that includes a bath, haircut, nail
              trimming, ear cleaning, and brushing for a fresh, clean look,
              ensuring your pet feels their best.
            </p>

            <Link href="/">read more</Link>
          </div>
        </div>

        <motion.button
          onHoverStart={() => setShow(true)}
          onHoverEnd={() => setShow(false)}
          className="btn flex items-center justify-center gap-2 text-2xl"
        >
          <Link href="/">see all services</Link>
          <motion.span animate={{ x: show ? 10 : 0 }}>
            <GoArrowRight />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};

export default Services;
