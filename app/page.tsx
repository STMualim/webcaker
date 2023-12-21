import Banner from "@/components/Banner";
import Job from "@/components/Job";

export default async function Home() {
  return (
    <main>
      <Banner />
      <p className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</p>
      <div className="md:grid-cols-2 md:grid lg:grid-cols-3 md:gap-4">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </main>
  );
}
