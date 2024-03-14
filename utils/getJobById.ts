import { Job } from "@/app/definitions";
import jobs from "@/data/jobs";

export function getJobById(id: string) {
  return new Promise<Job | undefined>((resolve) => {
    setTimeout(() => {
      const datas: Job | undefined = jobs.find((job) => job.id === id);
      resolve(datas);
    }, 200);
  });
}
