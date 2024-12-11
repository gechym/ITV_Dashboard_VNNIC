import Image from "next/image";
import Link from "next/link";

export function SidebarHeader() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-2 pt-6 cursor-pointer"
    >
      <Image
        src="/VNNIC logo-01.png"
        alt="VNNIC Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </Link>
  );
}
