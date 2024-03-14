import React from "react";
import { RiVerifiedBadgeFill, RiShareFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import Link from "next/link";
import { Job } from "@/app/definitions";
import { formattedCurrency } from "@/utils/formatCurrency";
import { formattedDate } from "@/utils/formattedDate";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="hover:bg-gray-50 duration-150 px-5 border-2 rounded-md mt-2 block shadow-lg pt-4 mb-4 md:mb-0">
      <Link href={`job/${job.id}`}>
        <div className="flex gap-2">
          <div className="w-3/12">
          <div className="w-[60px] h-[60px] rounded-full bg-slate-100 me-3 flex justify-center items-center lg:text-2xl text-xl text-teal-500 font-bold">{job.name.slice(0, 1)}</div>
          </div>
          <div className="w-8/12">
            <h1 className="text-base font-semibold mb-2 line-clamp-2 leading-2 text-gray-900 lg:text-xl">
              {job.name}
            </h1>
            <div className="flex gap-1">
              {job.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-blue-500 rounded-md py-0 px-2 font-medium lg:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 mb-1 flex items-center gap-2 text-gray-700 font-medium">
          <RiVerifiedBadgeFill size={20} color={"#00BFFF"} />
          <h2 className="text-sm">{job.company}</h2>
        </div>
        <div className="flex mb-1 items-center gap-2 text-gray-700 font-medium">
          <IoLocation size={20} color={"#4a5568"} />
          <h2 className="text-sm">{job.location}</h2>
        </div>
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <span className="text-sm">Rp. </span>
          <h2 className="text-sm">{formattedCurrency(job.salary)}</h2>
        </div>
      </Link>
      <div className="mt-4 border-t-2 border-gray-300 flex items-center justify-between py-2">
        <p className="text-sm text-gray-500 lg:text-xs">{formattedDate(job.posted)}</p>
        <div className="hover-icon">
          <RiShareFill color={"#4a5568"} size={20} />
        </div>
      </div>
    </div>
  );
}
