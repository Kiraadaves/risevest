import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="md:px-24 px-8  min-h-screen overflow-hidden flex flex-col gap-8">
      <div className="relative w-full flex flex-col gap-12 md:gap-0 md:flex-row md:justify-between items-center md:pr-16">
        <div data-aos="zoom-in-left" className="absolute z-30  top-20 left-60 w-[10px] h-[10px] bg-[#40BBC3] rounded-full opacity-30 md:opacity-100  " />
        <div data-aos="zoom-in-right" className="absolute z-30  top-8 right-10 w-8 h-8 bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100  " />
        <div data-aos="zoom-in-left" className="absolute z-30  top-12 left-20 w-[56px] h-[56px] bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100  " />
        <div data-aos="zoom-in-left" className="absolute z-30  bottom-20 left-20 w-[56px] h-[56px] bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100  " />
        <div data-aos="zoom-in-right" className="absolute  z-30 bottom-16 right-16 w-8 h-8 bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100  " />
        <div data-aos="zoom-in-right" className="absolute  z-30 bottom-1/4 right-5 w-[56px] h-[56px] bg-[#A0DDE2] rounded-full opacity-30 md:opacity-100  " />

        {/**flex div */}

        <div data-aos="slide-in-left" className="flex flex-col gap-6 z-40">
          <h1 className="text-[#07969e] font-semibold text-[40px] leading-[36px] md:text-[56px] md:leading-[60px] text-center md:text-left">
            Dollar investments <br /> that help you grow
          </h1>
          <p className="hidden md:block text-[#4a5050] text-base font-medium">
            We put your money in high quality assets that help <br /> you build
            wealth and achieve your financial goals.
          </p>
          <p className="md:hidden block text-[#4a5050] text-base font-normal text-center">
            {" "}
            Your personal wealth manager. Get <br /> started with a minimum of
            $10 and
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <button className=" flex items-center bg-[#2d2d2d] text-white px-4 py-3 rounded-lg hover:bg-[#07969e] transition-colors duration-300 gap-2">
              <FaApple className="w-8 h-8" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-light">Download on the</span>
                <span className="text-[13px] font-semibold leading-tight">
                  App Store
                </span>
              </div>
            </button>
            <button className="flex items-center bg-[#2d2d2d] text-white px-4 py-3 rounded-lg hover:bg-[#07969e] transition-colors duration-300 gap-2">
              <FaGooglePlay className="w-6 h-6" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-light">Download on the</span>
                <span className="text-[13px] font-semibold leading-tight">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>
        <div data-aos="zoom-in-right" className="z-40">
          <Image
            alt="eclipse195"
            src="/images/phonemob.png"
            width={300}
            height={300}
            className="md:hidden block"
          />
          <Image
            alt="eclipse195"
            src="/images/phonedesk.png"
            width={300}
            height={300}
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:justify-center">
        <p className="md:hidden block text-[#7B8DA8] font-bold text-lg">
          We are supported by
        </p>
        <div className="flex gap-3 items-center">
          <Image
            alt="support"
            src="/images/arm.png"
            width={100}
            height={50}
            className="h-12"
          />{" "}
          <Image
            alt="support"
            src="/images/wu.png"
            width={150}
            height={200}
            className="h-12"
          />{" "}
          <Image
            alt="support"
            src="/images/tech.png"
            width={150}
            height={200}
            className=" "
          />{" "}
          <Image
            alt="support"
            src="/images/good.png"
            width={50}
            height={50}
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
