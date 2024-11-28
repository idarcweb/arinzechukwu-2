"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsQuote } from "react-icons/bs";
import StarRating from "../starRating";
import { testimonials } from "@/data";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const timeout = isHovered ? 7000 : 5000;
    if (!isHovered) {
      intervalId = setInterval(
        () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
        timeout
      );
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const slideStyle = {
    transition: `${
      isHovered
        ? "transform 7000ms ease-in-out"
        : "transform 5000ms ease-in-out"
    }`,
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div
      className="relative w-full p-6 rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-all duration-700 ease-in-out"
        style={slideStyle}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-full p-8 ">
            <div className=" relative rounded-lg p-6">
              <span className="rounded-full overflow-hidden w-16 h-16 absolute -left-6  top-6 border border-portblack">
                <Image
                  src={testimonial.img}
                  alt="client image"
                  fill
                  className=" opacity-70"
                />
              </span>
              <div className="ml-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h1 className="font-semibold text-lg md:text-xl lg:text-2xl font-Fredoka">
                      {testimonial.name}
                    </h1>
                    <p className="italic text-xs md:text-md text-liteport/70 font-light">
                      {testimonial.title}
                    </p>
                  </div>
                  <div className="pb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>

                <p className="mt-6 duration-500 transition-all text-lg md:text-2xl tracking-wide text-white/50 leading-5 w-full md:w-5/6">
                  <BsQuote className=" md:text-xl lg:text-2xl" />
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
