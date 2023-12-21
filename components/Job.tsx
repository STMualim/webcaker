import React from "react";
import { RiVerifiedBadgeFill, RiShareFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";

export default function Job() {
  return (
    <div className="bg-gray-200 px-5 rounded-md mt-2 shadow-lg pt-4 mb-4 md:mb-0">
      <h1 className="text-2xl font-semibold mb-2 text-gray-900 lg:text-xl">
        Frontend Developer
      </h1>
      <span className="text-xs bg-gray-300 rounded-full py-1 px-2 font-light lg:text-[10px]">
        Kontrak
      </span>
      <div className="mt-4 mb-1 flex items-center gap-2 text-gray-700 font-medium">
        <RiVerifiedBadgeFill size={20} color={"#00BFFF"} />
        <h2 className="text-sm lg:text-xs">PT. Indah Banget</h2>
      </div>
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <IoLocation size={20} color={"#4a5568"} />
        <h2 className="text-sm lg:text-xs">Jakarta Selatan</h2>
      </div>
      <div className="mt-4 border-t-2 border-gray-300 flex items-center justify-between py-2">
        <p className="text-sm text-gray-500 lg:text-xs">11 hari lalu</p>
        <div className="hover-icon">
          <RiShareFill color={"#4a5568"} size={20} />
        </div>
      </div>
    </div>
  );
}
