"use client";
import React from "react";
import Image from "next/image";
import Pet from "../../public/pet.jpeg";
import { TPet } from "@/types";
import { usePetContext } from "@/context/PetContext";
import { cn } from "@/lib/utils";

const PetList = () => {
  const { petSelected, petsData, handlePetSelection } = usePetContext();
  return (
    <ul className="bg-white border-b border-black/[0.08]">
      {petsData?.map((p) => (
        <li key={p.id}>
          <button
            onClick={() => handlePetSelection(p.id)}
            className={cn(
              "flex items-center gap-4 px-5 h-[70px] w-full cursor-pointer hover:bg-[#EFF1F2] transition text-base",
              {
                "bg-[#EFF1F2] ": petSelected === p.id,
              }
            )}
          >
            <Image
              src={Pet}
              alt="Pet"
              width={45}
              height={45}
              className="rounded-full w-[45px] h-[45px] object-cover"
            />
            <h3 className="font-semibold">{p.name} </h3>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PetList;
// className="flex items-center gap-4 px-5 h-[70px] w-full cursor-pointer hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition text-base"
