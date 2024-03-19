"use client";
import React from "react";
import jobs from "@/data/jobs";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type ButtonProps = { currentPage: number; handlePage: any };

export default function PaginationComp({
  currentPage,
}: {
  currentPage: number;
}) {
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
    <Pagination className="mt-5">
      <PaginationContent>
        <PrevButton handlePage={handlePage} currentPage={currentPage} />
        <BeforeCurrentButton
          handlePage={handlePage}
          currentPage={currentPage}
        />
        <PaginationItem>
          <PaginationLink isActive href={handlePage(currentPage)}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <AfterCurrentButton handlePage={handlePage} currentPage={currentPage} />
        <NextButton handlePage={handlePage} currentPage={currentPage} />
      </PaginationContent>
    </Pagination>
  );
}

function PrevButton({ currentPage, handlePage }: ButtonProps) {
  return (
    <>
      {currentPage === 1 ? (
        <PaginationItem>
          <PaginationPrevious href={handlePage(currentPage)} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationPrevious href={handlePage(currentPage - 1)} />
        </PaginationItem>
      )}
    </>
  );
}

function NextButton({ currentPage, handlePage }: ButtonProps) {
  return (
    <>
      {currentPage * 9 > jobs.length ? (
        null
      ) : (
        <PaginationNext href={handlePage(currentPage + 1)} />
      )}
    </>
  );
}

function AfterCurrentButton({ currentPage, handlePage }: ButtonProps) {
  return (
    <>
      {currentPage * 9 > jobs.length - 2 ? null : (
        <>
          <PaginationItem>
            <PaginationLink href={handlePage(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={handlePage(currentPage + 2)}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
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
        <PaginationItem>
          <PaginationLink href={handlePage(currentPage - 1)}>
            {currentPage - 1}
          </PaginationLink>
        </PaginationItem>
      )}
    </>
  );
}
