"use client";
import React, { ReactComponentElement } from "react";
import jobs from "@/data/jobs";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

type ButtonProps = { currentPage: number; handlePage: any };

export default function Pagination({ currentPage }: { currentPage: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handlePage(page: number) {
    if (page === 1) {
      return `${pathname}`;
    } else {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      return `${pathname}?${params.toString()}`;
    }
  }

  return (
    <div className="mt-3 text-center flex items-center gap-2 justify-center">
      <PrevButton handlePage={handlePage} currentPage={currentPage} />
      <BeforeCurrentButton handlePage={handlePage} currentPage={currentPage} />
      <button className="bg-teal-900 text-white py-1 px-3 rounded">
        {currentPage}
      </button>
      <AfterCurrentButton handlePage={handlePage} currentPage={currentPage} />
      <NextButton handlePage={handlePage} currentPage={currentPage} />
    </div>
  );
}

function PrevButton({ currentPage, handlePage }: ButtonProps) {
  return (
    <>
      {currentPage === 1 ? (
        <button disabled className="bg-teal-200 text-white py-1 px-3 rounded">
          Prev
        </button>
      ) : (
        <Link
          href={handlePage(currentPage - 1)}
          className="bg-teal-500 text-white py-1 px-3 rounded"
        >
          Prev
        </Link>
      )}
    </>
  );
}

function NextButton({ currentPage, handlePage }: ButtonProps) {
  return (
    <>
      {currentPage * 9 > jobs.length ? (
        <Link
          href={handlePage(currentPage + 1)}
          className="bg-teal-200 text-white py-1 px-3 rounded"
        >
          Next
        </Link>
      ) : (
        <Link
          href={handlePage(currentPage + 1)}
          className="bg-teal-500 text-white py-1 px-3 rounded"
        >
          Next
        </Link>
      )}
    </>
  );
}

function AfterCurrentButton({ currentPage, handlePage }: ButtonProps) {
  return (
    <>
      {currentPage * 9 > jobs.length - 2 ? null : (
        <>
          <Link
            href={handlePage(currentPage + 1)}
            className="bg-teal-500 text-white py-1 px-3 rounded"
          >
            {currentPage + 1}
          </Link>
          <Link
            href={handlePage(currentPage + 2)}
            className="bg-teal-500 text-white py-1 px-3 rounded"
          >
            {currentPage + 2}
          </Link>
        </>
      )}
    </>
  );
}

function BeforeCurrentButton({
  currentPage,
  handlePage,
}: {
  currentPage: number;
  handlePage: any;
}) {
  return (
    <>
      {currentPage === 1 ? null : (
        <Link
          href={handlePage(currentPage - 1)}
          className="bg-teal-500 text-white py-1 px-3 rounded"
        >
          {currentPage - 1}
        </Link>
      )}
    </>
  );
}
