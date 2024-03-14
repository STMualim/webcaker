import { Job } from "@/app/definitions";
import React from "react";
import JobCard from "./JobCard";
import { getJobs } from "@/utils/getJobs";

type JobsListProps = {
  currentPage: number;
  query?: string;
};

export default async function JobsList({ currentPage, query }: JobsListProps) {
  const datas: Job[] = await getJobs(currentPage, query);
  return (
    <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4 mt-4">
      {datas.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
