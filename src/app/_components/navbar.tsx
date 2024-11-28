"use client";
import Image from "next/image";
import { IconBaseProps } from "react-icons";
/* import { BiFile } from "react-icons/bi"; */
import { BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr";
import { LuMessagesSquare } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    // Function to detect scroll direction
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    }
    console.log(lastScrollY);
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <main className="absolute transition-transform duration-700 top-0 w-full h-full flex justify-center">
      <nav
        className={`fixed top-6 translate-y-0 z-50 py-2 text-white/70 max-w-[520px] md:min-w-[520px] px-8 bg-black flex items-center justify-center gap-1 rounded-br-lg rounded-tr-xl rounded-bl-md font-Mont transition-transform duration-700 ease-out`}
        style={{
          transform: showNavbar ? "translateY(0)" : "translateY(-1000%)",
          transition: "transform .7s ease",
        }}
      >
        <Image
          src="/a.png"
          alt="logo"
          width={36}
          height={36}
          className="absolute top-1 left-0 mr-6 my-1"
        />
        <div className="flex gap-4 items-center">
          <Links href="#" name="Home" />
          <Links href="#about" name="About" />
          <Links href="#projects" name="Projects" />

          <Links href="#resume" name="Resume" />
          <span className="hidden md:flex  gap-4 items-center">
            <Links href="#testimonials" name="Testimonials" />
          </span>
        </div>
      </nav>
      <section
        style={{
          transform: showNavbar ? "translateX(0)" : "translateX(1000%)",
          transition: "transform 1s ease",
        }}
        className="fixed top-56 right-6 z-50"
      >
        <div className="flex flex-col  items-center gap-1">
          <span className="md:hidden flex flex-col gap-1 items-center">
            {/* <SideLinks href="#resume" icon={BiFile} name="Resume" /> */}
            <SideLinks
              href="#testimonials"
              icon={LuMessagesSquare}
              name="Testimonials"
            />
          </span>
          <SideLinks
            href="https://linkedin.com/in/arinzechukwu-chika-72861933a"
            icon={BsLinkedin}
            name=""
          />
          <SideLinks
            href="https://x.com/idarchunter"
            icon={BsTwitterX}
            name=""
          />
          <SideLinks
            href="https://wa.me/2349035252583"
            icon={BsWhatsapp}
            name=""
          />
          <SideLinks
            href="https://github.com/idarcweb"
            icon={SiGithub}
            name=""
          />
        </div>
      </section>
      <footer
        style={{
          transform: showNavbar ? "translateY(0)" : "translateY(100%)",
          transition: "transform 1s ease",
        }}
        className="fixed bottom-0 right-3 z-50"
      >
        <a href="#contact">
          <div className="bg-thickport/80 rounded-tl-lg rounded-tr-xl rounded-bl-2xl w-16 h-16 m-6 grid place-items-center animate-bounce duration-1000 transition-all">
            <GrContactInfo size={32} className="text-liteport/70" />
          </div>
        </a>
      </footer>
    </main>
  );
};

export default Navbar;

type LinksProps = {
  href: string;
  name: string;
};
function Links({ href, name }: LinksProps) {
  return (
    <a href={href}>
      <span className=" text-base hover:text-white/80 font-medium">{name}</span>
    </a>
  );
}

type SideLinksProps = {
  icon: React.ComponentType<IconBaseProps>;
  href: string;
  name: string;
};

function SideLinks({ href, name, icon: Icon }: SideLinksProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-black/90 py-2 w-12 h-12 grid place-items-center gap-2 rounded-lg px-2 transition-all duration-1000"
    >
      <Icon size={24} className="text-liteport/90 group-hover:scale-110" />
      <span
        className={`${
          name.length > 0 && "group-hover:block transition-all duration-1000"
        } text-xs absolute right-5  hidden top-0 font-Mont text-white rounded-l-md font-medium bg-portblack py-1 px-1 `}
      >
        {name}
      </span>
    </a>
  );
}
