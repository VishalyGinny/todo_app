import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Trash2Icon } from "lucide-react";

export default function components() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-black text-primary-foreground py-4 px-6 shadow flex justify-between items-center">
        <h1 className="text-2xl font-bold">To-do List</h1>
        <div className="text-md font-medium">
          {new Date().toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <Button variant="secondary" asChild className="rounded-md px-4 py-2">
          <Link href="/login">Login</Link>
        </Button>
      </header>
      <div className="flex-1 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Input placeholder="Add a new task..." className="flex-1 bg-muted text-muted-foreground" />
          <Button>Add</Button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-3 rounded-md bg-muted hover:bg-muted/50 transition-colors">
            <Checkbox defaultChecked />
            <p className="flex-1 line-clamp-1 text-muted-foreground">Finish the design for the new website</p>
            <Button variant="ghost" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-muted hover:bg-muted/50 transition-colors">
            <Checkbox />
            <p className="flex-1 line-clamp-1 text-muted-foreground">Write the content for the blog post</p>
            <Button variant="ghost" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-muted hover:bg-muted/50 transition-colors">
            <Checkbox />
            <p className="flex-1 line-clamp-1 text-muted-foreground">Schedule a meeting with the team</p>
            <Button variant="ghost" size="icon">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-muted hover:bg-muted/50 transition-colors line-through text-muted-foreground">
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