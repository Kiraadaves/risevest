"use client";

import Image from "next/image";
import useMediaQuery from "./helpers/useMediaQuery";

const desktopInvest = [
  {
    heading: "Invest your money in dollars",
    ptext:
      "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
    img: "/images/asset1.png",
    link: "Start Investing Now",
  },
  {
    heading: "Choose what's best for you",
    ptext:
      "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.",
    img: "/images/asset2.png",
    link: "Start Investing Now",
  },
  {
    heading: "Set goals and reach them",
    ptext:
      "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.",
    img: "/images/asset3.png",
    link: "Start Investing Now",
  },
  {
    heading: "We remember so you dont have to",
    ptext:
      "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.",
    img: "/images/asset4.png",
    link: "Start Investing Now",
  },
];

const mobileInvest = [
  {
    heading: "Superior Performance",
    ptext:
      "Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. ",
    img: "/images/assetmob1.png",
    link: "",
  },
  {
    heading: "Performance",
    ptext:
      "No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you.",
    img: "/images/assetmob2.png",
    link: "",
  },
  {
    heading: "Optimization",
    ptext:
      "Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or",
    img: "/images/assetmob3.png",
    link: "",
  },
];

const Invest = () => {
  const isMdScreen = useMediaQuery();
  const dataToRender = isMdScreen ? mobileInvest : desktopInvest;
  return (
    <section className="md:px-20">
      {dataToRender.map((assets, index) => (
        <div
          key={index}
          className={`flex flex-col items-center md:flex-row md:justify-between md:gap-40 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <Image
            alt={assets.img}
            width={500}
            height={500}
            priority
            src={assets.img}
            className=""
          />{" "}
          <div className="content px-8 md:px-0">
            <h1 className={`text-[#2D2D2D] text-xl md:text-[32px] font-semibold ${isMdScreen ? " text-center" : ""}  `}>
              {assets.heading}
            </h1>
            <p className={`text-[#4A5050] text-base mt-4 text-balance md:font-medium ${isMdScreen ? " text-center" : ""}  `}>
              {assets.ptext}
            </p>
            {!isMdScreen && <a href="#">{assets.link}</a>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Invest;
