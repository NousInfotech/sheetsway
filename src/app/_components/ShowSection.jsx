import Link from "next/link";
import Button from "./Button";
import FadeUpAnimation from "./FadeUpAnimation";
import TryButton from "./TryButton";

export default function ShowSection() {
  return (
    <FadeUpAnimation className="relative w-full bg-accent/10 h-[380px] flex flex-col items-center justify-center text-center mt-10 py-10">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/Background pattern.png')",
          opacity: 0.1,
        }}
      ></div>

      <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 z-50 mb-10">
        <span className="bg-accent px-3 py-1 rounded-md italic font-bold text-primary inline-block mb-1">
          Sheetsway
        </span>
        <br />
        <span className="font-medium ">Meets every Audit need.</span>
      </h1>
      <Link href={'/contact-us'} className="relative z-50">
        <Button type="primary" className="relative z-50" >
          Early Adopter
        </Button>
      </Link>
    </FadeUpAnimation>
  );
}
