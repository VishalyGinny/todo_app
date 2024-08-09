"use client";  
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TaskInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Add a new task..."
        className="rounded-full flex-1 bg-white text-black"
      />
      <Button>Add</Button>
    </div>
  );
};

export default TaskInput;
