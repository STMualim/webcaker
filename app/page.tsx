import Banner from "@/components/Banner";
import Job from "@/components/Job";

export default async function Home() {
  return (
    <main>
      <Banner />
      <p className="text-xl lg:mt-3">Pekerjaan Terbaru</p>
      <div className="lg:grid lg:grid-cols-3 lg:gap-2">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </main>
  );
}
