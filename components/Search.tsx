"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
    <div className="flex w-full max-w-md items-center space-x-2 my-4">
      <Input
        className="outline-none"
        type="text"
        placeholder="Search..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button size="sm">
        <IoSearch size={18} />
      </Button>
    </div>
  );
}
