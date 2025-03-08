import Button from "./Button";
import FadeUpAnimation from "./FadeUpAnimation";

export default function ShowSection() {
  return (
    <FadeUpAnimation className="relative w-full bg-gray-100/60 h-[400px] flex flex-col items-center justify-center text-center mt-20">
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
      <Button type="primary">Try for Free</Button>
    </FadeUpAnimation>
  );
}
