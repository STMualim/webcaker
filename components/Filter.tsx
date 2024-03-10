import { IoSearch } from "react-icons/io5";
import cities from "@/data/cities";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"));

export default function Filter({
  city,
  setCity,
  searchQuery,
  setSearchQuery,
}: {
  city: string;
  setCity: any;
  searchQuery: string;
  setSearchQuery: any;
}) {
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleCityChange = (value: string) => {
    setCity(value);
  };


  return (
    <div className="mt-4">
      <div className="border-2 flex p-2 items-center rounded-md">
        <input
          onChange={(e) => handleSearchChange(e.target.value)}
          value={searchQuery}
          className="w-full text-base border-none outline-none"
          type="text"
          placeholder="Cari ..."
        />
        <IoSearch className="cursor-pointer" size={25} />
      </div>
      {/* dropdown untuk memilih kota */}
      <div className="mt-2">
        <Select
          defaultValue={"all"}
          onChange={(e: any) => handleCityChange(e.value)}
          id="kota"
          className="lg:w-3/12"
          placeholder="Pilih Kota"
          options={cities}
        />
      </div>
    </div>
  );
}
