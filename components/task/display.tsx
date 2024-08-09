"use client";

import { useState } from "react";
import Task from "./task";
import TaskInput from "./taskInput";

export function Display() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <div className="flex-1 p-6 space-y-4">
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
