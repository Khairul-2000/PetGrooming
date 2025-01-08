import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="mx-[150px] flex flex-row items-center justify-between p-[60px]">
      <div>
        <Link href="/">
          <Image
            src="https://cdn.prod.website-files.com/66f4c90bc0e226cdc99190a7/66f518fe65054fd396f8158b_Pet%20Grooming%20Logo.svg"
            alt="logo"
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div>
        <p className="text-xl">
          {` ${date.getFullYear()}`} by Pet Grooming. Proudly created with
          DotDev.
        </p>
      </div>
    </div>
  );
};

export default Footer;
