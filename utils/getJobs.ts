import jobs from "@/data/jobs";
import { Job } from "@/types/job";

// data per halaman
const PAGE_SIZE = 9;

export function getJobs(page: number, query?: string) {
  let startIndex = (page - 1) * PAGE_SIZE;
  let endIndex = startIndex + PAGE_SIZE; // Menggunakan PAGE_SIZE langsung

  if (query) {
    const filteredData: Job[] = jobs.filter((job: Job) =>
      (job.name + job.location)
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    const datas: Job[] = filteredData.slice(startIndex, endIndex);
    return datas;
  } else {
    const datas: Job[] = jobs.slice(startIndex, endIndex);
    return datas;
  }
}
