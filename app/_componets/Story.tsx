import React from "react";
import { GoPeople } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { images } from "../images/image";
import Link from "next/link";

const Story = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[200px] xl:flex-row xl:justify-evenly">
      <div className="mb-[100px] flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
        <p className="mb-5 text-2xl">our story</p>
        <h1 className="mb-6 max-w-[600px] text-6xl">
          Caring for pets in <span>California since 2006</span>
        </h1>
        <p className="mb-6 max-w-[600px] text-2xl">
          Nam commodo suscipit quam. Nulla sit amet est. Aenean viverra rhoncus
          pede.
        </p>
        <div className="mb-8 flex flex-col items-start justify-center gap-6">
          <div className="flex flex-row items-center justify-center gap-6">
            <GoPeople size={30} />
            <span className="text-xl">Trusted by thousands</span>
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <AiOutlineSafetyCertificate size={35} />
            <span className="text-xl">Certificate awarded</span>
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <CiHeart size={35} />
            <span className="text-xl">Made by professionals</span>
          </div>
        </div>

        <button className="btn">
          <Link href="/">about us</Link>
        </button>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Image
          src="https://cdn.prod.website-files.com/66f4c90bc0e226cdc99190a7/66f5343ca86af37b9d58353f_Abstract%20Combo%20Halves.svg"
          alt="logo"
          width={300}
          height={300}
          className="absolute -right-36 -top-20 -z-10 xl:right-10"
        />
        <div>
          <Image
            src={images[3].image}
            alt="team"
            width={700}
            height={700}
            className="z-30 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
