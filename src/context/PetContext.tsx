"use client";
import React, { useMemo } from "react";
import { useContext, createContext, useState } from "react";
import { TPet } from "@/types";
type PetContext = {
  children: React.ReactNode;
  data: TPet[];
};

type TTPetContext = {
  petsData: TPet[] | undefined;
  petSelected: string | null;
  handlePetSelection: (id: string) => void;
  petSelectedDataDetails: TPet | undefined;
  petsCounts: number;
  handleSearch: (search: string) => void;
  searchQuery: string;
  handlePetCheckout: (id: string) => void;
  addNewPet: (newPet: Omit<TPet, "id">) => void;
  editHandler: (id: string, editedPet: Omit<TPet, "id">) => void;
};
const PetContext = createContext<TTPetContext | null>(null);
export const PetContextProvider = ({ children, data }: PetContext) => {
  const [petsData, setPetsData] = useState<TPet[] | undefined>(data);
  const [petSelected, setPetSelected] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const petSelectedDataDetails = petsData?.find((p) => p.id === petSelected);
  let petsCounts = 0;
  if (petsData === undefined) {
    petsCounts = 0;
  } else {
    petsCounts = petsData.length;
  }

  const handlePetSelection = (id: string) => {
    setPetSelected(id);
  };
  const handleSearch = (textSearch: string) => {
    setSearchQuery(textSearch);
    setPetsData(() => {
      return petsData?.filter((item) =>
        item.name.toLowerCase().includes(textSearch)
      );
    });
  };

  const handlePetCheckout = async (id: string) => {
    setPetsData(() => {
      return petsData?.filter((item) => item.id !== id);
    });
    setPetSelected(null);
  };

  const addNewPet = (newPet: Omit<TPet, "id">) => {
    setPetsData(() => {
      return [
        ...(petsData ?? []),
        {
          ...newPet,
          id: Math.random().toString(36).substring(7),
        },
      ];
    });
  };

  const editHandler = (id: string, editedPet: Omit<TPet, "id">) => {
    setPetsData(() => {
      return petsData?.map((item) => {
        if (item.id === id) {
          return {
            id: id,
            ...editedPet,
          };
        }
        return item;
      });
    });
  };

  return (
    <PetContext.Provider
      value={{
        editHandler,
        addNewPet,
        handlePetCheckout,
        searchQuery,
        handleSearch,
        petsCounts,
        petSelectedDataDetails,
        petsData,
        petSelected,
        handlePetSelection,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePetContext must be used within a PetContextProvider");
  }
  return context;
};
