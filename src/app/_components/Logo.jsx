import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }) {
  return (
    <Link href={"/"}>
      <Image
        src="/logo.png"
        alt="sheetsway-logo"
        className={`h-6 ${className}`}
      />
    </Link>
  );
}
