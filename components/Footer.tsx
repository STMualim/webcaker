import Link from "next/link";
import React from "react";
import { navLinks } from "@/data/links";
import { NavLink } from "@/app/definitions";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-200 my-5 py-4 flex flex-col">
      <Logo />
      <div className="grid grid-rows-4 lg:w-max grid-cols-1 mt-2">
        {navLinks.map((link: NavLink) => (
          <Link
            key={link.id} 
            className="text-sm text-gray-700 mb-1 ps-1 w-max hover-link"
            href={"/"}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 ps-1">
        Copyright © 2023 Caker ( Cari Kerja ).
      </p>
    </div>
  );
}
