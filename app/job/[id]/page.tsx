"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import data from "@/data/jobs";
import { IoLocation, IoTime, IoArrowBack } from "react-icons/io5";
import Link from "next/link";

type JobProps = {
  id: number;
  name: string;
  location: string;
  company: string;
  posted: string;
  tags: string[];
  requirement: string[];
  description: string;
};

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<JobProps>();

  useEffect(() => {
    const findedData: any = data.find((data) => data.id === id);
    setJob(findedData);
  }, []);

  return (
    <main className="pt-20">
      <div>
        <Link href="/" className="flex items-center gap-1">
          <IoArrowBack size={25} />
          Back
        </Link>
      </div>
      {job != null ? (
        <div className="mt-2 lg:w-8/12 p-3">
          <h2 className="text-3xl text-gray-900 font-semibold">{job.name}</h2>
          <div className="flex gap-3 text-sm mt-2">
            <div className="flex gap-1 items-center">
              <IoLocation className="text-teal-500" />
              <span>{job.location}</span>
            </div>
            <div className="flex gap-1 items-center">
              <IoTime className="text-teal-500" />
              <span>{job.posted}</span>
            </div>
          </div>
          <div className="flex gap-1 mt-3">
            {job.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-blue-500 rounded-md py-0 px-2 font-medium lg:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm mt-5">
            <h3 className="font-bold mb-1 text-lg">DESCRIPTION JOB :</h3>
            <p className="lg:w-10/12 text-base">{job.description}</p>
          </div>
          <div className="text-sm mt-5">
            <h3 className="font-bold mb-1 text-lg">REQUIREMENT :</h3>
            <ul className="list-disc ms-5 text-base">
              {job.requirement.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            {job.tags.map((tag) => (
              <span className="text-base font-normal" key={tag}>
                #{tag}{" "}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <button className="bg-teal-500 rounded shadow-2xl text-white px-3 py-1 font-bold">
              Lamar Sekarang
            </button>
            <button className="ms-3 border-teal-500 rounded px-3 py-1 font-normal text-teal-500 border-[1px]">
              Simpan
            </button>
          </div>
          <div className="text-sm mt-8 border-2 p-3">
            <h3 className="font-semibold text-lg text-red-500">
              HATI HATI PENIPUAN !!!
            </h3>
            <p className="text-base">
              Hati-hati Jangan berikan detail bank atau kartu kredit kamu saat
              mengirimkan lamaran kerja. <Link href={'#'} className="underline">Pelajari cara melindungi diri kamu</Link>
            </p>
          </div>
        </div>
      ) : (
        <p>Joba tidak ada</p>
      )}
    </main>
  );
};

export default JobDetailPage;
