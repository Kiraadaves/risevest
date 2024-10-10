"use client";
import Image from "next/image";
import useMediaQuery from "./helpers/useMediaQuery";
import { useEffect, useState } from "react";
import "animate.css";

interface FeedbackItem {
  review: string;
  name: string;
  src: string;
  job: string;
}

interface FeedbackCardProps {
  isMdScreen: boolean;
  item: FeedbackItem;
}

const feedback: FeedbackItem[] = [
  {
    review:
      "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    name: "Lade",
    src: "/images/lade.png",
    job: "UX Researcher",
  },
  {
    review:
      "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    name: "Jesse",
    src: "/images/lade.png",
    job: "UX Researcher",
  },
  {
    review:
      "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
    name: "Raye",
    src: "/images/jesse.png",
    job: "UX Researcher",
  },
];

const Feedback = () => {
  const isMdScreen = useMediaQuery();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");

  useEffect(() => {
    const timer = setInterval(() => {
      if (isMdScreen) {
        setAnimationClass("animate__slideOutLeft");
        setTimeout(() => {
          setCurrentCardIndex((prevIndex) => (prevIndex + 1) % feedback.length);
          setAnimationClass("animate__slideInRight");
        }, 500);
      } else {
        setAnimationClass("animate__slideOutLeft");
        setTimeout(() => {
          setAnimationClass("animate__slideInRight");
        }, 500);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [isMdScreen]);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-[#40BBC3] font-semibold text-[32px] md:text-[40px] md:leading-[48px] leading-[28.8px] text-center">
          {isMdScreen ? (
            <>
              What our customers <br /> are saying
            </>
          ) : (
            <>From The People Who Use Rise</>
          )}
        </h1>
        <p className="text-[#2D2D2D] text-center text-base md:text-lg">
          {isMdScreen ? (
            <>We serve over 80,000 amazing users.</>
          ) : (
            <>
              Our mission at Risevest is to empower more people just like you{" "}
              <br /> to achieve your personal financial goals.
            </>
          )}
        </p>
      </div>
      <div
        className={`flex pb-6 md:pb-0 px-4 md:px-0 ${
          isMdScreen ? "flex-col" : "md:flex-row"
        } justify-between gap-6 animate__animated ${animationClass} hide-overflow`}
      >
        {isMdScreen ? (
          <FeedbackCard
            key={feedback[currentCardIndex].name}
            item={feedback[currentCardIndex]}
            isMdScreen={isMdScreen}
          />
        ) : (
          feedback.map((item) => (
            <FeedbackCard key={item.name} item={item} isMdScreen={isMdScreen} />
          ))
        )}
      </div>
    </section>
  );
};

const FeedbackCard = ({ item, isMdScreen }: FeedbackCardProps) => (
  <div className="card-div bg-[#ffffff] w-full md:w-[409px] border border-solid border-[#ecfefe] rounded-[10px] p-6 shadow-customLg flex flex-col md:gap-20 gap-10">
    <p className="text-center md:text-left text-base text-[#4A5050]">
      {item.review}
    </p>
    <div className="flex flex-col md:flex-row items-center gap-4">
      <Image alt="profile" width={50} height={50} src={item.src} />
      {isMdScreen ? (
        <div className="flex flex-col items-center">
          <p className="text-[#2D2D2D] font-semibold text-base">{item.name}</p>
          <p className="text-[#4A5050] font-normal">{item.job}</p>
        </div>
      ) : (
        <p className="text-[#2D2D2D] font-semibold text-base">{item.name}</p>
      )}
    </div>
  </div>
);
export default Feedback;
