import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="bg-black text-primary-foreground py-4 px-5 shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold">To-do List</h1>
      <div className="text-md font-medium">
        {new Date().toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <Button variant="secondary" asChild className="rounded-full px-4 py-2">
        <Link href="/login">Login</Link>
      </Button>
    </header>
  );
};

export default Navbar;
