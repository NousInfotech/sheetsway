import Image from "next/image";
import FadeUpAnimation from "./FadeUpAnimation";

export default function ImageDetailsPortal({
  data,
  headingtext = "",
  secondaryText = "",
  paraText = "",
}) {
  return (
    <div className="mt-20 lg:mb-0 sm:mb-20 mb-20 px-10 section-spacing max-w-screen-xl mx-auto">
      <FadeUpAnimation amount={0.8} className="lg:pb-20 pb-10">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bodoni mb-2">
          {headingtext} <br /> {secondaryText}
        </h1>
        <p className="text-gray-500 font-normal font-nunito lg:text-base md:text-base sm:text-sm text-sm">
          {paraText}
        </p>
      </FadeUpAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {data.map((el, i) => (
          <FadeUpAnimation duration={0.6 * (i + 5)} key={el.alt} className="">
            <Image
              src={el.src}
              alt={el.alt}
              className="rounded-xl"
            />
            <div className="mt-8 ml-3">
              <h2 className="text-base font-bold mb-1">{el.heading}</h2>
              <p className="text-gray-400 text-xs font-nunito">{el.para}</p>
            </div>
          </FadeUpAnimation>
        ))}
      </div>
    </div>
  );
}
