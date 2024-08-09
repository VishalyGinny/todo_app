"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TaskInputProps {
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  setTasks: React.Dispatch<React.SetStateAction<any>>;
}

const TaskInput = ({ tasks, setTasks }: TaskInputProps) => {
  const [title, setTitle] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (title !== "") {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: title,
          completed: false,
        },
      ]);
      setTitle(""); // Reset the input field after adding the task
    }
  };

  // Event handler for keydown events
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or page reload
      addTask();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        value={title}
        placeholder="Add a new task..."
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="rounded-full flex-1 bg-white text-black"
      />
      <Button onClick={addTask}>Add</Button>
    </div>
  );
};

export default TaskInput;
