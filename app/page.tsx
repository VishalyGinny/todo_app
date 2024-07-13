import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Trash2Icon } from "lucide-react";
import Navbar from "@/components/Navbar";
import TaskInput from "@/components/task/taskInput";
import Task from "@/components/task/task";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Navbar />

      <div className="flex-1 p-6 space-y-4">
        <TaskInput />

        <Task />

      </div>
    </div>
  );
}
