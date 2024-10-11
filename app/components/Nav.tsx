"use client";
import React, { useState } from "react";

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

  return (
    <header className="flex justify-between md:px-24 px-6 z-[9999]">
      <div className="animate__animated animate__slideInLeft">
        <Logo />
      </div>
      <nav className="animate__animated animate__slideInRight">
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
          <div className="animate__animated animate__slideInRight fixed top-0 right-0 w-64 h-auto max-h-[80vh] bg-white shadow-lg  overflow-y-auto">
            <div className="flex justify-end p-4">
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
