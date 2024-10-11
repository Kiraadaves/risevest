"use client";
import Image from "next/image";
import React from "react";

const Regulation = () => {
  return (
    <section className="bg-white relative h-[331px] md:h-[372px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt="eclipse top left"
          src="/images/eclipse-211.png"
          width={500}
          height={500}
          className="absolute md:top-[-73px] md:left-[-129px] top-[7px] left-[-73px]"
        />
        <Image
          alt="eclipse bottom left"
          src="/images/eclipse-210.png"
          width={500}
          height={500}
          className="absolute md:left-[-72px] md:top-[29px] top-[59px] left-[-62px] "
        />
        <Image
          alt="eclipse top right"
          src="/images/eclipse-206.png"
          width={500}
          height={500}
          className="absolute md:top-[-140px] md:left-[1046px] top-[-22px] left-[116px]"
        />
        <Image
          alt="eclipse bottom right"
          src="/images/eclipse-209.png"
          width={500}
          height={500}
          className="absolute md:top-[130px] md:left-[1020px] top-[64px] left-[180px]"
        />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-semibold text-3xl md:text-[40px] text-[32px] text-[#2D2D2D] mb-4">
            How we are Regulated
          </h1>
          <p className="text-[#4a5050] font-medium text-[13px] leading-6 md:text-base">
            <span className="block md:hidden">
              Rise is registered and regulated both in the US and in <br />
              Nigeria. The founder is registered as an investment <br />
              adviser with the US SEC. The Nigerian SEC regulates <br />
              Rise's Nigerian investments through a trusteeship <br />
              agreement with ARM Trustees, who oversees <br />
              investments on behalf of the users. And a registered <br />
              investment subsidiary holds all users' assets <br />
              regulated in the US.
            </span>
            <span className="hidden md:block">
              Rise is registered and regulated both in the US and in Nigeria.<br />
              Our team is made up of US registered investment advisers, our <br />
              Nigerian users are covered by our SEC licensed trustees, ARM <br />
              Trustees and all our assets are held with regulated third parties,
              in <br /> all relevant jurisdictions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Regulation;
