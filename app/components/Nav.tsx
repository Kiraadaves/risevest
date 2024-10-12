"use client";
import React, { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { Logo } from "./svg";

const navigation = [
  { id: 0, name: "Home", href: "#" },
  { id: 1, name: "Products", href: "#", hasDropdown: true },
  { id: 2, name: "Investment Club", href: "#" },
  { id: 3, name: "Blog", href: "#" },
  { id: 4, name: "About Us", href: "#" },
  { id: 5, name: "FAQs", href: "#" },
];

const NavLink = ({ item }: { item: (typeof navigation)[0] }) => (
  <Link
    href={item.href}
    className="nav-link text-[#07969E] hover:font-bold focus:font-bold text-base transition-all duration-300"
  >
    <span className="nav-text relative">
      {item.name}
      {item.hasDropdown && (
        <FaArrowDown className="inline-block ml-1 mb-1 w-4 h-4" />
      )}
    </span>
  </Link>
);

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };

    // Attaching my  event listener
    window.addEventListener("resize", handleResize);

    // Clean up my event listener as my component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex justify-between md:px-24 px-6 z-[9999]">
      <div data-aos="zoom-in-right" className="mt-1 md:mt-0">
        <Logo />
      </div>
      <nav data-aos="zoom-in-left" className="">
        <div className="md:hidden">
          <button
            onClick={() => setMobileNavOpen(true)}
            className="text-[#2D2D2D]"
          >
            <GiHamburgerMenu className="w-8 h-8" />
          </button>
        </div>

        <div className="hidden md:flex gap-6 items-center ">
          {navigation.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
        </div>

        {mobileNavOpen && (
          <div
            data-aos="zoom-out-left"
            style={{ opacity: 1 }}
            className="fixed top-0 right-0 w-64 h-auto max-h-[80vh] bg-white shadow-lg overflow-y-auto"
          >
            <div className="flex justify-end px-4">
              <button
                onClick={() => setMobileNavOpen(false)}
                className="text-[#2D2D2D]"
              >
                <IoMdClose className="w-12 h-9" />
              </button>
            </div>
            <div className="flex flex-col gap-5 p-4">
              {navigation.map((item) => (
                <NavLink key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
