import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-200 my-2 py-4 flex flex-col">
      <Link className="text-xl font-bold text-teal-900 w-max" href={"/"}>
        <span className="text-3xl text-teal-400">C</span>ari{" "}
        <span className="text-3xl text-teal-400">K</span>erja
      </Link>
      <div className="flex flex-col mt-2">
        <Link className="text-sm text-gray-700 mb-1 ps-1 w-max hover-link" href={'/'}>Tentang Kami</Link>
        <Link className="text-sm text-gray-700 mb-1 ps-1 w-max hover-link" href={'/'}>Kerja Sama</Link>
        <Link className="text-sm text-gray-700 mb-1 ps-1 w-max hover-link" href={'/'}>Donasi</Link>
      </div>
      <p className="text-xs text-gray-500 mt-3 ps-1">Copyright © 2023 Caker ( Cari Kerja ).</p>
    </div>
  );
}
