"use client";
import { usePetContext } from "@/context/PetContext";
import React from "react";

const Stats = () => {
  const { petsCounts } = usePetContext();
  return (
    <section className="text-center">
      <p className="text-2xl font-bold leading-6">{petsCounts}</p>
      <p className="opacity-80">current guests</p>
    </section>
  );
};

export default Stats;
