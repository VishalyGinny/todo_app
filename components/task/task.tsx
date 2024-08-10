"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2Icon } from "lucide-react";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface TaskProps {
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  setTasks: React.Dispatch<React.SetStateAction<any>>;
}

const Task = ({ tasks, setTasks }: TaskProps) => {
  // State to track the currently editing task ID
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  // Function to start editing a task
  const startEditing = (taskId: number) => {
    setEditingTaskId(taskId);
  };

  // Function to save edits and exit editing mode
  const saveEdit = (taskId: number, newTitle: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
    setEditingTaskId(null); // Exit editing mode
  };
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-2 p-3 rounded-md bg-white hover:bg-muted/50 transition-colors outline-gray-800"
        >
          <Checkbox
            checked={task.completed}
            onCheckedChange={() =>
              setTasks(
                tasks.map((t) =>
                  t.id === task.id ? { ...t, completed: !task.completed } : t
                )
              )
            }
          />
          {/* Render input if task is being edited, otherwise show title */}
          {editingTaskId === task.id ? (
            <input
              type="text"
              defaultValue={task.title}
              onBlur={(e) => saveEdit(task.id, e.target.value)}
              autoFocus
              className="flex-1"
              placeholder="Add a new task..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveEdit(task.id, e.currentTarget.value);
                }
              }}
            />
          ) : (
            <p className="flex-1 line-clamp-1 text-muted-foreground">
              {task.title}
            </p>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => startEditing(task.id)}
          >
            <PencilIcon className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
          >
            <Trash2Icon className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Task;
