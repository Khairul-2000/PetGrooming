import React from "react";
import About from "../_componets/About";
import Accordian from "../_componets/Accordian";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import Transition from "../_componets/Transition";
import Link from "next/link";

const page = () => {
  return (
    <Transition>
      <div>
        {/* contact form */}
        <div className="flex flex-row items-center justify-evenly bg-[#fffbf1] p-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl">Let's talk</h1>
              <p className="text-2xl">
                Ask as about our services, products or book a slot for your pet
                grooming.
              </p>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center gap-6">
                <div className="flex h-[80px] w-[80px] items-center justify-center self-center rounded-full bg-[#fdcb6e]">
                  <RiMailSendLine size={25} />
                </div>
                <div>
                  <span className="text-3xl">Our email</span>
                  <p className="text-xl">hi@petgrooming.com</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <div className="flex h-[80px] w-[80px] items-center justify-center self-center rounded-full bg-[#fdcb6e]">
                  <FiPhone size={25} />
                </div>
                <div>
                  <span className="text-3xl">Phone us</span>
                  <p className="text-xl">+1 600 000 000</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <div className="flex h-[80px] w-[80px] items-center justify-center self-center rounded-full bg-[#fdcb6e]">
                  <LuMapPin size={25} />
                </div>
                <div>
                  <span className="text-3xl">Find us</span>
                  <p className="text-xl">Open Google Maps</p>
                </div>
              </div>
            </div>
            <hr className="w-full" />
            <div className="flex flex-row items-center gap-10">
              <FaInstagram size={25} />
              <PiYoutubeLogoLight size={25} />
              <PiTelegramLogo size={25} />
              <CiLinkedin size={25} />
            </div>
          </div>
          <div className="z-30 w-[600px] rounded-2xl bg-[#ffffff] p-10 shadow-lg transition-all duration-[0.8s] ease-in-out hover:shadow-black">
            <form action="" className="flex flex-col justify-center space-y-5">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="rounded-lg border border-gray-500 bg-transparent p-4"
                placeholder="Your name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="rounded-lg border border-gray-500 bg-transparent p-4"
                placeholder="Email"
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols={30}
                rows={10}
                className="rounded-lg border border-gray-500 bg-transparent placeholder:p-4"
                placeholder="I want to colaborate..."
              />
            </form>
          </div>
        </div>

        <div className="flex h-[90vh] flex-row items-center justify-around p-10">
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
        <About />
        <header className="relative mb-12 flex h-screen items-center justify-center overflow-hidden">
          <div className="relative z-30 flex flex-col items-center justify-center space-y-4 rounded-xl bg-opacity-50 p-5 text-2xl text-white">
            <div className="flex flex-row items-center gap-4">
              <LuMapPin size={20} />
              <p>offering services in California</p>
            </div>
            <h1 className="text-7xl">Let’s take care of your buddy</h1>
            <Link href="/services">
              <button className="btn">see all services</button>
            </Link>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 min-h-full w-auto min-w-full max-w-none"
          >
            <source
              src="https://videos.pexels.com/video-files/19159089/19159089-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </header>
      </div>
    </Transition>
  );
};

export default page;
