import { Gauge, Layers2, LayoutList, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const link = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <Gauge strokeWidth={3.5} absoluteStrokeWidth />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <LayoutList />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 strokeWidth={3} absoluteStrokeWidth />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <User />,
    },
  ];
  return (
    <section className="h-screen w-[200px] border-r p-6">
      <ul className="flex w-full flex-col gap-6">
        {link.map((item, index) => (
          <Link href={item.link} key={index}>
            <li className="flex items-center gap-3 rounded-full bg-blue-100 px-5 py-2 text-black">
              {item.icon} <span className="font-semibold">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
