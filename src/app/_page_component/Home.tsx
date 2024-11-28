import { CopyrightIcon} from "lucide-react";
import { TextGenerateEffect } from "../_components/ui/TextGenerateEffect";
import {PiMouseScrollFill } from "react-icons/pi";

const HomePage = () => {
  return (
    <>
      <div id="home" className="relative h-screen z-0 pointer-events-none ">
        <div className="relative h-full w-full  flex flex-col justify-center items-center my-auto text-white/70 inset-0 px-6 md:px-0 bg-black/70  font-Mont font-medium ">
          <h6 className="text-lg md:text-xl lg:2xl tracking-wider">
            <TextGenerateEffect text="Hello, I'm" />
          </h6>
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl transition-all duration-500 pt-3 pb-6 font-Fredoka font-bold tracking-wider text-gradient text-nowrap">
            <TextGenerateEffect text="Arinzechukwu" delay={0.08} />
          </h1>
          <h4 className="text-xl md:text-2xl tracking-wide">
            <TextGenerateEffect
              text="  I am a Front-End Developer"
              delay={0.1}
            />
          </h4>
          <PiMouseScrollFill size={32} className="text-liteport absolute left-4 bottom-16"/>
        </div>
        <h1 className="font-Fredoka flex justify-end w-full absolute bottom-6 pr-12 text-liteport/20 items-center text-sm">
          <CopyrightIcon size={12} />
          {new Date().getUTCFullYear().toString()} arinzewebdev
        </h1>
      </div>
    </>
  );
};

export default HomePage;
