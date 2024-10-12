import React from "react";
import Hero from "./components/Hero";
import Invest from "./components/Invest";
import Asset from "./components/Asset";
import Regulation from "./components/Regulation";
import Feedback from "./components/Feedback";
import Join from "./components/Join";

export const LandingPage = () => {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <Invest />
      <Asset />
      <Regulation />
      <Feedback />
      <Join />
    </main>
  );
};
