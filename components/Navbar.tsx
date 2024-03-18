"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MenuLinks } from "@/types/menu-links";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navLinks } from "@/data/links";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav
      className={`flex justify-between items-center py-3 fixed top-0 left-0 bg-white w-full px-[5%] shadow-sm md:shadow-none md:px-[10%] z-50`}
    >
      <Logo />
      <div className="flex items-center gap-2">
        {/* ipad & laptop */}
        <div className={`hidden md:flex items-center gap-4`}>
          {navLinks.map((link: MenuLinks) => {
            const active = pathname === link.href;
            return (
              <Link
                className={` ${
                  active ? "font-semibold text-teal-900" : "font-normal"
                } text-sm hover:scale-105 duration-200 hover:text-teal-800 text-gray-800`}
                key={link.id}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div
          className="hover-icon duration-200 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HiMenu size={25} />
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
        {navLinks.map((link: MenuLinks) => {
          const active = pathname === link.href;
          return (
            <Link
              className={` ${
                active ? "font-semibold text-teal-900" : "font-normal"
              } text-base hover:scale-105 duration-200 hover:text-teal-800 text-gray-800`}
              key={link.id}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
