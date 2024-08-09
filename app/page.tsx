import Navbar from "@/components/Navbar";
import { Display } from "@/components/task/display";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Navbar />
      <Display />
    </div>
  );
}
