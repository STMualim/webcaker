import React from "react";
import JobCard from "./JobCard";
import { getJobs } from "@/utils/getJobs";
import { Job } from "@/types/job";

type JobsListProps = {
  currentPage: number;
  query?: string;
};

export default async function JobsList({ currentPage, query }: JobsListProps) {
  const datas = await getJobs(currentPage, query);
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
