import React, { Suspense } from "react";
import Banner from "@/components/Banner";
import Skeleton from "@/components/Skeleton";
import JobsList from "@/components/JobsList";
import Search from "@/components/Search";
import PaginationComp from "@/components/PaginationComp";
import JobsByType from "@/components/JobsByType";
import JobsBySalary from "@/components/JobBySalary";


export default function Home({
  searchParams,
}: {
  searchParams: { page?: string | number; query?: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const query = searchParams?.query || "";

  return (
    <main className="pt-16">
      {searchParams.page || searchParams.query ? "" : <Banner />}
      <div className="lg:flex gap-3">
        <Search />
        <JobsByType />
        <JobsBySalary />
      </div>
      <Suspense key={query + currentPage}  fallback={<Skeleton />}>
        <JobsList query={query} currentPage={currentPage} />
      </Suspense>
      <PaginationComp currentPage={currentPage} />
    </main>
  );
}
