import Image from "next/image";
import React from "react";
import image3 from "@/app/images/images-3.jpg";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fredoka",
});

const page = () => {
  return (
    <div className={`${fredoka.variable} mx-[100px] font-serif text-[#3f2e1f]`}>
      <div className="flex items-start">
        <div className="my-[100px] flex w-[40vw] items-center justify-center">
          <Image
            src={image3}
            alt="Emma Reed"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div className="my-[100px] w-[70vw]">
          <p className="mb-[200px]">about specialist</p>

          <div className="flex flex-col items-start justify-center space-y-8">
            <h1 className="text-7xl">Ryan Hale</h1>
            <p className="max-w-[800px] text-2xl">
              Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
              non adipiscing dolor urna a orci. Vestibulum turpis sem, aliquet
              eget, lobortis pellentesque.
            </p>
            <p className="text-xl font-normal">
              With years of experience in the pet care industry, this team
              member brings a deep passion for animals and an unwavering
              commitment to providing a stress-free, enjoyable grooming
              experience for every pet. Their approach is rooted in a genuine
              love for animals, ensuring that each pet feels comfortable, safe,
              and relaxed throughout the grooming process. Specializing in
              customized grooming techniques, they take the time to assess the
              unique needs of every pet, from their coat type to their
              temperament, ensuring a tailored and gentle experience for even
              the most anxious animals.
            </p>
            <h2 className="text-4xl">Attention to detail is my motto</h2>
            <p>
              Known for their exceptional attention to detail, this team member
              is dedicated to delivering top-notch grooming results that leave
              pets not only looking great but also feeling their best. Their
              calming presence and careful handling make them a favorite among
              pet owners and pets alike. Whether it’s a simple nail trim, a full
              grooming session, or a specialized treatment, they approach every
              task with the same level of care and professionalism.
            </p>

            <p className="w-[50vw] rounded-xl bg-[#fdcb6e] p-10 py-[150x] text-center font-bold">
              Their goal is to create a positive, loving environment where pets
              can enjoy the grooming experience, and their dedication to
              excellence shines through in every service they provide.
            </p>

            <p>
              In addition to their technical skills, they are always eager to
              educate pet owners on best practices for maintaining their pet’s
              grooming between visits. Their friendly demeanor, combined with
              their expertise, makes them a trusted resource for advice on
              everything from brushing techniques to skin and coat care. Whether
              working with puppies experiencing their first groom or senior pets
              needing extra care, this team member consistently goes the extra
              mile to ensure every pet leaves happy, healthy, and eager to
              return.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
