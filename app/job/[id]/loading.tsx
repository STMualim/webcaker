import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <main className="pt-10 px-[5%] md:px-[8%] lg:px-[10%]">
      <div>
        <div className="flex items-center gap-1">
          <Skeleton className="w-20 h-5" />
        </div>
        <div className="mt-8 lg:w-8/12">
          <Skeleton className="w-80 h-8" />
          <div className="flex gap-3 text-sm mt-2">
            <div className="flex gap-1 items-center">
              <Skeleton className="w-20 h-5" />
              <Skeleton className="w-20 h-5" />
            </div>
          </div>
          <div className="mt-5">
            <Skeleton className="w-24 h-7 mb-1" />
            <Skeleton className="w-36 h-7" />
          </div>
          <div className="mt-5">
            <Skeleton className="w-24 h-7 mb-1" />
            <Skeleton className="w-80 h-20" />
          </div>
          <div className="mt-5">
            <Skeleton className="w-24 h-7 mb-1" />
            <Skeleton className="w-80 h-20" />
          </div>
          <div className="mt-5 flex items-center gap-2">
            <Skeleton className="w-24 h-7" />
            <Skeleton className="w-24 h-7" />
          </div>
          <div className="text-sm mt-8 border-2 p-3">
            <Skeleton className="w-24 h-7 mb-2" />
            <Skeleton className="w-80 h-20" />
          </div>
        </div>
      </div>
    </main>
  );
}
