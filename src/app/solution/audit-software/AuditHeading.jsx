import Button from "@/app/_components/Button";
import ChangingText from "@/app/_components/ChangingText";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import TryButton from "@/app/_components/TryButton";

const changingText = [
  "results",
  "clarity",
  "confidence",
  "assurance",
  "efficiency",
  "accuracy",
];

export default function AuditHeading() {
  return (
    <FadeUpAnimation className="text-center flex flex-col gap-6 relative pb-20 pt-8 -mt-8">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/Background pattern.png')",
          opacity: 0.1,
        }}
      ></div>

      <ChangingText
        headingText="Audit Portal"
        changingText={changingText}
        speed={3000}
        colorOftext="text-orange-500"
      />
      <div className="mt-8 flex w-[30%] mx-auto justify-evenly relative z-20 my-5">
        <Button type="secondary" size="lg">
          Try it for Free
        </Button>
        <Button type="primary">Book an Demo</Button>
      </div>
    </FadeUpAnimation>
  );
}
