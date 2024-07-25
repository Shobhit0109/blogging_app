// import { redirect } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  // redirect("/");
  return (
    // center horizontally
    <div className="flex min-h-screen flex-row items-center justify-center gap-4 p-6 align-middle">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl text-black">404 - Page Not Found</h1>
        <div>
          <Link
            href="/"
            className="font-bold text-gray-700 underline hover:text-blue-500"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
