import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import cities from "@/data/cities";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"));

export default function Filter({
  searchQuery,
  setSearchQuery,
  setJobsData,
  jobs,
}: {
  searchQuery: string;
  setSearchQuery: any;
  setJobsData: any;
  jobs: any;
}) {
  const handleChange = (value: string) => {
    setSearchQuery(value);
  };

  const [valueCity, setValueCity] = useState("");

  useEffect(() => {
    if (valueCity == "all") {
      setJobsData(jobs);
    } else {
      const filteredData = jobs.filter((job: any) =>
        job.location
          .toLowerCase()
          .includes(valueCity.split("-").join().toLowerCase())
      );
      setJobsData(filteredData);
    }
  }, [valueCity]);

  return (
    <div className="mt-4">
      <div className="border-2 flex p-2 items-center rounded-md">
        <input
          onChange={(e) => handleChange(e.target.value)}
          value={searchQuery}
          className="w-full text-base border-none outline-none"
          type="text"
          placeholder="Cari ..."
        />
        <IoSearch className="cursor-pointer" size={25} />
      </div>
      {/* dropdown 1 */}
      <div className="mt-2">
        <Select
          defaultValue={valueCity}
          onChange={(e: any) => setValueCity(e.value)}
          id="kota"
          className="lg:w-3/12"
          placeholder="Cari Kota"
          options={cities}
        />
      </div>
    </div>
  );
}
