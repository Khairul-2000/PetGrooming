"use client";

import Link from "next/link";
import React from "react";
import { images } from "../images/image";
import Card from "./Card";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-[#fffbf1] py-[100px] text-center text-[#3f2e1f]">
      <div className="mb-8 flex max-w-[500px] flex-col items-center justify-center space-y-5">
        <p className="text-xl">about us</p>
        <h1 className="font-extrabold">
          Bunch of loving people with passion to pets
        </h1>
        <p className="max-w-[350px] text-lg">
          Nam commodo suscipit quam. Nulla sit amet est. Aenean viverra rhoncus
          pede.
        </p>
        <button className="btn text-xl">
          <Link href="/">about us</Link>
        </button>
      </div>

      <motion.div
        className="flex flex-row items-center justify-center gap-6"
        animate={{
          x: ["0%", "30%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
          repeatType: "loop",
          repeatDelay: 0,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="group">
            <Link href={`/teams/${image.text.toLowerCase()}`}>
              <Card image={image.image} key={index} />
              <h4
                key={index}
                className="transiton-all opacity-0 duration-[.6s] ease-in-out group-hover:opacity-100"
              >
                {image.text}
              </h4>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
