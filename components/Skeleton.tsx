import React from "react";

export default function Skeleton() {
  return (
    <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="animate-pulse bg-gray-200 p-4 rounded-md mb-2">
          <div className="h-14 bg-gray-300 rounded w-4/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 mt-2 bg-gray-300 rounded w-2/4"></div>
          <div className="h-4 mt-2 bg-gray-300 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
