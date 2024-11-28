"use client";
import {
/*   Cog,
 */  Contact2,
  Copyright,
  File,
  Home,
  LinkedinIcon,
  LucideIcon,
  LucideMessageCircleReply,
  Mail,
  ProjectorIcon,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();

  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`relative group cursor-pointer flex items-center transition-all duration-500 ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-3"
        }
         rounded-lg mb-2 gap-3 transition-colors duration-500 
      }`}
      >
        <div
          className={`absolute w-2 h-2 rounded-full group-hover:block bg-liteport transition-all duration-1000 ${
            isActive
              ? "block bg-port w-1 h-5 animate-pulse left-[80%]"
              : "hidden"
          }`}
        />
        <Icon
          className={`${isActive && "!text-port"} w-6 h-6 !text-thickport`}
        />

        <span
          className={`${isActive && "text-black"}
           text-white/70 font-Mont transition-all duration-500 `}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const sidebarClassNames =
  " w-0 md:w-64 fixed flex flex-col transition-all duration-700 overflow-hidden h-full shadow-md items-center py-6 bg-black/70";

const Sidebar = () => {
  return (
    <div className={`${sidebarClassNames}`}>
      {/*  <Image src="/2116785.jpg" alt="img" className="-z-50 opacity-15" fill /> */}

      <div className="flex items-center">
        <Image src="/a.png" width={32} height={32} alt="logo" />
        <h1 className="font-Fredoka text-2xl my-6 font-extrabold text-port">
          rinzeChukwu
        </h1>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">
        <SidebarLink href="/" icon={Home} label="Home" isCollapsed={false} />
        <SidebarLink
          href="/aboutme"
          icon={User2Icon}
          label="About Me"
          isCollapsed={false}
        />
        <SidebarLink
          href="/resume"
          icon={File}
          label="Resume"
          isCollapsed={false}
        />
        <SidebarLink
          href="/projects"
          icon={ProjectorIcon}
          label="Projects"
          isCollapsed={false}
        />
        <SidebarLink
          href="/testimonials"
          icon={LucideMessageCircleReply}
          label="Testimonials"
          isCollapsed={false}
        />
        <SidebarLink
          href="/contact"
          icon={Contact2}
          label="Contact"
          isCollapsed={false}
        />
      </div>
      {/* footer */}
      <footer className="flex flex-col items-center justify-center">
        <div className="flex gap-3 items-center mb-6">
          <Link href="linkedin.com">
            <LinkedinIcon size={24} className="text-lightport/90" />
          </Link>
          <Link href="linkedin.com">
            <FaXTwitter size={24} className="text-port/50" />
          </Link>
          <Link href="linkedin.com">
            <TbBrandFiverr size={24} className="text-port/50" />
          </Link>

          <Link href="linkedin.com">
            <FaWhatsapp size={24} className="text-port/50" />
          </Link>
          <Link href="linkedin.com">
            <Mail size={24} className="text-port/50" />
          </Link>
        </div>
        <h1 className="font-Fredoka text-portgray flex items-center text-sm pb-2">
          <Copyright size={12} />
          {new Date().getUTCFullYear().toString()} arinzewebdev
        </h1>
      </footer>
    </div>
  );
};
import { TbBrandFiverr } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
export default Sidebar;
