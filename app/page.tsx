'use client'
import React, { Suspense } from "react";
import Banner from "@/components/Banner";
import Skeleton from "@/components/Skeleton";
import Pagination from "@/components/Pagination";
import JobsList from "@/components/JobsList";
import Search from "@/components/Search";

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string | number; query?: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const query = searchParams?.query || ''

  return (
    <main className="pt-16">
      <Search placeholders={query} />
      {searchParams.page || searchParams.query ? "" : <Banner />}
      <div className="text-xl mt-5 font-semibold">Pekerjaan Terbaru 🚀</div>
      <Suspense key={currentPage} fallback={<Skeleton />}>
        <JobsList query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination currentPage={currentPage} />
    </main>
  );
}
