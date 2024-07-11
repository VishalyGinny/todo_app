import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">To-do List</h1>
      </header>
      <main className="flex-1 p-6">
        <div className="max-w-md mx-auto">
          <form className="flex items-center mb-4">
            <Input
              type="text"
              placeholder="Add a new task..."
              className="flex-1 mr-4 rounded-md border-2 border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2"
            >
              Add
            </Button>
          </form>
          <div className="space-y-2">
            <div className="flex items-center bg-card text-card-foreground rounded-md px-4 py-3">
              <Checkbox id="task-1" className="mr-4" />
              <label htmlFor="task-1" className="flex-1 text-lg">
                Finish the design for the new website
              </label>
            </div>
            <div className="flex items-center bg-card text-card-foreground rounded-md px-4 py-3">
              <Checkbox id="task-2" className="mr-4" defaultChecked />
              <label
                htmlFor="task-2"
                className="flex-1 text-lg line-through text-muted-foreground"
              >
                Send the monthly report
              </label>
            </div>
            <div className="flex items-center bg-card text-card-foreground rounded-md px-4 py-3">
              <Checkbox id="task-3" className="mr-4" />
              <label htmlFor="task-3" className="flex-1 text-lg">
                Schedule a meeting with the team
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
