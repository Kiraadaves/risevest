"use client";
import React, { useEffect, useState } from "react";
import "animate.css";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { Logo } from "./svg";

const navigation = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "Products",
  },
  {
    id: 0,
    name: "Investment Club",
  },
  {
    id: 0,
    name: "Blog",
  },
  {
    id: 0,
    name: "About Us",
  },
  {
    id: 0,
    name: "FAQs",
  },
];

const NavLink = () => {
  return (
    <>
      {navigation.map((navitem) => (
        <Link
          key={navitem.id}
          href={`#`}
          className={`relative nav-link ${
            navitem.name === "Products" ? "flex item-center  gap-1" : ""
          }  text-[#07969E] hover:font-bold font-normal focus:font-bold text-base`}
        >
          <p>{navitem.name} </p>
          {navitem.name === "Products" && (
            <FaArrowDown className=" w-[10px] h-6" /> // Adjust size and margin
          )}
        </Link>
      ))}
    </>
  );
};

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMdScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMdScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleOpenMobileNav = () => {
    isMdScreen && setMobileNav(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <header className="flex justify-between">
      <div className="animate__animated animate__slideInLeft">
        <Logo />
      </div>
      <nav>
        {isMdScreen && !mobileNav && (
          <div className={``}>
            <button onClick={handleOpenMobileNav} className="text-[#07969E]">
              <GiHamburgerMenu className="w-12 h-7" />
            </button>
          </div>
        )}
        <div className="hidden lg:flex gap-6 items-center animate__animated animate__slideInRight">
          <NavLink />
        </div>
        {mobileNav && isMdScreen && (
          <div className="animate__animated animate__slideInRight w-[45%] absolute z-50 top-4 right-0 bg-[#ffffff] shadow-lg pl-4 pb-4 rounded-lg">
            <div className={`flex justify-end`}>
              <button onClick={handleCloseMobileNav} className="text-[#07969E]">
                <IoMdClose className="w-12 h-9" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <NavLink />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
