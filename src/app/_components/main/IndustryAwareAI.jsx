"use client";

import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import { industryAwareData } from "@/app/_constants/industryAware-data";
import useInterval from "@/hooks/useInterval";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";

export default function IndustryAwareAI() {
  const [active, setActive] = useInterval(0, industryAwareData.length, 10000);
  const [isMobile] = useMobile(700);

  if (isMobile) {
    return (
      <div className="text-gray-900 bg-gradient-to-b from-white via-orange-50 to-white px-6 py-10">
        {[
          "Automatic FS Mapping",
          "Procedures Generation",
          "AI Driven Answers",
          "AI Chat Bot",
        ].map((el, i) => (
          <div key={i} className="relative">
            <div
              className={`${active === i ? "border-l-4 border-primary -mx-6 px-6" : ""
                }`}
            >
              {/* {active === i && (
                <div className="absolute left-0 top-2 bottom-0 flex">
                  <div className="w-1 bg-primary rounded">
                    <div
                      className="h-full bg-gray-200 loader-vertical-animation"
                      style={{ animationDuration: "10s" }}
                    ></div>
                  </div>
                </div>
              )} */}
              <h1
                className={`${active === i ? "text-primary" : "text-gray-400 mb-4"
                  } text-2xl font-extrabold font-montserrat`}
                onClick={() => setActive(i)}
              >
                {el}
              </h1>
              {active === i && (
                <>
                  <p className="text-sm font-semibold text-gray-800 mt-1 max-w-xs font-nunito">
                    {industryAwareData[active].description.split(".")[0]}.
                  </p>
                  <div className="flex gap-2 mt-4">
                    {industryAwareData[active].tags.map((tag) => (
                      <button
                        key={tag}
                        className="px-2 py-1 bg-white text-gray-600 rounded-md text-xs sm:text-sm border"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {active === i && (
              <div className="my-4">
                <Image
                  src={industryAwareData[active].images.primarySrc}
                  alt={industryAwareData[active].title}
                  className="rounded-xl shadow-[0px_1px_10px_rgba(0,0,0,0.3)] w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-gray-900 bg-gradient-to-b from-white via-orange-50 to-white px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header Section */}
      <FadeUpAnimation className="text-center pt-8 mb-16 md:mb-20 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-bodoni">
          Getting to know our <br />
          <span className="text-orange-500">Industry-Aware AI</span>
        </h1>
        <p className="text-sm sm:text-base font-montserrat md:text-lg lg:text-xl mt-4 text-gray-600">
          Meet the AI that knows <br /> your industry inside and out.
        </p>
      </FadeUpAnimation>

      {/* Automatic FS Mapping Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-20">
        {/* Text Section */}
        <FadeUpAnimation
          className="w-full lg:w-[450px] flex flex-col"
          amount={0.6}
        >
          {industryAwareData.map((el, index) => (
            // Wrap the whole item in a relative container
            <div key={index} className="relative mb-5">
              {/* Loader placed absolutely on the left side */}
              {active === index && (
                <div className="absolute left-0 top-2 bottom-0 flex">
                  <div className="w-1 bg-primary rounded">
                    <div
                      className="h-full w-1 bg-gray-200 loader-vertical-animation"
                      style={{ animationDuration: "10s" }}
                    ></div>
                  </div>
                </div>
              )}
              {/* Content container with left padding to avoid overlap */}
              <div className="pl-3 flex flex-col justify-between">
                <h2
                  className={`text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer font-montserrat hover:text-primary ${active === index ? "text-primary" : "text-[#A8A8A8]"
                    }`}
                  onClick={() => setActive(index)}
                >
                  {el.title}
                </h2>
                {active === index && (
                  <div className="space-y-4">
                    <p className="text-gray-700 mt-2 font-nunito text-xs sm:text-sm md:text-base lg:text-lg">
                      <span className="font-bold">
                        {el.description.split(".")[0]}.
                      </span>
                      {el.description.split(".").splice(1).join(".")}
                    </p>
                    <div className="flex flex-wrap gap-2 items-end">
                      {el.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-white text-gray-600 rounded-md text-xs sm:text-sm border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </FadeUpAnimation>

        {/* Image Section */}
        <FadeUpAnimation
          className="relative w-full lg:w-[570px] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[450px]"
          amount={0.5}
        >
          <div
            className="absolute rounded-3xl w-full h-full shadow-[0px_1px_20px_rgba(0,0,0,0.4)] lg:top-5 lg:left-0 lg:h-[80%] lg:w-[90%] md:h-[100%] md:w-[100%] bg-bgprimary/95 sm:w-full sm:h-full"
            style={{
              backgroundImage: "url('/Background pattern.png')",
              backgroundSize: "180%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 1,
            }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={industryAwareData[active].images.primarySrc}
              alt={industryAwareData[active].images.alt}
              className="rounded-xl z-10 shadow-[0px_1px_20px_rgba(0,0,0,0.4)] max-w-[90%] max-h-[90%] object-contain"
            />
          </div>

          <div className="absolute top-6 sm:top-10 md:top-16 lg:top-32 left-2 sm:left-4 md:left-8 lg:-left-10 bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-[0px_1px_20px_rgba(0,0,0,0.4)] border border-gray-200 z-30">
            <Image
              src={industryAwareData[active].images.secondarySrc}
              alt=""
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
            />
          </div>
        </FadeUpAnimation>
      </div>
      <style jsx>{`
        .loader-vertical-animation {
          /* Use scaleY transform for smooth animation */
          transform-origin: bottom;
          animation-name: loaderVerticalFill;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes loaderVerticalFill {
          from {
            transform: scaleY(1);
          }
          to {
            transform: scaleY(0);
          }
        }
      `}</style>
    </div>
  );
}
