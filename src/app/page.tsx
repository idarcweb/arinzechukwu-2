"use client";

import AboutMe from "./_page_component/AboutMe";
import ContactPage from "./_page_component/Contact";
import HomePage from "./_page_component/Home";
import Projects from "./_page_component/Projects";
import ResumeSection from "./_page_component/Resume";
import Navbar from "./_components/navbar";
import Testimonials from "./_page_component/Testimonials";
/* import MouseGradient from "./_components/mouseGradient"; */

export default function Home() {
  return (
    <main className="relative z-50">
      {/*  <MouseGradient /> */}
      <Navbar />
      <HomePage />
      <AboutMe />
      <ResumeSection />
      <Projects />
      <Testimonials />
      <ContactPage />

      {/* <h1 className="font-Fredoka flex justify-end w-full relative md:absolute bottom-0 md:bottom-4 md:pr-12 my-6 text-liteport/20 items-center text-sm">
        <LuCopyright size={12} />
        {new Date().getUTCFullYear().toString()} arinzewebdev
      </h1> */}
    </main>
  );
}
