import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { currentUser } from '@clerk/nextjs/server'
import dynamic from 'next/dynamic';
import { Skeleton } from "./ui/skeleton";

const DynamicUserButton = dynamic(() => import('./Userbtn'), {
  ssr: false,
  loading: () => <div className="skeleton-loader">
    <Skeleton className="w-6 h-6 rounded-full" />
  </div>,
});

const Navbar = async () => {
  const user = await currentUser()
  // console.log(user)

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
      {user ? (
        <DynamicUserButton />
      ) : (
        <Button variant="secondary" asChild className="rounded-full px-4 py-2">
        <Link href="/sign-in">Sign In</Link>
      </Button>
      )}
    </header>
  );
};

export default Navbar;