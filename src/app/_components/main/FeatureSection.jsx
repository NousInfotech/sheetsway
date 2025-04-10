import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import Button from "@/app/_components/Button";
import { features } from "@/app/_constants/features-section-data";
import Video from "@/app/_components/Video";
import { getfirstSentence } from "@/utils/helper";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 py-10">
      <div
        className="absolute inset-0 bg-cover z-30 h-[106%]"
        style={{
          backgroundImage: "url('/Background pattern.png')",
          opacity: 0.06,
        }}
      ></div>

      {/* Grid Container */}
      <div className="flex flex-col lg:gap-32 sm:gap-y-10  md:gap-y-20 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const { firstSentence, rest } = getfirstSentence(feature.description);

          return (
            <FadeUpAnimation
              key={`feature-${index}`}
              className={`flex flex-col items-center text-center
                sm:flex-col-reverse md:flex-row
                ${feature.reverse ? "md:flex-row-reverse" : ""}
                md:text-left
                gap-5 sm:gap-5 md:gap-20 lg:gap-32 mb-10`}
              duration={0.8}
            >
              <FadeUpAnimation
                initialY={80}
                className="w-full md:w-1/2 flex justify-center relative"
              >
                <Video src={feature.videoSrc} className={"relative z-40"} />
                <img src={feature.shapeSrc} className={`${feature.imgClass} -z-10`} alt=""/>
              </FadeUpAnimation>
              <div className="w-full md:w-1/2 max-w-lg z-40">
                {feature.title}
                <p className="text-gray-600 mt-4">
                  <strong>{firstSentence}.</strong> {rest.join(" ")}
                </p>
                <div className="mt-6">
                  <Button type="secondary">Learn more &gt;</Button>
                </div>
              </div>
            </FadeUpAnimation>
          );
        })}
      </div>
    </div>
  );
}
