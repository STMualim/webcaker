"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenu, HiMoon } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  {
    id: 1,
    name: "Contact",
  },
  {
    id: 2,
    name: "Kerja Sama",
  },
  {
    id: 1,
    name: "Donasi",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className={`flex justify-between py-2 fixed top-0 left-0 bg-white w-full px-[5%] shadow-sm md:shadow-none md:px-[10%]`}>
      <Link
        className="text-xl font-bold text-teal-900 hover:scale-105 duration-200"
        href={"/"}
      >
        <span className="text-3xl text-teal-400 lg:text-4xl">C</span>ari{" "}
        <span className="text-3xl text-teal-400 lg:text-4xl">K</span>erja
      </Link>

      <div className="flex items-center gap-2">
        {/* ipad & laptop */}
        <div className={`hidden md:flex items-center gap-4 md:mr-5 pt-2`}>
          {navLinks.map((link) => (
            <Link className="text-base font-medium hover:scale-105 duration-200 hover:text-teal-500" key={link.id} href={"/"}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hover-icon">
          <HiMoon size={28} />
        </div>
        <div
          className="hover-icon duration-200 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HiMenu size={28} />
        </div>
      </div>

      {/* links mobile  */}
      <div
        onClick={() => setOpen(!open)}
        className={`absolute top-0 ${
          open ? "right-0" : "-right-96"
        } bg-gray-900 opacity-50 w-full h-screen z-10 md:hidden duration-200`}
      ></div>
      <div
        className={`absolute top-0 ${
          open ? "right-0" : "-right-96"
        } duration-500 bg-white z-20 w-9/12 p-5 rounded-md h-screen flex flex-col md:hidden`}
      >
        {navLinks.map((link) => (
          <Link
            className="my-2 text-xl font-semibold hover-link"
            key={link.id}
            href={"/"}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
