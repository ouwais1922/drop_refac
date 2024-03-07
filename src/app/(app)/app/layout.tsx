import React from "react";
import BackgroundPattern from "@/components/BackgroundPattern";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PetContextProvider } from "@/context/PetContext";
import { TPet } from "@/types";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );
  if (!response.ok) {
    throw new Error("Could not fetch pets");
  }
  const data: TPet[] = await response.json();

  return (
    <>
      <BackgroundPattern></BackgroundPattern>
      <div className="flex flex-col max-w-[1050px] mx-auto px-4 h-screen">
        <Header></Header>
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <Footer></Footer>
      </div>
    </>
  );
};

export default layout;
