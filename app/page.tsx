'use client'
import React, { useEffect, useState } from "react";
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
  const [city, setCity] = useState("all");

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      filterJobs();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, city, currentPage]);

  const filterJobs = () => {
    let filteredJobs: any = jobs;

    // Filter berdasarkan kota
    if (city !== "all") {
      filteredJobs = filteredJobs.filter((job: any) =>
        job.location.toLowerCase().includes(city.toLowerCase())
      );
    }

    // Filter berdasarkan pencarian
    filteredJobs = filteredJobs.filter((job: any) =>
      job.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setJobsData(filteredJobs);
    setLoading(false);
  };

  const handleChangePage = (newPage: number) => {
    setLoading(true);
    window.history.pushState({}, "", `/?page=${newPage}`);
  };

  return (
    <main className="pt-16">
      {currentPage === 1 && <Banner />}
      <Filter
        city={city}
        setCity={setCity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</div>
      {loading ? (
        <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
          {Array.from({ length: jobsPerPage }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
          {jobsData.length > 0 ? (
            jobsData.slice(startIdx, endIdx).map((job: any) => (
              <Job key={job.id} job={job} />
            ))
          ) : (
            <div className="text-center text-gray-600">Tidak ada pekerjaan yang ditemukan.</div>
          )}
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
