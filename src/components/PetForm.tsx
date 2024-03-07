"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { petFormSchema } from "@/lib/validators";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { usePetContext } from "@/context/PetContext";

type PetFormProps = {
  actionType: "edit" | "add";
  dialogControl?: () => void;
};
const PetForm = ({ actionType, dialogControl }: PetFormProps) => {
  const { addNewPet, petSelected, petsData, editHandler } = usePetContext();
  console.log(petSelected);
  const form = useForm<z.infer<typeof petFormSchema>>({
    resolver: zodResolver(petFormSchema),
    defaultValues: (() => {
      if (actionType === "edit" && petsData) {
        const selectedPet = petsData.find((pet) => pet.id === petSelected);
        return {
          name: selectedPet?.name ?? "",
          ownerName: selectedPet?.ownerName ?? "",
          imageUrl: selectedPet?.imageUrl ?? "",
          age: selectedPet?.age ?? "",
          notes: selectedPet?.notes ?? "",
        };
      }
      return {
        name: "",
        ownerName: "",
        imageUrl: "",
        age: "",
        notes: "",
      };
    })(),
  });

  const onSubmit = (data: z.infer<typeof petFormSchema>) => {
    if (actionType === "add") {
      addNewPet(data);
      form.reset();
    }
    if (actionType === "edit") {
      editHandler(petSelected ?? "", data);
    }
    dialogControl && dialogControl();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Pet name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ownerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Owner Name</FormLabel>
              <FormControl>
                <Input placeholder="Owner name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="Pet age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your Pet notes here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          {actionType === "add" ? (
            <Button type="submit" className="fle">
              Add New
            </Button>
          ) : (
            <Button type="submit" className="fle">
              Edit
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default PetForm;
