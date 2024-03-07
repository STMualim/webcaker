import React from "react";

type PaginateProps = {
    currentPage: number
    totalPages: number
    onPageChange: (number: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange } : PaginateProps) {
  const renderPagination = () => {
    const pages = [];
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    return (
      <div className="flex justify-center mt-5">
        {currentPage > 1 && (
          <button
            className="mx-2 px-3 py-1 border border-gray-300 rounded-md"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Prev
          </button>
        )}
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 px-3 py-1 border border-gray-300 rounded-md ${
              currentPage === pageNumber ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="mx-2 px-3 py-1 border border-gray-300 rounded-md"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    );
  };

  return renderPagination();
}
