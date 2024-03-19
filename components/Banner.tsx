import React from "react";
import Image from "next/image";

import banner from "@/assets/banner.webp";
import { AspectRatio } from "./ui/aspect-ratio";

export default function Banner() {
  return (
    <div className="flex gap-2">
      <div className="lg:w-8/12 w-full">
        <AspectRatio ratio={16 / 8}>
          <Image src={banner} alt="Image" priority className="rounded-md object-cover shadow-md" />
        </AspectRatio>
      </div>
      <div className="w-4/12 hidden md:block">
        <div className="bg-gray-200 h-full rounded-md shadow flex items-center justify-center">sponsored</div>
      </div>
    </div>
  );
}
