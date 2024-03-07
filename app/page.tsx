"use client";
import React, { Suspense, useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Job from "@/components/Job";
import Filter from "@/components/Filter";
import jobs from "../data/jobs";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/Skeleton";
import Pagination from "@/components/Pagination";

export default function Home() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobsData, setJobsData] = useState([]);
  const jobsPerPage = 9;
  const [loading, setLoading] = useState(true);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const endIdx = currentPage * jobsPerPage;

  useEffect(() => {
    setLoading(true);
    let timeoutId: any;
    timeoutId = setTimeout(() => {
      const filteredJobs: any = jobs.filter((job) =>
        job.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setJobsData(filteredJobs);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleChangePage = (newPage: any) => {
    setLoading(true);
    window.location.href = `/?page=${newPage}`;
  };

  return (
    <main className="pt-16">
      {currentPage > 1 ? null : <Banner />}
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</div>
      {loading ? (
        <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
          {Array.from("123456").map((index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
          {searchQuery != ""
            ? jobsData.map((job: any) => <Job key={job.id} job={job} />)
            : jobsData
                .slice(startIdx, endIdx)
                .map((job: any) => <Job key={job.id} job={job} />)}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(jobsData.length / jobsPerPage)}
        onPageChange={handleChangePage}
      />
    </main>
  );
}
