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
  deskripsi: string;
};

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<JobProps>();

  useEffect(() => {
    const findedData = data.find((data) => data.id === Number(id));
    setJob(findedData);
  }, []);

  return <main className="pt-16">
    <div>
        <Link href="/" className="flex items-center gap-1">
            <IoArrowBack size={25} />
            Back
        </Link>
    </div>
    {job != null ? <div className="mt-10 border-2 border-teal-500 rounded w-8/12 p-3">
        <h2 className="text-2xl text-gray-900 font-semibold">{job.name}</h2>
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
        <div className="text-sm mt-5">
            <h3 className="font-semibold mb-1">Lingkup Pekerjaan :</h3>
            <p className="w-10/12">{job.deskripsi}</p>
        </div>
        <div className="mt-3">
        {job.tags.map((tag) => (
            <span className="text-sm" key={tag}>#{tag} </span>
        ))}
        </div>
    </div> : <p>Joba tidak ada</p>}
  </main>;
};

export default JobDetailPage;
