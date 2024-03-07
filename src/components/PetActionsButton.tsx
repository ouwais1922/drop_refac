"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PetForm from "./PetForm";

type PetActionsProps = {
  children?: React.ReactNode;
  actionType: "edit" | "checkout" | "add";
  handleDeletion?: () => void;
};
const PetActionsButton = ({
  children,
  actionType,
  handleDeletion,
}: PetActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  if (actionType === "checkout")
    return (
      <Button variant="destructive" onClick={handleDeletion}>
        {children}
      </Button>
    );
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(newOpenState) => setIsOpen(newOpenState)}
    >
      <DialogTrigger asChild>
        {actionType === "add" ? (
          <Button size="icon">
            <PlusIcon className="h-14 w-14"></PlusIcon>
          </Button>
        ) : (
          <Button variant="secondary">{children}</Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {
            <DialogTitle className="mb-4">
              {actionType === "add" ? "Add new pet" : "Edit pet"}
            </DialogTitle>
          }
          <PetForm
            actionType={actionType}
            dialogControl={() => setIsOpen(false)}
          ></PetForm>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PetActionsButton;
