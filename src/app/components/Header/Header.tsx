import Image from "next/image";
import { HouseIcon, MessageCircle, Rss } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between border-b px-7 py-4">
      <Link href="/">
        <Image
          className="h-10 w-auto"
          src="/logo.png"
          alt="Logo"
          height={500}
          width={165}
        />
      </Link>
      <ul className="flex items-center gap-6">
        <li className="flex items-center gap-2">
          <HouseIcon />
          Home
        </li>
        <li className="flex items-center gap-2">
          <Rss />
          Blog
        </li>
        <li className="flex items-center gap-2">
          <MessageCircle />
          Contact Us
        </li>
      </ul>
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
    </nav>
  );
}
