import Link from "next/link";

export default function Logo({ className }) {
  return (
    <Link href={"/"}>
      <img
        src="/logo.png"
        alt="sheetsway-logo"
        className={`h-6 ${className}`}
      />
    </Link>
  );
}
