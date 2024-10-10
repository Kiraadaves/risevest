import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { DarkLogo } from "./svg";
import { dmSans } from "../fonts/fonts";

const footerElements = [
  {
    title: "Rise",
    links: [
      "About Us",
      "Careers",
      "FAQs",
      "Contact Info",
      "Press",
      "Rise Impact",
    ],
  },
  {
    title: "Explore",
    links: ["Investment Club", "Blog"],
    hasIcon: true,
  },
  {
    title: "Products",
    links: ["Rise App", "Wallets", "Asset Classes"],
  },
  {
    title: "Contact Us",
    links: [
      "0818 714 7405",
      "hello@rise.capital",
      "Newsletter",
      "Instagram",
      "Twitter",
    ],
    hasIcon: true,
  },
];

const Footer = () => {
  return (
    <section className="md:px-24">
      <footer className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
        {footerElements.map((section) => (
          <div key={section.title} className="flex flex-col gap-8">
            {section.title === "Rise" ? (
              <div className="mt-[0.39rem]">
                <DarkLogo />
              </div>
            ) : (
              <h4 className="text-[#2D2D2D]  font-semibold text-base">
                {section.title}
              </h4>
            )}

            <ul className="flex flex-col gap-[15px]">
              {section.links.map((link) => (
                <Link key={link} href={`#`} className={`${dmSans.className}`}>
                  {link}
                  {section.hasIcon && (
                    <MdArrowOutward className="inline-block ml-1 mb-1 w-4 h-5" />
                  )}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </section>
  );
};

export default Footer;
