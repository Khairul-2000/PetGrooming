"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type CardProps = {
  image: StaticImageData;
};

const Card = ({ image }: CardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="relative my-6 h-[400px] min-w-[400px] overflow-hidden"
      onHoverStart={() => {
        setShowOverlay(true);
      }}
      onHoverEnd={() => {
        setShowOverlay(false);
      }}
    >
      <div>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center rounded-lg"
          >
            <div className="pointer-events-none absolute h-full w-full rounded-lg bg-black opacity-15" />
          </motion.div>
        )}
        <Image
          src={image}
          alt="pet"
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default Card;
