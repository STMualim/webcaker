import Link from "next/link";
import React from "react";
import { navLinks } from "@/data/links";
import Logo from "./Logo";
import { MenuLinks } from "@/types/menu-links";

export default function Footer() {
  return (
    <div className="border-t-2 dark:border-gray-800 border-gray-300 my-5 py-4 flex flex-col">
      <Logo />
      <div className="grid grid-rows-4 lg:w-max grid-cols-1 mt-2">
        {navLinks.map((link: MenuLinks) => (
          <Link
            key={link.id} 
            className="text-sm text-gray-700 dark:text-slate-100 mb-1 ps-1 w-max hover-link"
            href={"/"}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 ps-1 dark:text-slate-100">
        Copyright © 2023 Caker ( Cari Kerja ).
      </p>
    </div>
  );
}
