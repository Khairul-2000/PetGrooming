"use client";

import React, { useState } from "react";

type accordianProps = {
  title: string;
  description: string;
};

const Accordian = ({ title, description }: accordianProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="w-[800px] rounded-2xl bg-white p-10">
      <button
        className="flex w-full items-center justify-between"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span>{title}</span>
        {/* {accordionOpen ? (
          <span onClick={() => setAccordionOpen(!accordionOpen)}>-</span>
        ) : (
          <span onClick={() => setAccordionOpen(!accordionOpen)}>+</span>
        )} */}
        <svg
          className="ml-8 shrink-0 fill-indigo-500"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-[.5s] ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">{description}</div>
      </div>
    </div>
  );
};

export default Accordian;
