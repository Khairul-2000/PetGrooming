"use client";

import React, { useState } from "react";
import image4 from "@/app/images/images-4.jpg";
import image5 from "@/app/images/images-5.jpg";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const Element = [
    {
      image: image4,
      description:
        "I’ve been bringing my dog here for over a year, and I couldn’t be happier! The team is so patient and loving, and my pup always comes home looking and feeling fantastic. They truly care about the pets they groom and it shows in their work.",
      name: "Sarah M.",
      title: "Golden Retriever Owner",
    },
    {
      image: image5,
      description:
        "My cat is very shy, but the staff made her feel so comfortable. I was worried about how she’d handle her first grooming session, but she came home calm and looking amazing! I’ll definitely be back.",
      name: "Sarah M.",
      title: "Golden Retriever Owner",
    },
  ];
  return (
    <div className="mx-[300px] py-[200px]">
      <div className="text-left">
        <p className="text-xl">testimonials</p>
        <h1 className="text-6xl">Don’t just our word for it</h1>
      </div>
      <div className="mx-auto my-12 flex flex-col flex-wrap items-center justify-center gap-8">
        <div className="relative mt-8 flex flex-row items-start justify-center gap-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-row items-start justify-center gap-[120px]"
            >
              <div>
                <Image
                  src={Element[index].image}
                  alt="testimonial"
                  width={800}
                  height={800}
                  className="h-[600px] w-[400px] rounded-3xl rounded-tl-[200px]"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="text-left">
              <p className="mb-3 w-[800px] text-4xl">{`“${Element[index].description}”`}</p>
              <div>
                <p className="font-semibold">{Element[index].name}</p>
                <p className="text-gray-500">{Element[index].title}</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-20 left-[600px] flex flex-row gap-2">
            <span
              className="cursor-pointer"
              onClick={() => {
                setIndex((prev) => (prev === 0 ? 1 : 0));
              }}
            >
              <GoArrowLeft size={50} className="animate-directionX" />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIndex((prev) => (prev === 0 ? 1 : 0));
              }}
            >
              <GoArrowRight size={50} className="animate-directionY" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
