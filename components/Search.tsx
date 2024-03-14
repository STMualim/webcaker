"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholders: string;
};

export default function Search({ placeholders }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mt-2 mb-3 lg:w-6/12">
      <div className="border-2 flex p-2 items-center rounded-md">
        <input
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full text-base border-none outline-none"
          type="text"
          placeholder="Cari ..."
        />
        <IoSearch className="cursor-pointer" size={25} />
      </div>
    </div>
  );
}
