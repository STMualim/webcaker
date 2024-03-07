"use client";
import React, { Suspense, useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Job from "@/components/Job";
import Filter from "@/components/Filter";
import jobs from "../data/jobs";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobsData, setJobsData] = useState([]);
  const jobsPerPage = 9;
  const totalPages = Math.ceil(jobsData.length / jobsPerPage);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const endIdx = currentPage * jobsPerPage;

  useEffect(() => {
    let timeoutId: any;
    timeoutId = setTimeout(() => {
      const filteredJobs: any = jobs.filter((job) =>
        job.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setJobsData(filteredJobs);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleChangePage = (newPage: any) => {
    // Redirect to new page with updated search params
    window.location.href = `/?page=${newPage}`;
  };

  const renderPagination = () => {
    const pages = [];
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    return (
      <div className="flex justify-center mt-5">
        {currentPage > 1 && (
          <button
            className="mx-2 px-3 py-1 border border-gray-300 rounded-md"
            onClick={() => handleChangePage(currentPage - 1)}
          >
            Prev
          </button>
        )}
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 px-3 py-1 border border-gray-300 rounded-md ${
              currentPage === pageNumber ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleChangePage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="mx-2 px-3 py-1 border border-gray-300 rounded-md"
            onClick={() => handleChangePage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    );
  };

  const SkeletonLoading = () => {
    return (
      <div className="animate-pulse bg-gray-200 p-4 rounded-md">
        <div className="h-14 bg-gray-300 rounded w-4/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 mt-2 bg-gray-300 rounded w-2/4"></div>
        <div className="h-4 mt-2 bg-gray-300 rounded w-1/4"></div>
      </div>
    );
  };

  return (
    <main className="pt-16">
      {currentPage > 1 ? null : <Banner />}
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</div>
      <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
        {jobsData.length === 0 ? (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        ) : (
          jobsData
            .slice(startIdx, endIdx)
            .map((job: any) => <Job key={job.id} job={job} />)
        )}
      </div>
      {renderPagination()}
    </main>
  );
}
