"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function LoginButton() {
  const { user, loading, error, handleSignInWithGoogle, handleLogOut } =
    useAuth();

  if (loading) return <div>Loading...</div>;
  if (user)
    return (
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            handleLogOut();
          }}
          className="flex items-center gap-3 rounded-full bg-black px-4 py-2 text-white hover:bg-gray-900"
        >
          Logout
        </button>
        <Link href="/admin">
          <div className="flex gap-4 rounded-xl bg-blue-100 px-2 py-2 hover:bg-blue-200">
            <Image
              className="h-12 w-12 rounded-full object-cover"
              src={user.photoURL}
              alt="Profile Picture"
              height={900}
              width={900}
            />
            <div>
              <h1 className="font-bold">{user.displayName}</h1>
              <h1 className="text-sm text-gray-800">{user.email}</h1>
            </div>
          </div>
        </Link>
      </div>
    );
  return (
    <section>
      <button
        onClick={() => {
          handleSignInWithGoogle();
        }}
        className="flex items-center gap-3 rounded-full bg-black px-4 py-2 text-white hover:bg-gray-900"
      >
        <Image
          className="h-6 w-auto"
          src="/google.png"
          alt="Google Logo"
          height={768}
          width={768}
        />
        Login
      </button>
    </section>
  );
}
