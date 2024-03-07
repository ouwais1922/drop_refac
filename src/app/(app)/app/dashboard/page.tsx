import React from "react";
import Stats from "@/components/stats";
import Branding from "@/components/Branding";
import SearchFrom from "@/components/SearchFrom";
import PetList from "@/components/PetList";
import PetDetails from "@/components/PetDetails";
import ContentBlock from "@/components/ContentBlock";
import PetActionsButton from "@/components/PetActionsButton";
const page = () => {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding></Branding>
        <Stats></Stats>
      </div>
      <div className="grid grid-rows-[45px_300px_500px] md:grid-cols-3 md:grid-rows-[45px_1fr] gap-4 md:h-[600px]">
        <div className="md:row-start-1 md:row-span-1  md:col-start-1 col-span-1  rounded-full">
          <SearchFrom></SearchFrom>
        </div>
        <div className="relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <ContentBlock>
            <PetList></PetList>
            <div className="absolute right-6 bottom-3">
              <PetActionsButton actionType="add"></PetActionsButton>
            </div>
          </ContentBlock>
        </div>
        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-2">
          <ContentBlock>
            <PetDetails></PetDetails>
          </ContentBlock>
        </div>
      </div>
    </main>
  );
};

export default page;
