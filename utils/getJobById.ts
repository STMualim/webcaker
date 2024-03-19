
import jobs from "@/data/jobs";
import { Job } from "@/types/job";

export function getJobById(id: string) {
  return new Promise<Job | undefined>((resolve) => {
    setTimeout(() => {
      const datas: Job | undefined = jobs.find((job) => job.id === id);
      resolve(datas);
    }, 200);
  });
}
