import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard = ({ image }) => {
  return (
    <div className="mx-auto flex max-w-[1000px] flex-row items-center justify-between space-x-16 rounded-xl bg-[#f5f5f5] p-8">
      <div>
        <Image
          src={image.image}
          alt="team member"
          width={600}
          height={600}
          className="rounded-2xl"
        />
      </div>
      <div>
        <h1 className="mb-5">{`${image.text}`}</h1>
        <p className="mb-8">
          Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
          adipiscing dolor urna a orci. Vestibulum turpis sem, aliquet eget,
          lobortis pellentesque.
        </p>
        <Link href="/team/emma-reed">Read more</Link>
      </div>
    </div>
  );
};

export default TeamCard;
