import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/biglogo.png" // Make sure to add your logo image to the public folder
        alt="BigStore Logo"
        width={50}
        height={50}
        className="object-contain"
      />
    </Link>
  );
}
