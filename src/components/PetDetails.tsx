"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePetContext } from "@/context/PetContext";
import NotYet from "./NotYet";
import { TPet } from "@/types";
import PetActionsButton from "./PetActionsButton";
const PetDetails = () => {
  const { petSelectedDataDetails, handlePetCheckout, petSelected } =
    usePetContext();

  return (
    <section className="flex flex-col h-full w-full">
      {!petSelectedDataDetails ? (
        <NotYet />
      ) : (
        <>
          <TopBar pets={petSelectedDataDetails} />
          <Details pets={petSelectedDataDetails} />
          <Description pets={petSelectedDataDetails} />
        </>
      )}
    </section>
  );
};
type petsProps = {
  pets: TPet | undefined;
};
const TopBar = ({ pets }: petsProps) => {
  const { petSelectedDataDetails, handlePetCheckout, petSelected } =
    usePetContext();
  return (
    <div className="flex justify-between items-center bg-white gap-4 py-5 px-8 border-b border-black/[0.08]">
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-red-300"></div>
        <h2 className="text-3xl font-semibold">{pets?.name}</h2>
      </div>
      <div className="space-x-3">
        <PetActionsButton actionType="edit">Edit</PetActionsButton>
        <PetActionsButton
          actionType="checkout"
          handleDeletion={() => handlePetCheckout(petSelected as string)}
        >
          Checkout
        </PetActionsButton>
      </div>
    </div>
  );
};
const Details = ({ pets }: petsProps) => {
  return (
    <div className="flex justify-around py-10 px-5 text-center">
      <div>
        <h2 className="uppercase font-medium text-zinc-700">owner name</h2>
        <p className="text-zinc-800 mt-1">{pets?.ownerName}</p>
      </div>
      <div>
        <h2 className="uppercase font-medium text-zinc-700">age</h2>
        <p className="text-zinc-800 mt-1">{pets?.age}</p>
      </div>
    </div>
  );
};
const Description = ({ pets }: petsProps) => {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mx-12 mb-12">
      <p>{pets?.notes}</p>
    </section>
  );
};
export default PetDetails;
