import React, { Suspense } from "react";
import Banner from "@/components/Banner";
import Skeleton from "@/components/Skeleton";
import JobsList from "@/components/JobsList";
import Search from "@/components/Search";
import PaginationComp from "@/components/PaginationComp";
import JobsByType from "@/components/JobsByType";
import JobsBySalary from "@/components/JobBySalary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string | number; query?: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const query = searchParams?.query || "";

  return (
    <div className={`px-[5%] md:px-[8%] lg:px-[10%]`}>
      <Navbar />
      <main className="pt-20">
      {searchParams.page || searchParams.query ? "" : <Banner />}
      <div className="mt-2 flex flex-col gap-2 md:flex-row lg:mt-5">
        <Search />
        <JobsByType />
        <JobsBySalary />
      </div>
      <Suspense key={query + currentPage}  fallback={<Skeleton />}>
        <JobsList query={query} currentPage={currentPage} />
      </Suspense>
      <PaginationComp currentPage={currentPage} />
      <Footer />
    </main>
    </div>
  );
}
