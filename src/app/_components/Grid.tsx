import Image from "next/image";
import GridGlobe from "./gridGlobe";
import { leftSkills, rightSkills } from "@/data";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Button from "./button";
import Link from "next/link";

const Grid: React.FC = () => {
  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-[2fr_1.5fr] w-full gap-10 duration-500 transition-all pt-6">
        <Bento
          text=""
          spareImg=""
          desc=" I prioritize collaboration with clients, promoting open communication."
          img="/greenteam.png"
          id={1}
        />
        <div className="flex flex-col gap-10 ">
          <Bento
            text=""
            spareImg=""
            desc="I'm very flexible with time zone communications"
            img=""
            id={2}
          />
          <Bento
            text="I constantly try to improve."
            spareImg=""
            desc="My tech stack"
            img=""
            id={3}
          />
        </div>
      </section>
      <section className="grid grid-rows-1 md:grid-cols-[1.5fr_2fr] w-full gap-10 duration-500 transition-all overflow-x-hidden">
        <Bento
          spareImg="md:hidden relative left-0 sm:left-24"
          desc="Currently building a workflow NextJs library"
          text="The Inside Scoop"
          img="/b5.svg"
          id={4}
        />

        <div className="flex flex-col gap-10 ">
          <Bento
            text=""
            spareImg=""
            desc="Tech enthusiast with a passion for development."
            img="/bike.gif"
            id={5}
          />
          <Bento
            text=""
            spareImg=""
            desc="Do you want to work together?"
            img=""
            id={6}
          />
        </div>
        <Bento
          spareImg="hidden md:block"
          desc="Currently building a workflow NextJs library"
          text="The Inside Scoop"
          img="/b5.svg"
          id={4}
        />
      </section>
    </>
  );
};

export default Grid;

type BentoProps = {
  id: number;
  desc: string;
  img: string;
  spareImg: string;
  text: string;
};

const Bento: React.FC<BentoProps> = ({ id, desc, img, text, spareImg }) => {
  return (
    <div
      className={`${(id == 1 || id == 4) && " text-white/90"} ${
        id > 1 || id == 4
          ? "xs:max-w-[60vw] sm:max-w-[50vw] md:max-w-full"
          : "w-full"
      } min-h-[200px] relative w-full duration-500 transition-all border border-portblack h-full overflow-hidden rounded-xl hover:translate-x-1 ${spareImg} ${
        id === 4 && "sm:min-w-full"
      }`}
    >
      {img && (
        <Image
          src={img}
          alt={img}
          fill
          objectFit="cover"
          className="flex opacity-25 bg-portblack/15 w-full h-full"
        />
      )}
      {id === 2 && <GridGlobe />}
      {id === 3 && (
        <div className=" mt-4 flex gap-8 md:gap-2 w-fit absolute -right-3 sm:-right-3 md:-right-3 lg:-right-4 transition-all duration-500">
          {/* tech stack lists */}
          <div className="flex flex-col my-6 md:my-0 gap-4 md:scale-75">
            {leftSkills.map((item, i) => (
              <span
                key={i}
                className="  py-2 px-3 text-lg  opacity-50 
                    md:opacity-100 rounded-md text-center bg-portblack font-Mont text-liteport/50"
              >
                {item}
              </span>
            ))}
            <span className=" py-2 px-3  rounded-lg text-center bg-darkport"></span>
          </div>

          <div className="flex flex-col gap-6 md:scale-90">
            <div className="md:py-5 md:px-3 py-4 px-3  rounded-lg text-center bg-darkport/70" />
            {rightSkills.map((item, i) => (
              <span
                key={i}
                className=" py-2 px-3 text-lg md:text-base opacity-50 
                    md:opacity-100 rounded-lg text-center bg-darkport/70 text-liteport/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      {id == 6 && <BackgroundGradientAnimation></BackgroundGradientAnimation>}
      <>
        <h1
          className={`${
            id === 1 ? "text-white" : "text-white/70 "
          } z-10 font-Fredoka duration-500 transition-all text-xl lg:text-2xl font-semibold absolute bottom-10 px-6`}
        >
          {text && <h6 className="text-base font-Mont font-thin">{text}</h6>}
          {desc}
          {id == 6 && (
            <Link href="/contact">
              <Button outline className="py-1 mt-3 ml-3 hover:text-white/70">
                Contact Me
              </Button>
            </Link>
          )}
        </h1>
      </>
    </div>
  );
};
