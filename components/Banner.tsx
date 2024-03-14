import React from "react";
import Image from "next/image";

import banner from "@/assets/banner.webp";

export default function Banner() {
  return (
    <div className="lg:flex justify-between gap-4">
      <div className="bg-gray-300 lg:w-8/12 rounded-md h-48 mb-2 lg:h-[400px] overflow-hidden shadow">
        <Image
          priority
          src={banner}
          alt="banner"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="bg-gray-300 hidden md:block lg:w-4/12 rounded-md h-48 mb-2 lg:h-[400px] overflow-hidden shadow">
        Sponsored
      </div>
    </div>
  );
}
