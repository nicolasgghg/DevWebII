import NavBar from "@/components/nav-bar";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex gap-4 items-center justify-center h-screen flex-col">
      <NavBar titlePage="TODO" />
    </div>
  );
}
