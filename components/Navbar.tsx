'use client'
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiMoon } from "react-icons/hi";
import {IoMdClose} from 'react-icons/io'

export default function Navbar() {

    const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="py-3 mb-5 border-b-[1px] border-teal-300 flex items-center justify-between ">
      <Link className="text-xl font-bold text-teal-900 hover:scale-105 duration-200" href={"/"}>
        <span className="text-3xl text-teal-400">C</span>ari{" "}
        <span className="text-3xl text-teal-400">K</span>erja
      </Link>

      <div className="flex items-center gap-2">
        <div className="hover-icon">
          <HiMoon size={28} />
        </div>
        <div className="hover-icon duration-200" onClick={() => setOpen(!open)}>
            {open ? <IoMdClose size={28} /> : <HiMenu size={28} />}
        </div>
      </div>
    </nav>
  );
}
