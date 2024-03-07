import React from "react";

export default function Skeleton() {
  return (
    <div className="animate-pulse bg-gray-200 p-4 rounded-md mb-2">
      <div className="h-14 bg-gray-300 rounded w-4/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 mt-2 bg-gray-300 rounded w-2/4"></div>
      <div className="h-4 mt-2 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
}
