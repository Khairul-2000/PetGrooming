"use client";

import React from "react";
import { GoCheck } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Transition from "../_componets/Transition";

const page = () => {
  return (
    <Transition>
      <div>
        <header className="mt-[70px] text-center">
          <h1 className="text-7xl">Our packages</h1>
          <p className="text-2xl">
            Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
          </p>
        </header>
        <div className="flex flex-row items-center justify-center gap-4 py-16">
          <div className="w-[500px] rounded-3xl bg-white px-7 py-7">
            <div className="mb-[20px] flex h-[30px] w-[150px] flex-row items-center justify-center rounded-2xl bg-[#a6c1e7] p-5">
              $150.00 USD
            </div>
            <div className="my-[20px] space-y-3">
              <h1>Basic grooming</h1>
              <p>
                Pets needing regular maintenance with no major grooming
                requirements.
              </p>
            </div>
            <hr className="w-full" />
            <div className="my-4 space-y-3">
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>relaxing bath</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>brushing</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>ear cleaning</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>nail trimming</p>
              </div>
            </div>

            <button className="btn group flex w-[90%] flex-row items-center justify-center gap-0 bg-[#a6c1e7] text-xl transition-all duration-[.5s] ease-in-out">
              <span className="transition-all duration-[.5s] ease-in-out group-hover:translate-x-2">
                get started
              </span>

              <div className="opacity-0 transition-all duration-[.5s] ease-in-out group-hover:translate-x-3 group-hover:opacity-100">
                <GoArrowRight size={30} color="white" />
              </div>
            </button>
          </div>
          <div className="w-[500px] rounded-3xl bg-white px-7 py-7">
            <div className="mb-[20px] flex h-[30px] w-[150px] flex-row items-center justify-center rounded-2xl bg-[#fdcb6e] p-5">
              $150.00 USD
            </div>
            <div className="my-[20px] space-y-3">
              <h1>Standard grooming</h1>
              <p>
                Pets that need a full grooming session including a fresh
                haircut.
              </p>
            </div>
            <hr className="w-full" />
            <div className="my-4 space-y-3">
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>same as basic+</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>haircut</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>teeth brushing</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>basic medical check</p>
              </div>
            </div>

            <button className="btn group flex w-[90%] flex-row items-center justify-center gap-0 bg-[#fdcb6e] text-xl transition-all duration-[.5s] ease-in-out">
              <span className="transition-all duration-[.5s] ease-in-out group-hover:translate-x-2">
                get started
              </span>

              <div className="opacity-0 transition-all duration-[.5s] ease-in-out group-hover:translate-x-3 group-hover:opacity-100">
                <GoArrowRight size={30} color="white" />
              </div>
            </button>
          </div>
          <div className="w-[500px] rounded-3xl bg-white px-7 py-7">
            <div className="mb-[20px] flex h-[30px] w-[150px] flex-row items-center justify-center rounded-2xl bg-[#ff6f61] p-5">
              $400.00 USD
            </div>
            <div className="my-[20px] space-y-3">
              <h1>Pro grooming</h1>
              <p>
                Pets requiring extra attention to their coat, teeth, and skin
                care.
              </p>
            </div>
            <hr className="w-full" />
            <div className="my-4 space-y-3">
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>same as standard +</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>de-shedding</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>coat whitening</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <GoCheck size={30} />
                <p>extra medical check</p>
              </div>
            </div>
            <button className="btn group flex w-[90%] flex-row items-center justify-center gap-0 bg-[#ff6f61] text-xl transition-all duration-[.5s] ease-in-out">
              <span className="transition-all duration-[.5s] ease-in-out group-hover:translate-x-2">
                get started
              </span>

              <div className="opacity-0 transition-all duration-[.5s] ease-in-out group-hover:translate-x-3 group-hover:opacity-100">
                <GoArrowRight size={30} color="white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default page;
