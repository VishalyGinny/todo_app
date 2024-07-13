import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Trash2Icon } from "lucide-react";
import Navbar from "@/components/Navbar";
import TaskInput from "@/components/task/taskInput";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Navbar />

      <div className="flex-1 p-6 space-y-4">
        <TaskInput />

        {/* Tasks */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-3 rounded-md bg-white hover:bg-muted/50 transition-colors outline-gray-800">
            <Checkbox defaultChecked />
            <p className="flex-1 line-clamp-1 text-muted-foreground">
              Finish the design for the new website
            </p>
            <Button variant="ghost" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-white hover:bg-muted/50 transition-colors outline-gray-800">
            <Checkbox />
            <p className="flex-1 line-clamp-1 text-muted-foreground">
              Write the content for the blog post
            </p>
            <Button variant="ghost" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-white hover:bg-muted/50 transition-colors outline-gray-800">
            <Checkbox />
            <p className="flex-1 line-clamp-1 text-muted-foreground">
              Schedule a meeting with the team
            </p>
            <Button variant="ghost" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-white hover:bg-muted/50 transition-colors line-through text-muted-foreground outline-gray-950">
            <Checkbox defaultChecked />
            <p className="flex-1 line-clamp-1">Buy groceries for the week</p>
            <Button variant="ghost" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
