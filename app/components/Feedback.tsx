"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "animate.css";

interface FeedbackItem {
  review: string;
  name: string;
  src: string;
  job: string;
}

interface FeedbackCardProps {
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
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationClass("animate__slideOutLeft");
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % feedback.length);
        setAnimationClass("animate__slideInRight");
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col gap-10">
      <div className=" md:hidden flex flex-col justify-center items-center gap-2">
        <h1 className="text-[#40BBC3]  font-semibold text-[32px]  leading-[28.8px] text-center">
          What our customers <br /> are saying
        </h1>
        <p className="text-[#2D2D2D] text-center text-base md:text-lg">
          We serve over 80,000 amazing users.
        </p>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center gap-2">
        <h1 className="text-[#40BBC3]  font-semibold  md:text-[40px] md:leading-[48px] leading-[28.8px] text-center">
          From The People Who Use Rise
        </h1>
        <p className="text-[#2D2D2D] text-center text-base md:text-lg">
          Our mission at Risevest is to empower more people just like you <br />{" "}
          to achieve your personal financial goals.
        </p>
      </div>

      <div className={`md:hidden flex pb-6 px-4 flex-col justify-between gap-6 animate__animated ${animationClass} hide-overflow`}>
        <FeedbackCard
          key={feedback[currentCardIndex].name}
          item={feedback[currentCardIndex]}
        />
      </div>

      <div className={`hidden md:flex flex-row justify-between gap-6 animate__animated ${animationClass} hide-overflow`}>
        {feedback.map((item) => (
          <FeedbackCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};
const FeedbackCard = ({ item }: FeedbackCardProps) => (
  <div className="card-div bg-[#ffffff] w-full border border-solid border-[#ecfefe] rounded-[10px] p-6 shadow-customLg flex flex-col justify-between md:h-[300px] gap-10">
    <p className="text-center md:text-left text-base text-[#4A5050] flex-grow">
      {item.review}
    </p>
    <div className="imgdiv flex flex-col md:flex-row items-center gap-4 mt-auto">
      <Image alt="profile" width={50} height={50} src={item.src} />

      <div className="flex flex-col  md:hidden items-center">
        <p className="text-[#2D2D2D] font-semibold text-base">{item.name}</p>
        <p className="text-[#4A5050] font-normal">{item.job}</p>
      </div>

      <p className="text-[#2D2D2D] hidden md:block font-semibold text-base">
        {item.name}
      </p>
    </div>
  </div>
);
export default Feedback;
