import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const assets = [
  {
    img: "/images/stocks.png",
    name: "Stocks",
    text: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
  },
  {
    img: "/images/estate.png",
    name: "Real Estate",
    text: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
  },
  {
    img: "/images/income.png",
    name: "Fixed Income",
    text: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
  },
];

const Asset = () => {
  return (
    <section className="md:px-24 px-8 flex flex-col gap-12">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[#2D2D2D] leading-[28.8px] md:leading-[48px] md:text-[40px]  text-[32px] font-semibold text-center">
          Asset Classes
        </h1>
        <p className="text-[#2D2D2D] text-center text-lg md:text-base font-normal leading-6">
          It's your money, <br className="md:hidden block" /> choose where you
          invest it
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {assets.map((asset) => (
          <div
            key={asset.name}
            className=" main relative border-2 border-solid border-[#919FB533] rounded-[5px] flex flex-col justify-between gap-20 pb-6"
          >
            <div
              className={`color h-[200px] ${
                asset.name === "Stocks" && "bg-[#FFF4F0]"
              } ${asset.name === "Real Estate" && "bg-[#F6F2FF]"} ${
                asset.name === "Fixed Income" && "bg-[#ECFEFE]"
              }`}
            ></div>
            <div className="bg-[#ffffff] rounded-full p-4 w-28 md:w-28 absolute left-1/2 transform -translate-x-1/2 top-36">
              <Image alt={asset.img} height={100} width={100} src={asset.img} />
            </div>
            <div className="px-8">
              <h2 className="font-semibold text-2xl text-center">
                {asset.name}
              </h2>
              <p className="flex-grow mt-3 text-[#4A5050] text-base leading-6 text-center text-balance">
                {asset.text}
              </p>
              <p className="text-[#4A5050] mt-3  text-base leading-6 text-center">
                <span className="text-slate-400">Historical returns:</span> 14%
                per annum
                <br />
                <span className="text-slate-400">Risk Level:</span> Medium
              </p>
            </div>
            <div className="text-[#07969E] flex justify-center items-center gap-2 mt-auto">
              <Link href={`#`} className="">
                Learn how Real Estate works
              </Link>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-between items-center w-full max-w-7xl mx-auto px-8">
        <div className="flex-shrink-0">
          <Image
            alt="asset-image"
            width={500}
            height={500}
            src="/images/assetimg.png"
          />
        </div>
        <div className="text-div flex flex-col justify-center gap-8 ml-auto max-w-lg">
          <h2 className="font-medium text-lg leading-[30px] text-[#2d2d2d]">
            The Rise App
          </h2>
          <h1 className="text-[40px] text-[#2d2d2d] font-semibold leading-[48px]">
            Save for your <span className="text-indigo-500">future</span>
          </h1>
          <p className="text-base text-balance text-[#2d2d2d] font-normal">
            With Rise, you achieve your financial goals faster. Save for school,
            your home, vacations, your children’s future and more.
          </p>

          <div className="flex">
            <button className=" py-4 px-[10px] w-[160px] text-base font-bold text-[#ffffff] rounded-[5px] bg-[#07969E]">
              Start Saving
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asset;
