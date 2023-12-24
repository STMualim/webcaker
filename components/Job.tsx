import React from "react";
import { RiVerifiedBadgeFill, RiShareFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";

export default function Job({ job }: { job: any }) {
  return (
    <Link href={'/'} className="bg-gray-200 hover:bg-gray-100 duration-150 px-5 rounded-md mt-2 block shadow-lg pt-4 mb-4 md:mb-0">
      <h1 className="text-2xl font-semibold mb-2 text-gray-900 lg:text-xl">
        {job.name}
      </h1>
      <div className="flex gap-1">
        {job.tags.map((tag: string) => (
          <span key={tag} className="text-xs bg-gray-300 rounded-full py-1 px-2 font-light lg:text-[10px]">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 mb-1 flex items-center gap-2 text-gray-700 font-medium">
        <RiVerifiedBadgeFill size={20} color={"#00BFFF"} />
        <h2 className="text-sm lg:text-xs">{job.company}</h2>
      </div>
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <IoLocation size={20} color={"#4a5568"} />
        <h2 className="text-sm lg:text-xs">{job.location}</h2>
      </div>
      <div className="mt-4 border-t-2 border-gray-300 flex items-center justify-between py-2">
        <p className="text-sm text-gray-500 lg:text-xs">{job.posted}</p>
        <div className="hover-icon">
          <RiShareFill color={"#4a5568"} size={20} />
        </div>
      </div>
    </Link>
  );
}
