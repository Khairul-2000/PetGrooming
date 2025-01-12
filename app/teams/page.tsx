import Image from "next/image";
import React from "react";
import { images } from "../images/image";
import TeamCard from "../_componets/TeamCard";
import Transition from "../_componets/Transition";

const page = () => {
  return (
    <Transition>
      <div className={`h-full w-full rounded-xl bg-[#fffbf1] py-10`}>
        <div className="mt-[70px] flex flex-row items-center justify-between">
          <Image
            src="https://cdn.prod.website-files.com/66f4c90bc0e226cdc99190a7/66fa54ce9e6470e9caa997db_Abstract%20Hero%20General%20Left.svg"
            alt="side logo"
            width={200}
            height={200}
          />
          <div className="mb-12 flex flex-col gap-4 text-center">
            <h1 className="text-7xl">Meet the team</h1>
            <p className="font-serif text-2xl">
              PProin faucibus arcu quis ante. Vivamus aliquet elit ac nisl.
            </p>
          </div>
          <Image
            src="https://cdn.prod.website-files.com/66f4c90bc0e226cdc99190a7/66fa54ce3725adb9693a8e35_Abstract%20Hero%20General%20Right.svg"
            alt="side logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          {images.slice(0, 5).map((image, index) => (
            <div key={index}>
              <a href={`/teams/${image.text.toLowerCase()}`}>
                <TeamCard image={image} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default page;
