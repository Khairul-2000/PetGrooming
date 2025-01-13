"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { oswald } from "./Header";
import { CartContext } from "../_context/CartContext";
import { motion } from "motion/react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [ishover, setIshover] = useState(false);
  const links = [
    {
      href: "/",
      text: "home",
    },
    {
      href: "/details",
      text: "about",
    },
    {
      href: "/services",
      text: "services",
    },
    {
      href: "/pricing",
      text: "pricing",
    },
  ];
  const { cart } = useContext(CartContext);
  return (
    <header
      className={`nav-link relative mx-[10px] ${oswald.variable} font-sans text-xl lg:mx-[120px]`}
    >
      <div className="mr-4 flex flex-row items-center justify-between p-5 pr-8">
        <ul className="hidden flex-row gap-3 lg:flex">
          {links.map((link, index) => (
            <div key={index} className="flex flex-row gap-3 hover:underline">
              <Link href={link.href} key={index}>
                {link.text}
              </Link>
            </div>
          ))}
          <motion.div
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
            className="relative cursor-pointer"
          >
            other
            {ishover && (
              <motion.div
                className={`absolute -left-5 top-7 z-30 mt-2 rounded-md bg-white p-6`}
              >
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/contact">contact</Link>
                  </li>
                  <li>
                    <Link href="/teams">teams</Link>
                  </li>
                  <li>
                    <Link href="/blog">blog</Link>
                  </li>
                  <li>
                    <Link href="/legal">legal</Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>
        </ul>

        <div className="relative lg:hidden">
          {show ? (
            <IoClose
              className="cursor-pointer"
              size={35}
              onClick={() => {
                console.log("clicked");
                setShow(!show);
              }}
            />
          ) : (
            <Image
              src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
              alt="menu"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={() => setShow(true)}
            />
          )}
        </div>
        <Link href="/">
          <Image
            src="https://cdn.prod.website-files.com/66f4c90bc0e226cdc99190a7/66f518fe65054fd396f8158b_Pet%20Grooming%20Logo.svg"
            alt="logo"
            width={250}
            height={250}
          />
        </Link>

        <p>{`Cart (${cart})`}</p>
      </div>

      <nav
        className={`${
          show
            ? "top-18 absolute left-0 z-10 flex w-full translate-y-0 flex-col items-center gap-4 border-b-8 border-r-8 border-gray-500 bg-[#fff9e5] p-14 transition-all duration-[0.7s] ease-in-out lg:hidden"
            : "absolute z-10 flex w-full -translate-y-96 flex-col items-center border-r-8 border-gray-500 bg-[#fff9e5] transition-all duration-[0.5s] ease-in-out"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/details">details</Link>
          </li>
          <li>
            <Link href="/services">services</Link>
          </li>
          <li>
            <Link href="/pricing">pricing</Link>
          </li>
          <li>other</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
