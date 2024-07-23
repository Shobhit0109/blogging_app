import Image from "next/image";

export default function Header() {
  return (
    <nav>
      <Image
        className="h-10 w-auto"
        src="/logo.png"
        alt="Logo"
        height={500}
        width={165}
      />
    </nav>
  );
}
