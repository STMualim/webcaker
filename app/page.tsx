import Banner from "@/components/Banner";
import Job from "@/components/Job";
import jobs from './../data/jobs'

export default async function Home() {
  return (
    <main className="pt-16">
      <Banner />
      <p className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</p>
      <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
