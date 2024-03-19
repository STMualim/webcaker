import jobs from "@/data/jobs";
import { Job } from "@/types/job";

export function getJobById(id: string) {
  const datas: Job | undefined = jobs.find((job) => job.id === id);
  return datas;
}
