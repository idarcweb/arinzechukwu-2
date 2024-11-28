import Image from "next/image";
import React from "react";
import Button from "../_components/button";
import JourneyCard from "../_components/journeyCard";
import Interests from "../_components/interests";
import { BsAwardFill, BsCheck, BsHeadphones } from "react-icons/bs";
import { BiBook, BiFootball } from "react-icons/bi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import Grid from "../_components/Grid";
import { PiBird, PiCurrencyDollarSimpleDuotone } from "react-icons/pi";

const AboutMe = () => {
  return (
    <main
      id="about"
      className="flex flex-col px-12 gap-12 py-12 items-center justify-center  duration-500 transition-all relative bg-black/70"
    >
      <section className="flex flex-col gap-6 items-center font-Mont text-white/70 duration-500 transition-all">
        <h1 className="font-Fredoka font-bold text-center tracking-wide text-2xl sm:text-3xl flex items-center text-nowrap">
          About
          <span className=" pl-3 text-liteport tracking-wide duration-500 transition-all">
            ArinzeChukwu .D. Chika
          </span>
        </h1>
        <p className="text-center leading-relaxed text-md md:text-lg tracking-wide pt-2 duration-500 transition-all md:px-12 lg:px-24">
          <span className="text-4xl animate-spin">👋</span> Hi, I’m Arinzechukwu
          Chika, While my formal education provided me with a broad technical
            background, my true passion lies in designing captivating and
            user-friendly interfaces.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] font-Mont w-full text-white/70 gap-6 transition-all duration-500 py-6">
        <div className="relative bg-liteport/5 max-w-[70%] sm:max-w-[40%] md:max-w-full lg:max-w-[90%] min-h-[215.75px] md:min-h-[224px] border-2  rounded-xl border-portblack/70 md:mr-8 lg:mr-24">
          <Image
            fill
            src="/Dalle.png"
            alt="arinzechukwu's image"
            className="flex object-fill shrink-0 grow-0 "
          />
        </div>

        <div className="flex flex-col w-full">
          <h6 className="pb-6 font-semibold text-2xl capitalize">
            Front-End web developer
          </h6>
          
          <p className="mt-2 md:text-base font-Mont text-base leading-relaxed  tracking-wide">
            I’m passionate about designing captivating, user-friendly interfaces
            and building JavaScript applications that deliver smooth, optimized
            experiences.
            <ul className="font-Mont list-disc pb-6">
              <h1 className="md:text-2xl tracking-wide py-6 font-semibold text-xl capitalize">
                💻 What I Bring:
              </h1>
              <List text="A blend of engineering knowledge and creative frontend skills." />
              <List text="I love bringing ideas to life by creating responsive, accessible, and visually appealing websites." />
              <List text="A growth mindset, with a commitment to continuous learning." />
            </ul>
          </p>
          <div className="flex items-center gap-6">
            <a href="#resume">
              <Button
                className="py-3 relative hover:text-white/70"
                outline={false}
              >
                Resume
              </Button>
            </a>
            <a href="#contact">
              <Button className="py-3" outline={true}>
                Hire
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-[2fr_1.5fr] gap-10 duration-500 transition-all py-6">
        <div className="flex flex-col gap-6 w-full duration-500 transition-all">
          <h1 className="text-white/70 font-semibold font-Mont tracking-wide">
            My Journey
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <JourneyCard
              id={1}
              text="Experience"
              journey="2 year job"
              icon={BsAwardFill}
              bg={true}
            />
            <JourneyCard
              id={2}
              text="completed"
              journey="12+ Projects"
              icon={BsCheck}
              bg={false}
            />
            <JourneyCard
              id={3}
              text="available"
              journey="Freelance"
              icon={PiBird}
              bg={false}
            />
            <JourneyCard
              id={4}
              text="24/7"
              journey="Support"
              icon={LiaHandsHelpingSolid}
              bg={false}
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-6 w-full duration-500 transition-all">
          <h1 className="text-white/70 font-semibold font-Mont tracking-wide ">
            My Interests
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <Interests text="Music" icon={BsHeadphones} />
            <Interests text="Football" icon={BiFootball} />
            <Interests text="Crypto" icon={PiCurrencyDollarSimpleDuotone} />
            <Interests text="Read" icon={BiBook} />
          </div>
        </div>
      </section>
      <Grid />
    </main>
  );
};

export default AboutMe;

function List({ text }: { text: string }) {
  return <li className="ml-12 font-Mont text-white/70">{text}</li>;
}
