import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import Image from "next/image";

export default function AuditGrid() {
  return (
    <FadeUpAnimation>
      <Image
        src="/audit-portal/grid-image.png"
        alt="grid-img"
        className="w-[70%] h-full mx-auto object-cover relative z-30"
      />
    </FadeUpAnimation>
  );
}
