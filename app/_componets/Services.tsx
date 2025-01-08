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
          <p className="text-2xl">services</p>
          <h1 className="text-6xl">We can help your buddies</h1>
        </div>
        <div className="mx-auto my-12 flex flex-col flex-wrap items-center justify-center gap-8 xl:flex-row">
          <div className="z-30 w-[550px] rounded-2xl bg-[#ffffff] p-6 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
            <div>
              <div className="my-8 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#a6c1e7]">
                <CiHeart size={40} />
              </div>

              <h1 className="mb-4">Full grooming</h1>
              <p className="mb-4 text-xl">
                A comprehensive service that includes a bath, haircut, nail
                trimming, ear cleaning, and brushing for a fresh, clean look,
                ensuring your pet feels their best.
              </p>

              <Link href="/" className="text-xl">
                read more
              </Link>
            </div>
          </div>

          <div className="z-30 w-[550px] rounded-2xl bg-[#ffffff] p-6 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
            <div className="my-8 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#fdcb6e]">
              <FaBath size={40} />
            </div>

            <h1 className="mb-4">Bath & Brush</h1>
            <p className="mb-4 text-xl">
              A soothing bath with pet-friendly shampoo, followed by brushing to
              remove loose fur, prevent matting, and leave your pet looking
              refreshed.
            </p>

            <Link href="/" className="text-xl">
              read more
            </Link>
          </div>
          <div className="z-30 w-[550px] rounded-2xl bg-[#ffffff] p-6 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
            <div className="my-8 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#a6c1e7]">
              <FiScissors size={40} />
            </div>

            <h1 className="mb-4">Nail Trimming</h1>
            <p className="mb-4 text-xl">
              Quick and gentle nail clipping to keep your pet’s paws healthy,
              preventing overgrown nails from causing discomfort or issues
              walking.
            </p>

            <Link href="/" className="text-xl">
              read more
            </Link>
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
