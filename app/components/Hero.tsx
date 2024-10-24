"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Ball = ({ className }: { className: string }) => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    const animate = () => {
      if (!ball) return;

      x += dx;
      y += dy;

      if (x < 0 || x > window.innerWidth) dx = -dx;
      if (y < 0 || y > window.innerHeight) dy = -dy;

      ball.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div ref={ballRef} className={`absolute ${className}`} />;
};

const Hero = () => {
  return (
    <section className="relative md:px-24 px-6 min-h-screen overflow-hidden flex flex-col gap-8">
      <Ball className="z-30 w-[10px] h-[10px] bg-[#40BBC3] rounded-full opacity-30 md:opacity-100" />
      <Ball className="z-30 w-8 h-8 bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100" />
      <Ball className="z-30 w-[56px] h-[56px] bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100" />
      <Ball className="z-30 w-[56px] h-[56px] bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100" />
      <Ball className="z-30 w-8 h-8 bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100" />
      <Ball className="z-30 w-[56px] h-[56px] bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100" />

      <div className="relative w-full flex flex-col gap-12 md:gap-0 md:flex-row md:justify-between items-center md:pr-16">
        <div className="flex flex-col gap-6 z-40">
          <h1 className="text-[#07969e] font-semibold text-[32px] leading-[36px] md:text-[56px] md:leading-[60px] text-center md:text-left relative">
            Dollar investments <br /> that help you grow
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline mt-[-10px] md:mt-[-20px] ml-1"
            >
              <circle cx="5" cy="5" r="5" fill="#07969e" />
            </svg>
          </h1>
          <p className="hidden md:block text-[#4a5050] text-base font-medium">
            We put your money in high quality assets that help <br /> you build
            wealth and achieve your financial goals.
          </p>
          <p className="md:hidden block text-[#4a5050] text-base font-normal text-center">
            Your personal wealth manager. Get <br /> started with a minimum of
            $10 and
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <button className="flex items-center bg-[#2d2d2d] text-white md:px-4 py-3 w-[144px] pl-3 rounded-lg hover:bg-[#07969e] transition-colors duration-300 gap-2">
              <FaApple className="w-6 h-6" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-light">Download on the</span>
                <span className="text-[13px] font-semibold leading-tight">
                  App Store
                </span>
              </div>
            </button>
            <button className="flex items-center bg-[#2d2d2d] text-white md:px-4 py-3 w-[144px] pl-3 rounded-lg hover:bg-[#07969e] transition-colors duration-300 gap-2">
              <FaGooglePlay className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-light">Download on the</span>
                <span className="text-[13px] font-semibold leading-tight">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="z-40">
          <Image
            alt="Rise app interface on mobile"
            src="/images/phonemob.png"
            width={300}
            height={300}
            className="md:hidden block"
            data-aos="flip-up"
          />
          <Image
            alt="Rise app interface on desktop"
            src="/images/phonedesk.png"
            width={300}
            height={300}
            className="hidden md:block"
            data-aos="flip-up"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:justify-center z-40">
        <p className="md:hidden block text-[#7B8DA8] font-bold text-lg">
          We are supported by
        </p>
        <div className="flex gap-3 items-center bg-white">
          <Image
            alt="ARM logo"
            src="/images/arm.png"
            width={100}
            height={50}
            className="w-16 h-8 md:w-24 md:h-12"
          />
          <Image
            alt="Western Union logo"
            src="/images/wu.png"
            width={150}
            height={200}
            className="w-20 md:w-24 h-12"
          />
          <Image
            alt="Techstars logo"
            src="/images/tech.png"
            width={150}
            height={200}
            className="w-16 h-8 md:w-24 md:h-12"
          />
          <Image
            alt="Y Combinator logo"
            src="/images/good.png"
            width={50}
            height={50}
            className="w-12 h-8 md:w-16 md:h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
