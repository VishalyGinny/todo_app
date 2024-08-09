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
  return (
    <div className="flex items-center gap-2">
      <Input
        value={title}
        placeholder="Add a new task..."
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") {
            setTasks([
              ...tasks,
              {
                id: tasks.length + 1,
                title: title,
                completed: false,
              },
            ]);
            setTitle("");
          }
        }}
        className="rounded-full flex-1 bg-white text-black"
      />
      <Button
        onClick={() => {
          if (title !== "") {
            setTasks([
              ...tasks,
              {
                id: tasks.length + 1,
                title: title,
                completed: false,
              },
            ]);
            setTitle("");
          }
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default TaskInput;
