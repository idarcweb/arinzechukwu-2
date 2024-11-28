import Page from "../_components/page";
import { projects } from "../../data/index";
import Image from "next/image";
import { TbLocation } from "react-icons/tb";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Page
      id="projects"
      text="You won't mind going through few selected projects of mine."
      px=""
      title="Projects"
    >
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="transition-all duration-700 py-4 min-w-full overflow-hidden flex ">
          {projects.map((project) => (
            <div
              /* md:h-[30rem] md:w-[50vw] */
              className={`md:min-h-[32.5rem] h-[25rem]  flex items-center flex-col justify-center w-full rounded-xl shadow-lg px-6  overflow-hidden transition-all duration-1000 ease-in-out transform  min-w-full`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              key={project.id}
            >
              {/* md:w-[50vw] */}
              <div className="relative flex items-center justify-center w-[80vw] sm:w-[60vw]  md:w-[30vw] px-6 rounded-xl overflow-hidden h-[25vh] .md:h-[25vh] mb-10 transition-all duration-700">
                <div className="relative w-full h-full overflow-hidden  rounded-xl bg-opacity-0 bg-[#1f3428]/40">
                  {/*  <Image fill src="/bg.png" alt="bgimg" /> */}
                  <div
                    className="absolute z-50 top-0 left-52"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(172,219,83,0.3692660550458715) 9%, rgba(247,255,251,0.6651376146788991) 24%); ",
                    }}
                  />
                </div>
                <Image fill src={project.img} alt="cover" />
              </div>
              <h1 className="font-semibold  font-Mont md:text-2xl text-base text-white/70 line-clamp-6 transition-all duration-700">
                {project.title}
              </h1>
              <p
                className="md:text-lg text-white/70 font-Fredoka transition-all duration-700 font-light max-w-96 text-sm line-clamp-2 "
                style={{
                  margin: "1vh 0",
                }}
              >
                {project.des}
              </p>

              <div className="transition-all duration-700 flex items-center justify-between mt-7 mb-3 md:flex-col-reverse">
                <div className="flex justify-start items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-portgray/70 rounded-full bg-portblack w-10 h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" fill />
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="flex justify-center mb-6 transition-all duration-700 md:scale-95 items-center group"
                >
                  <p className="flex md:text-lg font-Fredoka text-sm text-purple text-white/70 group-hover:font-medium transition-all duration-700">
                    Check Live Site
                  </p>
                  <TbLocation
                    className="text-white/70 animate-bounce duration-1000 ms-3"
                    size={24}
                  />
                </a>
              </div>
            </div>
          ))}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black rounded-full shadow-md text-white"
            onClick={handlePrev}
          >
            <ChevronLeft size={32}/>
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black rounded-full shadow-md text-white"
            onClick={handleNext}
          >
               <ChevronRight size={32}/>
          </button>

          <div className="absolute bottom-0 translate-x-[0%] w-full flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ease-in-out duration-1000 ${
                  index === currentIndex ? "bg-liteport" : "bg-gray-300/80"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Projects;
