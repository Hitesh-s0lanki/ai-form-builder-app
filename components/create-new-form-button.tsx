"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { usePromptModal } from "@/hooks/use-prompt-model";

const CreateNewForm = () => {
  const { onOpen } = usePromptModal();
  return (
    <Button onClick={onOpen} className=" flex items-center">
      <Plus className="size-4 mr-2" />
      Create New Form
    </Button>
  );
};

export default CreateNewForm;
