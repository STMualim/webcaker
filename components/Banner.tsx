"use server";
import React from "react";
import Image from "next/image";

import banner from "@/assets/banner.webp";
import banner2 from "@/assets/banner2.webp";
import banner3 from "@/assets/banner3.webp";
import { AspectRatio } from "./ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const ImageCorousel = [
  {
    id: "banner1",
    path: banner,
  },
  {
    id: "banner2",
    path: banner2,
  },
  {
    id: "banner3",
    path: banner3,
  },
];

export default async function Banner() {
  return (
    <div className="flex gap-2">
      <div className="lg:w-8/12 w-full">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {ImageCorousel.map((item: any) => (
              <CarouselItem key={item.id}>
                <AspectRatio ratio={16 / 8}>
                  <Image
                    src={item.path}
                    alt="Image"
                    priority
                    className="rounded-md object-cover shadow-md"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
        <CarouselPrevious className="left-3 opacity-50 hover:opacity-100 transition-all duration-200 hover:scale-105" />
        <CarouselNext className="right-3 opacity-50 hover:opacity-100 transition-all duration-200 hover:scale-105" />
        </Carousel>
      </div>
      <div className="w-4/12 hidden md:block">
        <div className="bg-gray-200 h-full rounded-md shadow flex items-center justify-center">
          sponsored
        </div>
      </div>
    </div>
  );
}
