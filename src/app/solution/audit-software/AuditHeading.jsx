import Button from "@/app/_components/Button";
import ChangingText from "@/app/_components/ChangingText";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";

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
      <div className="mt-4 flex justify-center space-x-4 z-30">
        <Button type="secondary">Try For Free</Button>
        <Button type="primary">Book a Demo</Button>
      </div>
    </FadeUpAnimation>
  );
}
