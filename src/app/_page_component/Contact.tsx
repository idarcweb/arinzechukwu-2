"use client";

import { IconBaseProps } from "react-icons";
import Page from "../_components/page";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import Image from "next/image";
import ContactForm from "@/app/_components/ContactForm";

const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = () => {
    const text = "arinzechukwuweb@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleCopyNumber = () => {
    const number = "+234 8125 581 536";
    navigator.clipboard.writeText(number);
    setCopiedPhone(true);
  };

  return (
    <Page id="contact" title="Contact Me" text="Let’s bring your web ideas to life! Whether it’s a custom site or a front-end project, I’m here to help. Get in touch, and let’s create something exciting!" px="px-12">
      <section
        className="transition-all  duration-1000 grid grid-cols-1 md:grid-cols-[2fr_2fr] place-items-center w-full gap-12 overflow-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-1 transition-all duration-500 gap-6 w-full">
          <Card
            handleClick={handleCopyNumber}
            copy
            otherClassNames=""
            bg="bg-lightport/20"
            title="Call Me"
            icon={BiPhoneCall}
            text={copiedPhone ? "+234 8125 581 536" : "+234 8125 581 536"}
          />
          <div
            className={`group cursor-pointer flex shadow-lg items-center text-white/70 font-Mont py-6 px-3 gap-3 w-full bg-black/50 rounded-xl`}
            onClick={handleCopy}
          >
            <div className="border transition-all duration-500 border-dashed border-white/50 p-2 rounded-full overflow-hidden hidden place-items-center md:grid">
              <FiMail size={28} className="text-white/70" />
            </div>
            <div className="flex flex-col relative gap-2 items-start">
              <h1 className="text-lg font-semibold flex">
                E-Mail
                <FiMail size={24} className="my-1 md:hidden block ml-6" />
              </h1>
              <p className="text-sm group-hover:text-lightport/70 text-wrap flex items-center gap-1 font-Fredoka">
                <IoCopyOutline size={24} />
                {copied ? "Email copied" : "Copy My Email"}
              </p>

              <Image
                src="/confetti.gif"
                alt="confetti"
                width={72}
                height={72}
                className={`object-cover absolute transition-all duration-500 md:w-64 ${
                  copied ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
          <Card
            handleClick={() => undefined}
            copy={false}
            otherClassNames="bg-transparent border border-dashed border-darkport"
            bg="bg-liteport/10"
            title="Location"
            text="Kubwa, Abuja, Nigeria"
            icon={FaLocationArrow}
          />
        </div>

        <div className="flex flex-col transition-all duration-500 items-center justify-center w-full">
          <Image src="/Arrow.png" alt="arrow contact" fill className="-z-10"  />
          <h1 className="py-6 text-2xl text-white/70 font-Fredoka">
            Get in touch
          </h1>
          <ContactForm />
        </div>
      </section>
    </Page>
  );
};

export default ContactPage;
type CardsProps = {
  title: string;
  text: string;
  bg: string;
  icon: React.ComponentType<IconBaseProps>;
  otherClassNames: string;
  copy: boolean;
  handleClick: () => void | undefined;
};
const Card = ({
  title,
  text,
  icon: Icon,
  bg,
  otherClassNames,
  copy,
  handleClick,
}: CardsProps) => {
  return (
    <div
      onClick={handleClick}
      className={`${
        bg && bg
      } group flex shadow-lg items-center transition-all duration-500 text-white/70 font-Mont py-6 px-3 gap-3 w-full rounded-xl ${
        copy && "cursor-pointer"
      }`}
    >
      <div
        className={`${otherClassNames}bg-liteport/40 shadow-lg rounded-full overflow-hidden md:grid place-items-center hidden p-2`}
      >
        <Icon size={28} className="text-white/70 text-xl text-center" />
      </div>

      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-lg  md:text-2xl font-semibold flex items-center">
          {title}
          <Icon size={24} className="my-1 md:hidden block ml-6" />
        </h1>
        <p
          className={`${
            copy && "group-hover:text-lightport/70"
          } text-md  text-wrap font-Fredoka`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
