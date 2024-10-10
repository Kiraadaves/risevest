"use client";
import React from "react";
import useMediaQuery from "./helpers/useMediaQuery";
import Image from "next/image";
import { dmSans } from "../fonts/fonts";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Join = () => {
  const isMdScreen = useMediaQuery();

  return (
    <section className="flex flex-col gap-12 md:px-20">
      <div
        className={`flex w-full ${
          isMdScreen
            ? "flex-col items-center gap-8"
            : "flex-row justify-between"
        }`}
      >
        <div className={`md:order-last`}>
          <Image
            src={"/images/joinpeople-large.jpg"}
            alt="people"
            width={300}
            height={300}
            priority
            quality={100}
            className="md:w-[432px] md:h-[386px]"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <h1
            className={`text-center md:text-left text-[#2D2D2D] font-semibold text-[32px] md:text-[40px] leading-[28.8px]`}
          >
            Join The Rise {isMdScreen && <br />} Community
          </h1>
          <p className="text-[#4A5050]">
            {isMdScreen ? (
              "If you want to go far, go together."
            ) : (
              <>
                If you want to go far, go together. Our Telegram community
                <br />
                surrounds you with others who can help you along your financial{" "}
                <br />
                journey with tips, support, advice, and learning. It&apos;s
                completely <br />
                free and open to new and seasoned investors.
              </>
            )}
          </p>
          <div className="flex justify-center md:justify-normal">
            <button className="bg-[#A0DDE2] px-[10px] py-4 text-[#2D2D2D] font-semibold text-base rounded-[5px] w-[218px] ">
              Join our Community
            </button>
          </div>
        </div>
      </div>

      <div
        className={`flex w-full bg-[#ECFEFE] rounded-[50px] md:pr-28 md:pl-8 md:pt-10 pt-12 ${
          isMdScreen
            ? "flex-col items-center gap-8"
            : "flex-row justify-between"
        }`}
      >
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <h3
            className={`${dmSans.className} text-center md:text-left text-[#07969E] text-base font-medium`}
          >
            Download The Rise App
          </h3>
          <h1
            className={`text-center md:text-left text-[#2D2D2D] font-semibold text-[32px] md:text-[40px] leading-[28.8px]`}
          >
            Join The Rise {isMdScreen && <br />} Community
          </h1>
          <p
            className={`${dmSans.className} font-medium text-[#4A5050] text-center md:text-left`}
          >
            Dollar investments that help you grow.
          </p>
          <div className="flex gap-6">
            <button className="bg-[#2d2d2d] flex items-center justify-center gap-2 px-1 py-2 text-[#ffffff] font-semibold text-base rounded-[5px] w-[144px] ">
              <FaApple className="w-8 h-8" />
              <p className="text-left flex flex-col font-normal">
                <span className="text-[10px]"> Download on the</span>
                <span className="text-[13px]">App Store</span>
              </p>
            </button>
            <button className="bg-[#2d2d2d] flex items-center justify-center gap-2 px-1 py-2 text-[#ffffff] font-semibold text-base rounded-[5px] w-[144px] ">
              <FaGooglePlay className="w-6 h-6" />
              <p className="text-left flex flex-col font-normal">
                <span className="text-[10px]"> Download on the</span>
                <span className="text-[13px]">App Store</span>
              </p>
            </button>
          </div>
        </div>
        <div
          className={`md:h-[399.58px] md:w-[208.88px] bg-[#ffffff] rounded-t-[30px] pt-4 px-4`}
        >
          <Image
            src={
              isMdScreen ? "/images/phone-mob.png" : "/images/phone-desk.png"
            }
            alt="phone"
            width={200}
            height={200}
            priority
            quality={100}
            className="w-[179px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Join;
