"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Job from "@/components/Job";
import Filter from "@/components/Filter";
import jobs from "../data/jobs";
import Skeleton from "@/components/Skeleton";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("all");

  useEffect(() => {
    setLoading(true);
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
  }, [searchQuery, city]);

  return (
    <main className="pt-16">
      <Banner />
      <Filter
        city={city}
        setCity={setCity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</div>
      {loading ? (
        <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
          {jobsData.length > 0 ? (
            jobsData.map((job: any) => <Job key={job.id} job={job} />)
          ) : (
            <div className="text-center text-gray-600">
              Tidak ada pekerjaan yang ditemukan.
            </div>
          )}
        </div>
      )}
    </main>
  );
}
