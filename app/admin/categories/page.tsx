import React from "react";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Categories() {
  return (
    <main className="w-full p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Categories</h1>
        <Link href="/admin/categories/form">
          <button className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            <CirclePlus />
            Add
          </button>
        </Link>
      </div>
    </main>
  );
}
