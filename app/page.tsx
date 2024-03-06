"use client";
import Banner from "@/components/Banner";
import Job from "@/components/Job";
import jobs from "./../data/jobs";
import Filter from "@/components/Filter";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const filteredJobs: any = jobs.filter((job) =>
      job.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setJobsData(filteredJobs);
  }, [searchQuery]);

  return (
    <main className="pt-16">
      {page ? null : <Banner />}
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery === "" ? (
        <div>
          <p className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</p>
          <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4">
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        </div>
      ) : (
        <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4">
          {jobsData.length ? (
            jobsData.map((job: any) => <Job key={job.id} job={job} />)
          ) : (
            <p className="text-red-400 w-full">Maaf tapi pekerjaan yang anda cari tidak di temukan!</p>
          )}
        </div>
      )}
    </main>
  );
}
