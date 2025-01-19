import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
      <h1> This Page is under development</h1>
      <Link href="/" className="flex flex-row items-center gap-2 text-2xl">
        Go Back Home Page
        <GoArrowRight size={30} />
      </Link>
    </div>
  );
};

export default NotFoundPage;
