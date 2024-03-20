import React from "react";
import JobCard from "./JobCard";
import { getJobs } from "@/utils/getJobs";
import { Job } from "@/types/job";

type JobsListProps = {
  currentPage: number;
  query?: string;
};

export async function getData({ currentPage, query }: JobsListProps) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/jobs?page=${currentPage}&query=${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error("something error");
  }
}

export default async function JobsList({ currentPage, query }: JobsListProps) {
  console.log(query);
  const datas = await getData({ currentPage, query });
  if (datas.length === 0) {
    return <p>Job Not Found!</p>;
  }
  return (
    <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4">
      {datas.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
