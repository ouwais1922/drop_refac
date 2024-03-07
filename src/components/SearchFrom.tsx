"use client";
import { usePetContext } from "@/context/PetContext";
import React from "react";

const SearchFrom = () => {
  const { searchQuery, handleSearch } = usePetContext();

  return (
    <form className="w-full h-full ">
      <input
        type="search"
        className="w-full h-full bg-white/20 outline-none focus:bg-white/50 hover:bg-white/50 px-5 placeholder:text-white/50"
        placeholder="Search for pets ..."
        value={searchQuery}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchFrom;
