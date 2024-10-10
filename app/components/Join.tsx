"use client";
import React from "react";
import useMediaQuery from "./helpers/useMediaQuery";
import Image from "next/image";

const Join = () => {
  const isMdScreen = useMediaQuery();

  return (
    <section>
      <div className={`flex ${isMdScreen ? "flex-col" : ""}`}>
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
                  surrounds you with others who can help you along your
                  financial <br />
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
      </div>
      <div className={`flex ${isMdScreen ? "flex-col" : ""}`}></div>
    </section>
  );
};

export default Join;
