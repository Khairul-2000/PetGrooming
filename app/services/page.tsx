import Link from "next/link";
import React from "react";
import { FaBath } from "react-icons/fa";
import { FiScissors } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LiaDogSolid } from "react-icons/lia";
import Story from "../_componets/Story";

import Accordian from "../_componets/Accordian";
import Transition from "../_componets/Transition";

const Service = () => {
  return (
    <Transition>
      <div className="mx-auto">
        <div className="bg-[#fffbf1] py-10">
          <h1 className="mt-[50px] text-center text-8xl">
            Explore our services
          </h1>
          -
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
                A soothing bath with pet-friendly shampoo, followed by brushing
                to remove loose fur, prevent matting, and leave your pet looking
                refreshed.
              </p>

              <Link href="/" className="text-xl">
                read more
              </Link>
            </div>
            <div className="z-30 w-[550px] rounded-2xl bg-[#ffffff] p-6 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
              <div className="my-8 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#ff6f61]">
                <FiScissors color="white" size={40} />
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
            <div className="z-30 w-[550px] rounded-2xl bg-[#ffffff] p-6 transition-all duration-[1s] ease-in-out hover:-translate-y-2">
              <div className="my-8 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#ff6f61]">
                <LiaDogSolid color="white" size={40} />
              </div>

              <h1 className="mb-4">De-sheddingg</h1>
              <p className="mb-4 text-xl">
                Specialized grooming to reduce shedding and promote a smooth,
                healthy coat, perfect for pets with heavy fur or during shedding
                periods.
              </p>

              <Link href="/" className="text-xl">
                read more
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Story />
        </div>
        <div className="flex h-[90vh] flex-row items-center justify-around bg-[#fffbf1] p-10">
          <div className="space-y-5 text-left">
            <p>faq</p>
            <h1 className="max-w-[600px] text-6xl">
              You’ve got questions, we’ve got answers
            </h1>
            <p className="text-xl">
              Vivamus aliquet elit ac nisl. Aenean posuere, tortor sed cursus
              feugiat, nunc augue blandit.
            </p>
            <button className="btn">contact us</button>
          </div>
          <div className="flex flex-col gap-4">
            <Accordian
              title="Do you offer service only for dogs?"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis veritatis quam eveniet, eos mollitia repellat. Fuga illo iusto eius dolores."
            />
            <Accordian
              title="Do you offer discounts?"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis veritatis quam eveniet, eos mollitia repellat. Fuga illo iusto eius dolores."
            />
            <Accordian
              title="Why Pet Grooming is a great template?"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis veritatis quam eveniet, eos mollitia repellat. Fuga illo iusto eius dolores."
            />
            <Accordian
              title="What value Pet Grooming brings?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            />
            <Accordian
              title="Do you offer service only for dogs?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            />
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Service;
